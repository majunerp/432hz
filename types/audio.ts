// Audio generation types
export type WaveformType = 'sine' | 'square' | 'triangle' | 'sawtooth';

export type AudioFormat = 'mp3' | 'wav' | 'flac';

export type AudioQuality = 'standard' | 'high' | 'lossless';

export interface AudioConfig {
  frequency: number;
  duration: number; // in seconds
  waveform: WaveformType;
  volume: number; // 0-1
}

export interface BinauralConfig extends AudioConfig {
  beatFrequency: number;
}

export interface ExportConfig {
  format: AudioFormat;
  quality: AudioQuality;
  bitrate?: number; // for MP3
  sampleRate?: number; // for WAV/FLAC
  bitDepth?: number; // for WAV
}

export interface AudioPreset {
  id: string;
  name: string;
  description: string;
  icon: string;
  config: AudioConfig | BinauralConfig;
  tags: string[];
}
