import { Link, Outlet } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col max-w-3xl mx-auto px-6 py-12 md:py-20">
      <header className="flex items-center justify-between mb-20">
        <Link to="/" className="font-serif text-2xl font-medium tracking-tight hover:opacity-70 transition-opacity">
          Daigan
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium tracking-wide uppercase text-[--color-ink-light]">
          <Link to="/" className="hover:text-[--color-ink] transition-colors">Home</Link>
          <Link to="/now" className="hover:text-[--color-ink] transition-colors">Now</Link>
          <Link to="/reading" className="hover:text-[--color-ink] transition-colors">Reading</Link>
        </nav>
      </header>

      <main className="flex-grow">
        <Outlet />
      </main>

      <footer className="mt-32 pt-12 border-t border-[--color-ink]/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-sm text-[--color-ink-light]">
        <div className="flex flex-col gap-2">
          <p className="font-serif italic text-lg text-[--color-ink]">Let's build something.</p>
        </div>

        <div className="flex items-center gap-6">
          <a href="https://www.linkedin.com/in/daigan-reid/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-[--color-ink] transition-colors">
            LinkedIn <ArrowUpRight className="w-3 h-3" />
          </a>
          <a href="https://x.com/0xDaig" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-[--color-ink] transition-colors">
            X <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>
      </footer>
      <div className="mt-12 text-center text-xs text-[--color-ink-light]/60">
        &copy; {new Date().getFullYear()} Daigan. All rights reserved.
      </div>
    </div>
  );
}
