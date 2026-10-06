import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Menu, Phone, X } from 'lucide-react';

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.114 20.452H3.558V9h3.556v11.452z" />
  </svg>
);

const links = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/#about' },
  { label: 'What We Do', to: '/#what-we-do' },
  { label: 'Services', to: '/what-we-do#services' },
  /*{ label: 'Reviews', to: '/what-we-do#reviews' },*/
  { label: 'FAQs', to: '/what-we-do#faqs' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/#contact' },
];

function SocialLinks() {
  return (
    <div className="flex items-center justify-center gap-4">
      <a href="https://www.facebook.com/01StudioServices" target="_blank" rel="noreferrer" className="text-white hover:text-white/80 transition-colors" title="Facebook">
        <FacebookIcon className="w-4 h-4" />
      </a>
      <a href="mailto:01studio.services@gmail.com" className="text-white hover:text-white/80 transition-colors" title="Email">
        <Mail className="w-4 h-4" />
      </a>
      <a href="tel:+639279750244" className="text-white hover:text-white/80 transition-colors" title="Phone">
        <Phone className="w-4 h-4" />
      </a>
      <a href="https://www.linkedin.com/company/01-studio-web-software-services/" target="_blank" rel="noreferrer" className="text-white hover:text-white/80 transition-colors" title="LinkedIn">
        <LinkedinIcon className="w-4 h-4" />
      </a>
    </div>
  );
}

export default function SiteFooter() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <footer className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40">
      {/* DESKTOP FOOTER */}
      <nav className="hidden md:block rounded-full shadow-lg border border-white/10" style={{ backgroundColor: '#2e68fe' }}>
        <div className="flex items-center justify-center gap-5 lg:gap-7 px-5 lg:px-8 py-3 whitespace-nowrap">
          <SocialLinks />
          <div className="w-px h-4 bg-white/30" />
          <div className="flex items-center gap-4 lg:gap-5 text-xs font-medium text-white">
            {links.map((link) => (
              <Link key={link.label} to={link.to} className="hover:text-white/80 transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
          <div className="w-px h-4 bg-white/30" />
          <div className="text-[11px] text-white">&copy; {new Date().getFullYear()} 01 Studio. All rights reserved.</div>
        </div>
      </nav>

      {/* MOBILE CENTERED BURGER */}
      <div className="md:hidden relative flex flex-col items-center">
        {menuOpen && (
          <div className="absolute bottom-full mb-3 w-[min(90vw,22rem)] rounded-3xl shadow-2xl border border-white/10 p-5 text-center" style={{ backgroundColor: '#2e68fe' }}>
            <div className="pb-4 border-b border-white/20">
              <SocialLinks />
            </div>
            <div className="grid grid-cols-2 gap-x-8 gap-y-4 py-5 text-sm font-medium text-white">
              {links.map((link) => (
                <Link key={link.label} to={link.to} onClick={() => setMenuOpen(false)} className="hover:text-white/75 transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="pt-4 border-t border-white/20 text-[10px] text-white/75">
              &copy; {new Date().getFullYear()} 01 Studio. All rights reserved.
            </div>
          </div>
        )}

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="w-14 h-14 rounded-full shadow-lg border border-white/10 flex items-center justify-center text-white transition-transform hover:scale-105"
          style={{ backgroundColor: '#2e68fe' }}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>
    </footer>
  );
}
