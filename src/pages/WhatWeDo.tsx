import React, { useState } from 'react';
import {
  Bot,
  ChevronDown,
  Code2,
  Globe2,
  Megaphone,
  Palette,
  Rocket,
  Smartphone,
  Star,
  Wrench,
} from 'lucide-react';

type ServiceDetail = {
  label: string;
  value: string;
};

type Category = {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  details: ServiceDetail[];
};

const categories: Category[] = [
  {
    id: 'software-development',
    number: '01',
    title: 'Software Development',
    description:
      'Custom software and business systems built around your workflows, data, and day-to-day operations.',
    icon: Code2,
    details: [
      { label: 'Starting Price', value: 'From: USD 1,500' },
      { label: 'Project Duration', value: '10–12+ weeks' },
      { label: 'Best For', value: 'Businesses that need custom internal systems or automation' },
      { label: 'Includes', value: 'Planning, development, testing, deployment, and handover' },
    ],
  },
  {
    id: 'web-development',
    number: '02',
    title: 'Web Development',
    description:
      'Responsive websites and web applications designed to be fast, useful, and easy to maintain.',
    icon: Globe2,
    details: [
      { label: 'Starting Price', value: 'From: USD 250' },
      { label: 'Project Duration', value: '3–7+ weeks' },
      { label: 'Best For', value: 'Businesses, organizations, professionals, and online services' },
      { label: 'Includes', value: 'Responsive design, development, deployment, and basic optimization' },
    ],
  },
  {
    id: 'mobile-development',
    number: '03',
    title: 'Mobile Development',
    description:
      'Mobile applications designed around useful user flows, clear interfaces, and reliable performance.',
    icon: Smartphone,
    details: [
      { label: 'Starting Price', value: 'From: USD 1,500' },
      { label: 'Project Duration', value: '10–12+ weeks' },
      { label: 'Best For', value: 'Businesses that need a dedicated mobile experience' },
      { label: 'Includes', value: 'UI implementation, core functionality, testing, and deployment support' },
    ],
  },
  {
    id: 'chatbot-development',
    number: '04',
    title: 'Chatbot Development',
    description:
      'Intelligent chatbots that automate inquiries, provide information, and improve customer support.',
    icon: Bot,
    details: [
      { label: 'Starting Price', value: 'From: USD 350' },
      { label: 'Project Duration', value: '4–6+ weeks' },
      { label: 'Best For', value: 'Businesses handling repetitive customer questions or inquiries' },
      { label: 'Includes', value: 'Conversation design, chatbot development, knowledge setup, and testing' },
    ],
  },
  {
    id: 'ui-ux-design',
    number: '05',
    title: 'UI/UX Design',
    description:
      'Intuitive and user-friendly interfaces that make digital products functional, accessible, and visually engaging.',
    icon: Palette,
    details: [
      { label: 'Starting Price', value: 'From: USD 250' },
      { label: 'Project Duration', value: '1–4+ weeks' },
      { label: 'Best For', value: 'Websites, applications, software, and digital products' },
      { label: 'Includes', value: 'User flows, wireframes, interface design, and design direction' },
    ],
  },
  {
    id: 'venture-startup-partner',
    number: '06',
    title: 'Venture / Startup Partner',
    description:
      'Collaborative technical support for startups and businesses bringing new digital ideas and products to life.',
    icon: Rocket,
    details: [
      { label: 'Project Duration', value: 'Depends on scope' },
      { label: 'Best For', value: 'Startups, founders, and businesses validating a digital idea' },
      { label: 'Includes', value: 'Technical planning, product development, iteration, and consultation' },
    ],
  },
  {
    id: 'program-maintenance',
    number: '07',
    title: 'Program Maintenance',
    description:
      'Ongoing technical support to keep your software reliable, updated, and running smoothly.',
    icon: Wrench,
    details: [
      { label: 'Starting Price', value: 'From: USD 150+ / month' },
      { label: 'Project Duration', value: 'Ongoing' },
      { label: 'Best For', value: 'Existing websites, software, and applications needing continued support' },
      { label: 'Includes', value: 'Bug fixes, updates, improvements, monitoring, and technical support' },
    ],
  },
  {
    id: 'creative-design',
    number: '08',
    title: 'Creative & Design',
    description:
      'Branding, visual direction, graphics, and digital assets that make your business look intentional and communicate clearly.',
    icon: Palette,
    details: [
      { label: 'Starting Price', value: 'From: USD 150' },
      { label: 'Project Duration', value: '1–4+ weeks' },
      { label: 'Best For', value: 'Businesses that need a stronger or more cohesive visual identity' },
      { label: 'Includes', value: 'Branding, graphics, visual direction, and digital assets' },
    ],
  },
  {
    id: 'marketing',
    number: '09',
    title: 'Marketing',
    description:
      'Digital marketing support that helps your brand reach the right audience and turn attention into action.',
    icon: Megaphone,
    details: [
      { label: 'Starting Price', value: 'From: USD 150' },
      { label: 'Project Duration', value: 'Ongoing / campaign-based' },
      { label: 'Best For', value: 'Businesses looking to improve their online presence and reach' },
      { label: 'Includes', value: 'Content, campaigns, digital presence, and marketing support' },
    ],
  },
];

