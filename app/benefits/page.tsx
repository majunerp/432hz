import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '432 Hz Benefits - Why Use 432 Hz Frequency?',
  description: 'Discover the benefits of 432 Hz frequency for meditation, relaxation, and wellness. Learn why millions choose 432 Hz for stress relief and sound healing.',
  alternates: {
    canonical: 'https://432-hz.org/benefits',
  },
};

export default function BenefitsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 py-12 md:py-20">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
              Benefits of 432 Hz Frequency
            </h1>
            <p className="mx-auto mb-8 max-w-3xl text-lg text-gray-600 dark:text-gray-300 sm:text-xl">
              Explore why millions of people worldwide use 432 Hz for meditation, relaxation, and personal wellness.
            </p>
          </div>
        </div>
      </section>

      {/* Main Benefits Grid */}
      <section className="px-4 py-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Benefit 1 */}
            <div className="rounded-3xl bg-white p-8 shadow-xl dark:bg-gray-800">
              <div className="mb-4 text-5xl">🧘</div>
              <h3 className="mb-3 text-2xl font-bold text-gray-900 dark:text-white">
                Enhanced Meditation
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Many practitioners report that 432 Hz creates a more calming atmosphere for meditation. The frequency may help quiet mental chatter and facilitate deeper meditative states more easily than standard tuning.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="rounded-3xl bg-white p-8 shadow-xl dark:bg-gray-800">
              <div className="mb-4 text-5xl">😌</div>
              <h3 className="mb-3 text-2xl font-bold text-gray-900 dark:text-white">
                Stress Reduction
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Listeners commonly describe 432 Hz as more soothing and less tense than 440 Hz. The slightly lower pitch may contribute to a more relaxed listening experience and reduced stress levels.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="rounded-3xl bg-white p-8 shadow-xl dark:bg-gray-800">
              <div className="mb-4 text-5xl">😴</div>
              <h3 className="mb-3 text-2xl font-bold text-gray-900 dark:text-white">
                Better Sleep
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Using 432 Hz tones before bedtime may help prepare the mind and body for rest. Many users incorporate 432 Hz into their nighttime routine for more restful sleep.
              </p>
            </div>

            {/* Benefit 4 */}
            <div className="rounded-3xl bg-white p-8 shadow-xl dark:bg-gray-800">
              <div className="mb-4 text-5xl">🎵</div>
              <h3 className="mb-3 text-2xl font-bold text-gray-900 dark:text-white">
                Warmer Sound Quality
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Musicians and listeners often describe 432 Hz music as warmer, softer, and more pleasant to the ear. The slight pitch difference creates a subtly different tonal quality.
              </p>
            </div>

            {/* Benefit 5 */}
            <div className="rounded-3xl bg-white p-8 shadow-xl dark:bg-gray-800">
              <div className="mb-4 text-5xl">💆</div>
              <h3 className="mb-3 text-2xl font-bold text-gray-900 dark:text-white">
                Mind-Body Harmony
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Proponents believe 432 Hz resonates more naturally with the body's energy systems. While scientifically unproven, many report feeling more balanced and centered when listening.
              </p>
            </div>

            {/* Benefit 6 */}
            <div className="rounded-3xl bg-white p-8 shadow-xl dark:bg-gray-800">
              <div className="mb-4 text-5xl">🧠</div>
              <h3 className="mb-3 text-2xl font-bold text-gray-900 dark:text-white">
                Mental Clarity
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Some users report improved focus and mental clarity when working or studying with 432 Hz background tones. The frequency may help maintain calm concentration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Scientific Perspective */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-16 text-white">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center text-3xl font-bold md:text-4xl">
            The Scientific Perspective
          </h2>

          <div className="space-y-6 text-lg leading-relaxed">
            <div className="rounded-2xl bg-white/10 p-6">
              <h3 className="mb-3 text-2xl font-bold">What Research Says</h3>
              <p className="text-white/90">
                While many people report subjective benefits from 432 Hz, it's important to understand that scientific research on this specific frequency is limited. Most reported benefits are based on personal experience rather than controlled scientific studies.
              </p>
            </div>

            <div className="rounded-2xl bg-white/10 p-6">
              <h3 className="mb-3 text-2xl font-bold">Placebo Effect Consideration</h3>
              <p className="text-white/90">
                Some researchers suggest that the benefits people experience may be due to the placebo effect - the positive expectations associated with 432 Hz could contribute to the perceived benefits. However, if listeners feel genuine relief or improvement, the subjective experience remains valuable.
              </p>
            </div>

            <div className="rounded-2xl bg-white/10 p-6">
              <h3 className="mb-3 text-2xl font-bold">Need for More Research</h3>
              <p className="text-white/90">
                The scientific community recognizes the need for more rigorous research comparing 432 Hz to 440 Hz in controlled settings. Future studies may provide clearer evidence for or against the claimed benefits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Use 432 Hz */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
            How to Experience the Benefits
          </h2>

          <div className="grid gap-8 md:grid-cols-2">
            {/* For Meditation */}
            <div className="rounded-2xl bg-white p-8 shadow-xl dark:bg-gray-800">
              <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                🧘 For Meditation
              </h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="mr-2 text-purple-600">•</span>
                  <span><strong>Duration:</strong> Start with 10-15 minutes, gradually increase to 20-30 minutes</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-purple-600">•</span>
                  <span><strong>Volume:</strong> Low to medium, comfortable background level</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-purple-600">•</span>
                  <span><strong>Waveform:</strong> Pure sine wave for clearest tones</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-purple-600">•</span>
                  <span><strong>Setting:</strong> Quiet space, comfortable position</span>
                </li>
              </ul>
            </div>

            {/* For Sleep */}
            <div className="rounded-2xl bg-white p-8 shadow-xl dark:bg-gray-800">
              <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                😴 For Sleep
              </h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="mr-2 text-purple-600">•</span>
                  <span><strong>Duration:</strong> 30-60 minutes or longer loops</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-purple-600">•</span>
                  <span><strong>Volume:</strong> Very low, barely audible</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-purple-600">•</span>
                  <span><strong>Timing:</strong> Start 15-30 minutes before sleep</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-purple-600">•</span>
                  <span><strong>Binaural:</strong> Consider Delta waves (1-4 Hz) for deep sleep</span>
                </li>
              </ul>
            </div>

            {/* For Yoga */}
            <div className="rounded-2xl bg-white p-8 shadow-xl dark:bg-gray-800">
              <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                🏃 For Yoga
              </h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="mr-2 text-purple-600">•</span>
                  <span><strong>Duration:</strong> Match your practice length (30-60 minutes)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-purple-600">•</span>
                  <span><strong>Volume:</strong> Moderate, present but not distracting</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-purple-600">•</span>
                  <span><strong>Style:</strong> Can mix with nature sounds or ambient music</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-purple-600">•</span>
                  <span><strong>Focus:</strong> Use during savasana for deepest relaxation</span>
                </li>
              </ul>
            </div>

            {/* For Focus */}
            <div className="rounded-2xl bg-white p-8 shadow-xl dark:bg-gray-800">
              <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                🧠 For Focus & Study
              </h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="mr-2 text-purple-600">•</span>
                  <span><strong>Duration:</strong> 25-50 minute blocks (Pomodoro technique)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-purple-600">•</span>
                  <span><strong>Volume:</strong> Low, subtle background</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-purple-600">•</span>
                  <span><strong>Binaural:</strong> Alpha waves (8-12 Hz) for focus</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-purple-600">•</span>
                  <span><strong>Experiment:</strong> Try Beta waves (12-30 Hz) for active concentration</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* User Testimonials */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
            What People Report
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-purple-50 p-6 dark:bg-purple-900/20">
              <p className="mb-4 italic text-gray-700 dark:text-gray-300">
                "I've been using 432 Hz for my morning meditation for three months now. I find it much more calming than regular music."
              </p>
              <p className="text-sm font-semibold text-gray-600 dark:text-gray-400">
                - Meditation Practitioner
              </p>
            </div>

            <div className="rounded-2xl bg-purple-50 p-6 dark:bg-purple-900/20">
              <p className="mb-4 italic text-gray-700 dark:text-gray-300">
                "As a yoga instructor, I've switched to 432 Hz music for my classes. Students comment on how peaceful the atmosphere feels."
              </p>
              <p className="text-sm font-semibold text-gray-600 dark:text-gray-400">
                - Yoga Instructor
              </p>
            </div>

            <div className="rounded-2xl bg-purple-50 p-6 dark:bg-purple-900/20">
              <p className="mb-4 italic text-gray-700 dark:text-gray-300">
                "I play 432 Hz tones while sleeping. Whether it's placebo or not, I wake up feeling more refreshed."
              </p>
              <p className="text-sm font-semibold text-gray-600 dark:text-gray-400">
                - Wellness Enthusiast
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Important Disclaimer */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-3xl bg-amber-50 p-8 shadow-xl dark:bg-amber-900/20 md:p-12">
            <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
              ⚠️ Important Information
            </h3>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                <strong>Not Medical Treatment:</strong> 432 Hz is not a substitute for professional medical care, mental health treatment, or therapy. If you're experiencing health issues, please consult qualified healthcare professionals.
              </p>
              <p>
                <strong>Subjective Benefits:</strong> Most reported benefits of 432 Hz are based on subjective personal experiences rather than peer-reviewed scientific studies. Individual results may vary significantly.
              </p>
              <p>
                <strong>Safe Exploration:</strong> There's no harm in exploring 432 Hz as part of your personal wellness routine. Listen to your body and use what works for you.
              </p>
              <p>
                <strong>Keep Expectations Realistic:</strong> While many people find value in 432 Hz, it's not a miracle cure. Approach it as one tool among many for relaxation and stress management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-8 text-center text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
            Learn More
          </h2>

          <div className="grid gap-6 md:grid-cols-4">
            <Link
              href="/what-is-432-hz"
              className="group rounded-2xl bg-white p-6 shadow-lg transition-transform hover:scale-105 dark:bg-gray-800"
            >
              <h3 className="mb-2 font-bold text-gray-900 group-hover:text-purple-600 dark:text-white dark:group-hover:text-purple-400">
                What is 432 Hz?
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Learn the basics</p>
            </Link>

            <Link
              href="/432-vs-440"
              className="group rounded-2xl bg-white p-6 shadow-lg transition-transform hover:scale-105 dark:bg-gray-800"
            >
              <h3 className="mb-2 font-bold text-gray-900 group-hover:text-purple-600 dark:text-white dark:group-hover:text-purple-400">
                432 vs 440 Hz
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Compare frequencies</p>
            </Link>

            <Link
              href="/healing"
              className="group rounded-2xl bg-white p-6 shadow-lg transition-transform hover:scale-105 dark:bg-gray-800"
            >
              <h3 className="mb-2 font-bold text-gray-900 group-hover:text-purple-600 dark:text-white dark:group-hover:text-purple-400">
                Sound Healing
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Healing practices</p>
            </Link>

            <Link
              href="/music"
              className="group rounded-2xl bg-white p-6 shadow-lg transition-transform hover:scale-105 dark:bg-gray-800"
            >
              <h3 className="mb-2 font-bold text-gray-900 group-hover:text-purple-600 dark:text-white dark:group-hover:text-purple-400">
                432 Hz Music
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Music & artists</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-4xl rounded-3xl bg-gradient-to-r from-purple-600 to-pink-600 p-8 text-center text-white shadow-2xl md:p-12">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Experience 432 Hz Benefits Yourself
          </h2>
          <p className="mb-8 text-lg">
            Create your own 432 Hz audio files and explore the potential benefits. Free, instant, no registration required.
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
