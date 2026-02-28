import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';

interface Item {
    title: string;
    author?: string;
    type: 'Book' | 'Essay' | 'Film' | 'Podcast' | 'Game';
    note?: string;
    url?: string;
}

interface Category {
    label: string;
    items: Item[];
}

const list: Category[] = [
    {
        label: 'Reading',
        items: [
            {
                title: 'The Sovereign Individual',
                author: 'James Dale Davidson & William Rees-Mogg',
                type: 'Book',
                note: "Written in 1997. Still holds up as probably the best framework I've found for understanding what digital networks actually do to power and money.",
            },
            {
                title: 'The Almanac of Naval Ravikant',
                author: 'Eric Jorgenson',
                type: 'Book',
                note: "A collection of Naval's thinking on wealth, happiness, and how to live. The kind of book you return to rather than finish.",
            },
            {
                title: 'Fluent Forever',
                author: 'Gabriel Wyner',
                type: 'Book',
                note: "The most practical book I've found on language learning. Wyner dismantles how most people study and rebuilds it from the ground up. Directly applicable to learning Japanese.",
            },
            {
                title: 'The Book of Laughter and Forgetting',
                author: 'Milan Kundera',
                type: 'Book',
                note: "Part novel, part essay, part something else entirely. Kundera on memory, history, and what it means to forget. One of those books that changes how you think about storytelling.",
            },
        ],
    },
    {
        label: 'Gaming in Japanese',
        items: [
            {
                title: 'Clair Obscur: Expedition 33',
                type: 'Game',
                note: "Playing through in Japanese as immersive reading practice. The turn-based combat gives you time to actually process the text rather than skip it. Beautifully written game.",
            },
            {
                title: 'Ace Attorney Series',
                type: 'Game',
                note: "Probably the best language learning game I've found — wall-to-wall dialogue, courtroom Japanese, and character quirks that make vocabulary stick. Working through the series in Japanese from the beginning.",
            },
        ],
    },
];

const typeColors: Record<Item['type'], string> = {
    Book: 'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-500/10 dark:text-amber-400 dark:border-amber-500/20',
    Essay: 'bg-sky-50 text-sky-700 border-sky-200 dark:bg-sky-500/10 dark:text-sky-400 dark:border-sky-500/20',
    Film: 'bg-violet-50 text-violet-700 border-violet-200 dark:bg-violet-500/10 dark:text-violet-400 dark:border-violet-500/20',
    Podcast: 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/20',
    Game: 'bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-500/10 dark:text-rose-400 dark:border-rose-500/20',
};

export default function Reading() {
    return (
        <>
            <Helmet>
                <title>Reading — Daigan</title>
                <meta name="description" content="Books and games that are shaping how Daigan thinks and learns — including playing games in Japanese." />
                <meta property="og:title" content="Reading — Daigan" />
                <meta property="og:description" content="Books and games that are shaping how Daigan thinks and learns." />
                <meta property="og:url" content="https://daigan.xyz/reading" />
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
                        Reading & Playing
                    </h1>
                    <p className="text-[--color-ink-light] font-serif italic text-lg max-w-xl">
                        Things I'm reading and games I'm playing — a lot of the gaming is in Japanese, which is its own kind of studying.
                    </p>
                </header>

                <div className="flex flex-col gap-16">
                    {list.map((category) => (
                        <section key={category.label} className="flex flex-col gap-6">
                            <h2 className="text-sm font-medium tracking-widest uppercase text-[--color-ink-light]">
                                {category.label}
                            </h2>
                            <div className="flex flex-col gap-6">
                                {category.items.map((item) => (
                                    <div
                                        key={item.title}
                                        className="group flex flex-col gap-2 p-6 rounded-2xl border border-[--color-ink]/8 hover:bg-[--color-surface] hover:shadow-sm transition-all duration-300"
                                    >
                                        <div className="flex items-start justify-between gap-4">
                                            <div className="flex flex-col gap-1">
                                                {item.url ? (
                                                    <a
                                                        href={item.url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="font-serif text-lg font-medium text-[--color-ink] hover:text-[--color-accent] transition-colors"
                                                    >
                                                        {item.title}
                                                    </a>
                                                ) : (
                                                    <h3 className="font-serif text-lg font-medium text-[--color-ink]">{item.title}</h3>
                                                )}
                                                {item.author && (
                                                    <p className="text-sm text-[--color-ink-light]">{item.author}</p>
                                                )}
                                            </div>
                                            <span className={`shrink-0 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium border ${typeColors[item.type]}`}>
                                                {item.type}
                                            </span>
                                        </div>
                                        {item.note && (
                                            <p className="text-base text-[--color-ink-light] leading-relaxed mt-1">{item.note}</p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </section>
                    ))}
                </div>
            </motion.div>
        </>
    );
}
