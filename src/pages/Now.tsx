import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';

export default function Now() {
  return (
    <>
      <Helmet>
        <title>Now — Daigan</title>
        <meta name="description" content="What Daigan is currently building, studying, and thinking about." />
        <meta property="og:title" content="Now — Daigan" />
        <meta property="og:description" content="What Daigan is currently building, studying, and thinking about." />
        <meta property="og:url" content="https://daigan.xyz/now" />
        <meta property="og:image" content="https://daigan.xyz/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@0xDaig" />
      </Helmet>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-12"
      >
        <header className="flex flex-col gap-4">
          <h1 className="text-4xl md:text-5xl font-serif font-medium text-[--color-ink] leading-tight">
            What I'm doing now
          </h1>
          <p className="text-[--color-ink-light] italic font-serif text-lg">
            Updated February 2026, from Japan.
          </p>
        </header>

        <section className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-serif font-medium text-[--color-ink]">Building Joy Tech</h2>
            <p className="text-[--color-ink-light] leading-relaxed">
              Joy Tech is where most of my time and energy is going right now. We're deep in building JOY Genesis, refining the hardware prototypes, and figuring out how to make a GameFi ecosystem that actually works. It's hard, but that's kind of the point.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-serif font-medium text-[--color-ink]">Life in Japan</h2>
            <p className="text-[--color-ink-light] leading-relaxed">
              Living in Japan and genuinely loving it. I study Japanese every day and I'm working towards my next JLPT level. There's something nice about having a completely different kind of challenge to sink your teeth into alongside the startup work.
            </p>
          </div>
        </section>
      </motion.div>
    </>
  );
}