const faqs = [
  { q: 'How long does a typical project take?', a: 'It depends on your project. Most custom web systems take 3–6 weeks depending on scope. POS and system management builds can run 6–10 weeks. We can give you a firm timeline after the initial consultation.' },
  { q: 'Do I own my website and code once it’s done?', a: 'Of course! You retain full ownership of your website and all code once the project is completed and delivered.' },
  { q: 'Do you offer ongoing support after launch?', a: 'Yes. Every project comes with 6 weeks of dedicated support after launch to fix bugs, handle adjustments, and keep things running smoothly. We also train you and your team on how to manage the site independently before handover. If you need continued help, updates, or maintenance after the 6-week window, you can hire us on an ongoing basis.' },
  { q: 'What is your pricing structure?', a: 'Pricing is scoped per project based on complexity and features. Reach out with your requirements and we will send a detailed quote — no fixed packages, no hidden fees.' },
  { q: 'Can we start small and add more features later?', a: 'Absolutely. We often recommend launching a streamlined version of your project first. That way, you get to market quickly, see real customer feedback, and expand features only when you need them.' },
  { q: 'How do we keep track of progress while you build?', a: 'We keep things transparent. You’ll get weekly updates with clickable previews, so you always see exactly what stage we’re on and how things work before launch day.' },
];

/*
const reviews = [
  {
    quote: 'The project gave us a much clearer way to present our business and manage what used to be handled manually.',
    name: 'Business Client',
    role: 'Web Development Project',
  },
  {
    quote: 'Communication was straightforward, the progress was easy to follow, and the final system was built around what our team actually needed.',
    name: 'Business Client',
    role: 'Software Development Project',
  },
  {
    quote: 'The design made our digital presence feel more professional while keeping everything simple for our customers to use.',
    name: 'Business Client',
    role: 'Creative & Design Project',
  },
];
*/

function CategoryVisual({ category }: { category: Category }) {
  const Icon = category.icon;

  return (
    <div className="relative w-full max-w-md aspect-square mx-auto rounded-[2rem] overflow-hidden bg-white text-black flex items-center justify-center">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_25%,rgba(46,104,254,0.22),transparent_34%),radial-gradient(circle_at_20%_80%,rgba(46,104,254,0.10),transparent_32%)]" />

      <div className="absolute right-6 bottom-6 font-display text-8xl lg:text-9xl leading-none text-black/5">
        {category.number}
      </div>

      <div className="relative z-10 w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-[#2e68fe] flex items-center justify-center shadow-[0_20px_70px_rgba(46,104,254,0.35)]">
        <Icon className="w-14 h-14 sm:w-16 sm:h-16 text-white" />
      </div>
    </div>
  );
}

