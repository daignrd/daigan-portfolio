import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Daigan — Founder. Builder. Thinker.</title>
        <meta name="description" content="Startup entrepreneur at the intersection of digital assets, AI, and emerging technology. Founder of Joy Tech." />
        <meta property="og:title" content="Daigan — Founder. Builder. Thinker." />
        <meta property="og:description" content="Startup entrepreneur at the intersection of digital assets, AI, and emerging technology. Founder of Joy Tech." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://daigan.xyz" />
        <meta property="og:image" content="https://daigan.xyz/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@0xDaig" />
        <meta name="twitter:title" content="Daigan — Founder. Builder. Thinker." />
        <meta name="twitter:description" content="Startup entrepreneur at the intersection of digital assets, AI, and emerging technology. Founder of Joy Tech." />
        <meta name="twitter:image" content="https://daigan.xyz/og-image.png" />
      </Helmet>

      <div className="flex flex-col gap-32">
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row md:items-end justify-between gap-10 pt-10">
          {/* Text side */}
          <div className="flex flex-col gap-6 flex-1">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-6xl md:text-8xl font-serif font-light tracking-tight text-[--color-ink]"
            >
              Daigan
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-4 max-w-xl"
            >
              <p className="text-xl md:text-2xl font-serif italic text-[--color-ink-light]">
                Founder. Builder. Thinker.
              </p>
              <p className="text-lg leading-relaxed text-[--color-ink-light]">
                Startup entrepreneur working at the intersection of digital assets, AI, and emerging technology.
                Founder of Joy Tech. Building at the edge of what's possible, and writing about it along the way.
              </p>
              <div className="mt-4">
                <a href="#work" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[--color-ink] text-[--color-bg-warm] text-sm font-medium hover:bg-[--color-accent] transition-colors duration-300">
                  See my work ↓
                </a>
              </div>
            </motion.div>
          </div>

          {/* Portrait */}
          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="shrink-0 blob-portrait-wrapper w-64 md:w-72"
          >
            <svg
              className="blob-portrait"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
              aria-labelledby="t"
            >
              <image
                href="/Daigan Manga Headshot BW 2026.png"
                width="200" height="200"
                preserveAspectRatio="xMidYMid slice"
                clipPath="url(#blobClip)"
                className="grayscale"
              />
              <clipPath id="blobClip">
                <path d="M43.1,-68.5C56.2,-58.6,67.5,-47.3,72.3,-33.9C77.2,-20.5,75.5,-4.9,74.2,11.3C72.9,27.6,71.9,44.5,63.8,57.2C55.7,69.8,40.6,78.2,25.5,79.2C10.4,80.1,-4.7,73.6,-20.9,69.6C-37.1,65.5,-54.5,63.9,-66,54.8C-77.5,45.8,-83.2,29.3,-85.7,12.3C-88.3,-4.8,-87.7,-22.3,-79.6,-34.8C-71.5,-47.3,-55.8,-54.9,-41.3,-64.2C-26.7,-73.6,-13.4,-84.7,0.8,-86C15,-87.2,29.9,-78.5,43.1,-68.5Z"
                  transform="translate(100 100)" />
              </clipPath>

              <path
                className="blob"
                d="M43.1,-68.5C56.2,-58.6,67.5,-47.3,72.3,-33.9C77.2,-20.5,75.5,-4.9,74.2,11.3C72.9,27.6,71.9,44.5,63.8,57.2C55.7,69.8,40.6,78.2,25.5,79.2C10.4,80.1,-4.7,73.6,-20.9,69.6C-37.1,65.5,-54.5,63.9,-66,54.8C-77.5,45.8,-83.2,29.3,-85.7,12.3C-88.3,-4.8,-87.7,-22.3,-79.6,-34.8C-71.5,-47.3,-55.8,-54.9,-41.3,-64.2C-26.7,-73.6,-13.4,-84.7,0.8,-86C15,-87.2,29.9,-78.5,43.1,-68.5Z"
                transform="translate(100 100)"
                fill="none"
              />
              <path
                id="text" d="M43.1,-68.5C56.2,-58.6,67.5,-47.3,72.3,-33.9C77.2,-20.5,75.5,-4.9,74.2,11.3C72.9,27.6,71.9,44.5,63.8,57.2C55.7,69.8,40.6,78.2,25.5,79.2C10.4,80.1,-4.7,73.6,-20.9,69.6C-37.1,65.5,-54.5,63.9,-66,54.8C-77.5,45.8,-83.2,29.3,-85.7,12.3C-88.3,-4.8,-87.7,-22.3,-79.6,-34.8C-71.5,-47.3,-55.8,-54.9,-41.3,-64.2C-26.7,-73.6,-13.4,-84.7,0.8,-86C15,-87.2,29.9,-78.5,43.1,-68.5Z"
                transform="translate(100 100)"
                fill="none" stroke="none"
                pathLength="100"
              />

              <text className="text-content">
                <textPath href="#text" startOffset="0%">✦ FOUNDER. BUILDER. THINKER. ✦ FOUNDER. BUILDER. THINKER. ✦ FOUNDER. BUILDER. THINKER.
                  <animate attributeName="startOffset" from="0%" to="100%" dur="20s" repeatCount="indefinite" />
                </textPath>
                <textPath href="#text" startOffset="100%">✦ FOUNDER. BUILDER. THINKER. ✦ FOUNDER. BUILDER. THINKER. ✦ FOUNDER. BUILDER. THINKER.
                  <animate attributeName="startOffset" from="-100%" to="0%" dur="20s" repeatCount="indefinite" />
                </textPath>
              </text>
            </svg>
          </motion.div>
        </section>

        {/* About Section */}
        <section className="flex flex-col gap-6">
          <h2 className="text-sm font-medium tracking-widest uppercase text-[--color-ink-light] mb-4">About</h2>
          <div className="font-serif text-lg text-[--color-ink] leading-relaxed max-w-2xl flex flex-col gap-4">
            <p>
              I'm the founder of Joy Tech, where we're building infrastructure for the next generation of digital experiences.
              My work sits at the edges of digital assets and AI, with a focus on how these technologies actually create value for people.
            </p>
            <p>
              Right now I'm based in Japan, balancing startup life with a genuine love of language and culture. I'm actively
              studying for the JLPT, and I find the best ideas tend to come from mixing disciplines — hardware and digital assets,
              linguistics and systems design.
            </p>
          </div>
        </section>

        {/* Work / Projects Section */}
        <section id="work" className="flex flex-col gap-8">
          <h2 className="text-sm font-medium tracking-widest uppercase text-[--color-ink-light] mb-2">Selected Work</h2>

          <div className="grid grid-cols-1 gap-6">
            {/* Joy Tech - Lead Card */}
            <div className="group relative bg-white p-8 rounded-3xl shadow-sm border border-[--color-ink]/5 hover:shadow-md transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-serif font-medium text-[--color-ink]">Joy Tech</h3>
                  <p className="text-base text-[--color-ink-light] mt-1">Founder & CEO</p>
                </div>
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-[--color-bg-warm] text-xs font-medium text-[--color-ink-light] border border-[--color-ink]/10">
                  Flagship Project
                </span>
              </div>
              <p className="text-base text-[--color-ink-light] leading-relaxed mb-6">
                Building JOY Genesis, the world's first GameFi hardware console. We're making physical devices and digital ownership feel like one thing.
              </p>
              <a href="https://playonjoy.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-[--color-ink] group-hover:text-[--color-accent] transition-colors">
                Visit Project <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Laser Digital - Secondary Card */}
            <div className="group relative bg-transparent p-8 rounded-3xl border border-[--color-ink]/10 hover:bg-white hover:shadow-sm transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-serif font-medium text-[--color-ink]">Laser Digital</h3>
                  <p className="text-base text-[--color-ink-light] mt-1">Content Strategy</p>
                </div>
              </div>
              <p className="text-[--color-ink-light] leading-relaxed text-base">
                Content strategy for Laser Digital, Nomura's institutional digital asset arm. Shaped the CEO's public narrative and built thought leadership content for senior audiences across the institutional digital assets space.
              </p>
            </div>

            {/* Japan / JLPT - Lifestyle Card */}
            <div className="group relative bg-transparent p-8 rounded-3xl border border-[--color-ink]/10 hover:bg-white hover:shadow-sm transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-serif font-medium text-[--color-ink]">The Japan Chapter</h3>
                  <p className="text-base text-[--color-ink-light] mt-1">Personal Pursuit</p>
                </div>
              </div>
              <p className="text-[--color-ink-light] leading-relaxed text-base">
                Living in Japan and studying the language seriously. I'm working towards my next JLPT level and find the whole process of language acquisition genuinely fascinating as a systems challenge.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Section — hidden until content is ready */}
        {/* 
        <section className="flex flex-col gap-8">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-sm font-medium tracking-widest uppercase text-[--color-ink-light]">Writing</h2>
          </div>
          <div className="flex flex-col gap-12">
            {posts.map((post) => (
              <article key={post.slug} className="group flex flex-col gap-3">
                <p className="text-xs font-mono text-[--color-ink-light] uppercase tracking-wider">{post.date}</p>
                <Link to={`/blog/${post.slug}`} className="block">
                  <h3 className="text-2xl font-serif font-medium text-[--color-ink] group-hover:text-[--color-accent] transition-colors">
                    {post.title}
                  </h3>
                </Link>
                <p className="text-[--color-ink-light] leading-relaxed">
                  {post.excerpt}
                </p>
              </article>
            ))}
          </div>
        </section>
        */}
      </div>
    </>
  );
}
