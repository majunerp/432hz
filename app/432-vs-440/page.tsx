import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '432 Hz vs 440 Hz - Which Frequency is Better?',
  description: 'Compare 432 Hz vs 440 Hz tuning. Understand key differences, history, sound quality, and which frequency is right for meditation, music, and wellness.',
  alternates: {
    canonical: 'https://432-hz.org/432-vs-440',
  },
};

export default function Compare432vs440() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 py-12 md:py-20">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
              432 Hz vs 440 Hz
            </h1>
            <p className="mx-auto mb-8 max-w-3xl text-lg text-gray-600 dark:text-gray-300 sm:text-xl">
              Understanding the difference between 432 Hz and 440 Hz tuning standards and how to choose the right frequency for your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Comparison Table */}
      <section className="px-4 py-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-8 text-center text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
            Quick Comparison
          </h2>

          <div className="overflow-hidden rounded-3xl bg-white shadow-xl dark:bg-gray-800">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-purple-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Feature</th>
                    <th className="px-6 py-4 text-center">432 Hz</th>
                    <th className="px-6 py-4 text-center">440 Hz</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  <tr>
                    <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                      Status
                    </td>
                    <td className="px-6 py-4 text-center text-gray-600 dark:text-gray-300">
                      Alternative tuning
                    </td>
                    <td className="px-6 py-4 text-center text-gray-600 dark:text-gray-300">
                      International standard
                    </td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-900/50">
                    <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                      A4 Note Frequency
                    </td>
                    <td className="px-6 py-4 text-center text-gray-600 dark:text-gray-300">
                      432 cycles/second
                    </td>
                    <td className="px-6 py-4 text-center text-gray-600 dark:text-gray-300">
                      440 cycles/second
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                      Difference
                    </td>
                    <td className="px-6 py-4 text-center text-gray-600 dark:text-gray-300" colSpan={2}>
                      8 Hz lower (~31.77 cents lower)
                    </td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-900/50">
                    <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                      Adoption
                    </td>
                    <td className="px-6 py-4 text-center text-gray-600 dark:text-gray-300">
                      Alternative community
                    </td>
                    <td className="px-6 py-4 text-center text-gray-600 dark:text-gray-300">
                      ISO standard (since 1955)
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                      Primary Use
                    </td>
                    <td className="px-6 py-4 text-center text-gray-600 dark:text-gray-300">
                      Meditation, wellness
                    </td>
                    <td className="px-6 py-4 text-center text-gray-600 dark:text-gray-300">
                      Classical music, pop
                    </td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-900/50">
                    <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                      Availability
                    </td>
                    <td className="px-6 py-4 text-center text-gray-600 dark:text-gray-300">
                      Limited, growing
                    </td>
                    <td className="px-6 py-4 text-center text-gray-600 dark:text-gray-300">
                      Universal
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Comparison */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
            Understanding the Differences
          </h2>

          <div className="space-y-8">
            {/* Pitch Difference */}
            <div className="rounded-3xl bg-white p-8 shadow-xl dark:bg-gray-800 md:p-12">
              <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                🎵 The Pitch Difference
              </h3>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                432 Hz is 8 cycles per second lower than 440 Hz. In musical terms, this translates to approximately 31.77 cents lower (where 100 cents = 1 semitone). This means that music tuned to 432 Hz is slightly flatter than standard 440 Hz tuning.
              </p>
              <div className="rounded-xl bg-purple-50 p-4 dark:bg-purple-900/20">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  <strong>Example:</strong> If you play a 440 Hz A note and a 432 Hz A note side by side, the 432 Hz version will sound slightly lower and some describe it as "warmer" or "softer."
                </p>
              </div>
            </div>

            {/* Historical Context */}
            <div className="rounded-3xl bg-white p-8 shadow-xl dark:bg-gray-800 md:p-12">
              <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                📜 Historical Context
              </h3>

              <div className="mb-6 space-y-4">
                <div>
                  <h4 className="mb-2 font-bold text-purple-600 dark:text-purple-400">Before Standardization</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Throughout history, there was no universal tuning standard. Different regions, orchestras, and eras used various tuning frequencies ranging from 415 Hz to 460 Hz or more. This made it challenging for musicians to play together across different locations.
                  </p>
                </div>

                <div>
                  <h4 className="mb-2 font-bold text-purple-600 dark:text-purple-400">The 432 Hz Movement</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Giuseppe Verdi, the famous Italian composer, advocated for A=432 Hz (which he called "scientific pitch") in the 19th century. Some claim that 432 Hz was used in ancient times, though historical evidence for this is limited.
                  </p>
                </div>

                <div>
                  <h4 className="mb-2 font-bold text-purple-600 dark:text-purple-400">440 Hz Becomes Standard</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    In 1939, an international conference recommended A=440 Hz, and it became the ISO standard in 1955. This standardization made it easier for orchestras and musicians worldwide to play together and for instruments to be manufactured consistently.
                  </p>
                </div>
              </div>
            </div>

            {/* Mathematical Properties */}
            <div className="rounded-3xl bg-white p-8 shadow-xl dark:bg-gray-800 md:p-12">
              <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                🔢 Mathematical Properties
              </h3>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h4 className="mb-3 font-bold text-purple-600 dark:text-purple-400">432 Hz</h4>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li>• Divisible by many numbers (2, 3, 4, 6, 8, 9, 12, etc.)</li>
                    <li>• C note (middle C) = 256 Hz (2^8)</li>
                    <li>• Proponents claim it relates to the Fibonacci sequence</li>
                    <li>• Some associate it with the Schumann resonance (8 Hz)</li>
                  </ul>
                </div>

                <div>
                  <h4 className="mb-3 font-bold text-purple-600 dark:text-purple-400">440 Hz</h4>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li>• Divisible by 2, 4, 5, 8, 10, 11, 20, etc.</li>
                    <li>• C note (middle C) ≈ 261.63 Hz</li>
                    <li>• Chosen partially for practical reasons</li>
                    <li>• Creates clear mathematical relationships in equal temperament</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 rounded-xl bg-amber-50 p-4 dark:bg-amber-900/20">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  <strong>Note:</strong> While 432 Hz advocates emphasize its mathematical properties, 440 Hz also has mathematical coherence within the equal temperament system. Neither frequency is objectively "more mathematical" than the other.
                </p>
              </div>
            </div>

            {/* Sound Quality Comparison */}
            <div className="rounded-3xl bg-white p-8 shadow-xl dark:bg-gray-800 md:p-12">
              <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                🎧 Subjective Sound Quality
              </h3>

              <div className="mb-6 grid gap-6 md:grid-cols-2">
                <div className="rounded-xl bg-purple-50 p-6 dark:bg-purple-900/20">
                  <h4 className="mb-3 font-bold text-gray-900 dark:text-white">432 Hz Listeners Report:</h4>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li>✓ Warmer, softer tone</li>
                    <li>✓ More relaxing and calming</li>
                    <li>✓ Easier on the ears</li>
                    <li>✓ More "natural" feeling</li>
                    <li>✓ Better for meditation</li>
                  </ul>
                </div>

                <div className="rounded-xl bg-blue-50 p-6 dark:bg-blue-900/20">
                  <h4 className="mb-3 font-bold text-gray-900 dark:text-white">440 Hz Characteristics:</h4>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li>✓ Brighter, more brilliant tone</li>
                    <li>✓ More energetic sound</li>
                    <li>✓ Standard for all commercial music</li>
                    <li>✓ Better for matching with other musicians</li>
                    <li>✓ Universal compatibility</li>
                  </ul>
                </div>
              </div>

              <p className="text-sm italic text-gray-600 dark:text-gray-400">
                Important: These are subjective impressions. Controlled blind studies have not consistently demonstrated that listeners can reliably distinguish between 432 Hz and 440 Hz tuning or show preference for one over the other.
              </p>
            </div>

            {/* Scientific Evidence */}
            <div className="rounded-3xl bg-white p-8 shadow-xl dark:bg-gray-800 md:p-12">
              <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                🔬 Scientific Evidence
              </h3>

              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <div className="rounded-xl bg-green-50 p-4 dark:bg-green-900/20">
                  <h4 className="mb-2 font-bold text-gray-900 dark:text-white">What We Know:</h4>
                  <p className="text-sm">
                    There is a measurable 8 Hz difference between the two frequencies. Music tuned to either standard will have distinct physical properties in terms of wave frequencies.
                  </p>
                </div>

                <div className="rounded-xl bg-yellow-50 p-4 dark:bg-yellow-900/20">
                  <h4 className="mb-2 font-bold text-gray-900 dark:text-white">What's Unclear:</h4>
                  <p className="text-sm">
                    Scientific research has not conclusively proven that 432 Hz has superior therapeutic, healing, or psychological benefits compared to 440 Hz. Most studies comparing the two are small-scale or lack rigorous controls.
                  </p>
                </div>

                <div className="rounded-xl bg-blue-50 p-4 dark:bg-blue-900/20">
                  <h4 className="mb-2 font-bold text-gray-900 dark:text-white">The Bottom Line:</h4>
                  <p className="text-sm">
                    Personal preference plays a significant role. If you find 432 Hz more relaxing or beneficial, that subjective experience is valid regardless of objective measurements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* When to Use Each */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-16 text-white">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
            Which Should You Use?
          </h2>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Use 432 Hz */}
            <div className="rounded-3xl bg-white/10 p-8">
              <h3 className="mb-4 text-2xl font-bold">Choose 432 Hz If You:</h3>
              <ul className="space-y-3 text-white/90">
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Practice meditation, yoga, or mindfulness</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Seek music for relaxation and stress relief</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Are interested in alternative wellness practices</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Prefer warmer, softer sound quality</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Use sound for personal healing practices</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Want to explore alternative tuning systems</span>
                </li>
              </ul>
            </div>

            {/* Use 440 Hz */}
            <div className="rounded-3xl bg-white/10 p-8">
              <h3 className="mb-4 text-2xl font-bold">Choose 440 Hz If You:</h3>
              <ul className="space-y-3 text-white/90">
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Play in orchestras or bands</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Need compatibility with other musicians</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Produce commercial or professional music</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Prefer standard, universal tuning</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Want to match with existing recordings</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Need to tune acoustic instruments to concert pitch</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 rounded-2xl bg-white/10 p-6 text-center">
            <p className="text-lg text-white/90">
              <strong>Can't decide?</strong> There's no harm in exploring both! Try 432 Hz for personal meditation and 440 Hz for playing with others.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
            Common Questions
          </h2>

          <div className="space-y-6">
            <div className="rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-800">
              <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">
                Can I hear the difference between 432 Hz and 440 Hz?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Yes, 432 Hz is audibly lower than 440 Hz. However, the 8 Hz difference is subtle - about 31.77 cents (less than a third of a semitone). Some people notice it immediately, while others need careful comparison. The difference is more apparent in pure tones than in complex music.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-800">
              <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">
                Is 432 Hz better than 440 Hz?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                There's no objective "better" - it depends on context and personal preference. 440 Hz is better for universal compatibility and playing with others. 432 Hz may be preferred by individuals seeking alternative tuning for personal wellness practices. Neither is scientifically proven to be superior.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-800">
              <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">
                How do I convert music from 440 Hz to 432 Hz?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                You can use audio editing software to reduce the pitch by approximately 31.77 cents (or -1.8% speed). However, this also changes the tempo slightly. True 432 Hz music should be performed or recorded in that tuning from the start for best results.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-800">
              <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">
                Why did 440 Hz become the standard instead of 432 Hz?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                440 Hz was adopted as a compromise among various tuning standards used worldwide. It was partly chosen for practical reasons - brighter tone for large concert halls, ease of manufacturing instruments, and international cooperation. The choice wasn't based on any conspiracy, just practical considerations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-2xl bg-white p-8 shadow-lg dark:bg-gray-800">
            <h3 className="mb-6 text-xl font-bold text-gray-900 dark:text-white">Related Topics</h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <Link href="/what-is-432-hz" className="rounded-lg border-2 border-purple-200 p-4 hover:border-purple-600 dark:border-gray-700 dark:hover:border-purple-400">
                <div className="font-semibold text-purple-600 dark:text-purple-400">What is 432 Hz?</div>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">Learn the basics</p>
              </Link>
              <Link href="/benefits" className="rounded-lg border-2 border-purple-200 p-4 hover:border-purple-600 dark:border-gray-700 dark:hover:border-purple-400">
                <div className="font-semibold text-purple-600 dark:text-purple-400">Benefits</div>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">Why use 432 Hz</p>
              </Link>
              <Link href="/healing" className="rounded-lg border-2 border-purple-200 p-4 hover:border-purple-600 dark:border-gray-700 dark:hover:border-purple-400">
                <div className="font-semibold text-purple-600 dark:text-purple-400">Sound Healing</div>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">Healing practices</p>
              </Link>
              <Link href="/download" className="rounded-lg border-2 border-purple-200 p-4 hover:border-purple-600 dark:border-gray-700 dark:hover:border-purple-400">
                <div className="font-semibold text-purple-600 dark:text-purple-400">Download</div>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">Get 432 Hz audio</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-4xl rounded-3xl bg-gradient-to-r from-purple-600 to-pink-600 p-8 text-center text-white shadow-2xl md:p-12">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Try 432 Hz Yourself
          </h2>
          <p className="mb-8 text-lg">
            Experience the difference firsthand. Generate your own 432 Hz audio files for free.
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
