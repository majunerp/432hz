import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">432-hz.org</h3>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
              Free 432 Hz sound platform for meditation, relaxation, and sound healing. Create and download high-quality 432 Hz sound frequency instantly.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="#audio" className="text-sm text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400">
                  Create Audio
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-sm text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400">
                  About 432 Hz
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Disclaimer</h3>
            <p className="mt-4 text-xs text-gray-500 dark:text-gray-500">
              This website provides 432 Hz audio for personal use. Claims about therapeutic benefits are not scientifically proven. Not a substitute for medical treatment.
            </p>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8 dark:border-gray-800">
          <p className="text-center text-sm text-gray-600 dark:text-gray-400">
            © {currentYear} 432-hz.org. All audio generated client-side. No data stored.
          </p>
        </div>
      </div>
    </footer>
  );
}
