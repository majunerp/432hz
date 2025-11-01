import type { AudioPreset } from '@/types/audio';

// Base 432 Hz frequency
export const BASE_FREQUENCY = 432;

// Audio presets
export const AUDIO_PRESETS: AudioPreset[] = [
  {
    id: 'pure-432',
    name: 'Pure 432Hz Meditation',
    description: 'Clean sine wave at 432Hz - perfect for meditation and focus',
    icon: '🧘',
    config: {
      frequency: 432,
      duration: 300,
      waveform: 'sine',
      volume: 0.7,
    },
    tags: ['meditation', 'focus', 'pure'],
  },
  {
    id: 'harmonics',
    name: '432Hz with Harmonics',
    description: 'Layered frequencies (216Hz, 432Hz, 864Hz) for deeper resonance',
    icon: '🎵',
    config: {
      frequency: 432,
      duration: 300,
      waveform: 'sine',
      volume: 0.7,
    },
    tags: ['harmonics', 'resonance', 'deep'],
  },
  {
    id: 'delta-sleep',
    name: 'Delta Wave (Deep Sleep)',
    description: '432Hz + 2Hz binaural beats - promotes deep, restful sleep',
    icon: '😴',
    config: {
      frequency: 432,
      duration: 600,
      waveform: 'sine',
      volume: 0.6,
      beatFrequency: 2,
    },
    tags: ['sleep', 'delta', 'binaural'],
  },
  {
    id: 'theta-meditation',
    name: 'Theta Wave (Meditation)',
    description: '432Hz + 6Hz binaural beats - enhances meditation and creativity',
    icon: '🌙',
    config: {
      frequency: 432,
      duration: 600,
      waveform: 'sine',
      volume: 0.6,
      beatFrequency: 6,
    },
    tags: ['meditation', 'theta', 'creativity'],
  },
  {
    id: 'alpha-relaxation',
    name: 'Alpha Wave (Relaxation)',
    description: '432Hz + 10Hz binaural beats - induces calm, relaxed alertness',
    icon: '✨',
    config: {
      frequency: 432,
      duration: 600,
      waveform: 'sine',
      volume: 0.6,
      beatFrequency: 10,
    },
    tags: ['relaxation', 'alpha', 'calm'],
  },
  {
    id: 'beta-focus',
    name: 'Beta Wave (Focus)',
    description: '432Hz + 20Hz binaural beats - enhances concentration and alertness',
    icon: '🎯',
    config: {
      frequency: 432,
      duration: 600,
      waveform: 'sine',
      volume: 0.6,
      beatFrequency: 20,
    },
    tags: ['focus', 'beta', 'concentration'],
  },
];

// Duration options (in seconds)
export const DURATION_OPTIONS = [
  { label: '5 min', value: 300 },
  { label: '10 min', value: 600 },
  { label: '15 min', value: 900 },
  { label: '20 min', value: 1200 },
  { label: '30 min', value: 1800 },
  { label: '60 min', value: 3600 },
];

// SEO Keywords
export const SITE_NAME = '432-hz.org';
export const SITE_TITLE = '432 Hz Sound Frequency - Free Audio Download';
export const SITE_DESCRIPTION = 'Free 432 Hz sound frequency download. Create pure 432 Hz sound for meditation, relaxation, and sound healing. No registration required.';
export const SITE_URL = 'https://432-hz.org';

// Keywords for SEO (density 3-5%)
export const PRIMARY_KEYWORDS = [
  '432 Hz',
  '432Hz audio',
  '432 Hz frequency',
  '432 Hz sound',
  '432 Hz sound frequency',
  '432Hz download',
];

export const SECONDARY_KEYWORDS = [
  'healing frequency',
  'meditation audio',
  'sound healing',
  'binaural beats',
  'natural frequency',
  'relaxation music',
];
