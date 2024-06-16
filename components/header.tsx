import Link from 'next/link';

type HeaderProps = {
  onScrollToSection: (name: string) => void;
};

const Header = ({ onScrollToSection }: HeaderProps) => {
  return (
    <header className="flex justify-between bg-primary-2 py-4 border-b-2 border-line sticky top-0 z-10">
      <Link href="/">
        <p className="uppercase text-secondary-1 typo-body">huong.dev</p>
      </Link>

      <nav className="sm:flex hidden">
        <button onClick={() => onScrollToSection('about')}>
          <p className="text-secondary-1 typo-body hover:text-secondary-4">
            About
          </p>
        </button>
        <p className="text-secondary-1 typo-body mx-2">•</p>
        <button onClick={() => onScrollToSection('projects')}>
          <p className="text-secondary-1 typo-body hover:text-secondary-4">
            Projects
          </p>
        </button>
        <p className="text-secondary-1 typo-body mx-2">•</p>

        <button onClick={() => onScrollToSection('contact')}>
          <p className="text-secondary-1 typo-body hover:text-secondary-4">
            Contact
          </p>
        </button>
      </nav>
    </header>
  );
};

export default Header;
