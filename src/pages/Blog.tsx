export default function Blog() {
  return (
    <main className="bg-black text-white min-h-screen pt-24 sm:pt-36 pb-32">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <div className="font-display tracking-tight text-7xl sm:text-8xl lg:text-[10rem] leading-[0.85]">
            THE <span style={{ color: '#2e68fe' }}>BLOG</span>
          </div>
          <p className="mt-8 max-w-2xl font-sans text-sm sm:text-base lg:text-lg text-neutral-400 leading-relaxed">
            Ideas, practical tips, and notes from 01 Studio on software, websites, design, and building better digital experiences.
          </p>
        </div>

        <div className="mt-16 sm:mt-24 max-w-3xl">
          <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Something good is on the way.
          </h2>
          <p className="font-sans text-base sm:text-lg text-neutral-400 mt-5 leading-relaxed max-w-2xl">
            We&apos;re putting the finishing touches on our blog, and we&apos;re excited to share what we&apos;ve been learning. Soon you&apos;ll find practical guides, behind-the-scenes notes, and fresh ideas to help your business get more out of its digital presence. Check back soon, there&apos;s plenty more to come.
          </p>
        </div>
      </section>
    </main>
  );
}