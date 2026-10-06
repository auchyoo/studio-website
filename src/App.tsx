import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import SiteNav from './components/SiteNav';
import SiteFooter from './components/SiteFooter';
import Home from './pages/Home';
import WhatWeDo from './pages/WhatWeDo';
import Blog from './pages/Blog';

function HashScroll() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.substring(1);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          document.getElementById(id)?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        });
      });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [pathname, hash]);

  return null;
}

function RouteTransition({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation();

  return (
    <div key={pathname} className="page-transition">
      {children}
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <HashScroll />
      <div className="min-h-screen font-sans antialiased text-white bg-black selection:bg-[#2e68fe] selection:text-white">
        <SiteNav />
        <RouteTransition>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/what-we-do" element={<WhatWeDo />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </RouteTransition>
        <SiteFooter />
      </div>
    </BrowserRouter>
  );
}
