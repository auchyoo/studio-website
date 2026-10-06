import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';
import { Check, Send } from 'lucide-react';

const requirementOptions = [
  'E-commerce / Payments',
  'User Accounts & Login',
  'Admin Dashboard',
  'Third-Party API Integration',
  'Mobile Responsive Design',
  'SEO Optimization',
  'Real-Time Features'
];

export default function Home() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

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

  const dateOptions = (() => {
    const options: { value: string; label: string }[] = [];
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
    '9:00 AM - 9:30 AM', '9:30 AM - 10:00 AM', '10:00 AM - 10:30 AM',
    '10:30 AM - 11:00 AM', '11:00 AM - 11:30 AM', '11:30 AM - 12:00 PM',
    '12:00 PM - 12:30 PM', '12:30 PM - 1:00 PM', '1:00 PM - 1:30 PM',
    '1:30 PM - 2:00 PM', '2:00 PM - 2:30 PM', '2:30 PM - 3:00 PM'
  ];

  const toggleRequirement = (req: string) => {
    setFormState((prev) => ({
      ...prev,
      requirements: prev.requirements.includes(req)
        ? prev.requirements.filter((r) => r !== req)
        : [...prev.requirements, req]
    }));
  };

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.email || !formState.name || isSending) return;
    setIsSending(true);

    const templateParams = {
      name: formState.name,
      email: formState.email,
      service: formState.service === 'Others' ? `Others: ${formState.customService}` : formState.service,
      business_nature: formState.businessNature === 'Others' ? `Others: ${formState.customBusiness}` : formState.businessNature,
      preferred_date: formState.preferredDate || 'Not specified',
      preferred_time: formState.preferredTime || 'Not specified',
      requirements: formState.requirements.length > 0 ? formState.requirements.join(', ') : 'None selected',
      other_requirement: formState.otherRequirement || 'None'
    };

    try {
      await Promise.all([
        emailjs.send(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, templateParams, import.meta.env.VITE_EMAILJS_PUBLIC_KEY),
        emailjs.send(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID, templateParams, import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
      ]);

      setFormSubmitted(true);
      triggerToast('Inquiry sent! Check your inbox for meeting details.');
      setTimeout(() => {
        setFormSubmitted(false);
        setFormState({
          name: '', email: '', service: 'Custom Web System', businessNature: 'Personal Portfolio',
          customService: '', customBusiness: '', preferredDate: '', preferredTime: '', requirements: [], otherRequirement: ''
        });
      }, 4000);
    } catch (error) {
      console.error('Email send failed:', error);
      triggerToast('Failed to send inquiry. Please try again.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <>
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center space-x-3 px-6 py-3.5 rounded-full shadow-2xl text-sm backdrop-blur-md animate-fade-in bg-[#1a1d24] text-white border border-white/10">
          <Check className="w-4 h-4 text-[#89a5ff] flex-shrink-0" />
          <span className="font-medium">{toastMessage}</span>
        </div>
      )}

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
                We are an independent web and software studio built on simplicity. Instead of bloated code and bloated agency fees, we partner directly with growing businesses to deliver fast, practical, and dependable digital solutions.
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
            className="mt-8 sm:mt-12 group inline-flex items-center gap-2 font-sans font-semibold text-xs sm:text-sm md:text-base tracking-[0.28em] uppercase transition-all hover:brightness-125"
          >
            <span style={{ color: '#2e68fe' }}>CONTACT US</span>
            <span className="text-white">TO GET STARTED</span>
          </a>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section
        id="what-we-do"
        className="scroll-mt-24 py-24 sm:py-36 bg-black text-white relative border-t border-white/5 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12 sm:mb-16">
            <div>
              <div className="font-display tracking-tight text-7xl sm:text-8xl lg:text-9xl leading-[0.75] text-white">
                WHAT <span style={{ color: '#2e68fe' }}>WE DO</span>
              </div>
            </div>
            <p className="max-w-xl font-sans text-sm sm:text-base lg:text-lg text-neutral-400 leading-relaxed lg:text-right">
              From software and websites to creative work and marketing, we build practical digital solutions around what your business actually needs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: 'Software Development', text: 'Custom software and business systems built around your workflows, data, and day-to-day operations.', accent: true, href: '/what-we-do#software-development' },
              { title: 'Web Development', text: 'Responsive websites and web applications designed to be fast, useful, and easy to maintain.', accent: false, href: '/what-we-do#web-development' },
              { title: 'Mobile Development', text: 'Mobile-first experiences and applications that bring your services closer to your customers.', accent: true, href: '/what-we-do#mobile-development' },
              { title: 'Chatbot Development', text: 'Build intelligent chatbots that automate inquiries, provide information, and improve customer support.', accent: false, href: '/what-we-do#chatbot-development' },
              { title: 'UI/UX Design', text: 'Design intuitive, user-friendly interfaces that make digital products functional, accessible, and visually engaging.', accent: true, href: '/what-we-do#ui-ux-design' },
              { title: 'Venture/Startup Partner', text: 'Collaborate with startups and businesses to develop, improve, and bring digital ideas and products to life.', accent: false, href: '/what-we-do#venture-startup-partner' },
              { title: 'Program Maintenance', text: 'Keep your software reliable and up to date through bug fixes, improvements, updates, and ongoing technical support.', accent: true, href: '/what-we-do#program-maintenance' },
              { title: 'Creative & Design', text: 'Branding, visual direction, UI/UX, graphics, and digital assets that make your business look intentional.', accent: false, href: '/what-we-do#creative-design' },
              { title: 'Marketing', text: 'Digital marketing support that helps your brand reach the right audience and turn attention into action.', accent: true, href: '/what-we-do#marketing' },
            ].map((service) => (
              <Link
                key={service.title}
                to={service.href}
                className={`min-h-64 rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${service.accent ? 'text-white' : 'bg-white text-black'}`}
                style={service.accent ? { backgroundColor: '#2e68fe' } : undefined}
              >
                <div>
                  <h3 className="font-sans text-2xl sm:text-3xl font-bold mt-2">{service.title}</h3>
                </div>
                <p className={`font-sans text-sm leading-relaxed mt-8 ${service.accent ? 'text-white/85' : 'text-neutral-600'}`}>
                  {service.text}
                </p>
              </Link>
            ))}
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
                    <option value="Others">Others</option>
                  </select>
                </div>

                {formState.businessNature === 'Others' && (
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
                  disabled={isSending}
                  className="w-full py-4 rounded-full font-bold uppercase tracking-wider flex items-center justify-center space-x-2 text-white hover:brightness-110 disabled:opacity-50 transition-all shadow-md mt-6"
                  style={{ backgroundColor: '#2e68fe' }}
                >
                  <Send className="w-4 h-4" />
                  <span>{isSending ? 'Sending...' : 'Send Project Inquiry'}</span>
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

    </>
  );
}
