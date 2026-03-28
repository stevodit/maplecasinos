'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-forest-900 shadow-lg border-b border-green-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-full bg-gold-500 flex items-center justify-center shadow-md group-hover:bg-gold-400 transition-colors">
              <span className="text-forest-900 font-black text-sm">🍁</span>
            </div>
            <span className="font-display text-xl font-bold text-white">
              Maple<span className="text-gold-400">Casinos</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            <Link href="/" className="text-gray-300 hover:text-white hover:bg-green-800 px-4 py-2 rounded-lg text-sm font-medium transition-all">
              Home
            </Link>
            <Link href="/casinos" className="text-gray-300 hover:text-white hover:bg-green-800 px-4 py-2 rounded-lg text-sm font-medium transition-all">
              Casinos
            </Link>
            <Link href="/bonuses" className="text-gray-300 hover:text-white hover:bg-green-800 px-4 py-2 rounded-lg text-sm font-medium transition-all">
              Bonuses
            </Link>
            <Link href="/casinos?province=Ontario" className="text-gray-300 hover:text-white hover:bg-green-800 px-4 py-2 rounded-lg text-sm font-medium transition-all">
              Ontario
            </Link>
            <Link href="/casinos?province=Alberta" className="text-gray-300 hover:text-white hover:bg-green-800 px-4 py-2 rounded-lg text-sm font-medium transition-all">
              Alberta
            </Link>
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="/casinos" className="btn-primary text-sm py-2 px-4">
              🎰 Find a Casino
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-300 hover:text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden py-4 border-t border-green-800">
            <nav className="flex flex-col gap-1">
              <Link href="/" onClick={() => setMenuOpen(false)} className="text-gray-300 hover:text-white hover:bg-green-800 px-4 py-3 rounded-lg text-sm font-medium transition-all">
                Home
              </Link>
              <Link href="/casinos" onClick={() => setMenuOpen(false)} className="text-gray-300 hover:text-white hover:bg-green-800 px-4 py-3 rounded-lg text-sm font-medium transition-all">
                🎰 Casinos
              </Link>
              <Link href="/bonuses" onClick={() => setMenuOpen(false)} className="text-gray-300 hover:text-white hover:bg-green-800 px-4 py-3 rounded-lg text-sm font-medium transition-all">
                🎁 Bonuses
              </Link>
              <Link href="/casinos?province=Ontario" onClick={() => setMenuOpen(false)} className="text-gray-300 hover:text-white hover:bg-green-800 px-4 py-3 rounded-lg text-sm font-medium transition-all">
                📍 Ontario Casinos
              </Link>
              <Link href="/casinos?province=Alberta" onClick={() => setMenuOpen(false)} className="text-gray-300 hover:text-white hover:bg-green-800 px-4 py-3 rounded-lg text-sm font-medium transition-all">
                📍 Alberta Casinos
              </Link>
              <Link href="/casinos" onClick={() => setMenuOpen(false)} className="btn-primary mt-2 text-sm py-3">
                Find a Casino
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
