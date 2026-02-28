import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';

interface Item {
    title: string;
    author?: string;
    type: 'Book' | 'Essay' | 'Film' | 'Podcast' | 'Video';
    note?: string;
    url?: string;
}

interface Category {
    label: string;
    items: Item[];
}

const list: Category[] = [
    {
        label: 'Technology & Web3',
        items: [
            {
                title: 'The Sovereign Individual',
                author: 'James Dale Davidson & William Rees-Mogg',
                type: 'Book',
                note: "Written in 1997. It still holds up as probably the best framework I've found for understanding what digital networks actually do to power and money.",
            },
            {
                title: 'Zero to One',
                author: 'Peter Thiel',
                type: 'Book',
                note: "The clearest thing I've read on what it actually means to build something new rather than just iterating on what exists.",
            },
            {
                title: 'The Network State',
                author: 'Balaji Srinivasan',
                type: 'Book',
                note: "A bold thesis on how online communities might evolve into something closer to sovereign entities. Free to read online and worth the time.",
                url: 'https://thenetworkstate.com',
            },
        ],
    },
    {
        label: 'Language & Culture',
        items: [
            {
                title: 'Remembering the Kanji',
                author: 'James W. Heisig',
                type: 'Book',
                note: "The book that finally made kanji click for me. It treats them as building blocks rather than things to memorise, which changes everything.",
            },
            {
                title: 'The Art of Learning',
                author: 'Josh Waitzkin',
                type: 'Book',
                note: "Technically about chess and tai chi, but really about how to get good at learning things. Changed how I approach studying Japanese.",
            },
        ],
    },
    {
        label: 'Business & Strategy',
        items: [
            {
                title: "Poor Charlie's Almanack",
                author: 'Charlie Munger',
                type: 'Book',
                note: "Charlie Munger on how to actually think well. The inversion principle alone makes it worth picking up.",
            },
            {
                title: 'High Output Management',
                author: 'Andy Grove',
                type: 'Book',
                note: "Probably the most practical book on running teams I've found. Written for Intel managers but honestly applies everywhere.",
            },
        ],
    },
];

const typeColors: Record<Item['type'], string> = {
    Book: 'bg-amber-50 text-amber-700 border-amber-200',
    Essay: 'bg-sky-50 text-sky-700 border-sky-200',
    Film: 'bg-violet-50 text-violet-700 border-violet-200',
    Podcast: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    Video: 'bg-rose-50 text-rose-700 border-rose-200',
};

export default function Reading() {
    return (
        <>
            <Helmet>
                <title>Reading — Daigan</title>
                <meta name="description" content="Books, essays, and ideas that have shaped how Daigan thinks about technology, language, and building." />
                <meta property="og:title" content="Reading — Daigan" />
                <meta property="og:description" content="Books, essays, and ideas that have shaped how Daigan thinks." />
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
                        Reading & Watching
                    </h1>
                    <p className="text-[--color-ink-light] font-serif italic text-lg max-w-xl">
                        Things I've read and found genuinely useful. A mix of tech, language, business, and whatever else caught my attention.
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
                                        className="group flex flex-col gap-2 p-6 rounded-2xl border border-[--color-ink]/8 hover:bg-white hover:shadow-sm transition-all duration-300"
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
                                            <p className="text-sm text-[--color-ink-light] leading-relaxed mt-1">{item.note}</p>
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
