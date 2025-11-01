import type { ExportConfig } from '@/types/audio';

/**
 * Export audio buffer to various formats
 */

/**
 * Convert AudioBuffer to WAV format
 */
export function audioBufferToWav(buffer: AudioBuffer, bitDepth: number = 16): Blob {
  const numChannels = buffer.numberOfChannels;
  const sampleRate = buffer.sampleRate;
  const format = 1; // PCM
  const bytesPerSample = bitDepth / 8;
  const blockAlign = numChannels * bytesPerSample;

  const data = interleave(buffer);
  const dataLength = data.length * bytesPerSample;
  const arrayBuffer = new ArrayBuffer(44 + dataLength);
  const view = new DataView(arrayBuffer);

  // RIFF chunk descriptor
  writeString(view, 0, 'RIFF');
  view.setUint32(4, 36 + dataLength, true);
  writeString(view, 8, 'WAVE');

  // FMT sub-chunk
  writeString(view, 12, 'fmt ');
  view.setUint32(16, 16, true); // chunk size
  view.setUint16(20, format, true);
  view.setUint16(22, numChannels, true);
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, sampleRate * blockAlign, true);
  view.setUint16(32, blockAlign, true);
  view.setUint16(34, bitDepth, true);

  // Data sub-chunk
  writeString(view, 36, 'data');
  view.setUint32(40, dataLength, true);

  // Write PCM samples
  if (bitDepth === 16) {
    floatTo16BitPCM(view, 44, data);
  } else if (bitDepth === 24) {
    floatTo24BitPCM(view, 44, data);
  } else {
    floatTo16BitPCM(view, 44, data);
  }

  return new Blob([arrayBuffer], { type: 'audio/wav' });
}

/**
 * Interleave multi-channel audio data
 */
function interleave(buffer: AudioBuffer): Float32Array {
  const numChannels = buffer.numberOfChannels;
  const length = buffer.length * numChannels;
  const result = new Float32Array(length);

  let offset = 0;
  for (let i = 0; i < buffer.length; i++) {
    for (let channel = 0; channel < numChannels; channel++) {
      result[offset++] = buffer.getChannelData(channel)[i];
    }
  }

  return result;
}

/**
 * Convert float samples to 16-bit PCM
 */
function floatTo16BitPCM(view: DataView, offset: number, input: Float32Array) {
  for (let i = 0; i < input.length; i++, offset += 2) {
    const s = Math.max(-1, Math.min(1, input[i]));
    view.setInt16(offset, s < 0 ? s * 0x8000 : s * 0x7fff, true);
  }
}

/**
 * Convert float samples to 24-bit PCM
 */
function floatTo24BitPCM(view: DataView, offset: number, input: Float32Array) {
  for (let i = 0; i < input.length; i++, offset += 3) {
    const s = Math.max(-1, Math.min(1, input[i]));
    const val = s < 0 ? s * 0x800000 : s * 0x7fffff;

    view.setUint8(offset, val & 0xff);
    view.setUint8(offset + 1, (val >> 8) & 0xff);
    view.setUint8(offset + 2, (val >> 16) & 0xff);
  }
}

/**
 * Write string to DataView
 */
function writeString(view: DataView, offset: number, string: string) {
  for (let i = 0; i < string.length; i++) {
    view.setUint8(offset + i, string.charCodeAt(i));
  }
}

/**
 * Convert WAV blob to MP3 using client-side encoding
 * Note: This is a placeholder. For production, consider using a library like lamejs
 */
export async function wavToMp3(wavBlob: Blob, bitrate: number = 320): Promise<Blob> {
  // This would require a library like lamejs
  // For now, return the WAV as-is
  // TODO: Implement actual MP3 encoding
  console.warn('MP3 encoding not yet implemented, returning WAV');
  return wavBlob;
}

/**
 * Export audio buffer with specified configuration
 */
export async function exportAudio(
  buffer: AudioBuffer,
  config: ExportConfig
): Promise<{ blob: Blob; filename: string }> {
  const timestamp = new Date().toISOString().split('T')[0];
  let blob: Blob;
  let filename: string;

  switch (config.format) {
    case 'wav': {
      const bitDepth = config.bitDepth || 16;
      blob = audioBufferToWav(buffer, bitDepth);
      filename = `432hz_${timestamp}_${bitDepth}bit.wav`;
      break;
    }

    case 'mp3': {
      const bitrate = config.bitrate || 320;
      const wavBlob = audioBufferToWav(buffer, 16);
      blob = await wavToMp3(wavBlob, bitrate);
      filename = `432hz_${timestamp}_${bitrate}kbps.mp3`;
      break;
    }

    case 'flac': {
      // FLAC encoding would require a library
      // For now, export as high-quality WAV
      console.warn('FLAC encoding not yet implemented, exporting as 24-bit WAV');
      blob = audioBufferToWav(buffer, 24);
      filename = `432hz_${timestamp}_lossless.wav`;
      break;
    }

    default:
      blob = audioBufferToWav(buffer, 16);
      filename = `432hz_${timestamp}.wav`;
  }

  return { blob, filename };
}

/**
 * Download blob as file
 */
export function downloadBlob(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

/**
 * Estimate file size
 */
export function estimateFileSize(
  duration: number,
  format: ExportConfig['format'],
  sampleRate: number = 48000,
  channels: number = 2
): { size: number; unit: string; display: string } {
  let bytesPerSecond: number;

  switch (format) {
    case 'wav': {
      // WAV: sample rate * channels * bytes per sample (16-bit = 2 bytes)
      bytesPerSecond = sampleRate * channels * 2;
      break;
    }
    case 'mp3': {
      // MP3: bitrate / 8 (320kbps default)
      bytesPerSecond = (320 * 1000) / 8;
      break;
    }
    case 'flac': {
      // FLAC: approximately 50-60% of WAV
      bytesPerSecond = sampleRate * channels * 2 * 0.55;
      break;
    }
    default:
      bytesPerSecond = sampleRate * channels * 2;
  }

  const totalBytes = bytesPerSecond * duration;

  if (totalBytes < 1024) {
    return { size: totalBytes, unit: 'B', display: `${totalBytes.toFixed(0)} B` };
  } else if (totalBytes < 1024 * 1024) {
    const kb = totalBytes / 1024;
    return { size: kb, unit: 'KB', display: `${kb.toFixed(1)} KB` };
  } else {
    const mb = totalBytes / (1024 * 1024);
    return { size: mb, unit: 'MB', display: `${mb.toFixed(1)} MB` };
  }
}
