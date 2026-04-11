'use client';

import Image from 'next/image';
import { useState } from 'react';

const navItems = [
  { label: 'Deals', href: '#deals' },
  { label: 'Food', href: '#food' },
  { label: 'Contact', href: '#contact' },
];

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 px-4 py-3 shadow-sm backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <a
          href="#deals"
          className="flex items-center"
          onClick={() => setIsMenuOpen(false)}
        >
          <Image
            src="/logo.png"
            alt="Center Market Logo"
            width={100}
            height={50}
            loading="eager"
          />
        </a>

        <button
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          aria-label="Toggle navigation menu"
          className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-300 text-slate-700 transition hover:border-primary hover:text-primary md:hidden"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span className="sr-only">Open main menu</span>
          <div className="flex flex-col gap-0.5">
            <span
              className={`block h-0.5 w-3 bg-current transition ${isMenuOpen ? 'translate-y-1 rotate-45' : ''}`}
            />
            <span
              className={`block h-0.5 w-3 bg-current transition ${isMenuOpen ? 'opacity-0' : ''}`}
            />
            <span
              className={`block h-0.5 w-3 bg-current transition ${isMenuOpen ? '-translate-y-1 -rotate-45' : ''}`}
            />
          </div>
        </button>

        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-slate-700 transition hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>

      {isMenuOpen ? (
        <div
          id="primary-navigation"
          className="mx-auto mt-3 flex max-w-7xl flex-col gap-2 rounded-3xl border border-slate-200 bg-white p-3 shadow-md md:hidden"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-2xl px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-primary/5 hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      ) : null}
    </nav>
  );
};

export default NavBar;
