import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What is 432 Hz? Complete Guide to 432 Hz Frequency',
  description: 'Learn what 432 Hz is and why it matters. Complete guide to 432 Hz frequency, history, science, and how 432 Hz differs from standard 440 Hz tuning.',
  alternates: {
    canonical: 'https://432-hz.org/what-is-432-hz',
  },
};

export default function WhatIs432Hz() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 py-12 md:py-20">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
              What is 432 Hz?
            </h1>
            <p className="mx-auto mb-8 max-w-3xl text-lg text-gray-600 dark:text-gray-300 sm:text-xl">
              Understanding the 432 Hz frequency: its history, science, and why millions choose it for meditation and relaxation.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <article className="prose prose-lg dark:prose-invert mx-auto">
            {/* Introduction */}
            <div className="rounded-3xl bg-white p-8 shadow-xl dark:bg-gray-800 md:p-12">
              <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
                Understanding 432 Hz Frequency
              </h2>

              <p className="mb-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                432 Hz is an alternative tuning standard where the musical note A (A4) vibrates at 432 cycles per second, compared to the modern standard of 440 Hz. This seemingly small difference of 8 Hz creates a distinct sound that many listeners describe as warmer, calmer, and more harmonious than standard tuning.
              </p>

              <div className="mb-8 rounded-2xl bg-purple-50 p-6 dark:bg-purple-900/20">
                <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">Quick Facts About 432 Hz</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>✓ A4 note vibrates at 432 cycles per second</li>
                  <li>✓ 8 Hz lower than standard 440 Hz tuning</li>
                  <li>✓ Called "Verdi's A" after composer Giuseppe Verdi</li>
                  <li>✓ Associated with natural resonance and harmony</li>
                  <li>✓ Popular in meditation, yoga, and sound healing</li>
                </ul>
              </div>

              <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                The Science Behind 432 Hz
              </h3>

              <p className="mb-6 text-gray-700 dark:text-gray-300">
                Proponents of 432 Hz tuning claim it aligns with the natural frequencies found in nature, mathematics, and the universe. While scientific evidence for these claims remains debated, the frequency does have some interesting mathematical properties:
              </p>

              <ul className="mb-6 space-y-3 text-gray-700 dark:text-gray-300">
                <li>
                  <strong>Mathematical harmony:</strong> 432 is divisible by many numbers (2, 3, 4, 6, 8, 9, 12, 16, 18, 24, 27, etc.), creating clean mathematical relationships.
                </li>
                <li>
                  <strong>Octave alignment:</strong> When tuned to 432 Hz, the C note (middle C) equals exactly 256 Hz, which is 2^8 - a power of 2.
                </li>
                <li>
                  <strong>Schumann resonance:</strong> Some claim 432 Hz relates to Earth's natural electromagnetic resonance of approximately 8 Hz (432 ÷ 54 = 8).
                </li>
              </ul>

              <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                History of 432 Hz Tuning
              </h3>

              <div className="mb-6 space-y-4 text-gray-700 dark:text-gray-300">
                <p>
                  The history of 432 Hz tuning is complex and sometimes controversial. Before standardization, different regions and eras used various tuning frequencies:
                </p>

                <div className="space-y-4 border-l-4 border-purple-600 pl-6">
                  <div>
                    <strong className="text-gray-900 dark:text-white">Ancient Times:</strong> Some claim ancient instruments were tuned to frequencies related to 432 Hz, though historical evidence is limited.
                  </div>

                  <div>
                    <strong className="text-gray-900 dark:text-white">Giuseppe Verdi (1813-1901):</strong> The famous Italian composer advocated for A=432 Hz, calling it "scientific pitch." This is why 432 Hz is sometimes called "Verdi's A."
                  </div>

                  <div>
                    <strong className="text-gray-900 dark:text-white">1939 Standardization:</strong> The International Organization for Standardization eventually adopted A=440 Hz as the standard concert pitch in 1955, though it was already becoming standard by 1939.
                  </div>

                  <div>
                    <strong className="text-gray-900 dark:text-white">Modern Revival:</strong> Interest in 432 Hz resurged in the 1980s-1990s with the new age and alternative healing movements.
                  </div>
                </div>
              </div>

              <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                Why People Choose 432 Hz
              </h3>

              <p className="mb-4 text-gray-700 dark:text-gray-300">
                While scientific validation is ongoing, millions of people report positive experiences with 432 Hz music and tones:
              </p>

              <div className="mb-6 grid gap-4 md:grid-cols-2">
                <div className="rounded-xl bg-purple-50 p-4 dark:bg-purple-900/20">
                  <h4 className="mb-2 font-bold text-gray-900 dark:text-white">Subjective Benefits</h4>
                  <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                    <li>• More calming and peaceful</li>
                    <li>• Warmer, softer sound quality</li>
                    <li>• Enhanced meditation experience</li>
                    <li>• Reduced stress and tension</li>
                  </ul>
                </div>

                <div className="rounded-xl bg-purple-50 p-4 dark:bg-purple-900/20">
                  <h4 className="mb-2 font-bold text-gray-900 dark:text-white">Practical Uses</h4>
                  <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                    <li>• Meditation and mindfulness</li>
                    <li>• Yoga and movement practices</li>
                    <li>• Sound healing sessions</li>
                    <li>• Sleep and relaxation aid</li>
                  </ul>
                </div>
              </div>

              <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                How to Experience 432 Hz
              </h3>

              <p className="mb-4 text-gray-700 dark:text-gray-300">
                You can experience 432 Hz in several ways:
              </p>

              <ol className="mb-6 space-y-3 text-gray-700 dark:text-gray-300">
                <li>
                  <strong>1. Generate pure tones:</strong> Use our <Link href="/download" className="text-purple-600 hover:underline dark:text-purple-400">free 432 Hz generator</Link> to create pure 432 Hz sine waves for meditation and relaxation.
                </li>
                <li>
                  <strong>2. Listen to 432 Hz music:</strong> Many artists now release music specifically tuned to 432 Hz, available on streaming platforms and YouTube.
                </li>
                <li>
                  <strong>3. Convert existing music:</strong> You can use pitch-shifting software to convert 440 Hz music to 432 Hz (reduce pitch by approximately -31.77 cents).
                </li>
                <li>
                  <strong>4. Tune instruments:</strong> Musicians can tune their instruments to A=432 Hz instead of A=440 Hz.
                </li>
              </ol>

              <div className="rounded-2xl bg-amber-50 p-6 dark:bg-amber-900/20">
                <h4 className="mb-3 text-lg font-bold text-gray-900 dark:text-white">⚠️ Important Disclaimer</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  While many people report positive experiences with 432 Hz, it's important to note that claims about therapeutic benefits, healing properties, or superior "naturalness" compared to 440 Hz are not conclusively proven by scientific research. The preference for 432 Hz is largely subjective and personal. 432 Hz should not be used as a substitute for professional medical treatment or mental health care.
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Related Topics */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-8 text-center text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
            Continue Learning
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            <Link
              href="/432-vs-440"
              className="group rounded-3xl bg-white p-8 shadow-xl transition-transform hover:scale-105 dark:bg-gray-800"
            >
              <div className="mb-4 text-4xl">⚖️</div>
              <h3 className="mb-3 text-xl font-bold text-gray-900 group-hover:text-purple-600 dark:text-white dark:group-hover:text-purple-400">
                432 Hz vs 440 Hz
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Compare the two tuning standards and understand the key differences between them.
              </p>
            </Link>

            <Link
              href="/benefits"
              className="group rounded-3xl bg-white p-8 shadow-xl transition-transform hover:scale-105 dark:bg-gray-800"
            >
              <div className="mb-4 text-4xl">✨</div>
              <h3 className="mb-3 text-xl font-bold text-gray-900 group-hover:text-purple-600 dark:text-white dark:group-hover:text-purple-400">
                Benefits of 432 Hz
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Explore the reported benefits and why people choose 432 Hz for wellness practices.
              </p>
            </Link>

            <Link
              href="/healing"
              className="group rounded-3xl bg-white p-8 shadow-xl transition-transform hover:scale-105 dark:bg-gray-800"
            >
              <div className="mb-4 text-4xl">🎵</div>
              <h3 className="mb-3 text-xl font-bold text-gray-900 group-hover:text-purple-600 dark:text-white dark:group-hover:text-purple-400">
                Sound Healing with 432 Hz
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Learn how 432 Hz is used in sound healing and therapeutic practices.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-4xl rounded-3xl bg-gradient-to-r from-purple-600 to-pink-600 p-8 text-center text-white shadow-2xl md:p-12">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Experience 432 Hz Yourself</h2>
          <p className="mb-8 text-lg">
            Ready to explore 432 Hz? Create and download your own 432 Hz audio files for free.
          </p>
          <Link
            href="/download"
            className="inline-block rounded-full bg-white px-8 py-3 text-lg font-semibold text-purple-600 shadow-lg hover:bg-gray-100"
          >
            Generate 432 Hz Now
          </Link>
        </div>
      </section>
    </div>
  );
}
