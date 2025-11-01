import type { AudioConfig, BinauralConfig, WaveformType } from '@/types/audio';

/**
 * Audio Engine using Web Audio API
 * Handles audio generation, playback, and recording
 */
export class AudioEngine {
  private audioContext: AudioContext | null = null;
  private oscillators: OscillatorNode[] = [];
  private gainNode: GainNode | null = null;
  private analyser: AnalyserNode | null = null;
  private mediaStreamDestination: MediaStreamAudioDestinationNode | null = null;
  private mediaRecorder: MediaRecorder | null = null;
  private recordedChunks: Blob[] = [];

  /**
   * Initialize audio context
   */
  async init() {
    if (!this.audioContext) {
      this.audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    }

    // Resume context if suspended (required on some browsers)
    if (this.audioContext.state === 'suspended') {
      await this.audioContext.resume();
    }

    return this.audioContext;
  }

  /**
   * Generate pure tone audio
   */
  async generateTone(config: AudioConfig): Promise<AudioBuffer> {
    const context = await this.init();

    const sampleRate = context.sampleRate;
    const duration = config.duration;
    const frequency = config.frequency;
    const numSamples = sampleRate * duration;

    // Create buffer
    const buffer = context.createBuffer(1, numSamples, sampleRate);
    const channelData = buffer.getChannelData(0);

    // Generate waveform
    for (let i = 0; i < numSamples; i++) {
      const t = i / sampleRate;
      channelData[i] = this.generateWaveformSample(config.waveform, frequency, t) * config.volume;
    }

    return buffer;
  }

  /**
   * Generate binaural beats audio
   */
  async generateBinauralBeats(config: BinauralConfig): Promise<AudioBuffer> {
    const context = await this.init();

    const sampleRate = context.sampleRate;
    const duration = config.duration;
    const baseFreq = config.frequency;
    const beatFreq = config.beatFrequency;
    const numSamples = sampleRate * duration;

    // Create stereo buffer
    const buffer = context.createBuffer(2, numSamples, sampleRate);
    const leftChannel = buffer.getChannelData(0);
    const rightChannel = buffer.getChannelData(1);

    // Left ear: base frequency
    // Right ear: base frequency + beat frequency
    const leftFreq = baseFreq;
    const rightFreq = baseFreq + beatFreq;

    for (let i = 0; i < numSamples; i++) {
      const t = i / sampleRate;
      leftChannel[i] = this.generateWaveformSample(config.waveform, leftFreq, t) * config.volume;
      rightChannel[i] = this.generateWaveformSample(config.waveform, rightFreq, t) * config.volume;
    }

    return buffer;
  }

  /**
   * Generate waveform sample
   */
  private generateWaveformSample(type: WaveformType, frequency: number, time: number): number {
    const phase = 2 * Math.PI * frequency * time;

    switch (type) {
      case 'sine':
        return Math.sin(phase);
      case 'square':
        return Math.sin(phase) >= 0 ? 1 : -1;
      case 'triangle':
        return (2 / Math.PI) * Math.asin(Math.sin(phase));
      case 'sawtooth':
        return 2 * ((frequency * time) % 1) - 1;
      default:
        return Math.sin(phase);
    }
  }

  /**
   * Play audio buffer
   */
  async playBuffer(buffer: AudioBuffer, onEnded?: () => void) {
    const context = await this.init();
    this.stop();

    const source = context.createBufferSource();
    source.buffer = buffer;

    // Create gain node for volume control
    this.gainNode = context.createGain();

    // Create analyser for visualization
    this.analyser = context.createAnalyser();
    this.analyser.fftSize = 2048;

    // Connect nodes
    source.connect(this.gainNode);
    this.gainNode.connect(this.analyser);
    this.analyser.connect(context.destination);

    source.onended = () => {
      onEnded?.();
    };

    source.start();
    return source;
  }

  /**
   * Start recording audio
   */
  async startRecording(config: AudioConfig | BinauralConfig) {
    const context = await this.init();
    this.recordedChunks = [];

    // Create media stream destination
    this.mediaStreamDestination = context.createMediaStreamDestination();

    // Create oscillators based on config
    this.stop();

    if ('beatFrequency' in config) {
      // Binaural beats - create two oscillators
      const osc1 = context.createOscillator();
      const osc2 = context.createOscillator();

      osc1.type = config.waveform;
      osc2.type = config.waveform;

      osc1.frequency.value = config.frequency;
      osc2.frequency.value = config.frequency + config.beatFrequency;

      // Create separate channels for stereo
      const merger = context.createChannelMerger(2);
      const gain1 = context.createGain();
      const gain2 = context.createGain();

      gain1.gain.value = config.volume;
      gain2.gain.value = config.volume;

      osc1.connect(gain1);
      osc2.connect(gain2);
      gain1.connect(merger, 0, 0);
      gain2.connect(merger, 0, 1);
      merger.connect(this.mediaStreamDestination);

      osc1.start();
      osc2.start();

      this.oscillators = [osc1, osc2];
    } else {
      // Single tone
      const osc = context.createOscillator();
      osc.type = config.waveform;
      osc.frequency.value = config.frequency;

      this.gainNode = context.createGain();
      this.gainNode.gain.value = config.volume;

      osc.connect(this.gainNode);
      this.gainNode.connect(this.mediaStreamDestination);

      osc.start();
      this.oscillators = [osc];
    }

    // Create media recorder
    const stream = this.mediaStreamDestination.stream;
    this.mediaRecorder = new MediaRecorder(stream, {
      mimeType: 'audio/webm;codecs=opus',
    });

    this.mediaRecorder.ondataavailable = (event) => {
      if (event.data.size > 0) {
        this.recordedChunks.push(event.data);
      }
    };

    this.mediaRecorder.start();

    // Stop recording after duration
    setTimeout(() => {
      this.stopRecording();
    }, config.duration * 1000);
  }

  /**
   * Stop recording and return blob
   */
  stopRecording(): Promise<Blob> {
    return new Promise((resolve) => {
      if (!this.mediaRecorder) {
        resolve(new Blob());
        return;
      }

      this.mediaRecorder.onstop = () => {
        const blob = new Blob(this.recordedChunks, { type: 'audio/webm' });
        this.stop();
        resolve(blob);
      };

      this.mediaRecorder.stop();
    });
  }

  /**
   * Stop all audio playback
   */
  stop() {
    this.oscillators.forEach(osc => {
      try {
        osc.stop();
      } catch (e) {
        // Oscillator already stopped
      }
    });
    this.oscillators = [];

    if (this.gainNode) {
      this.gainNode.disconnect();
      this.gainNode = null;
    }
  }

  /**
   * Get analyser for waveform visualization
   */
  getAnalyser(): AnalyserNode | null {
    return this.analyser;
  }

  /**
   * Set volume
   */
  setVolume(volume: number) {
    if (this.gainNode) {
      this.gainNode.gain.value = Math.max(0, Math.min(1, volume));
    }
  }

  /**
   * Clean up resources
   */
  dispose() {
    this.stop();
    if (this.audioContext) {
      this.audioContext.close();
      this.audioContext = null;
    }
  }
}

// Singleton instance
let audioEngine: AudioEngine | null = null;

export function getAudioEngine(): AudioEngine {
  if (!audioEngine) {
    audioEngine = new AudioEngine();
  }
  return audioEngine;
}
