import Link from 'next/link';
import AudioGenerator from '@/components/AudioGenerator';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '432 Hz Sound Frequency - Free Audio Download',
  description: 'Free 432 Hz sound frequency for meditation and relaxation. Create pure 432 Hz sound instantly. Download in WAV or MP3 format. No registration required.',
  alternates: {
    canonical: 'https://432-hz.org/',
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 py-12 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
              Free 432 Hz Sound Frequency
            </h1>
            <p className="mx-auto mb-8 max-w-3xl text-lg text-gray-600 dark:text-gray-300 sm:text-xl">
              Create and download pure 432 Hz sound frequency instantly. Our free platform creates 432 Hz sound perfect for meditation, relaxation, and sound healing. Experience the natural 432 Hz sound frequency.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="#audio"
                className="rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-3 text-lg font-semibold text-white shadow-lg hover:from-purple-700 hover:to-pink-700"
              >
                Create 432 Hz Sound Now
              </Link>
              <Link
                href="#about"
                className="rounded-full border-2 border-purple-600 px-8 py-3 text-lg font-semibold text-purple-600 hover:bg-purple-50 dark:border-purple-400 dark:text-purple-400 dark:hover:bg-gray-800"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Audio Section */}
      <section id="audio" className="px-4 py-12">
        <div className="mx-auto max-w-7xl">
          <AudioGenerator />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-3xl bg-white p-8 shadow-xl dark:bg-gray-800 md:p-12">
            <h2 className="mb-8 text-center text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
              Why Choose 432 Hz Sound Frequency?
            </h2>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="mb-4 text-5xl">🎵</div>
                <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">Pure 432 Hz</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Create scientifically accurate 432 Hz sound using Web Audio API. Pure 432 Hz sound frequency sine waves and complex waveforms for optimal results.
                </p>
              </div>

              <div className="text-center">
                <div className="mb-4 text-5xl">🧘</div>
                <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">Perfect for Meditation</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  432 Hz sound is ideal for meditation and relaxation. The 432 Hz frequency resonates with natural patterns and promotes deeper meditation states.
                </p>
              </div>

              <div className="text-center">
                <div className="mb-4 text-5xl">🔊</div>
                <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">High Quality</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Download 432 Hz sound in WAV (24-bit) or MP3 (320kbps) format. Supports durations from 5 to 60 minutes for all your 432 Hz sound frequency needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About 432 Hz Section */}
      <section id="about" className="bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-16 text-white">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center text-3xl font-bold md:text-4xl">Understanding 432 Hz Sound Frequency</h2>

          <div className="space-y-6 text-lg leading-relaxed">
            <div>
              <h3 className="mb-3 text-2xl font-bold">What is 432 Hz?</h3>
              <p>
                The 432 Hz sound frequency is an alternative tuning standard to the conventional 440 Hz. In 432 Hz tuning, the note A vibrates at 432 cycles per second. Proponents believe 432 Hz is more harmonious and naturally aligned with the universe and human body.
              </p>
            </div>

            <div>
              <h3 className="mb-3 text-2xl font-bold">Benefits of 432 Hz Sound</h3>
              <p>
                Many people use 432 Hz sound for meditation, yoga, relaxation, and sound healing. The 432 Hz frequency is called the "natural frequency of the universe" or "Verdi's A" after composer Giuseppe Verdi. Users report that 432 Hz sound frequency promotes relaxation, reduces stress, and enhances meditation experiences.
              </p>
            </div>

            <div>
              <h3 className="mb-3 text-2xl font-bold">How to Use 432 Hz</h3>
              <p>
                Use 432 Hz sound during meditation (10-20 minutes), yoga practice, or as a sleep aid (30-60 minutes). For binaural beats at 432 Hz frequency, use headphones to ensure each ear receives the correct frequency. Start with lower volumes and shorter durations.
              </p>
            </div>

            <div className="rounded-xl bg-white/10 p-6">
              <p className="text-sm">
                <strong>⚠️ Disclaimer:</strong> 432 Hz sound is for personal wellness exploration only. Claims about therapeutic benefits are not scientifically proven. 432 Hz frequency is not a substitute for professional medical treatment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
            432 Hz Sound Frequency Features
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-800">
              <h3 className="mb-3 text-lg font-bold text-gray-900 dark:text-white">✨ Instant Creation</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Create 432 Hz sound instantly in your browser. All 432 Hz sound frequency creation runs client-side for fast performance and complete privacy.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-800">
              <h3 className="mb-3 text-lg font-bold text-gray-900 dark:text-white">🎧 Binaural Beats</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Create 432 Hz binaural beats for meditation. Combine 432 Hz frequency with Delta, Theta, Alpha, or Beta brainwave frequencies.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-800">
              <h3 className="mb-3 text-lg font-bold text-gray-900 dark:text-white">🔒 Privacy First</h3>
              <p className="text-gray-600 dark:text-gray-300">
                No registration required. All 432 Hz sound creation happens in your browser. We don't store or transmit your data.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-800">
              <h3 className="mb-3 text-lg font-bold text-gray-900 dark:text-white">💾 High Quality</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Download 432 Hz sound in professional WAV (24-bit, 48kHz) or MP3 (320kbps) formats for any device.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-800">
              <h3 className="mb-3 text-lg font-bold text-gray-900 dark:text-white">⚡ Multiple Waveforms</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Choose sine, square, triangle, or sawtooth waveforms for your 432 Hz sound frequency. Each offers unique sonic characteristics.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-800">
              <h3 className="mb-3 text-lg font-bold text-gray-900 dark:text-white">🎛️ Custom Duration</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Create 432 Hz sound from 5 to 60 minutes. Perfect for meditation sessions or extended relaxation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-4xl rounded-3xl bg-gradient-to-r from-purple-600 to-pink-600 p-8 text-center text-white shadow-2xl md:p-12">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Start Creating 432 Hz Sound Today</h2>
          <p className="mb-8 text-lg">
            Experience the healing 432 Hz sound frequency with our free platform. No registration, no fees, just pure 432 Hz at your fingertips.
          </p>
          <Link
            href="#audio"
            className="inline-block rounded-full bg-white px-8 py-3 text-lg font-semibold text-purple-600 shadow-lg hover:bg-gray-100"
          >
            Create 432 Hz Sound Now
          </Link>
        </div>
      </section>

      {/* Internal Links Navigation */}
      <section className="px-4 py-12">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-3xl bg-white p-8 shadow-xl dark:bg-gray-800 md:p-12">
            <h2 className="mb-8 text-center text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">
              Explore More About 432 Hz
            </h2>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Link
                href="/download"
                className="group rounded-2xl border-2 border-purple-200 p-6 transition-all hover:border-purple-600 hover:shadow-lg dark:border-gray-700 dark:hover:border-purple-400"
              >
                <div className="mb-3 text-4xl">💾</div>
                <h3 className="mb-2 text-xl font-bold text-gray-900 group-hover:text-purple-600 dark:text-white dark:group-hover:text-purple-400">
                  Download 432 Hz
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Free 432 Hz audio download in MP3, WAV, and FLAC formats
                </p>
              </Link>

              <Link
                href="/what-is-432-hz"
                className="group rounded-2xl border-2 border-purple-200 p-6 transition-all hover:border-purple-600 hover:shadow-lg dark:border-gray-700 dark:hover:border-purple-400"
              >
                <div className="mb-3 text-4xl">📚</div>
                <h3 className="mb-2 text-xl font-bold text-gray-900 group-hover:text-purple-600 dark:text-white dark:group-hover:text-purple-400">
                  What is 432 Hz?
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Complete guide to understanding 432 Hz frequency
                </p>
              </Link>

              <Link
                href="/benefits"
                className="group rounded-2xl border-2 border-purple-200 p-6 transition-all hover:border-purple-600 hover:shadow-lg dark:border-gray-700 dark:hover:border-purple-400"
              >
                <div className="mb-3 text-4xl">✨</div>
                <h3 className="mb-2 text-xl font-bold text-gray-900 group-hover:text-purple-600 dark:text-white dark:group-hover:text-purple-400">
                  432 Hz Benefits
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Discover the benefits of 432 Hz for meditation and wellness
                </p>
              </Link>

              <Link
                href="/432-vs-440"
                className="group rounded-2xl border-2 border-purple-200 p-6 transition-all hover:border-purple-600 hover:shadow-lg dark:border-gray-700 dark:hover:border-purple-400"
              >
                <div className="mb-3 text-4xl">⚖️</div>
                <h3 className="mb-2 text-xl font-bold text-gray-900 group-hover:text-purple-600 dark:text-white dark:group-hover:text-purple-400">
                  432 Hz vs 440 Hz
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Compare 432 Hz and 440 Hz tuning standards
                </p>
              </Link>

              <Link
                href="/healing"
                className="group rounded-2xl border-2 border-purple-200 p-6 transition-all hover:border-purple-600 hover:shadow-lg dark:border-gray-700 dark:hover:border-purple-400"
              >
                <div className="mb-3 text-4xl">🎵</div>
                <h3 className="mb-2 text-xl font-bold text-gray-900 group-hover:text-purple-600 dark:text-white dark:group-hover:text-purple-400">
                  432 Hz Healing
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Learn about sound healing with 432 Hz frequency
                </p>
              </Link>

              <Link
                href="/music"
                className="group rounded-2xl border-2 border-purple-200 p-6 transition-all hover:border-purple-600 hover:shadow-lg dark:border-gray-700 dark:hover:border-purple-400"
              >
                <div className="mb-3 text-4xl">🎼</div>
                <h3 className="mb-2 text-xl font-bold text-gray-900 group-hover:text-purple-600 dark:text-white dark:group-hover:text-purple-400">
                  432 Hz Music
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Explore 432 Hz music, artists, and where to find songs
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
