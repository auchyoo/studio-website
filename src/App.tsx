import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  Copy,
  Check,
  ExternalLink,
  Mail,
  Filter,
  X,
  ChevronRight,
  Monitor,
  Send
} from 'lucide-react';

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
  </svg>
);

const GithubIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.833.092-.647.35-1.088.636-1.338-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.747-1.026 2.747-1.026.546 1.378.203 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
);

export default function App() {
  // Active Section State for Dynamic Header
  const [activeSection, setActiveSection] = useState('hero');

  // Active Service Tab State
  const [activeServiceTab, setActiveServiceTab] = useState('web');
  const [selectedShowcase, setSelectedShowcase] = useState(null);

  // UI Notification States
  const [toastMessage, setToastMessage] = useState(null);
  const [emailCopied, setEmailCopied] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Form State with Custom Service support
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    service: 'Custom Web System',
    customService: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Smooth Scroll Helper Function with Header Offset
  const scrollToSection = (e, id) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80; // Height of sticky navbar
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // Scroll Detection for Dynamic Header Color
  useEffect(() => {
    const sectionIds = ['hero', 'about', 'services', 'developers', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120; // Header offset
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Header Theme Configurations matching exact section backgrounds
  const headerThemes = {
    hero: {
      navBg: 'bg-white/90',
      logoBg: 'bg-zinc-100 group-hover:bg-blue-600 group-hover:text-white text-zinc-900',
      logoTitle: 'text-zinc-900',
      logoSub: 'text-zinc-500',
      links: 'text-zinc-600 hover:text-black',
      btnCopy: 'bg-zinc-100 text-zinc-900 hover:bg-zinc-200',
      btnQuote: 'bg-blue-600 text-white hover:bg-blue-700',
      mobileToggle: 'bg-zinc-100 text-zinc-900'
    },
    about: {
      navBg: 'bg-zinc-100/90',
      logoBg: 'bg-white group-hover:bg-blue-600 group-hover:text-white text-zinc-900',
      logoTitle: 'text-zinc-900',
      logoSub: 'text-zinc-600',
      links: 'text-zinc-600 hover:text-black',
      btnCopy: 'bg-white text-zinc-900 hover:bg-zinc-200',
      btnQuote: 'bg-blue-600 text-white hover:bg-blue-700',
      mobileToggle: 'bg-white text-zinc-900'
    },
    services: {
      navBg: 'bg-zinc-300/90',
      logoBg: 'bg-white group-hover:bg-blue-600 group-hover:text-white text-zinc-900',
      logoTitle: 'text-zinc-900',
      logoSub: 'text-zinc-700',
      links: 'text-zinc-700 hover:text-black',
      btnCopy: 'bg-white text-zinc-900 hover:bg-zinc-100',
      btnQuote: 'bg-blue-600 text-white hover:bg-blue-700',
      mobileToggle: 'bg-white text-zinc-900'
    },
    developers: {
      navBg: 'bg-zinc-800/90',
      logoBg: 'bg-zinc-900 group-hover:bg-blue-600 text-white',
      logoTitle: 'text-white',
      logoSub: 'text-zinc-300',
      links: 'text-zinc-300 hover:text-white',
      btnCopy: 'bg-zinc-900 text-white hover:bg-zinc-700',
      btnQuote: 'bg-blue-600 text-white hover:bg-blue-500',
      mobileToggle: 'bg-zinc-900 text-white'
    },
    contact: {
      navBg: 'bg-black/90',
      logoBg: 'bg-zinc-900 group-hover:bg-blue-600 text-white',
      logoTitle: 'text-white',
      logoSub: 'text-zinc-500',
      links: 'text-zinc-400 hover:text-white',
      btnCopy: 'bg-zinc-900 text-white hover:bg-zinc-800',
      btnQuote: 'bg-blue-600 text-white hover:bg-blue-500',
      mobileToggle: 'bg-zinc-900 text-white'
    }
  };

  const hTheme = headerThemes[activeSection] || headerThemes.hero;

  // Toast Trigger
  const triggerToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const copyEmailToClipboard = () => {
    const email = '01studio.services@gmail.com';
    if (navigator.clipboard) {
      navigator.clipboard.writeText(email);
    } else {
      const textarea = document.createElement('textarea');
      textarea.value = email;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
    }
    setEmailCopied(true);
    triggerToast('Email copied to clipboard');
    setTimeout(() => setEmailCopied(false), 2500);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formState.email || !formState.name) return;
    setFormSubmitted(true);
    triggerToast('Inquiry sent successfully');
    setTimeout(() => {
      setFormSubmitted(false);
      setFormState({
        name: '',
        email: '',
        service: 'Custom Web System',
        customService: '',
        message: ''
      });
    }, 4000);
  };

  // Services Definitions with Embedded Showcase Projects
  const services = [
    {
      id: 'web',
      number: '01',
      title: 'Custom Web System',
      subtitle: 'Bespoke, high-performance web applications tailored specifically to your brand requirements and scaling goals.',
      showcase: [
        {
          id: 1,
          title: 'Aethel Architecture Studio',
          description: 'Ultra-lightweight architectural portfolio & web system with interactive 3D model viewports.',
          tags: ['Next.js', 'Tailwind CSS', 'Three.js'],
          client: 'Aethel Architectural Firm',
          challenge: 'Previous legacy website took 6.2s to load high-resolution blueprints, causing high mobile bounce rates.',
          solution: 'Re-engineered the platform with server-side rendering, WebP visual pipelines, and lazy asset loading.',
          result: '100/100 performance score • +140% client inquiries'
        },
        {
          id: 2,
          title: 'Nexus Fintech Dashboard',
          description: 'Minimalist enterprise trading portal with real-time WebSocket feeds and sub-20ms UI response times.',
          tags: ['React', 'TypeScript', 'Tailwind CSS', 'WebSockets'],
          client: 'Nexus Capital Partners',
          challenge: 'Trader interface suffered from UI lag during peak market volatility, delaying order execution.',
          solution: 'Removed heavy UI frameworks, built canvas-driven charts, and streamlined state dispatching.',
          result: 'Sub-20ms UI response • Zero frame drops under high market load'
        }
      ]
    },
    {
      id: 'management',
      number: '02',
      title: 'System Management',
      subtitle: 'Centralized admin portals, data pipelines, and workflow automation hubs designed to streamline business operations.',
      showcase: [
        {
          id: 3,
          title: 'Pulse Data & Admin Hub',
          description: 'Real-time multi-proxy monitoring and dataset management system processing 1M+ daily checks.',
          tags: ['Node.js', 'Python', 'Redis', 'Docker'],
          client: 'AI Dataset Intelligence Agency',
          challenge: 'Inconsistent data feeds corrupted internal training pipelines, leading to expensive manual re-runs.',
          solution: 'Built an automated middleware layer featuring real-time IP verification and fallback routing.',
          result: 'Zero data corruption • Operating costs reduced by 42%'
        },
        {
          id: 4,
          title: 'Kairo Workflow & Design Platform',
          description: 'Enterprise system management portal unifying design tokens and frontend developer workflows.',
          tags: ['React', 'TypeScript', 'Tailwind CSS', 'Storybook'],
          client: 'Kairo SaaS Inc.',
          challenge: 'Inconsistent design system across 4 sub-products caused long dev cycles and operational friction.',
          solution: 'Designed a unified management portal and component repository built on Binary Clarity principles.',
          result: 'Sprint times cut in half • 100% component accessibility compliance'
        }
      ]
    },
    {
      id: 'pos',
      number: '03',
      title: 'POS',
      subtitle: 'Modern Point of Sale systems built for retail, food & beverage, and multi-location commercial inventories.',
      showcase: [
        {
          id: 5,
          title: 'Apex Omni-Retail POS',
          description: 'Cloud-connected, offline-first Point of Sale interface with real-time barcode scanning and receipt engine.',
          tags: ['React', 'Electron', 'Tailwind CSS', 'SQLite'],
          client: 'Apex Commercial Outlets',
          challenge: 'Retail cashiers experienced checkout system freezes when connection dropped during peak sales hours.',
          solution: 'Developed an offline-first POS architecture with background sync and zero-latency barcode processing.',
          result: '100% checkout uptime • Transaction speed increased by 3.5x'
        },
        {
          id: 6,
          title: 'OmniMenu POS & Inventory',
          description: 'Integrated food service POS system managing tableside ordering, kitchen display, and stock tracking.',
          tags: ['React', 'Node.js', 'Tailwind CSS', 'PostgreSQL'],
          client: 'Omni Hospitality Group',
          challenge: 'Orders placed on floor tablets frequently desynced from kitchen displays during dinner rush.',
          solution: 'Engineered a low-latency local network mesh sync engine for immediate order dispatch.',
          result: 'Table turnaround time improved by 22% • Zero lost orders'
        }
      ]
    }
  ];

  // Core Developers Data (Lowkey Styling)
  const developers = [
    {
      id: '01',
      name: 'Developer 01',
      role: 'Full-Stack Systems',
      stack: 'React • Next.js • Architecture',
      portfolioUrl: 'https://github.com',
      githubUrl: 'https://github.com'
    },
    {
      id: '02',
      name: 'Developer 02',
      role: 'Backend & Infrastructure',
      stack: 'Node.js • Go • Databases • POS',
      portfolioUrl: 'https://github.com',
      githubUrl: 'https://github.com'
    },
    {
      id: '03',
      name: 'Developer 03',
      role: 'UI/UX & Frontend',
      stack: 'Design Systems • Tailwind CSS',
      portfolioUrl: 'https://github.com',
      githubUrl: 'https://github.com'
    }
  ];

  return (
    <div className="min-h-screen font-sans antialiased text-zinc-900 bg-white selection:bg-blue-600 selection:text-white scroll-smooth">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center space-x-3 px-6 py-3.5 rounded-full shadow-2xl text-sm backdrop-blur-md animate-fade-in bg-zinc-900 text-white">
          <Check className="w-4 h-4 text-blue-400 flex-shrink-0" />
          <span className="font-medium">{toastMessage}</span>
        </div>
      )}

      {/* DYNAMIC STICKY NAVIGATION BAR */}
      <nav className={`sticky top-0 z-40 backdrop-blur-md transition-all duration-300 ${hTheme.navBg}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex justify-between items-center">
          
          {/* Logo Brand Monogram */}
          <a
            href="#hero"
            onClick={(e) => scrollToSection(e, 'hero')}
            className="flex items-center space-x-3 group"
          >
            <div>
              <img src="/logo.png" alt="01 Studio logo" className="w-10 h-10 rounded-full object-cover" />
            </div>
            <div>
              <div className={`font-bold tracking-wider text-base uppercase leading-none transition-colors duration-300 ${hTheme.logoTitle}`}>
                01 Studio
              </div>
              <div className={`text-[11px] tracking-normal mt-1 font-normal transition-colors duration-300 ${hTheme.logoSub}`}>
                Web & Software Services
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className={`hidden md:flex items-center space-x-8 text-sm font-medium transition-colors duration-300 ${hTheme.links}`}>
            <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="transition-colors">Who We Are</a>
            <a href="#services" onClick={(e) => scrollToSection(e, 'services')} className="transition-colors">Services & Showcase</a>
            <a href="#developers" onClick={(e) => scrollToSection(e, 'developers')} className="transition-colors">Team</a>
            <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="transition-colors">Contact</a>
          </div>

          {/* Action Controls */}
          <div className="hidden md:flex items-center space-x-3">
            <button
              onClick={copyEmailToClipboard}
              className={`px-4 py-2 rounded-full text-xs flex items-center space-x-2 transition-all duration-300 font-medium ${hTheme.btnCopy}`}
            >
              {emailCopied ? <Check className="w-3.5 h-3.5 text-blue-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{emailCopied ? 'Copied' : 'Copy Email'}</span>
            </button>

            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, 'contact')}
              className={`px-5 py-2 rounded-full font-semibold text-xs transition-all duration-300 shadow-sm ${hTheme.btnQuote}`}
            >
              Get Quote
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2.5 rounded-full transition-all duration-300 ${hTheme.mobileToggle}`}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Filter className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className={`md:hidden px-4 py-6 space-y-4 text-sm font-medium transition-colors duration-300 ${hTheme.navBg}`}>
            <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="block py-1">Who We Are</a>
            <a href="#services" onClick={(e) => scrollToSection(e, 'services')} className="block py-1">Services & Showcase</a>
            <a href="#developers" onClick={(e) => scrollToSection(e, 'developers')} className="block py-1">Team</a>
            <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="block py-1">Contact Us</a>
            <div className="pt-4 border-t border-zinc-200/20 flex flex-col space-y-2">
              <button
                onClick={copyEmailToClipboard}
                className={`w-full py-3 rounded-full text-xs flex items-center justify-center space-x-2 ${hTheme.btnCopy}`}
              >
                <Copy className="w-3.5 h-3.5" />
                <span>01studio.services@gmail.com</span>
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* HERO SECTION (PURE WHITE - #FFFFFF) */}
      <section id="hero" className="scroll-mt-20 relative py-28 lg:py-40 overflow-hidden bg-white text-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-8">
            <h1 className="text-5xl sm:text-7xl lg:text-8xl tracking-tight leading-none text-zinc-900 font-normal">
              From Zero <br />To <span className="font-extrabold text-blue-600">One</span>.
            </h1>

            <p className="text-lg sm:text-xl text-zinc-600 leading-relaxed max-w-2xl font-normal">
              We design, build, and deploy high-performance web systems, system management tools, and tech solutions. Contact us to get started.
            </p>

            <div className="pt-4 flex flex-wrap gap-4 items-center">
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, 'contact')}
                className="px-8 py-4 rounded-full font-semibold text-sm flex items-center space-x-2 shadow-sm transition-all bg-blue-600 text-white hover:bg-blue-700"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#about"
                onClick={(e) => scrollToSection(e, 'about')}
                className="px-8 py-4 rounded-full text-sm font-medium flex items-center space-x-2 bg-zinc-100 text-zinc-900 hover:bg-zinc-200 transition-all"
              >
                <Monitor className="w-4 h-4 text-blue-600" />
                <span>Learn Who We Are</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE ARE / ABOUT US SECTION (OFF-WHITE - ZINC-100) */}
      <section id="about" className="scroll-mt-20 py-24 bg-zinc-100 text-zinc-900 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="space-y-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-blue-600 block">Who We Are</span>
            <p className="text-xl sm:text-2xl font-normal leading-relaxed text-zinc-800">
              01 Studio is a modern web and software engineering practice dedicated to binary clarity. We eliminate digital bloat, unneeded dependencies, and complex overhead to deliver fast, reliable, and purpose-driven software solutions.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES & EMBEDDED SHOWCASE SECTION (EQUALIZED LIGHT GRAY - ZINC-300) */}
      <section id="services" className="scroll-mt-20 py-24 bg-zinc-300 text-zinc-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-blue-600">01. Services & Showcase</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold mt-2 text-zinc-900">Engineered Solutions</h2>
            </div>
            <p className="text-sm max-w-md mt-4 md:mt-0 text-zinc-600">
              Select a service below to explore our capabilities and featured deployment showcase.
            </p>
          </div>

          {/* Service Tabs */}
          <div className="flex space-x-3 overflow-x-auto pb-4 mb-10 scrollbar-none">
            {services.map((s) => (
              <button
                key={s.id}
                onClick={() => setActiveServiceTab(s.id)}
                className={`px-6 py-3.5 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                  activeServiceTab === s.id
                    ? 'bg-blue-600 text-white font-bold shadow-md'
                    : 'bg-white text-zinc-700 hover:bg-zinc-50'
                }`}
              >
                <span className="mr-2 font-bold">{s.number}.</span>
                <span>{s.title}</span>
              </button>
            ))}
          </div>

          {/* Service Content & Showcase Display */}
          {services.map((s) => {
            if (s.id !== activeServiceTab) return null;
            return (
              <div key={s.id} className="space-y-8">
                
                {/* Service Category Overview Box (Borderless) */}
                <div className="rounded-3xl p-8 bg-white shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-widest text-blue-600">{s.number} Service</span>
                    <h3 className="text-2xl font-bold text-zinc-900 mt-1">{s.title}</h3>
                    <p className="text-sm text-zinc-600 mt-2 max-w-2xl leading-relaxed">{s.subtitle}</p>
                  </div>
                  <a
                    href="#contact"
                    onClick={(e) => {
                      setFormState(prev => ({ ...prev, service: s.title }));
                      scrollToSection(e, 'contact');
                    }}
                    className="px-6 py-3.5 rounded-full font-semibold text-xs bg-zinc-900 text-white hover:bg-blue-600 transition-all self-start md:self-auto shrink-0 shadow-sm"
                  >
                    Inquire About {s.title}
                  </a>
                </div>

                {/* Service Showcase Cards (Borderless) */}
                <div>
                  <div className="mb-4">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-600">
                      Showcase Deployments ({s.title})
                    </h4>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {s.showcase.map((item) => (
                      <div
                        key={item.id}
                        className="bg-white rounded-3xl p-8 transition-all group flex flex-col justify-between hover:shadow-md shadow-sm"
                      >
                        <div>
                          <div className="flex justify-between items-start mb-4">
                            <span className="text-xs font-medium px-3 py-1 rounded-full bg-blue-50 text-blue-700">
                              {s.title}
                            </span>
                          </div>

                          <h4 className="text-xl font-bold group-hover:text-blue-600 transition-colors text-zinc-900">
                            {item.title}
                          </h4>

                          <p className="text-sm mt-2 leading-relaxed text-zinc-600">
                            {item.description}
                          </p>

                          <div className="flex flex-wrap gap-2 mt-4 text-xs">
                            {item.tags.map((tag, idx) => (
                              <span key={idx} className="px-3 py-1 rounded-full bg-zinc-100 text-zinc-700 font-medium">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="mt-8 pt-4 flex items-center justify-between">
                          <span className="text-xs text-zinc-500 font-medium">{item.client}</span>
                          <button
                            onClick={() => setSelectedShowcase(item)}
                            className="text-xs font-bold hover:text-blue-600 transition-colors flex items-center space-x-1.5 text-zinc-900 px-4 py-2 rounded-full bg-zinc-100 hover:bg-blue-50"
                          >
                            <span>View Case Study</span>
                            <ArrowRight className="w-3.5 h-3.5 text-blue-600" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </section>

      {/* SHOWCASE CASE STUDY MODAL */}
      {selectedShowcase && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-zinc-900 text-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
            
            <div className="flex justify-between items-start pb-4">
              <div>
                <span className="text-xs font-semibold text-blue-400">Case Study</span>
                <h3 className="text-2xl font-bold mt-1 text-white">{selectedShowcase.title}</h3>
                <span className="text-xs text-zinc-400">Client: {selectedShowcase.client}</span>
              </div>
              <button
                onClick={() => setSelectedShowcase(null)}
                className="p-2 rounded-full bg-zinc-800 text-zinc-300 hover:text-white hover:bg-zinc-700 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-sm">
              <div>
                <h4 className="text-xs font-bold uppercase mb-1.5 text-zinc-300">The Challenge</h4>
                <p className="p-4 rounded-2xl bg-zinc-950 text-sm leading-relaxed text-zinc-400">
                  {selectedShowcase.challenge}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase mb-1.5 text-zinc-300">The Solution</h4>
                <p className="p-4 rounded-2xl bg-zinc-950 text-sm leading-relaxed text-zinc-400">
                  {selectedShowcase.solution}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-blue-950/40 space-y-1 text-blue-100">
                <div className="text-xs font-bold uppercase text-blue-400">Result Outcome</div>
                <p className="text-xs leading-relaxed">
                  {selectedShowcase.result}
                </p>
              </div>
            </div>

            <div className="pt-4 flex justify-end">
              <button
                onClick={() => setSelectedShowcase(null)}
                className="px-6 py-2.5 rounded-full text-xs font-bold uppercase bg-blue-600 text-white hover:bg-blue-500 transition-colors"
              >
                Close Case Study
              </button>
            </div>
          </div>
        </div>
      )}

      {/* DEVELOPERS / TEAM SECTION (EQUALIZED SLATE CHARCOAL - ZINC-800) */}
      <section id="developers" className="scroll-mt-20 py-20 bg-zinc-800 text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 pb-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-blue-400">02. Engineering Team</span>
              <h2 className="text-2xl sm:text-3xl font-bold mt-1 text-white">Developers</h2>
            </div>
            <p className="text-xs text-zinc-300 mt-2 sm:mt-0 max-w-xs">
              Direct links to individual engineer portfolios and repositories.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {developers.map((dev) => (
              <div
                key={dev.id}
                className="bg-zinc-900/90 rounded-2xl p-6 flex flex-col justify-between hover:bg-zinc-950 transition-all shadow-md"
              >
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-mono text-blue-400">{dev.id}</span>
                    <span className="text-[11px] text-zinc-300 font-medium px-3 py-1 rounded-full bg-zinc-800">{dev.role}</span>
                  </div>

                  <div className="pt-2">
                    <h3 className="text-base font-bold text-white">{dev.name}</h3>
                    <p className="text-xs text-zinc-400 mt-1 font-mono">{dev.stack}</p>
                  </div>
                </div>

                <div className="pt-6 mt-6 flex items-center justify-between text-xs">
                  <a
                    href={dev.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center space-x-1.5 text-zinc-400 hover:text-white transition-colors px-3 py-1.5 rounded-full hover:bg-zinc-800"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>

                  <a
                    href={dev.portfolioUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-400 hover:text-blue-300 flex items-center space-x-1 font-medium transition-colors px-4 py-1.5 rounded-full bg-zinc-800 hover:bg-zinc-700"
                  >
                    <span>Portfolio</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CONTACT SECTION (PITCH BLACK - #000000) */}
      <section id="contact" className="scroll-mt-20 py-24 relative bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-blue-400">03. Contact Us</span>
                <h2 className="text-3xl sm:text-4xl font-extrabold mt-2 text-white">Ready to Build?</h2>
                <p className="text-sm mt-3 leading-relaxed text-zinc-400">
                  Let’s turn your project requirements into an efficient digital product.
                </p>
              </div>

              <div className="space-y-4 text-xs">
                <div className="p-4 rounded-2xl bg-[#0A0A0C] flex items-center justify-between shadow-md">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-blue-400">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-semibold block text-zinc-500">Official Email</span>
                      <span className="font-bold select-all text-sm text-white">01studio.services@gmail.com</span>
                    </div>
                  </div>
                  <button
                    onClick={copyEmailToClipboard}
                    className="p-2.5 rounded-full bg-zinc-900 text-zinc-300 hover:text-white hover:bg-blue-600 transition-colors"
                    title="Copy Email"
                  >
                    {emailCopied ? <Check className="w-4 h-4 text-white" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                <a
                  href="https://www.facebook.com/01StudioServices"
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 rounded-2xl bg-[#0A0A0C] flex items-center justify-between group transition-all hover:bg-zinc-900 shadow-md"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-blue-400">
                      <FacebookIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-semibold block text-zinc-500">Facebook Page</span>
                      <span className="font-bold text-sm text-white group-hover:underline">/01StudioServices</span>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-zinc-400" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-7 rounded-3xl p-6 sm:p-8 bg-[#0D0D0F] shadow-xl">
              {formSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <h3 className="text-xl font-bold text-white">Inquiry Received!</h3>
                  <p className="text-sm max-w-md mx-auto text-zinc-400">
                    Thank you for contacting 01 Studio. We will review your specifications and reply via email.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4 text-xs">
                  <div>
                    <label className="block mb-1.5 font-bold text-zinc-400">YOUR NAME *</label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="e.g. Alex Morgan"
                      className="w-full bg-zinc-950 rounded-xl p-3.5 text-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block mb-1.5 font-bold text-zinc-400">YOUR EMAIL *</label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="name@company.com"
                      className="w-full bg-zinc-950 rounded-xl p-3.5 text-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block mb-1.5 font-bold text-zinc-400">SERVICE OF INTEREST</label>
                    <select
                      value={formState.service}
                      onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                      className="w-full bg-zinc-950 rounded-xl p-3.5 text-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                    >
                      <option>Custom Web System</option>
                      <option>System Management</option>
                      <option>POS</option>
                      <option>Others</option>
                    </select>
                  </div>

                  {/* Conditional input when "Others" is selected */}
                  {formState.service === 'Others' && (
                    <div className="animate-fade-in">
                      <label className="block mb-1.5 font-bold text-zinc-400">WHAT DO YOU HAVE IN MIND? *</label>
                      <input
                        type="text"
                        required
                        value={formState.customService}
                        onChange={(e) => setFormState({ ...formState, customService: e.target.value })}
                        placeholder="e.g. Mobile App, Custom API Integration, Cloud Migration..."
                        className="w-full bg-zinc-950 rounded-xl p-3.5 text-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                      />
                    </div>
                  )}

                  <div>
                    <label className="block mb-1.5 font-bold text-zinc-400">PROJECT REQUIREMENTS</label>
                    <textarea
                      rows="4"
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Describe your project goals, scope, or timeline..."
                      className="w-full bg-zinc-950 rounded-xl p-3.5 text-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-full font-bold uppercase tracking-wider flex items-center justify-center space-x-2 bg-blue-600 text-white hover:bg-blue-700 transition-all shadow-md"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Project Inquiry</span>
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black py-12 text-xs text-zinc-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-zinc-900 flex items-center justify-center font-bold text-sm text-white">
                01
              </div>
              <div>
                <span className="font-bold block text-white">01 Studio Web & Software Services</span>
              </div>
            </div>

            <div className="flex items-center space-x-6 font-medium text-zinc-400">
              <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="hover:text-white transition-colors">Who We Are</a>
              <a href="#services" onClick={(e) => scrollToSection(e, 'services')} className="hover:text-white transition-colors">Services & Showcase</a>
              <a href="#developers" onClick={(e) => scrollToSection(e, 'developers')} className="hover:text-white transition-colors">Team</a>
              <a href="https://www.facebook.com/01StudioServices" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Facebook</a>
              <button onClick={copyEmailToClipboard} className="hover:text-white transition-colors">Copy Email</button>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-zinc-900 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-zinc-600">
            <div>&copy; {new Date().getFullYear()} 01 Studio. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  );
}