import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '432 Hz Healing - Sound Healing Guide & Benefits',
  description: 'Discover how 432 Hz is used in sound healing practices. Learn about frequency healing, therapeutic applications, and how to use 432 Hz for wellness.',
  alternates: {
    canonical: 'https://432-hz.org/healing',
  },
};

export default function HealingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 py-12 md:py-20">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
              432 Hz Sound Healing
            </h1>
            <p className="mx-auto mb-8 max-w-3xl text-lg text-gray-600 dark:text-gray-300 sm:text-xl">
              Explore how 432 Hz frequency is used in sound healing practices for relaxation, meditation, and holistic wellness.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction to Sound Healing */}
      <section className="px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-3xl bg-white p-8 shadow-xl dark:bg-gray-800 md:p-12">
            <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
              What is Sound Healing?
            </h2>

            <p className="mb-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              Sound healing is an ancient wellness practice that uses vibrations from instruments, voice, or recorded frequencies to promote relaxation, reduce stress, and support overall wellbeing. Practitioners believe that specific sound frequencies can influence physical, emotional, and spiritual states.
            </p>

            <p className="mb-6 text-gray-700 dark:text-gray-300">
              432 Hz has become increasingly popular in sound healing communities due to its reputed calming properties and perceived alignment with natural frequencies. While scientific evidence remains limited, many practitioners and recipients report positive experiences with 432 Hz in therapeutic contexts.
            </p>

            <div className="rounded-2xl bg-purple-50 p-6 dark:bg-purple-900/20">
              <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">
                How 432 Hz is Used in Sound Healing
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>✓ Tuning singing bowls and other instruments to 432 Hz</li>
                <li>✓ Playing 432 Hz tones during healing sessions</li>
                <li>✓ Creating 432 Hz binaural beats for brainwave entrainment</li>
                <li>✓ Using 432 Hz music as background in therapy settings</li>
                <li>✓ Combining 432 Hz with other healing modalities (Reiki, massage, etc.)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Sound Healing with 432 Hz */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
            432 Hz Healing Modalities
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Meditation */}
            <div className="rounded-3xl bg-white p-8 shadow-xl dark:bg-gray-800">
              <div className="mb-4 text-5xl">🧘</div>
              <h3 className="mb-3 text-2xl font-bold text-gray-900 dark:text-white">
                Meditation & Mindfulness
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                432 Hz tones create a calming soundscape for meditation practice. The frequency is believed to help quiet mental chatter and facilitate deeper states of awareness and presence.
              </p>
              <div className="mt-4 text-sm text-purple-600 dark:text-purple-400">
                <strong>Common uses:</strong> Guided meditation, breathwork, silent practice background
              </div>
            </div>

            {/* Sound Baths */}
            <div className="rounded-3xl bg-white p-8 shadow-xl dark:bg-gray-800">
              <div className="mb-4 text-5xl">🎵</div>
              <h3 className="mb-3 text-2xl font-bold text-gray-900 dark:text-white">
                Sound Baths
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                In sound baths, practitioners use instruments tuned to 432 Hz (singing bowls, gongs, chimes) to create immersive sonic experiences designed to promote deep relaxation and healing.
              </p>
              <div className="mt-4 text-sm text-purple-600 dark:text-purple-400">
                <strong>Common uses:</strong> Group healing sessions, yoga studios, wellness centers
              </div>
            </div>

            {/* Energy Work */}
            <div className="rounded-3xl bg-white p-8 shadow-xl dark:bg-gray-800">
              <div className="mb-4 text-5xl">✨</div>
              <h3 className="mb-3 text-2xl font-bold text-gray-900 dark:text-white">
                Energy Healing
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Reiki practitioners, energy healers, and bodyworkers often incorporate 432 Hz music or tones to enhance their healing sessions and create a more harmonious environment.
              </p>
              <div className="mt-4 text-sm text-purple-600 dark:text-purple-400">
                <strong>Common uses:</strong> Reiki sessions, chakra balancing, aura work
              </div>
            </div>

            {/* Sleep Therapy */}
            <div className="rounded-3xl bg-white p-8 shadow-xl dark:bg-gray-800">
              <div className="mb-4 text-5xl">😴</div>
              <h3 className="mb-3 text-2xl font-bold text-gray-900 dark:text-white">
                Sleep Support
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Many people use 432 Hz frequencies at bedtime to help calm the nervous system and prepare for restful sleep. Extended loops can play throughout the night.
              </p>
              <div className="mt-4 text-sm text-purple-600 dark:text-purple-400">
                <strong>Common uses:</strong> Insomnia support, sleep hygiene, nighttime routines
              </div>
            </div>

            {/* Stress Relief */}
            <div className="rounded-3xl bg-white p-8 shadow-xl dark:bg-gray-800">
              <div className="mb-4 text-5xl">💆</div>
              <h3 className="mb-3 text-2xl font-bold text-gray-900 dark:text-white">
                Stress Management
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                432 Hz listening sessions can serve as a tool for stress reduction and nervous system regulation, helping individuals transition from stressed to relaxed states.
              </p>
              <div className="mt-4 text-sm text-purple-600 dark:text-purple-400">
                <strong>Common uses:</strong> Break time listening, stress relief protocols, workplace wellness
              </div>
            </div>

            {/* Yoga & Movement */}
            <div className="rounded-3xl bg-white p-8 shadow-xl dark:bg-gray-800">
              <div className="mb-4 text-5xl">🏃</div>
              <h3 className="mb-3 text-2xl font-bold text-gray-900 dark:text-white">
                Yoga & Movement
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Yoga instructors and movement practitioners use 432 Hz music to create a more grounding and centering atmosphere during classes and personal practice.
              </p>
              <div className="mt-4 text-sm text-purple-600 dark:text-purple-400">
                <strong>Common uses:</strong> Yoga classes, tai chi, qigong, dance therapy
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Practice */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-16 text-white">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
            How to Use 432 Hz for Healing
          </h2>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Beginner Guide */}
            <div className="rounded-3xl bg-white/10 p-8">
              <h3 className="mb-4 text-2xl font-bold">For Beginners</h3>

              <div className="space-y-4 text-white/90">
                <div>
                  <h4 className="mb-2 font-semibold">1. Create Your Space</h4>
                  <p className="text-sm">Find a quiet, comfortable location where you won't be disturbed. Dim the lights, light candles, or use aromatherapy if desired.</p>
                </div>

                <div>
                  <h4 className="mb-2 font-semibold">2. Choose Your Sound</h4>
                  <p className="text-sm">Start with a simple 432 Hz sine wave or gentle 432 Hz music. Use <Link href="/download" className="underline">our free generator</Link> to create your own.</p>
                </div>

                <div>
                  <h4 className="mb-2 font-semibold">3. Set an Intention</h4>
                  <p className="text-sm">Before beginning, take a moment to set a clear intention for your healing session (relaxation, stress relief, emotional release, etc.).</p>
                </div>

                <div>
                  <h4 className="mb-2 font-semibold">4. Listen Mindfully</h4>
                  <p className="text-sm">Start with 10-15 minutes. Close your eyes, breathe deeply, and allow yourself to fully receive the sounds without judgment.</p>
                </div>

                <div>
                  <h4 className="mb-2 font-semibold">5. Reflect & Integrate</h4>
                  <p className="text-sm">After your session, take a few minutes to notice how you feel. Journal about your experience if helpful.</p>
                </div>
              </div>
            </div>

            {/* Advanced Practice */}
            <div className="rounded-3xl bg-white/10 p-8">
              <h3 className="mb-4 text-2xl font-bold">Advanced Practices</h3>

              <div className="space-y-4 text-white/90">
                <div>
                  <h4 className="mb-2 font-semibold">Binaural Beats</h4>
                  <p className="text-sm">Combine 432 Hz base frequency with binaural beats for targeted brainwave entrainment. Use headphones for proper stereo separation.</p>
                </div>

                <div>
                  <h4 className="mb-2 font-semibold">Body Scanning</h4>
                  <p className="text-sm">While listening to 432 Hz, systematically scan your body from head to toe, releasing tension and inviting the sound vibrations to penetrate each area.</p>
                </div>

                <div>
                  <h4 className="mb-2 font-semibold">Chakra Work</h4>
                  <p className="text-sm">Some practitioners use 432 Hz as a base while focusing on specific chakras, visualizing the sound clearing and balancing each energy center.</p>
                </div>

                <div>
                  <h4 className="mb-2 font-semibold">Extended Sessions</h4>
                  <p className="text-sm">Build up to longer sessions (30-60 minutes) for deeper healing work. Consider overnight listening for sleep and subconscious healing.</p>
                </div>

                <div>
                  <h4 className="mb-2 font-semibold">Combination Therapy</h4>
                  <p className="text-sm">Integrate 432 Hz with other modalities: breathwork, visualization, movement, or professional therapy for enhanced results.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scientific Perspective */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
            The Science of Sound Healing
          </h2>

          <div className="space-y-6">
            <div className="rounded-2xl bg-white p-8 shadow-xl dark:bg-gray-800">
              <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                What Research Shows
              </h3>

              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <div>
                  <h4 className="mb-2 font-semibold text-purple-600 dark:text-purple-400">
                    Sound and Relaxation ✓
                  </h4>
                  <p className="text-sm">
                    Research supports that certain sounds and music can reduce stress, lower blood pressure, and promote relaxation. However, these studies typically don't focus specifically on 432 Hz vs other frequencies.
                  </p>
                </div>

                <div>
                  <h4 className="mb-2 font-semibold text-purple-600 dark:text-purple-400">
                    Binaural Beats ✓
                  </h4>
                  <p className="text-sm">
                    Studies suggest binaural beats can influence brainwave patterns and may support meditation, focus, and relaxation. This applies regardless of whether the base frequency is 432 Hz or 440 Hz.
                  </p>
                </div>

                <div>
                  <h4 className="mb-2 font-semibold text-amber-600 dark:text-amber-400">
                    432 Hz Specific Claims ?
                  </h4>
                  <p className="text-sm">
                    Claims that 432 Hz has unique healing properties superior to other frequencies lack robust scientific evidence. Most reported benefits are anecdotal and may be influenced by placebo effects or personal expectations.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-amber-50 p-8 dark:bg-amber-900/20">
              <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
                ⚠️ Important Medical Disclaimer
              </h3>
              <div className="space-y-3 text-gray-700 dark:text-gray-300">
                <p>
                  <strong>Not a Medical Treatment:</strong> Sound healing with 432 Hz is not a substitute for professional medical care, mental health treatment, psychiatric care, or emergency services.
                </p>
                <p>
                  <strong>Complementary Practice:</strong> Sound healing should be viewed as a complementary wellness practice, not a primary treatment for medical or psychological conditions.
                </p>
                <p>
                  <strong>Consult Professionals:</strong> If you have physical health issues, mental health concerns, or are undergoing medical treatment, consult qualified healthcare providers before relying on sound healing.
                </p>
                <p>
                  <strong>Individual Results Vary:</strong> Benefits from 432 Hz sound healing are subjective and not guaranteed. What works for one person may not work for another.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tips & Best Practices */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
            Best Practices for 432 Hz Healing
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-800">
              <h3 className="mb-3 flex items-center text-xl font-bold text-gray-900 dark:text-white">
                <span className="mr-2">✓</span> Do This
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Start with short sessions (10-15 min) and gradually increase</li>
                <li>• Use comfortable volume levels - never too loud</li>
                <li>• Create a peaceful, distraction-free environment</li>
                <li>• Be patient and allow the practice to unfold naturally</li>
                <li>• Combine with breathwork for enhanced benefits</li>
                <li>• Use quality headphones for binaural beats</li>
                <li>• Journal your experiences to track progress</li>
                <li>• Stay hydrated before and after sessions</li>
              </ul>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-800">
              <h3 className="mb-3 flex items-center text-xl font-bold text-gray-900 dark:text-white">
                <span className="mr-2">✗</span> Avoid This
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Don't expect instant miraculous results</li>
                <li>• Avoid listening at excessive volumes</li>
                <li>• Don't use as replacement for medical treatment</li>
                <li>• Avoid multitasking during healing sessions</li>
                <li>• Don't force the experience or strain</li>
                <li>• Avoid comparing your experience to others</li>
                <li>• Don't practice while driving or operating machinery</li>
                <li>• Avoid if you have severe mental health crisis (seek help)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Resources & Tools */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-8 text-center text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
            Related Resources
          </h2>

          <div className="grid gap-6 md:grid-cols-4">
            <Link
              href="/download"
              className="group rounded-2xl bg-white p-6 shadow-lg transition-transform hover:scale-105 dark:bg-gray-800"
            >
              <div className="mb-3 text-3xl">🎵</div>
              <h3 className="mb-2 font-bold text-gray-900 group-hover:text-purple-600 dark:text-white dark:group-hover:text-purple-400">
                Download 432 Hz
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Create custom audio files
              </p>
            </Link>

            <Link
              href="/what-is-432-hz"
              className="group rounded-2xl bg-white p-6 shadow-lg transition-transform hover:scale-105 dark:bg-gray-800"
            >
              <div className="mb-3 text-3xl">📚</div>
              <h3 className="mb-2 font-bold text-gray-900 group-hover:text-purple-600 dark:text-white dark:group-hover:text-purple-400">
                What is 432 Hz?
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Learn the fundamentals
              </p>
            </Link>

            <Link
              href="/benefits"
              className="group rounded-2xl bg-white p-6 shadow-lg transition-transform hover:scale-105 dark:bg-gray-800"
            >
              <div className="mb-3 text-3xl">✨</div>
              <h3 className="mb-2 font-bold text-gray-900 group-hover:text-purple-600 dark:text-white dark:group-hover:text-purple-400">
                Benefits
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Explore potential benefits
              </p>
            </Link>

            <Link
              href="/music"
              className="group rounded-2xl bg-white p-6 shadow-lg transition-transform hover:scale-105 dark:bg-gray-800"
            >
              <div className="mb-3 text-3xl">🎼</div>
              <h3 className="mb-2 font-bold text-gray-900 group-hover:text-purple-600 dark:text-white dark:group-hover:text-purple-400">
                432 Hz Music
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Music and artists
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-4xl rounded-3xl bg-gradient-to-r from-purple-600 to-pink-600 p-8 text-center text-white shadow-2xl md:p-12">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Start Your 432 Hz Healing Journey
          </h2>
          <p className="mb-8 text-lg">
            Create your own 432 Hz audio files for meditation, relaxation, and personal healing practice.
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
