'use client';

import { useState, useRef, useEffect } from 'react';
import type { AudioConfig, BinauralConfig, AudioPreset } from '@/types/audio';
import { getAudioEngine } from '@/lib/audioEngine';
import { exportAudio, downloadBlob, estimateFileSize } from '@/lib/audioExport';
import { AUDIO_PRESETS, DURATION_OPTIONS } from '@/lib/constants';
import WaveformVisualizer from './WaveformVisualizer';

export default function AudioGenerator() {
  const [selectedPreset, setSelectedPreset] = useState<AudioPreset>(AUDIO_PRESETS[0]);
  const [duration, setDuration] = useState(300); // 5 minutes default
  const [isGenerating, setIsGenerating] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioBuffer, setAudioBuffer] = useState<AudioBuffer | null>(null);
  const [progress, setProgress] = useState(0);
  const audioEngineRef = useRef(getAudioEngine());

  const fileSize = estimateFileSize(duration, 'wav', 48000, 'beatFrequency' in selectedPreset.config ? 2 : 1);

  const handleGenerate = async () => {
    setIsGenerating(true);
    setProgress(0);

    try {
      const engine = audioEngineRef.current;
      await engine.init();

      const config = { ...selectedPreset.config, duration };

      let buffer: AudioBuffer;
      if ('beatFrequency' in config) {
        buffer = await engine.generateBinauralBeats(config as BinauralConfig);
      } else {
        buffer = await engine.generateTone(config as AudioConfig);
      }

      setAudioBuffer(buffer);
      setProgress(100);
    } catch (error) {
      console.error('Error generating audio:', error);
      alert('Failed to generate audio. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  const handlePlay = async () => {
    const engine = audioEngineRef.current;

    // If already playing, just pause
    if (isPlaying) {
      engine.stop();
      setIsPlaying(false);
      return;
    }

    // If no audio buffer, generate first
    if (!audioBuffer) {
      setIsGenerating(true);
      setProgress(0);

      try {
        await engine.init();

        const config = { ...selectedPreset.config, duration };

        let buffer: AudioBuffer;
        if ('beatFrequency' in config) {
          buffer = await engine.generateBinauralBeats(config as BinauralConfig);
        } else {
          buffer = await engine.generateTone(config as AudioConfig);
        }

        setAudioBuffer(buffer);
        setProgress(100);

        // Play the newly generated audio
        await engine.playBuffer(buffer, () => {
          setIsPlaying(false);
        });
        setIsPlaying(true);
      } catch (error) {
        console.error('Error generating audio:', error);
        alert('Failed to generate audio. Please try again.');
      } finally {
        setIsGenerating(false);
      }
    } else {
      // Play existing buffer
      await engine.playBuffer(audioBuffer, () => {
        setIsPlaying(false);
      });
      setIsPlaying(true);
    }
  };

  const handleDownload = async (format: 'wav' | 'mp3' = 'wav') => {
    if (!audioBuffer) return;

    try {
      const { blob, filename } = await exportAudio(audioBuffer, {
        format,
        quality: 'high',
        bitDepth: 24,
        sampleRate: 48000,
      });

      downloadBlob(blob, filename);
    } catch (error) {
      console.error('Error exporting audio:', error);
      alert('Failed to download audio. Please try again.');
    }
  };

  useEffect(() => {
    return () => {
      audioEngineRef.current.dispose();
    };
  }, []);

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Left: Preset Selection */}
        <div className="lg:col-span-2">
          <div className="rounded-2xl bg-white/90 p-6 shadow-xl backdrop-blur-lg dark:bg-gray-800/90">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">Choose Your 432 Hz Sound</h2>
            <div className="grid max-h-[600px] gap-3 overflow-y-auto pr-2 sm:grid-cols-2">
              {AUDIO_PRESETS.map((preset) => (
                <button
                  key={preset.id}
                  onClick={() => setSelectedPreset(preset)}
                  className={`rounded-xl p-4 text-left transition-all duration-200 ${
                    selectedPreset.id === preset.id
                      ? 'scale-105 bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg'
                      : 'bg-white/50 hover:bg-white/80 dark:bg-gray-700/50 dark:hover:bg-gray-700/80'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <span className="text-3xl">{preset.icon}</span>
                    <div className="flex-1">
                      <h3
                        className={`mb-1 text-sm font-semibold ${
                          selectedPreset.id === preset.id ? 'text-white' : 'text-gray-900 dark:text-white'
                        }`}
                      >
                        {preset.name}
                      </h3>
                      <p
                        className={`text-xs leading-relaxed ${
                          selectedPreset.id === preset.id ? 'text-purple-100' : 'text-gray-600 dark:text-gray-400'
                        }`}
                      >
                        {preset.description}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Controls */}
        <div className="space-y-6">
          {/* Duration Control */}
          <div className="rounded-2xl bg-white/90 p-6 shadow-xl backdrop-blur-lg dark:bg-gray-800/90">
            <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Duration</h3>
            <div className="mb-4">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-sm text-gray-600 dark:text-gray-400">Length:</span>
                <span className="text-2xl font-bold text-gray-900 dark:text-white">
                  {duration / 60} min
                </span>
              </div>
              <input
                type="range"
                min="300"
                max="3600"
                step="300"
                value={duration}
                onChange={(e) => setDuration(parseInt(e.target.value))}
                className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 accent-purple-500 dark:bg-gray-700"
              />
              <div className="mt-1 flex justify-between text-xs text-gray-500 dark:text-gray-400">
                {DURATION_OPTIONS.map((opt) => (
                  <span key={opt.value}>{opt.label}</span>
                ))}
              </div>
            </div>
            <div className="rounded-lg bg-purple-50 p-3 text-xs text-purple-900 dark:bg-purple-900/20 dark:text-purple-200">
              <p>📊 Estimated file size: {fileSize.display}</p>
            </div>
          </div>

          {/* Playback Controls */}
          <div className="rounded-2xl bg-white/90 p-6 shadow-xl backdrop-blur-lg dark:bg-gray-800/90">
            <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Playback</h3>
            <div className="space-y-3">
              <button
                onClick={handlePlay}
                disabled={isGenerating}
                className="w-full rounded-xl bg-purple-500 px-6 py-3 font-bold text-white hover:bg-purple-600 disabled:opacity-50"
              >
                {isGenerating ? '⏳ Generating...' : isPlaying ? '⏸️ Pause' : '▶️ Play'}
              </button>
              {isGenerating && (
                <div className="mt-2">
                  <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
                    <div
                      className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
              )}
              {audioBuffer && <WaveformVisualizer audioEngine={audioEngineRef.current} isPlaying={isPlaying} />}
            </div>
          </div>

          {/* Download Buttons */}
          {audioBuffer && (
            <div className="rounded-2xl bg-white/90 p-6 shadow-xl backdrop-blur-lg dark:bg-gray-800/90">
              <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Download</h3>
              <div className="space-y-2">
                <button
                  onClick={() => handleDownload('wav')}
                  className="w-full rounded-xl border-2 border-purple-500 bg-white px-6 py-3 font-bold text-purple-500 hover:bg-purple-50 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                  💾 Download WAV (24-bit)
                </button>
                <button
                  onClick={() => handleDownload('mp3')}
                  className="w-full rounded-xl border-2 border-purple-500 bg-white px-6 py-3 font-bold text-purple-500 hover:bg-purple-50 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                  💾 Download MP3 (320kbps)
                </button>
              </div>
            </div>
          )}

          {/* Pro Tips */}
          <div className="rounded-2xl bg-white/90 p-6 shadow-xl backdrop-blur-lg dark:bg-gray-800/90">
            <h4 className="mb-2 flex items-center gap-2 font-bold text-gray-900 dark:text-white">
              <span>💡</span> Pro Tips
            </h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>• Use headphones for binaural beats</li>
              <li>• Find a quiet, comfortable space</li>
              <li>• Start with lower volumes</li>
              <li>• Combine with breathing exercises</li>
              <li>• All audio generated in your browser</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
