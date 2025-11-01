import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'What is 432 Hz? Complete Guide to the Healing Frequency',
  description: 'Learn about 432 Hz frequency, its history, science, and potential benefits for meditation and relaxation. Complete guide to understanding 432Hz sound healing.',
  alternates: {
    canonical: 'https://432-hz.org/about',
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900">
      <div className="mx-auto max-w-4xl px-4 py-16">
        <article className="rounded-3xl bg-white p-8 shadow-xl dark:bg-gray-800 md:p-12">
          <h1 className="mb-8 text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
            What is 432 Hz Frequency?
          </h1>

          <div className="prose prose-lg prose-purple max-w-none dark:prose-invert">
            <section className="mb-12">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">Understanding 432 Hz</h2>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                The <strong>432 Hz frequency</strong> is an alternative musical tuning standard that differs from the modern concert pitch of 440 Hz. In 432 Hz tuning, the musical note A above middle C (A4) vibrates at exactly 432 cycles per second, rather than the standard 440 Hz. This creates a tuning system where all musical notes are shifted down by approximately 8 cents (about 1.8% lower in frequency).
              </p>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                Proponents of 432 Hz tuning believe this frequency is more harmonious and naturally aligned with the universe, the human body, and nature itself. The 432 Hz frequency is sometimes referred to as the "natural frequency of the universe," "Verdi's A," or "scientific pitch." Many meditation practitioners, sound healers, and alternative wellness advocates use 432 Hz audio for its purported calming and healing properties.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">History of 432 Hz Tuning</h2>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                The history of musical tuning standards is complex and varied. Before the modern standardization of 440 Hz (established in 1953 by the International Organization for Standardization), different regions and eras used various tuning frequencies. Some advocates claim that ancient civilizations, including the Egyptians and Greeks, may have used 432 Hz tuning, though concrete historical evidence is limited.
              </p>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                The famous Italian composer Giuseppe Verdi advocated for 432 Hz tuning in the 19th century, believing it produced a more beautiful and natural sound. This is why 432 Hz is sometimes called "Verdi's A." However, the debate over concert pitch has continued for centuries, with various standards ranging from 415 Hz to 466 Hz used in different contexts.
              </p>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                In 1939, an international conference recommended 440 Hz as the standard concert pitch, which was later adopted by the ISO in 1953. This remains the international standard today. Despite this, interest in 432 Hz tuning has experienced a resurgence in recent decades, particularly within meditation, yoga, and alternative healing communities.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">Claims About 432 Hz Benefits</h2>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                Supporters of 432 Hz frequency make various claims about its potential benefits:
              </p>
              <ul className="mb-4 list-disc space-y-2 pl-6 text-gray-700 dark:text-gray-300">
                <li><strong>Natural Resonance:</strong> 432 Hz is said to resonate with the Schumann Resonance (Earth's electromagnetic frequency of approximately 7.83 Hz), as 432 is a multiple of this number.</li>
                <li><strong>Mathematical Harmony:</strong> The number 432 has interesting mathematical properties and appears in various natural phenomena and ancient measurements.</li>
                <li><strong>Enhanced Meditation:</strong> Many users report that 432 Hz audio promotes deeper relaxation and more profound meditation experiences.</li>
                <li><strong>Reduced Stress:</strong> Some claim that 432 Hz frequency helps reduce stress, anxiety, and tension more effectively than 440 Hz.</li>
                <li><strong>Chakra Alignment:</strong> In some spiritual traditions, 432 Hz is believed to align with the body's energy centers or chakras.</li>
                <li><strong>Improved Focus:</strong> Users often report better concentration and mental clarity when listening to 432 Hz audio.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">Scientific Perspective on 432 Hz</h2>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                It's important to note that <strong>scientific evidence</strong> supporting specific therapeutic benefits of 432 Hz over 440 Hz is currently limited. Most claims about 432 Hz are based on anecdotal reports, personal experiences, and theoretical considerations rather than rigorous peer-reviewed research.
              </p>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                Musical tuning is largely a matter of cultural convention rather than objective truth. While different frequencies can certainly affect our auditory perception and potentially our emotional state, the specific choice between 432 Hz and 440 Hz for A4 involves subtle differences that may or may not be perceptible to most listeners.
              </p>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                That said, the placebo effect and psychological factors should not be dismissed. If someone believes that 432 Hz audio will help them relax or meditate more deeply, this expectation alone may contribute to a positive experience. The ritual of using specific frequencies for meditation or relaxation can be beneficial regardless of the specific frequency chosen.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">How to Use 432 Hz Audio</h2>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                If you're interested in experiencing 432 Hz frequency, here are some practical ways to use it:
              </p>
              <ul className="mb-4 list-disc space-y-2 pl-6 text-gray-700 dark:text-gray-300">
                <li><strong>Meditation Practice:</strong> Use 432 Hz tones or music as background sound during meditation sessions.</li>
                <li><strong>Yoga and Mindfulness:</strong> Play 432 Hz audio during yoga practice or mindfulness exercises.</li>
                <li><strong>Sleep Aid:</strong> Listen to 432 Hz frequencies before bed to promote relaxation and sleep.</li>
                <li><strong>Background Music:</strong> Use 432 Hz music while working, studying, or engaging in creative activities.</li>
                <li><strong>Sound Healing:</strong> Incorporate 432 Hz audio into sound healing or therapeutic practices.</li>
              </ul>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                For binaural beats at 432 Hz, use headphones to ensure each ear receives the correct frequency. Start with lower volumes and shorter durations, gradually increasing as you become more comfortable with the practice.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">432 Hz vs 440 Hz: The Debate</h2>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                The debate between 432 Hz and 440 Hz tuning has been ongoing for decades. Supporters of 432 Hz argue it's more natural and harmonious, while defenders of 440 Hz point out it's the established international standard that allows musicians worldwide to play together in tune.
              </p>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                Ultimately, the "best" frequency is subjective and depends on individual preferences and purposes. The 440 Hz standard works well for orchestral music and international collaboration. The 432 Hz frequency may offer benefits for meditation, relaxation, and personal exploration of sound.
              </p>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                Rather than viewing this as an either-or choice, consider exploring both frequencies and determining what works best for your personal needs and experiences.
              </p>
            </section>

            <section className="rounded-2xl bg-purple-50 p-6 dark:bg-purple-900/20">
              <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">⚠️ Important Disclaimer</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                The information provided here about 432 Hz frequency is for educational purposes only. Claims about therapeutic benefits are not scientifically proven and should not be considered medical advice. 432 Hz audio is not a substitute for professional medical treatment. If you have health concerns, consult with a qualified healthcare provider.
              </p>
            </section>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/"
              className="inline-block rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-3 text-lg font-semibold text-white shadow-lg hover:from-purple-700 hover:to-pink-700"
            >
              Try Our 432 Hz Generator
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
}
