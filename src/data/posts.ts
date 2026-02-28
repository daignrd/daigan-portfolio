export interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
}

export const posts: Post[] = [
  {
    slug: 'building-at-the-edge',
    title: 'Building at the Edge: Reflections on AI and Hardware',
    date: 'February 2026',
    excerpt: 'Thoughts on the intersection of GameFi, hardware, and why we are building JOY Genesis.',
    content: `
The landscape of technology is shifting beneath our feet. For the past year, I've been deeply immersed in building Joy Tech, specifically focusing on JOY Genesis—the world's first GameFi hardware console.

### Why Hardware?

In an era where software is eating the world, hardware remains the stubborn anchor to physical reality. But it's also the ultimate moat. When you combine the digital ownership mechanics of Web3 with a tangible device, you create an experience that cannot be replicated in a browser tab.

We are not just building a console; we are building a new paradigm for how players interact with digital economies.

### The AI Intersection

AI is the accelerant. Whether it's dynamic NPC generation, personalized game economies, or simply accelerating our own development cycles, AI is woven into the fabric of what we do. 

The most interesting companies of the next decade won't just be "AI companies" or "Crypto companies." They will be companies that use these technologies as invisible infrastructure to deliver magical experiences.

*More thoughts on this soon.*
    `
  },
  {
    slug: 'learning-japanese',
    title: 'Language as a System: My JLPT Journey',
    date: 'January 2026',
    excerpt: 'Approaching language learning with an engineering mindset.',
    content: `
Living in Japan has been a profound shift in perspective. But more than the cultural immersion, the process of learning Japanese has been a fascinating exercise in systems thinking.

### Deconstructing Kanji

I don't view Kanji as pictures to be memorized, but as a modular system of radicals. It's akin to understanding the component architecture of a complex software application. Once you see the underlying patterns, the complexity becomes manageable.

Currently preparing for the next JLPT level. It's a slow burn, a daily practice of compounding knowledge. Much like building a startup, there are no shortcuts—only consistent, focused effort.

*Focus on the process, and the outcome takes care of itself.*
    `
  }
];
