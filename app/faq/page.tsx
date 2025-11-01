import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '432 Hz FAQ - Frequently Asked Questions',
  description: 'Common questions about 432 Hz frequency, audio generation, and sound healing. Learn how to use our 432Hz generator and understand the benefits.',
  alternates: {
    canonical: 'https://432-hz.org/faq',
  },
};

export default function FAQPage() {
  const faqs = [
    {
      question: 'What is 432 Hz frequency?',
      answer: '432 Hz is an alternative musical tuning where the note A above middle C vibrates at 432 cycles per second, compared to the standard 440 Hz. It\'s often called the "natural frequency" and is believed by many to be more harmonious with natural patterns and the human body. Our 432 Hz generator allows you to create pure tones at this frequency for meditation and relaxation.'
    },
    {
      question: 'How do I use the 432 Hz audio generator?',
      answer: 'Using our 432 Hz generator is simple: 1) Select your preferred sound preset (Pure 432Hz, Binaural Beats, etc.), 2) Choose the duration (5-60 minutes), 3) Click "Generate 432 Hz Audio", 4) Preview your audio with the play button, 5) Download in WAV or MP3 format. All 432 Hz audio generation happens instantly in your browser.'
    },
    {
      question: 'Is 432 Hz better than 440 Hz?',
      answer: 'There\'s no objective "better" frequency - it depends on your purpose. 440 Hz is the international standard for music, while 432 Hz is preferred by some for meditation and relaxation. Many users report that 432 Hz audio feels more calming and natural, though scientific evidence for specific benefits is limited. We recommend trying both frequencies and deciding what works best for you.'
    },
    {
      question: 'What are binaural beats at 432 Hz?',
      answer: 'Binaural beats are created when two slightly different frequencies are played in each ear (using headphones). Your brain perceives a third "beat" frequency. Our 432 Hz generator can create binaural beats by combining 432 Hz with Delta (deep sleep), Theta (meditation), Alpha (relaxation), or Beta (focus) frequencies. This combines the potential benefits of 432 Hz with brainwave entrainment.'
    },
    {
      question: 'Do I need to register or pay to use this 432 Hz generator?',
      answer: 'No registration or payment required! Our 432 Hz audio generator is completely free to use. Generate and download unlimited 432Hz audio files without creating an account. All audio generation happens in your browser, so we don\'t store any personal data or require login credentials.'
    },
    {
      question: 'What audio formats can I download?',
      answer: 'You can download your 432 Hz audio in two high-quality formats: WAV (24-bit, 48kHz) for lossless quality ideal for audiophiles and professional use, or MP3 (320kbps) for a smaller file size perfect for mobile devices. Both formats preserve the precise 432 Hz frequency for optimal sound healing results.'
    },
    {
      question: 'How long should I listen to 432 Hz audio?',
      answer: 'There\'s no fixed rule - listen for as long as feels comfortable. For meditation, 10-20 minutes is common. For sleep aid, you might listen for 30-60 minutes. Our 432 Hz generator supports durations from 5 to 60 minutes. Start with shorter sessions and gradually increase as you become accustomed to the frequency.'
    },
    {
      question: 'Can 432 Hz frequency cure medical conditions?',
      answer: 'No. 432 Hz audio is NOT a medical treatment and should not replace professional healthcare. While many people find 432 Hz helpful for relaxation and meditation, claims about curing diseases are not scientifically proven. Our 432Hz generator is for personal wellness exploration only. Always consult healthcare professionals for medical concerns.'
    },
    {
      question: 'Why do I need headphones for binaural beats?',
      answer: 'Binaural beats require each ear to hear a slightly different frequency to create the perceived "beat" in your brain. Using headphones ensures the left and right channels remain separate. For pure 432 Hz tones (not binaural beats), speakers work fine, though headphones still provide a more immersive experience with our 432 Hz audio.'
    },
    {
      question: 'Is 432 Hz audio safe?',
      answer: 'Yes, listening to 432 Hz frequency audio at reasonable volumes is generally safe. It\'s just sound at a specific pitch, similar to any music or tones. Start at lower volumes and take breaks if you feel uncomfortable. If you have hearing sensitivity, epilepsy, or other medical conditions, consult a doctor before using binaural beats or extended sound therapy.'
    },
    {
      question: 'Can I use 432 Hz audio for sleep?',
      answer: 'Yes! Many people use 432 Hz frequencies as a sleep aid. Our generator offers Delta Wave (2 Hz) binaural beats at 432 Hz specifically designed for deep sleep. Generate a 30-60 minute 432Hz audio file, set it to play as you fall asleep, and use a comfortable volume. The calming properties of 432 Hz may help promote relaxation and restful sleep.'
    },
    {
      question: 'What\'s the science behind 432 Hz?',
      answer: 'The scientific evidence for specific health benefits of 432 Hz over other frequencies is currently limited. Musical tuning is largely a cultural convention. However, sound frequencies do affect our physiology and psychology. The benefits many report from 432 Hz may involve the placebo effect, psychological factors, and the general benefits of meditation and relaxation practices.'
    },
    {
      question: 'How does your 432 Hz generator work?',
      answer: 'Our 432Hz generator uses the Web Audio API built into modern browsers. When you click generate, JavaScript code creates audio oscillators set to precisely 432 Hz (or binaural beat combinations). The audio is generated entirely in your browser - nothing is sent to our servers. You can then play, visualize, and export this 432 Hz audio locally.'
    },
    {
      question: 'Can I use 432 Hz audio commercially?',
      answer: 'Audio generated with our 432 Hz generator is created by you in your browser and is yours to use. However, 432 Hz is simply a frequency - you can use it however you like for personal or commercial purposes. If you create music or content with 432Hz, standard copyright laws apply to your creative work.'
    },
    {
      question: 'Does 432 Hz work for everyone?',
      answer: 'Individual experiences with 432 Hz frequency vary. Some people report significant benefits for relaxation and meditation, while others notice little difference from other frequencies. The effectiveness may depend on personal sensitivity, expectations, context of use, and individual psychology. We encourage trying our 432 Hz generator and assessing the benefits for yourself.'
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900">
      <div className="mx-auto max-w-4xl px-4 py-16">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
            432 Hz Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Common questions about 432 Hz frequency, our audio generator, and sound healing
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-800"
            >
              <h2 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">
                {faq.question}
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-3xl bg-gradient-to-r from-purple-600 to-pink-600 p-8 text-center text-white shadow-2xl">
          <h2 className="mb-4 text-2xl font-bold">Ready to Experience 432 Hz?</h2>
          <p className="mb-6 text-lg">
            Try our free 432Hz audio generator now and discover the potential benefits of this healing frequency.
          </p>
          <Link
            href="/"
            className="inline-block rounded-full bg-white px-8 py-3 text-lg font-semibold text-purple-600 shadow-lg hover:bg-gray-100"
          >
            Generate 432 Hz Audio
          </Link>
        </div>
      </div>
    </div>
  );
}
