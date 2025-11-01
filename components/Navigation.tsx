'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-lg dark:border-gray-800 dark:bg-gray-900/80">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="flex items-center gap-2 text-xl font-bold text-gray-900 dark:text-white">
            <span className="text-2xl">🎵</span>
            <span>432-hz.org</span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-200"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-8">
          <Link href="#audio" className="text-sm font-semibold leading-6 text-gray-900 hover:text-purple-600 dark:text-gray-100 dark:hover:text-purple-400">
            Create Audio
          </Link>
          <Link href="#about" className="text-sm font-semibold leading-6 text-gray-900 hover:text-purple-600 dark:text-gray-100 dark:hover:text-purple-400">
            About
          </Link>
          <Link href="#faq" className="text-sm font-semibold leading-6 text-gray-900 hover:text-purple-600 dark:text-gray-100 dark:hover:text-purple-400">
            FAQ
          </Link>
        </div>
      </nav>
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="space-y-1 px-4 pb-3 pt-2">
            <Link
              href="#audio"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50 dark:text-gray-100 dark:hover:bg-gray-800"
              onClick={() => setMobileMenuOpen(false)}
            >
              Create Audio
            </Link>
            <Link
              href="#about"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50 dark:text-gray-100 dark:hover:bg-gray-800"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="#faq"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50 dark:text-gray-100 dark:hover:bg-gray-800"
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQ
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
