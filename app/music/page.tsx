import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '432 Hz Music - Artists, Songs & Complete Guide',
  description: 'Explore 432 Hz music guide. Discover artists using 432 Hz tuning, where to find 432 Hz songs, and how to create music in 432 Hz frequency tuning.',
  alternates: {
    canonical: 'https://432-hz.org/music',
  },
};

export default function MusicPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 py-12 md:py-20">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
              432 Hz Music Guide
            </h1>
            <p className="mx-auto mb-8 max-w-3xl text-lg text-gray-600 dark:text-gray-300 sm:text-xl">
              Explore 432 Hz music, discover artists who create in this tuning, and learn where to find songs tuned to 432 Hz frequency.
            </p>
          </div>
        </div>
      </section>

      {/* What is 432 Hz Music */}
      <section className="px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-3xl bg-white p-8 shadow-xl dark:bg-gray-800 md:p-12">
            <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
              What is 432 Hz Music?
            </h2>

            <p className="mb-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              432 Hz music refers to musical compositions where the reference pitch A4 is tuned to 432 cycles per second instead of the standard 440 Hz. This tuning affects all other notes in the composition, creating a slightly lower pitch overall.
            </p>

            <p className="mb-6 text-gray-700 dark:text-gray-300">
              Musicians and listeners who prefer 432 Hz often describe the music as warmer, more natural, and easier on the ears. Whether creating original compositions or converting existing songs to 432 Hz, the goal is to explore this alternative tuning standard.
            </p>

            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-xl bg-purple-50 p-4 dark:bg-purple-900/20">
                <h3 className="mb-2 font-bold text-gray-900 dark:text-white">🎸 Instruments</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Guitars, pianos, and other instruments can be tuned to 432 Hz
                </p>
              </div>
              <div className="rounded-xl bg-purple-50 p-4 dark:bg-purple-900/20">
                <h3 className="mb-2 font-bold text-gray-900 dark:text-white">🎼 Compositions</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Original music composed and recorded in 432 Hz tuning
                </p>
              </div>
              <div className="rounded-xl bg-purple-50 p-4 dark:bg-purple-900/20">
                <h3 className="mb-2 font-bold text-gray-900 dark:text-white">🔄 Conversions</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Existing 440 Hz songs converted to 432 Hz frequency
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Music Genres */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
            432 Hz Music Genres
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Ambient */}
            <div className="rounded-3xl bg-white p-8 shadow-xl dark:bg-gray-800">
              <div className="mb-4 text-5xl">🌌</div>
              <h3 className="mb-3 text-2xl font-bold text-gray-900 dark:text-white">
                Ambient & Meditative
              </h3>
              <p className="mb-4 text-gray-600 dark:text-gray-300">
                The most common genre for 432 Hz music. Long, flowing soundscapes designed for meditation, relaxation, and deep listening.
              </p>
              <div className="text-sm text-purple-600 dark:text-purple-400">
                <strong>Characteristics:</strong> Slow tempo, atmospheric, minimal percussion
              </div>
            </div>

            {/* Classical */}
            <div className="rounded-3xl bg-white p-8 shadow-xl dark:bg-gray-800">
              <div className="mb-4 text-5xl">🎻</div>
              <h3 className="mb-3 text-2xl font-bold text-gray-900 dark:text-white">
                Classical Music
              </h3>
              <p className="mb-4 text-gray-600 dark:text-gray-300">
                Some orchestras and classical musicians perform or record pieces in 432 Hz, believing it matches the original intentions of historical composers.
              </p>
              <div className="text-sm text-purple-600 dark:text-purple-400">
                <strong>Notable:</strong> Verdi advocated for 432 Hz tuning
              </div>
            </div>

            {/* New Age */}
            <div className="rounded-3xl bg-white p-8 shadow-xl dark:bg-gray-800">
              <div className="mb-4 text-5xl">✨</div>
              <h3 className="mb-3 text-2xl font-bold text-gray-900 dark:text-white">
                New Age & Healing
              </h3>
              <p className="mb-4 text-gray-600 dark:text-gray-300">
                New age artists often compose in 432 Hz, creating music specifically for healing, yoga studios, and wellness centers.
              </p>
              <div className="text-sm text-purple-600 dark:text-purple-400">
                <strong>Features:</strong> Nature sounds, synthesizers, ethereal vocals
              </div>
            </div>

            {/* Acoustic */}
            <div className="rounded-3xl bg-white p-8 shadow-xl dark:bg-gray-800">
              <div className="mb-4 text-5xl">🎸</div>
              <h3 className="mb-3 text-2xl font-bold text-gray-900 dark:text-white">
                Acoustic & Folk
              </h3>
              <p className="mb-4 text-gray-600 dark:text-gray-300">
                Singer-songwriters and acoustic musicians tune their guitars and instruments to 432 Hz for a warmer, more organic sound.
              </p>
              <div className="text-sm text-purple-600 dark:text-purple-400">
                <strong>Appeal:</strong> Natural, unplugged, intimate feel
              </div>
            </div>

            {/* Electronic */}
            <div className="rounded-3xl bg-white p-8 shadow-xl dark:bg-gray-800">
              <div className="mb-4 text-5xl">🎹</div>
              <h3 className="mb-3 text-2xl font-bold text-gray-900 dark:text-white">
                Electronic & Downtempo
              </h3>
              <p className="mb-4 text-gray-600 dark:text-gray-300">
                Electronic producers experiment with 432 Hz tuning in genres like chillout, psybient, and ambient electronica.
              </p>
              <div className="text-sm text-purple-600 dark:text-purple-400">
                <strong>DAWs:</strong> Easy to set global tuning to 432 Hz
              </div>
            </div>

            {/* World Music */}
            <div className="rounded-3xl bg-white p-8 shadow-xl dark:bg-gray-800">
              <div className="mb-4 text-5xl">🌍</div>
              <h3 className="mb-3 text-2xl font-bold text-gray-900 dark:text-white">
                World & Ethnic
              </h3>
              <p className="mb-4 text-gray-600 dark:text-gray-300">
                Traditional instruments from various cultures combined with 432 Hz tuning create unique cross-cultural fusion music.
              </p>
              <div className="text-sm text-purple-600 dark:text-purple-400">
                <strong>Instruments:</strong> Singing bowls, sitars, didgeridoos
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Where to Find */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-16 text-white">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
            Where to Find 432 Hz Music
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Streaming Platforms */}
            <div className="rounded-3xl bg-white/10 p-8">
              <h3 className="mb-4 text-2xl font-bold">🎵 Streaming Platforms</h3>
              <div className="space-y-4 text-white/90">
                <div>
                  <h4 className="mb-2 font-semibold">YouTube</h4>
                  <p className="text-sm">
                    Search "432 Hz music" or "432 Hz [genre]". Thousands of tracks available, from pure tones to full albums.
                  </p>
                </div>
                <div>
                  <h4 className="mb-2 font-semibold">Spotify & Apple Music</h4>
                  <p className="text-sm">
                    Growing number of artists and playlists featuring 432 Hz music. Search "432 Hz meditation" or similar terms.
                  </p>
                </div>
                <div>
                  <h4 className="mb-2 font-semibold">SoundCloud</h4>
                  <p className="text-sm">
                    Independent artists often share 432 Hz compositions and experiments on SoundCloud.
                  </p>
                </div>
                <div>
                  <h4 className="mb-2 font-semibold">Bandcamp</h4>
                  <p className="text-sm">
                    Support independent 432 Hz musicians by purchasing directly from artists on Bandcamp.
                  </p>
                </div>
              </div>
            </div>

            {/* Create Your Own */}
            <div className="rounded-3xl bg-white/10 p-8">
              <h3 className="mb-4 text-2xl font-bold">🎼 Create Your Own</h3>
              <div className="space-y-4 text-white/90">
                <div>
                  <h4 className="mb-2 font-semibold">Pure Tones (This Site)</h4>
                  <p className="text-sm">
                    Use our <Link href="/download" className="underline">free generator</Link> to create pure 432 Hz sine waves, binaural beats, and tones for meditation.
                  </p>
                </div>
                <div>
                  <h4 className="mb-2 font-semibold">Tune Your Instruments</h4>
                  <p className="text-sm">
                    Use a chromatic tuner and set A4 to 432 Hz. Tune your guitar, piano, or other instruments to this reference.
                  </p>
                </div>
                <div>
                  <h4 className="mb-2 font-semibold">DAW Production</h4>
                  <p className="text-sm">
                    In Ableton, Logic, FL Studio, or other DAWs, adjust master tuning to -31.77 cents or set reference pitch to 432 Hz.
                  </p>
                </div>
                <div>
                  <h4 className="mb-2 font-semibold">Convert Existing Music</h4>
                  <p className="text-sm">
                    Use audio editing software (Audacity, etc.) to pitch-shift 440 Hz music down by -31.77 cents to convert to 432 Hz.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Notable Artists */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-8 text-center text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
            Artists & Composers Using 432 Hz
          </h2>

          <div className="mb-8 rounded-3xl bg-white p-8 shadow-xl dark:bg-gray-800">
            <p className="mb-6 text-gray-700 dark:text-gray-300">
              While mainstream music typically uses 440 Hz, a growing number of independent artists, meditation music composers, and alternative musicians create in 432 Hz:
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-xl bg-purple-50 p-6 dark:bg-purple-900/20">
                <h3 className="mb-3 text-lg font-bold text-gray-900 dark:text-white">
                  🎵 Meditation & Healing Music
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Many meditation music producers specifically compose in 432 Hz. Search YouTube and Spotify for "432 Hz meditation music" to discover these artists.
                </p>
              </div>

              <div className="rounded-xl bg-purple-50 p-6 dark:bg-purple-900/20">
                <h3 className="mb-3 text-lg font-bold text-gray-900 dark:text-white">
                  🎸 Independent Musicians
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Singer-songwriters and indie artists who embrace alternative tunings often experiment with 432 Hz in their recordings and live performances.
                </p>
              </div>

              <div className="rounded-xl bg-purple-50 p-6 dark:bg-purple-900/20">
                <h3 className="mb-3 text-lg font-bold text-gray-900 dark:text-white">
                  🎹 Electronic Producers
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Ambient, psybient, and downtempo producers in the electronic music scene create 432 Hz tracks for conscious music festivals and events.
                </p>
              </div>

              <div className="rounded-xl bg-purple-50 p-6 dark:bg-purple-900/20">
                <h3 className="mb-3 text-lg font-bold text-gray-900 dark:text-white">
                  🎻 Classical Ensembles
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Some period instrument ensembles and historically-informed performance groups use 432 Hz or similar baroque tunings.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-amber-50 p-6 dark:bg-amber-900/20">
            <p className="text-sm text-gray-700 dark:text-gray-300">
              <strong>Note:</strong> Most mainstream commercial music (pop, rock, hip-hop, etc.) is produced in standard 440 Hz tuning. 432 Hz remains primarily in alternative, meditation, and independent music circles.
            </p>
          </div>
        </div>
      </section>

      {/* How to Create */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
            Creating Music in 432 Hz
          </h2>

          <div className="space-y-6">
            <div className="rounded-3xl bg-white p-8 shadow-xl dark:bg-gray-800">
              <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                🎸 For Instrumentalists
              </h3>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <p>
                  <strong>1. Get a tuner:</strong> Use a chromatic tuner that allows you to change the reference frequency from 440 Hz to 432 Hz.
                </p>
                <p>
                  <strong>2. Tune your instrument:</strong> Set the reference to A=432 Hz and tune all strings or keys accordingly.
                </p>
                <p>
                  <strong>3. Record or perform:</strong> Once tuned, play and record as normal. Your music will be in 432 Hz.
                </p>
                <p className="text-sm italic">
                  Note: If playing with others, ensure all instruments are tuned to the same reference pitch.
                </p>
              </div>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-xl dark:bg-gray-800">
              <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                🎹 For Digital Producers
              </h3>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <p>
                  <strong>Ableton Live:</strong> Go to Options → Preferences → Record/Warp/Launch → set Master Tune to -31.766 cents
                </p>
                <p>
                  <strong>FL Studio:</strong> Options → General Settings → Advanced → Frequency → set to 432 Hz
                </p>
                <p>
                  <strong>Logic Pro:</strong> File → Project Settings → Tuning → set to 432 Hz
                </p>
                <p>
                  <strong>General approach:</strong> Most DAWs allow global tuning adjustments. Set reference pitch to 432 Hz or detune by -31.77 cents.
                </p>
              </div>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-xl dark:bg-gray-800">
              <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                🔄 Converting Existing Tracks
              </h3>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <p>
                  <strong>Using Audacity (free):</strong>
                </p>
                <ol className="ml-6 list-decimal space-y-2 text-sm">
                  <li>Import your 440 Hz audio file</li>
                  <li>Select the entire track (Ctrl+A / Cmd+A)</li>
                  <li>Effect → Pitch and Tempo → Change Pitch</li>
                  <li>Enter -0.318 semitones (or -31.77 cents)</li>
                  <li>Click OK and export your 432 Hz version</li>
                </ol>
                <p className="mt-4 text-sm italic">
                  Note: This slightly changes the tempo. For tempo-preservation, use time-stretching algorithms in professional software.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-8 text-center text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
            Learn More About 432 Hz
          </h2>

          <div className="grid gap-6 md:grid-cols-4">
            <Link
              href="/what-is-432-hz"
              className="group rounded-2xl bg-white p-6 shadow-lg transition-transform hover:scale-105 dark:bg-gray-800"
            >
              <h3 className="mb-2 font-bold text-gray-900 group-hover:text-purple-600 dark:text-white dark:group-hover:text-purple-400">
                What is 432 Hz?
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Learn the fundamentals
              </p>
            </Link>

            <Link
              href="/432-vs-440"
              className="group rounded-2xl bg-white p-6 shadow-lg transition-transform hover:scale-105 dark:bg-gray-800"
            >
              <h3 className="mb-2 font-bold text-gray-900 group-hover:text-purple-600 dark:text-white dark:group-hover:text-purple-400">
                432 vs 440 Hz
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Compare frequencies
              </p>
            </Link>

            <Link
              href="/benefits"
              className="group rounded-2xl bg-white p-6 shadow-lg transition-transform hover:scale-105 dark:bg-gray-800"
            >
              <h3 className="mb-2 font-bold text-gray-900 group-hover:text-purple-600 dark:text-white dark:group-hover:text-purple-400">
                Benefits
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Why use 432 Hz
              </p>
            </Link>

            <Link
              href="/healing"
              className="group rounded-2xl bg-white p-6 shadow-lg transition-transform hover:scale-105 dark:bg-gray-800"
            >
              <h3 className="mb-2 font-bold text-gray-900 group-hover:text-purple-600 dark:text-white dark:group-hover:text-purple-400">
                Sound Healing
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Healing practices
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-4xl rounded-3xl bg-gradient-to-r from-purple-600 to-pink-600 p-8 text-center text-white shadow-2xl md:p-12">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Create Your Own 432 Hz Tones
          </h2>
          <p className="mb-8 text-lg">
            Generate pure 432 Hz audio files for free. Perfect for meditation backing tracks or personal listening.
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
