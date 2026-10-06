import React from 'react';
import { Link } from 'react-router-dom';

export default function SiteNav() {
  return (
    <div className="sticky top-4 z-40 px-4">
      <nav className="max-w-xl mx-auto rounded-full backdrop-blur-md bg-white shadow-lg">
        <div className="h-16 flex items-center justify-center px-6">
          <Link
            to="/"
            className="flex items-center gap-2"
            aria-label="01 Studio - Home"
          >
            <span className="font-display text-xl text-[#2e68fe]">
              01
            </span>

            <span className="font-display text-xl text-black">
              STUDIO
            </span>

            <span className="text-[11px] tracking-[0.2em] uppercase text-black ml-2 hidden sm:inline">
              Web & Software Services
            </span>
          </Link>
        </div>
      </nav>
    </div>
  );
}