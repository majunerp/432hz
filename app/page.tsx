import Link from 'next/link';
import AudioGenerator from '@/components/AudioGenerator';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '432 Hz Sound Frequency - Free Audio Download',
  description: 'Free 432 Hz sound frequency download. Create pure 432 Hz sound for meditation, relaxation, and sound healing. No registration required.',
  alternates: {
    canonical: 'https://432-hz.org/',
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
              <span className="block">Free 432 Hz Sound Frequency</span>
              <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Create Healing Audio
              </span>
            </h1>
            <p className="mx-auto mb-8 max-w-3xl text-lg text-gray-600 dark:text-gray-300 sm:text-xl">
              Create and download pure 432 Hz sound frequency instantly. Our free 432 Hz sound platform creates healing frequencies perfect for meditation, relaxation, and sound healing. Experience the natural 432 Hz sound frequency of the universe.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="#audio"
                className="rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-3 text-lg font-semibold text-white shadow-lg hover:from-purple-700 hover:to-pink-700"
              >
                Create 432 Hz Audio Now
              </Link>
              <Link
                href="/about"
                className="rounded-full border-2 border-purple-600 px-8 py-3 text-lg font-semibold text-purple-600 hover:bg-purple-50 dark:border-purple-400 dark:text-purple-400 dark:hover:bg-gray-800"
              >
                Learn About 432 Hz
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

      {/* Information Section */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-3xl bg-white p-8 shadow-xl dark:bg-gray-800 md:p-12">
            <h2 className="mb-8 text-center text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
              Why Choose 432 Hz Sound Frequency?
            </h2>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="mb-4 text-5xl">🎵</div>
                <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">Pure 432 Hz Frequency</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Our platform produces scientifically accurate 432 Hz sound using advanced Web Audio API. Create pure 432 Hz sound frequency sine waves or complex waveforms for optimal sound healing results.
                </p>
              </div>

              <div className="text-center">
                <div className="mb-4 text-5xl">🧘</div>
                <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">Perfect for Meditation</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  432 Hz sound is widely used for meditation and relaxation. The 432 Hz frequency resonates with natural patterns and promotes deeper meditation states. Create custom 432 Hz sound frequency meditation audio.
                </p>
              </div>

              <div className="text-center">
                <div className="mb-4 text-5xl">🔊</div>
                <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">Multiple Formats</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Download your 432 Hz sound in high-quality WAV format (24-bit) or compressed MP3 (320kbps). Our platform supports various durations from 5 to 60 minutes for all your 432 Hz sound frequency needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is 432 Hz Section */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-16 text-white">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-center text-3xl font-bold md:text-4xl">What is 432 Hz Sound Frequency?</h2>
          <p className="mb-6 text-lg leading-relaxed">
            The 432 Hz sound frequency is an alternative tuning standard to the conventional 440 Hz. Proponents of 432 Hz claim this frequency is more harmonious and natural, aligning with mathematical patterns found in nature. Our platform allows you to experience 432 Hz sound frequency firsthand.
          </p>
          <p className="mb-6 text-lg leading-relaxed">
            Many people use 432 Hz sound for meditation, yoga, relaxation, and sound healing practices. The 432 Hz frequency is sometimes called the "natural frequency of the universe" or "Verdi's A" after composer Giuseppe Verdi who advocated for this tuning. Create your own 432 Hz sound frequency audio instantly.
          </p>
          <p className="text-lg leading-relaxed">
            While scientific evidence for specific therapeutic benefits of 432 Hz is limited, many users report subjective improvements in relaxation, focus, and well-being when listening to 432 Hz sound. Our platform provides an easy way to explore these potential benefits yourself.
          </p>
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
                Create 432 Hz sound instantly in your browser. Our platform runs entirely client-side, ensuring fast creation and complete privacy for your 432 Hz sound frequency.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-800">
              <h3 className="mb-3 text-lg font-bold text-gray-900 dark:text-white">🎧 Binaural Beats</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Create 432 Hz binaural beats for enhanced meditation. Combine 432 Hz frequency with Delta, Theta, Alpha, or Beta brainwave frequencies.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-800">
              <h3 className="mb-3 text-lg font-bold text-gray-900 dark:text-white">🔒 Privacy First</h3>
              <p className="text-gray-600 dark:text-gray-300">
                No registration required. All 432 Hz sound creation happens in your browser. We don't store or transmit your data.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-800">
              <h3 className="mb-3 text-lg font-bold text-gray-900 dark:text-white">💾 High Quality Export</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Download 432 Hz sound in professional quality WAV (24-bit, 48kHz) or MP3 (320kbps) formats for any device.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-800">
              <h3 className="mb-3 text-lg font-bold text-gray-900 dark:text-white">⚡ Multiple Waveforms</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Choose from sine, square, triangle, or sawtooth waveforms for your 432 Hz sound frequency. Each waveform offers unique sonic characteristics.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-800">
              <h3 className="mb-3 text-lg font-bold text-gray-900 dark:text-white">🎛️ Customizable Duration</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Create 432 Hz sound from 5 to 60 minutes in length. Perfect for short meditation sessions or extended relaxation periods.
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
            Experience the healing 432 Hz sound frequency with our free online platform. No registration, no fees, just pure 432 Hz at your fingertips.
          </p>
          <Link
            href="#audio"
            className="inline-block rounded-full bg-white px-8 py-3 text-lg font-semibold text-purple-600 shadow-lg hover:bg-gray-100"
          >
            Create 432 Hz Audio Now
          </Link>
        </div>
      </section>
    </div>
  );
}
