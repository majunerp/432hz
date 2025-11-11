import Link from 'next/link';
import AudioGenerator from '@/components/AudioGenerator';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '432 Hz Sound Frequency Download - Free MP3, WAV, FLAC',
  description: 'Download free 432 Hz sound frequency in MP3, WAV, and FLAC formats. High-quality 432 Hz audio for meditation, relaxation, and sound healing. No registration required.',
  alternates: {
    canonical: 'https://432-hz.org/download',
  },
};

export default function DownloadPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 py-12 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
              Download 432 Hz Sound Frequency
            </h1>
            <p className="mx-auto mb-8 max-w-3xl text-lg text-gray-600 dark:text-gray-300 sm:text-xl">
              Free 432 Hz sound frequency download in multiple formats. Create and download high-quality 432 Hz audio files in MP3, WAV, or FLAC format. Perfect for meditation, yoga, and sound healing practices.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-gray-600 dark:text-gray-400">
              <span className="rounded-full bg-purple-100 px-4 py-2 dark:bg-purple-900/30">🎵 MP3 320kbps</span>
              <span className="rounded-full bg-purple-100 px-4 py-2 dark:bg-purple-900/30">📀 WAV 24-bit</span>
              <span className="rounded-full bg-purple-100 px-4 py-2 dark:bg-purple-900/30">💎 FLAC Lossless</span>
              <span className="rounded-full bg-purple-100 px-4 py-2 dark:bg-purple-900/30">🚀 Instant Download</span>
            </div>
          </div>
        </div>
      </section>

      {/* Audio Generator */}
      <section className="px-4 py-12">
        <div className="mx-auto max-w-7xl">
          <AudioGenerator />
        </div>
      </section>

      {/* Download Formats Section */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
            Available Download Formats
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            {/* MP3 Format */}
            <div className="rounded-3xl bg-white p-8 shadow-xl dark:bg-gray-800">
              <div className="mb-4 text-5xl">🎵</div>
              <h3 className="mb-3 text-2xl font-bold text-gray-900 dark:text-white">MP3 Format</h3>
              <div className="mb-4 space-y-2 text-gray-600 dark:text-gray-300">
                <p><strong>Bitrate:</strong> 320 kbps</p>
                <p><strong>Quality:</strong> High</p>
                <p><strong>Size:</strong> Small (~2.4 MB/min)</p>
                <p><strong>Best for:</strong> Mobile devices, streaming</p>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Download 432 Hz sound in MP3 format for universal compatibility. Perfect for smartphones, tablets, and portable media players.
              </p>
            </div>

            {/* WAV Format */}
            <div className="rounded-3xl bg-white p-8 shadow-xl dark:bg-gray-800">
              <div className="mb-4 text-5xl">📀</div>
              <h3 className="mb-3 text-2xl font-bold text-gray-900 dark:text-white">WAV Format</h3>
              <div className="mb-4 space-y-2 text-gray-600 dark:text-gray-300">
                <p><strong>Quality:</strong> 24-bit, 48 kHz</p>
                <p><strong>Type:</strong> Uncompressed</p>
                <p><strong>Size:</strong> Large (~17 MB/min)</p>
                <p><strong>Best for:</strong> Professional audio work</p>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Download 432 Hz sound in WAV format for pristine audio quality. Ideal for audio editing, production, and archival purposes.
              </p>
            </div>

            {/* FLAC Format */}
            <div className="rounded-3xl bg-white p-8 shadow-xl dark:bg-gray-800">
              <div className="mb-4 text-5xl">💎</div>
              <h3 className="mb-3 text-2xl font-bold text-gray-900 dark:text-white">FLAC Format</h3>
              <div className="mb-4 space-y-2 text-gray-600 dark:text-gray-300">
                <p><strong>Quality:</strong> Lossless</p>
                <p><strong>Compression:</strong> ~50%</p>
                <p><strong>Size:</strong> Medium (~8.5 MB/min)</p>
                <p><strong>Best for:</strong> High-fidelity playback</p>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Download 432 Hz sound in FLAC format for lossless quality. Perfect balance between file size and audio fidelity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Download Section */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-16 text-white">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center text-3xl font-bold md:text-4xl">
            How to Download 432 Hz Sound Frequency
          </h2>

          <div className="space-y-6">
            <div className="rounded-2xl bg-white/10 p-6">
              <h3 className="mb-3 text-xl font-bold">Step 1: Choose Your Settings</h3>
              <p className="text-white/90">
                Select your desired waveform (sine wave recommended for pure tones), duration (5-60 minutes), and audio format (MP3, WAV, or FLAC).
              </p>
            </div>

            <div className="rounded-2xl bg-white/10 p-6">
              <h3 className="mb-3 text-xl font-bold">Step 2: Generate 432 Hz Sound</h3>
              <p className="text-white/90">
                Click the generate button to create your 432 Hz sound frequency. All audio processing happens instantly in your browser using the Web Audio API.
              </p>
            </div>

            <div className="rounded-2xl bg-white/10 p-6">
              <h3 className="mb-3 text-xl font-bold">Step 3: Download Your File</h3>
              <p className="text-white/90">
                Click the download button to save your 432 Hz sound frequency file. The file will be saved to your default downloads folder automatically.
              </p>
            </div>

            <div className="rounded-2xl bg-white/10 p-6">
              <h3 className="mb-3 text-xl font-bold">Step 4: Enjoy Your 432 Hz Sound</h3>
              <p className="text-white/90">
                Use your downloaded 432 Hz sound frequency for meditation, relaxation, yoga, or sleep. Listen with headphones for the best binaural beat experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
            Popular 432 Hz Sound Downloads
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-800">
              <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">🧘 432 Hz for Meditation</h3>
              <p className="mb-4 text-gray-600 dark:text-gray-300">
                Download 10-20 minute 432 Hz sound frequency files for meditation sessions. Use sine waves for pure, calming tones.
              </p>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Recommended: 10 minutes, Sine wave, MP3 format
              </div>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-800">
              <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">😴 432 Hz for Sleep</h3>
              <p className="mb-4 text-gray-600 dark:text-gray-300">
                Download 30-60 minute 432 Hz sound frequency for sleep aid. Longer durations help maintain relaxation throughout the night.
              </p>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Recommended: 60 minutes, Sine wave, MP3 format
              </div>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-800">
              <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">🎵 432 Hz Binaural Beats</h3>
              <p className="mb-4 text-gray-600 dark:text-gray-300">
                Download 432 Hz binaural beats for enhanced meditation. Combine with Delta (1-4 Hz) for deep relaxation or Alpha (8-12 Hz) for focus.
              </p>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Recommended: 15 minutes, Binaural mode, Headphones required
              </div>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-800">
              <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">🏃 432 Hz for Yoga</h3>
              <p className="mb-4 text-gray-600 dark:text-gray-300">
                Download 20-30 minute 432 Hz sound frequency for yoga practice. Use during asana practice or savasana.
              </p>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Recommended: 30 minutes, Sine wave, MP3 format
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
            432 Hz Download FAQs
          </h2>

          <div className="space-y-6">
            <div className="rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-800">
              <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">
                Is 432 Hz sound frequency download free?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Yes! All 432 Hz sound frequency downloads are completely free. No registration, no fees, no subscriptions. Download unlimited 432 Hz audio files.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-800">
              <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">
                What format should I download for 432 Hz sound?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                For everyday use, download 432 Hz in MP3 format (320 kbps). For professional audio work or archival, choose WAV format. FLAC offers lossless quality with smaller file sizes.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-800">
              <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">
                How long should my 432 Hz sound download be?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Download 10-20 minute 432 Hz files for meditation, 30-60 minutes for sleep aid, or custom durations based on your practice. All durations from 5 to 60 minutes are available.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-800">
              <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">
                Can I use downloaded 432 Hz sound commercially?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our 432 Hz sound frequency files are generated using standard waveforms and are free for personal use. For commercial use in products, please contact us for licensing information.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-4xl rounded-3xl bg-gradient-to-r from-purple-600 to-pink-600 p-8 text-center text-white shadow-2xl md:p-12">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Ready to Download 432 Hz Sound?
          </h2>
          <p className="mb-8 text-lg">
            Start creating and downloading high-quality 432 Hz sound frequency files now. No registration required.
          </p>
          <Link
            href="#audio"
            className="inline-block rounded-full bg-white px-8 py-3 text-lg font-semibold text-purple-600 shadow-lg hover:bg-gray-100"
          >
            Create & Download Now
          </Link>
        </div>
      </section>

      {/* Internal Links Navigation */}
      <section className="px-4 py-12">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-2xl bg-white p-8 shadow-lg dark:bg-gray-800">
            <h3 className="mb-6 text-xl font-bold text-gray-900 dark:text-white">Learn More About 432 Hz</h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <Link href="/what-is-432-hz" className="rounded-lg border-2 border-purple-200 p-4 hover:border-purple-600 dark:border-gray-700 dark:hover:border-purple-400">
                <div className="font-semibold text-purple-600 dark:text-purple-400">What is 432 Hz?</div>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">Learn the basics</p>
              </Link>
              <Link href="/benefits" className="rounded-lg border-2 border-purple-200 p-4 hover:border-purple-600 dark:border-gray-700 dark:hover:border-purple-400">
                <div className="font-semibold text-purple-600 dark:text-purple-400">Benefits</div>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">Why use 432 Hz</p>
              </Link>
              <Link href="/432-vs-440" className="rounded-lg border-2 border-purple-200 p-4 hover:border-purple-600 dark:border-gray-700 dark:hover:border-purple-400">
                <div className="font-semibold text-purple-600 dark:text-purple-400">432 vs 440 Hz</div>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">Compare frequencies</p>
              </Link>
              <Link href="/healing" className="rounded-lg border-2 border-purple-200 p-4 hover:border-purple-600 dark:border-gray-700 dark:hover:border-purple-400">
                <div className="font-semibold text-purple-600 dark:text-purple-400">Sound Healing</div>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">Healing with sound</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
