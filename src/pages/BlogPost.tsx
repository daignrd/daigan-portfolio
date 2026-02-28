import { useParams, Link } from 'react-router-dom';
import Markdown from 'react-markdown';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { posts } from '../data/posts';

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-3xl font-serif mb-4">Post not found</h1>
        <Link to="/" className="text-[--color-accent] underline underline-offset-4">Return home</Link>
      </div>
    );
  }

  return (
    <motion.article 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-8"
    >
      <Link to="/" className="inline-flex items-center gap-2 text-sm text-[--color-ink-light] hover:text-[--color-ink] transition-colors w-fit mb-8">
        <ArrowLeft className="w-4 h-4" /> Back
      </Link>
      
      <header className="flex flex-col gap-4 mb-8">
        <p className="text-sm font-mono text-[--color-ink-light] uppercase tracking-wider">{post.date}</p>
        <h1 className="text-4xl md:text-5xl font-serif font-medium text-[--color-ink] leading-tight">
          {post.title}
        </h1>
      </header>

      <div className="markdown-body">
        <Markdown>{post.content}</Markdown>
      </div>
    </motion.article>
  );
}
