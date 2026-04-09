'use client';

import Link from 'next/link';
import { useTheme } from '@/components/theme-provider';

type HeaderProps = {
  onScrollToSection: (name: string) => void;
};

const Header = ({ onScrollToSection }: HeaderProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="flex justify-between items-center bg-white/95 dark:bg-zinc-950/95 backdrop-blur-sm py-4 px-6 md:px-10 border-b border-zinc-200 dark:border-zinc-900 sticky top-0 z-50 transition-all">
      <Link href="/" className="group flex items-center">
        <span className="text-zinc-950 dark:text-zinc-100 font-bold tracking-tighter text-xl group-hover:text-lime-500 transition-colors duration-300 lowercase">
          huong<span className="text-lime-500 dark:text-lime-400">.dev</span>
        </span>
      </Link>

      <nav className="flex items-center gap-6 md:gap-10">
        <button onClick={() => onScrollToSection('about')} className="group flex items-center">
          <span className="text-zinc-500 dark:text-zinc-400 text-[11px] uppercase tracking-[0.2em] group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors">
            About<span className="text-lime-400 ml-1 opacity-0 group-hover:opacity-100 transition-opacity">_</span>
          </span>
        </button>

        <button onClick={() => onScrollToSection('projects')} className="group flex items-center">
          <span className="text-zinc-500 dark:text-zinc-400 text-[11px] uppercase tracking-[0.2em] group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors">
            Works<span className="text-lime-400 ml-1 opacity-0 group-hover:opacity-100 transition-opacity">_</span>
          </span>
        </button>

        <button onClick={() => onScrollToSection('contact')} className="group flex items-center">
          <span className="text-zinc-500 dark:text-zinc-400 text-[11px] uppercase tracking-[0.2em] group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors">
            Contact<span className="text-lime-400 ml-1 opacity-0 group-hover:opacity-100 transition-opacity">_</span>
          </span>
        </button>

        <button 
          onClick={toggleTheme}
          className="w-10 h-10 flex items-center justify-center border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 hover:border-lime-500 dark:hover:border-lime-400 transition-all rounded-sm group"
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? (
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-lime-400" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26 5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1Z" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-zinc-950 group-hover:stroke-lime-600 transition-colors" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
            </svg>
          )}
        </button>
      </nav>
    </header>
  );
};

export default Header;
