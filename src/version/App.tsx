import React, { useState } from 'react';
import { Check, Mail, Phone, ChevronDown, Send } from 'lucide-react';

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
  </svg>
);

const GithubIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.833.092-.647.35-1.088.636-1.338-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.747-1.026 2.747-1.026.546 1.378.203 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.114 20.452H3.558V9h3.556v11.452z" />
  </svg>
);

export default function App() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    service: 'Custom Web System',
    businessNature: 'Personal Portfolio',
    customService: '',
    customBusiness: '',
    preferredDate: '',
    preferredTime: '',
    requirements: [] as string[],
    otherRequirement: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const dateOptions = (() => {
    const options = [];
    const today = new Date();
    for (let i = 1; i <= 30; i++) {
      const d = new Date(today);
      d.setDate(today.getDate() + i);
      const y = d.getFullYear();
      const m = String(d.getMonth() + 1).padStart(2, '0');
      const day = String(d.getDate()).padStart(2, '0');
      options.push({
        value: `${y}-${m}-${day}`,
        label: d.toLocaleDateString('default', { weekday: 'short', month: 'short', day: 'numeric' })
      });
    }
    return options;
  })();

  const timeOptions = [
    '9:00 AM - 9:30 AM',
    '9:30 AM - 10:00 AM',
    '10:00 AM - 10:30 AM',
    '10:30 AM - 11:00 AM',
    '11:00 AM - 11:30 AM',
    '11:30 AM - 12:00 PM',
    '12:00 PM - 12:30 PM',
    '12:30 PM - 1:00 PM',
    '1:00 PM - 1:30 PM',
    '1:30 PM - 2:00 PM',
    '2:00 PM - 2:30 PM',
    '2:30 PM - 3:00 PM'
  ];

  const requirementOptions = [
    'E-commerce / Payments',
    'User Accounts & Login',
    'Admin Dashboard',
    'Third-Party API Integration',
    'Mobile Responsive Design',
    'SEO Optimization',
    'Real-Time Features'
  ];

  const toggleRequirement = (req: string) => {
    setFormState((prev) => {
      const exists = prev.requirements.includes(req);
      return {
        ...prev,
        requirements: exists
          ? prev.requirements.filter((r) => r !== req)
          : [...prev.requirements, req]
      };
    });
  };

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const faqs = [
    {
      q: 'How long does a typical project take?',
      a: 'It depends on your project. Most custom web systems take 3–6 weeks depending on scope. POS and system management builds can run 6–10 weeks. We can give you a firm timeline after the initial consultation.'
    },
    {
      q: 'Do I own my website and code once it’s done?',
      a: 'Of course! You retain full ownership of your website and all code once the project is completed and delivered.'
    },
    {
      q: 'Do you offer ongoing support after launch?',
      a: 'Yes. Every project comes with 6 weeks of dedicated support after launch to fix bugs, handle adjustments, and keep things running smoothly. We also train you and your team on how to manage the site independently before handover. If you need continued help, updates, or maintenance after the 6-week window, you can hire us on an ongoing basis.'
    },
    {
      q: 'What is your pricing structure?',
      a: 'Pricing is scoped per project based on complexity and features. Reach out with your requirements and we will send a detailed quote — no fixed packages, no hidden fees.'
    },
    {
      q: 'Can we start small and add more features later?',
      a: 'Absolutely. We often recommend launching a streamlined version of your project first. That way, you get to market quickly, see real customer feedback, and expand features only when you need them.'
    },
    {
      q: 'How do we keep track of progress while you build?',
      a: 'We keep things transparent. You’ll get weekly updates with clickable previews, so you always see exactly what stage we’re on and how things work before launch day.'
    }
  ];

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
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
        businessNature: 'Personal Portfolio',
        customService: '',
        customBusiness: '',
        preferredDate: '',
        preferredTime: '',
        requirements: [],
        otherRequirement: ''
      });
    }, 4000);
  };

  return (
    <div className="min-h-screen font-sans antialiased text-white bg-black selection:bg-[#2e68fe] selection:text-white scroll-smooth">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center space-x-3 px-6 py-3.5 rounded-full shadow-2xl text-sm backdrop-blur-md animate-fade-in bg-[#1a1d24] text-white border border-white/10">
          <Check className="w-4 h-4 text-[#89a5ff] flex-shrink-0" />
          <span className="font-medium">{toastMessage}</span>
        </div>
      )}

      {/* STICKY HEADER NAV */}
      <div className="sticky top-4 z-40 px-4">
        <nav className="max-w-xl mx-auto rounded-full backdrop-blur-md bg-white shadow-lg">
          <div className="h-16 flex items-center justify-center px-6">
            <a
              href="#hero"
              onClick={(e) => scrollToSection(e, 'hero')}
              className="flex items-center gap-2"
            >
              <span className="font-display text-xl text-[#2e68fe]">01</span>
              <span className="font-display text-xl text-black">STUDIO</span>
              <span className="text-[11px] tracking-[0.2em] uppercase text-black ml-2 hidden sm:inline">
                Web & Software Services
              </span>
            </a>
          </div>
        </nav>
      </div>

      {/* HERO SECTION */}
      <section
        id="hero"
        className="scroll-mt-20 relative min-h-[90vh] flex flex-col justify-center items-center py-16 lg:py-24 overflow-hidden bg-black text-white"
      >
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[550px] max-w-[95vw] rounded-full bg-[#2e68fe]/15 blur-[160px] pointer-events-none" />

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
          <div className="w-full max-w-6xl pl-4 sm:pl-10 lg:pl-40 flex items-center justify-center select-none py-2">
            
            <div className="flex flex-col justify-between self-stretch py-3 sm:py-8 md:py-30 pr-4 sm:pr-8 md:pr-0 text-right">
              <span className="font-sans text-xs sm:text-xl md:text-2xl lg:text-3xl tracking-[0.25em] text-neutral-400 uppercase font-medium">
                FROM
              </span>
              <span className="font-sans text-xs sm:text-xl md:text-2xl lg:text-3xl tracking-[0.25em] text-neutral-400 uppercase font-medium">
                TO
              </span>
            </div>

            <div className="flex flex-col pl-4 sm:pl-8 md:pl-5 flex-1 leading-[0.90]">
              <div className="font-display tracking-tight text-[17vw] sm:text-[14vw] md:text-[11rem] lg:text-[13.5rem] text-white">
                <span className="inline-block drop-shadow-[0_10px_35px_rgba(255,255,255,0.12)]">
                  ZERO
                </span>
              </div>

              <div 
                className="font-display tracking-tight text-[17vw] sm:text-[14vw] md:text-[11rem] lg:text-[13.5rem] -mt-2 sm:-mt-6 md:-mt-10"
                style={{ color: '#2e68fe' }}
              >
                <span className="inline-block drop-shadow-[0_10px_45px_rgba(46,104,254,0.35)]">
                  ONE
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ABOUT US */}
      <section
        id="about"
        className="scroll-mt-20 py-24 sm:py-36 bg-black text-white relative border-t border-white/5 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column */}
            <div className="lg:col-span-6 flex flex-col select-none leading-[0.78]">
              <div className="font-display tracking-tight text-[18vw] sm:text-[14vw] lg:text-[10.5rem] text-white">
                <span className="inline-block drop-shadow-[0_10px_35px_rgba(255,255,255,0.12)]">
                  ABOUT
                </span>
              </div>

              <div
                className="font-display tracking-tight text-[18vw] sm:text-[14vw] lg:text-[10.5rem] -mt-3 sm:-mt-6 lg:-mt-2 pl-1 sm:pl-0"
                style={{ color: '#2e68fe' }}
              >
                <span className="inline-block drop-shadow-[0_10px_45px_rgba(46,104,254,0.35)]">
                  US
                </span>
              </div>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-6 flex flex-col justify-center lg:pl-16">
              <p className="font-sans text-sm sm:text-base md:text-lg lg:text-xl font-medium tracking-[0.18em] uppercase text-neutral-200 leading-[1.75] text-right select-text max-w-xl ml-auto">
                01 Studio is a modern web and software engineering practice dedicated to binary clarity. We eliminate digital bloat, unneeded dependencies, and complex overhead to deliver fast, reliable, and purpose-driven software solutions.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="relative w-full overflow-hidden select-none">
        <div 
          className="py-20 sm:py-28 md:py-36 px-4 text-center flex items-center justify-center"
          style={{ backgroundColor: '#2e68fe' }}
        >
          <h2 className="font-sans font-medium text-xl sm:text-3xl md:text-4xl lg:text-2xl text-white tracking-[0.22em] uppercase leading-[1.6] max-w-4xl mx-auto">
            Getting your business out there
            <br />
            shouldn't be complicated. We make it simple.
          </h2>
        </div>

        <div className="bg-black py-20 sm:py-28 md:py-36 px-4 flex flex-col items-center justify-center text-center">
          <div className="flex flex-wrap items-center justify-center gap-x-3 sm:gap-x-5 text-white">
            <span className="font-sans font-medium text-2xl sm:text-4xl md:text-5xl lg:text-6xl tracking-[0.22em] uppercase">
              TAKE THE
            </span>

            <span 
              className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-none inline-block align-middle px-1 sm:px-2"
              style={{ color: '#2e68fe' }}
            >
              01
            </span>

            <span className="font-sans font-medium text-2xl sm:text-4xl md:text-5xl lg:text-6xl tracking-[0.22em] uppercase">
              ST STEP.
            </span>
          </div>

          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, 'contact')}
            className="mt-8 sm:mt-12 group inline-flex items-center gap-2 font-sans font-semibold text-xs sm:text-sm md:text-base tracking-[0.28em] uppercase transition-all hover:brightness-125"
          >
            <span style={{ color: '#2e68fe' }}>CONTACT US</span>
            <span className="text-white">TO GET STARTED</span>
          </a>
        </div>
      </section>

      {/* PROJECTS & SERVICES */}
      <section
        id="services"
        className="scroll-mt-20 py-24 sm:py-16 bg-black text-white relative select-none overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-24 relative z-10">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-12 lg:gap-16">
            
            {/* LEFT COLUMN */}
            <div className="w-full lg:flex-1 flex flex-col gap-6 max-w-2xl">
              
              <div className="w-full h-56 sm:h-64 rounded-3xl bg-white p-8 flex flex-col justify-between cursor-pointer transition-transform hover:scale-[1.01]">
                <div>
                  <span className="font-mono text-xs uppercase tracking-widest text-neutral-400 font-bold">
                    Project 01
                  </span>
                  <h3 className="font-sans text-2xl sm:text-3xl font-bold text-black mt-1">
                    Aethel Architecture Studio
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-neutral-600 mt-2 line-clamp-2">
                    Ultra-lightweight architectural portfolio & web system with interactive 3D model viewports.
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-neutral-500 font-medium">
                    Aethel Architectural Firm
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-black flex items-center gap-1">
                    Featured Deployment
                  </span>
                </div>
              </div>

              <div
                className="w-full h-56 sm:h-64 rounded-3xl p-8 flex flex-col justify-between cursor-pointer transition-transform hover:scale-[1.01]"
                style={{ backgroundColor: '#2e68fe' }}
              >
                <div>
                  <span className="font-mono text-xs uppercase tracking-widest text-white/70 font-bold">
                    Project 02
                  </span>
                  <h3 className="font-sans text-2xl sm:text-3xl font-bold text-white mt-1">
                    Pulse Data & Admin Hub
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-white/80 mt-2 line-clamp-2">
                    Real-time multi-proxy monitoring and dataset management system processing 1M+ daily checks.
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-white/70 font-medium">
                    AI Dataset Intelligence Agency
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-1">
                    Featured Deployment
                  </span>
                </div>
              </div>

              <div className="w-full h-56 sm:h-64 rounded-3xl bg-white p-8 flex flex-col justify-between cursor-pointer transition-transform hover:scale-[1.01]">
                <div>
                  <span className="font-mono text-xs uppercase tracking-widest text-neutral-400 font-bold">
                    Project 03
                  </span>
                  <h3 className="font-sans text-2xl sm:text-3xl font-bold text-black mt-1">
                    Apex Omni-Retail POS
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-neutral-600 mt-2 line-clamp-2">
                    Cloud-connected, offline-first Point of Sale interface with real-time barcode scanning and receipt engine.
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-neutral-500 font-medium">
                    Apex Commercial Outlets
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-black flex items-center gap-1">
                    Featured Deployment
                  </span>
                </div>
              </div>

            </div>

            {/* RIGHT COLUMN */}
            <div className="flex flex-row items-center justify-center leading-none select-none">
              <div
                className="writing-vertical font-display text-[14vw] sm:text-[11vw] lg:text-[10rem] tracking-tight uppercase"
                style={{ color: '#2e68fe' }}
              >
                SERVICES
              </div>

              <div className="writing-vertical font-display text-[14vw] sm:text-[11vw] lg:text-[10rem] tracking-tight uppercase text-white -ml-4 sm:-ml-8 lg:-ml-10">
                PROJECTS
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ & PROCESS */}
      <section
        id="faq"
        className="scroll-mt-20 relative w-full overflow-hidden select-none mt-28 sm:mt-40 lg:mt-48"
      >
        <div className="flex flex-col md:flex-row w-full min-h-[85vh]">
          
          {/* LEFT COLUMN */}
          <div className="w-full md:w-[45%] flex flex-col justify-start">
            <div className="w-full bg-black px-6 sm:px-12 lg:px-16 pt-8 pb-0 flex justify-center">
              <h2 className="font-display tracking-tight text-7xl sm:text-8xl lg:text-9xl text-white leading-none -mb-4 sm:-mb-5 md:-mb-6">
                FAQS
              </h2>
            </div>

            <div className="items-center justify-center flex-1 bg-black px-6 sm:px-12 lg:px-16 py-10 text-white flex flex-col">
              <div className="space-y-4 w-full max-w-xl">
                {faqs.map((item, idx) => (
                  <div 
                    key={idx} 
                    className="border-b border-white/10 pb-4 transition-colors"
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                      className="w-full flex items-center justify-between text-left py-2 font-sans font-semibold text-sm sm:text-base text-white hover:text-[#2e68fe] transition-colors"
                    >
                      <span>{item.q}</span>
                      <ChevronDown
                        className={`w-4 h-4 flex-shrink-0 ml-3 text-white transition-transform duration-200 ${
                          openFaq === idx ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {openFaq === idx && (
                      <div className="pt-2 text-xs sm:text-sm text-neutral-400 leading-relaxed font-normal">
                        {item.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div 
            className="w-full md:w-[55%] flex flex-col justify-center"
            style={{ backgroundColor: '#2e68fe' }}
          >
            <div className="w-full bg-black px-6 sm:px-12 lg:px-16 pt-8 pb-0 flex justify-center">
              <h2 
                className="font-display tracking-tight text-7xl sm:text-8xl lg:text-9xl leading-none -mb-4 sm:-mb-5 md:-mb-6"
                style={{ color: '#2e68fe' }}
              >
                PROCESS
              </h2>
            </div>

            <div className="items-center justify-center flex-1 px-6 sm:px-12 lg:px-16 py-12 text-white flex flex-col">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-10 w-full max-w-2xl">
                
                {/* Phase 01 */}
                <div className="space-y-3">
                  <div className="text-xs sm:text-base font-bold uppercase tracking-widest text-black">
                    <span className="text-black bg-white px-2.5 py-0.5 rounded">Phase 01</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white leading-snug">
                    Strategic Planning
                  </h3>
                  <p className="text-sm sm:text-base lg:text-lg text-white/90 leading-none font-normal">
                    We learn about your business goals and what your customers actually need so we can build the right plan from day one.
                  </p>
                </div>

                {/* Phase 02 */}
                <div className="space-y-3">
                  <div className="text-xs sm:text-base font-bold uppercase tracking-widest text-black">
                    <span className="text-black bg-white px-2.5 py-0.5 rounded">Phase 02</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white leading-snug">
                    Design & Architecture
                  </h3>
                  <p className="text-sm sm:text-base lg:text-lg text-white/90 leading-none font-normal">
                    We sketch out how the site will look, make sure it’s easy for anyone to use, and organize how everything will fit together behind the scenes.
                  </p>
                </div>

                {/* Phase 03 */}
                <div className="space-y-3">
                  <div className="text-xs sm:text-base font-bold uppercase tracking-widest text-black">
                    <span className="text-black bg-white px-2.5 py-0.5 rounded">Phase 03</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white leading-snug">
                    Development
                  </h3>
                  <p className="text-sm sm:text-base lg:text-lg text-white/90 leading-none font-normal">
                   We build your website from the ground up and test every button, form, and page to make sure everything works smoothly.
                  </p>
                </div>

                {/* Phase 04 */}
                <div className="space-y-3">
                  <div className="text-xs sm:text-base font-bold uppercase tracking-widest text-black">
                    <span className="text-black bg-white px-2.5 py-0.5 rounded">Phase 04</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white leading-snug">
                    Launch & Support
                  </h3>
                  <p className="text-sm sm:text-base lg:text-lg text-white/90 leading-none font-normal">
                    We get your site live on the web, handle the setup, and stay by your side to keep it fast, secure, and running without a hitch.
                  </p>
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section 
        id="contact" 
        className="scroll-mt-20 relative pt-24 sm:pt-36 bg-black text-white overflow-hidden select-none"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
          
          {/* Typographic Lockup */}
          <div className="w-full max-w-6xl flex flex-col items-center text-center leading-none mb-6 sm:mb-10">
            <div className="font-display tracking-tight text-[18vw] sm:text-[14vw] md:text-[10.5rem] lg:text-[12.5rem] text-white">
              <span className="inline-block drop-shadow-[0_10px_35px_rgba(255,255,255,0.12)]">
                READY
              </span>
            </div>

            <div className="font-display tracking-tight text-[10vw] sm:text-[14vw] md:text-[10.5rem] lg:text-[12.5rem] -mt-3 sm:-mt-6 md:-mt-10 lg:-mt-14">
              TO <span className="inline-block drop-shadow-[0_10px_45px_rgba(46,104,254,0.35)]" style={{ color: '#2e68fe' }}>BUILD</span>?
            </div>
          </div>

          {/* White Contact Box */}
          <div className="w-full max-w-4xl rounded-t-[2.5rem] sm:rounded-t-[4rem] px-6 sm:px-12 lg:px-16 pt-12 sm:pt-16 pb-24 bg-white text-black">
            <div className="text-center mb-10">
              <p className="font-sans text-sm sm:text-base text-neutral-600 max-w-lg mx-auto font-normal tracking-wide">
                Let's turn your ideas into reality. Fill out the form below and we'll get back to you with a tailored solution for your business needs.
              </p>
            </div>

            {formSubmitted ? (
              <div className="py-16 text-center space-y-4">
                <h3 className="text-2xl font-bold text-black">Inquiry Received!</h3>
                <p className="text-sm max-w-md mx-auto text-neutral-600">
                  Thank you for contacting <span style={{ color: '#2e68fe' }}>01 Studio</span>. We will review your specifications and reply via email.
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-5 text-xs font-sans">
                
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-1.5 font-bold uppercase tracking-wider text-neutral-600 text-[11px]">
                      YOUR NAME *
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="e.g. Juan Dela Cruz"
                      className="w-full bg-neutral-100 hover:bg-neutral-200/70 focus:bg-white border border-transparent focus:border-[#2e68fe] rounded-2xl p-4 text-black placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#2e68fe]/20 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block mb-1.5 font-bold uppercase tracking-wider text-neutral-600 text-[11px]">
                      YOUR EMAIL *
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="name@company.com"
                      className="w-full bg-neutral-100 hover:bg-neutral-200/70 focus:bg-white border border-transparent focus:border-[#2e68fe] rounded-2xl p-4 text-black placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#2e68fe]/20 transition-all"
                    />
                  </div>
                </div>

                {/* Service of Interest */}
                <div>
                  <label className="block mb-1.5 font-bold uppercase tracking-wider text-neutral-600 text-[11px]">
                    SERVICE OF INTEREST
                  </label>
                  <select
                    value={formState.service}
                    onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                    className="w-full bg-neutral-100 hover:bg-neutral-200/70 focus:bg-white border border-transparent focus:border-[#2e68fe] rounded-2xl p-4 text-black focus:outline-none focus:ring-2 focus:ring-[#2e68fe]/20 transition-all"
                  >
                    <option value="Custom Web System">Custom Web System</option>
                    <option value="Management System">Management System</option>
                    <option value="Software / Application">Software / Application</option>
                    <option value="Point of Sale System">Point of Sale System</option>
                    <option value="Others">Others</option>
                  </select>
                </div>

                {formState.service === 'Others' && (
                  <div className="animate-fade-in">
                    <label className="block mb-1.5 font-bold uppercase tracking-wider text-neutral-600 text-[11px]">
                      WHAT DO YOU HAVE IN MIND? *
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.customService}
                      onChange={(e) => setFormState({ ...formState, customService: e.target.value })}
                      placeholder="e.g. Mobile App, Custom API Integration, Cloud Migration..."
                      className="w-full bg-neutral-100 hover:bg-neutral-200/70 focus:bg-white border border-transparent focus:border-[#2e68fe] rounded-2xl p-4 text-black placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#2e68fe]/20 transition-all"
                    />
                  </div>
                )}

                {/* Nature of Business */}
                <div>
                  <label className="block mb-1.5 font-bold uppercase tracking-wider text-neutral-600 text-[11px]">
                    NATURE OF BUSINESS
                  </label>
                  <select
                    value={formState.businessNature}
                    onChange={(e) => setFormState({ ...formState, businessNature: e.target.value })}
                    className="w-full bg-neutral-100 hover:bg-neutral-200/70 focus:bg-white border border-transparent focus:border-[#2e68fe] rounded-2xl p-4 text-black focus:outline-none focus:ring-2 focus:ring-[#2e68fe]/20 transition-all"
                  >
                    <option value="Personal Portfolio">Personal Portfolio</option>
                    <option value="Retail / E-commerce">Retail / E-commerce</option>
                    <option value="Professional Services">Professional Services</option>
                    <option value="Education">Education</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {formState.businessNature === 'Other' && (
                  <div className="animate-fade-in">
                    <label className="block mb-1.5 font-bold uppercase tracking-wider text-neutral-600 text-[11px]">
                      TELL US ABOUT YOUR BUSINESS *
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.customBusiness}
                      onChange={(e) => setFormState({ ...formState, customBusiness: e.target.value })}
                      placeholder="e.g. Healthcare, Hospitality / Food Service, Finance..."
                      className="w-full bg-neutral-100 hover:bg-neutral-200/70 focus:bg-white border border-transparent focus:border-[#2e68fe] rounded-2xl p-4 text-black placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#2e68fe]/20 transition-all"
                    />
                  </div>
                )}

                {/* Meeting Availability */}
                <div>
                  <label className="block mb-1.5 font-bold uppercase tracking-wider text-neutral-600 text-[11px]">
                    YOUR AVAILABILITY FOR A CONSULTATION
                  </label>
                  <p className="text-[11px] text-neutral-500 mb-2">
                    Book a 30-minute consultation meeting with us to kickstart your project.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <select
                      value={formState.preferredDate}
                      onChange={(e) => setFormState({ ...formState, preferredDate: e.target.value })}
                      className="w-full bg-neutral-100 hover:bg-neutral-200/70 focus:bg-white border border-transparent focus:border-[#2e68fe] rounded-2xl p-4 text-black focus:outline-none focus:ring-2 focus:ring-[#2e68fe]/20 transition-all"
                    >
                      <option value="">Select a date</option>
                      {dateOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                      ))}
                    </select>

                    <select
                      value={formState.preferredTime}
                      onChange={(e) => setFormState({ ...formState, preferredTime: e.target.value })}
                      className="w-full bg-neutral-100 hover:bg-neutral-200/70 focus:bg-white border border-transparent focus:border-[#2e68fe] rounded-2xl p-4 text-black focus:outline-none focus:ring-2 focus:ring-[#2e68fe]/20 transition-all"
                    >
                      <option value="">Select a time</option>
                      {timeOptions.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Requirements Checkbox Matrix */}
                <div>
                  <label className="block mb-2 font-bold uppercase tracking-wider text-neutral-600 text-[11px]">
                    PROJECT REQUIREMENTS
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {requirementOptions.map((req) => (
                      <label
                        key={req}
                        className="flex items-center gap-2.5 p-3.5 rounded-2xl bg-neutral-100 hover:bg-neutral-200/70 cursor-pointer transition-colors"
                      >
                        <input
                          type="checkbox"
                          checked={formState.requirements.includes(req)}
                          onChange={() => toggleRequirement(req)}
                          className="w-4 h-4 accent-[#2e68fe]"
                        />
                        <span className="text-black font-medium text-xs">{req}</span>
                      </label>
                    ))}
                  </div>

                  <div className="mt-3">
                    <label className="block mb-1.5 font-bold uppercase tracking-wider text-neutral-600 text-[11px]">
                      OTHERS
                    </label>
                    <textarea
                      rows={3}
                      value={formState.otherRequirement}
                      onChange={(e) => setFormState({ ...formState, otherRequirement: e.target.value })}
                      placeholder="Anything else you have in mind..."
                      className="w-full bg-neutral-100 hover:bg-neutral-200/70 focus:bg-white border border-transparent focus:border-[#2e68fe] rounded-2xl p-4 text-black placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#2e68fe]/20 transition-all"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-full font-bold uppercase tracking-wider flex items-center justify-center space-x-2 text-white hover:brightness-110 transition-all shadow-md mt-6"
                  style={{ backgroundColor: '#2e68fe' }}
                >
                  <Send className="w-4 h-4" />
                  <span>Send Project Inquiry</span>
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

      {/* STICKY FOOTER NAV */}
      <div className="fixed bottom-4 left-4 right-4 z-40 flex justify-center">
        <nav
          className="rounded-full shadow-lg max-w-full overflow-x-auto border border-white/10"
          style={{ backgroundColor: '#2e68fe' }}
        >
          <div className="flex items-center justify-center gap-6 sm:gap-8 px-5 sm:px-8 py-3 whitespace-nowrap">
            <div className="flex items-center gap-4">
              <a
                href="https://www.facebook.com/01StudioServices"
                target="_blank"
                rel="noreferrer"
                className="text-white hover:text-white/80 transition-colors"
                title="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href="mailto:01studio.services@gmail.com"
                className="text-white hover:text-white/80 transition-colors"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="tel:+10000000000"
                className="text-white hover:text-white/80 transition-colors"
                title="Phone"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="text-white hover:text-white/80 transition-colors"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>

            <div className="w-px h-4 bg-white/30" />

            <div className="flex items-center gap-5 text-xs font-medium text-white">
              <a href="#hero" onClick={(e) => scrollToSection(e, 'hero')} className="hover:text-white/80 transition-colors">Home</a>
              <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="hover:text-white/80 transition-colors">About</a>
              <a href="#services" onClick={(e) => scrollToSection(e, 'services')} className="hover:text-white/80 transition-colors">Services</a>
              <a href="#faq" onClick={(e) => scrollToSection(e, 'faq')} className="hover:text-white/80 transition-colors">FAQs</a>
              <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="hover:text-white/80 transition-colors">Contact</a>
            </div>

            <div className="w-px h-4 bg-white/30" />

            <div className="text-[11px] text-white">
              &copy; {new Date().getFullYear()} 01 Studio. All rights reserved.
            </div>
            
          </div>
        </nav>
      </div>
    </div>
  );
}