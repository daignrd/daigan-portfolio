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
              My primary focus is Joy Tech. We are heads down building JOY Genesis, refining the hardware prototypes, and expanding our GameFi ecosystem. The intersection of physical hardware and digital economies is proving to be as challenging as it is exciting.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-serif font-medium text-[--color-ink]">Advising & Strategy</h2>
            <p className="text-[--color-ink-light] leading-relaxed">
              Continuing my work as a content strategist for Laser Digital (Nomura). I spend a portion of my week shaping narratives for institutional digital assets and ghostwriting thought leadership.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-serif font-medium text-[--color-ink]">Life in Japan</h2>
            <p className="text-[--color-ink-light] leading-relaxed">
              Living in Japan and actively studying for the next level of the JLPT. Treating language acquisition as a daily discipline. It provides a great mental counterbalance to startup building.
            </p>
          </div>
        </section>
      </motion.div>
    </>
  );
}