export default function WhatWeDo() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="bg-black text-white min-h-screen pt-24 sm:pt-32 pb-40">
      {/* SERVICES INTRO */}
      <section
        id="services"
        className="scroll-mt-24 min-h-[calc(100vh-6rem)] sm:min-h-[calc(100vh-8rem)] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center"
      >
        <div className="text-center">
          <div className="font-display tracking-tight text-6xl sm:text-7xl lg:text-[8.5rem] leading-[0.72]">
            SERV<span style={{ color: '#2e68fe' }}>ICES</span>
          </div>
        </div>

        <div
          className="mt-8 sm:mt-10 rounded-[2rem] p-6 sm:p-8 lg:p-10 text-center"
          style={{ backgroundColor: '#2e68fe' }}
        >
          <p className="max-w-4xl mx-auto font-sans text-base sm:text-lg lg:text-xl text-white leading-relaxed">
            From software and websites to design, marketing, and ongoing technical
            support, we build practical digital solutions around what your business
            actually needs.
          </p>
        </div>
      </section>

      {/* SERVICE CATEGORIES */}
      <div>
        {categories.map((category) => (
          <section
            key={category.id}
            id={category.id}
            className="scroll-mt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            <div className="py-12 sm:py-16 lg:py-20">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* ICON / VISUAL LEFT */}
                <div className="lg:col-span-5 order-1">
                  <CategoryVisual category={category} />
                </div>

                {/* SERVICE INFORMATION RIGHT */}
                <div className="lg:col-span-7 order-2">
                  <h2 className="font-sans font-bold text-3xl sm:text-4xl lg:text-5xl leading-[0.95] tracking-tight">
                    {category.title}
                  </h2>

                  <p className="font-sans text-sm sm:text-base text-neutral-400 leading-relaxed mt-6 max-w-2xl">
                    {category.description}
                  </p>

                  <div className="mt-8 border-t border-white/10">
                    {category.details.map((detail) => (
                      <div
                        key={detail.label}
                        className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-2 sm:gap-6 py-4 border-b border-white/10"
                      >
                        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#2e68fe]">
                          {detail.label}
                        </span>
                        <span className="font-sans text-sm sm:text-base text-white/85">
                          {detail.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* THIN BLUE DIVIDER */}
            <div className="h-px w-full bg-[#2e68fe]/60" />
          </section>
        ))}
      </div>

      {/* REVIEWS */}
      {/*
      <section id="reviews" className="scroll-mt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-28 sm:mt-40 lg:mt-52">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12 sm:mb-16">
          <div>
            <div className="font-display tracking-tight text-7xl sm:text-8xl lg:text-[10rem] leading-[0.72]">
              <span style={{ color: '#2e68fe' }}>REV</span>IEWS
            </div>
          </div>
          <p className="max-w-xl font-sans text-sm sm:text-base text-neutral-400 leading-relaxed lg:text-right">
            What clients can expect from working with 01 Studio: clear communication, practical solutions, and digital work built around real needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {reviews.map((review, index) => (
            <article key={review.role} className={`rounded-3xl p-7 sm:p-8 min-h-72 flex flex-col justify-between ${index === 1 ? 'bg-[#2e68fe] text-white' : 'bg-white text-black'}`}>
              <div>
                <div className="flex gap-1 mb-7" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star key={starIndex} className={`w-4 h-4 ${index === 1 ? 'fill-white text-white' : 'fill-[#2e68fe] text-[#2e68fe]'}`} />
                  ))}
                </div>
                <p className={`font-sans text-base sm:text-lg leading-relaxed ${index === 1 ? 'text-white/90' : 'text-neutral-700'}`}>
                  “{review.quote}”
                </p>
              </div>
              <div className="mt-8">
                <p className="font-sans font-bold text-sm">{review.name}</p>
                <p className={`font-mono text-[10px] uppercase tracking-wider mt-1 ${index === 1 ? 'text-white/60' : 'text-neutral-400'}`}>{review.role}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      */}

      {/* FAQS */}
      <section id="faqs" className="scroll-mt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-28 sm:mt-40 lg:mt-52 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <div className="font-display tracking-tight text-7xl sm:text-8xl lg:text-[10rem] leading-[0.72]">
              FAQ<span style={{ color: '#2e68fe' }}>S</span>
            </div>
            <p className="mt-7 max-w-md font-sans text-sm sm:text-base text-neutral-400 leading-relaxed">
              A few answers to the questions we hear most often before starting a project.
            </p>
          </div>

          <div className="lg:col-span-7 pt-6 lg:pt-10">
            <div className="space-y-4 w-full">
              {faqs.map((item, idx) => (
                <div key={idx} className="border-b border-white/10 pb-4 transition-colors">
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full flex items-center justify-between text-left py-2 font-sans font-semibold text-sm sm:text-base text-white hover:text-[#2e68fe] transition-colors"
                  >
                    <span>{item.q}</span>
                    <ChevronDown className={`w-4 h-4 flex-shrink-0 ml-3 text-white transition-transform duration-200 ${openFaq === idx ? 'rotate-180' : ''}`} />
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
      </section>
    </main>
  );
}
