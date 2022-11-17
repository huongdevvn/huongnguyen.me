import Link from 'next/link';

const Header = () => {
  return (
    <header className="flex justify-between py-4 border-b border-line">
      <Link href="/">
        <p className="uppercase text-secondary-1 typo-body">huongnguyen.me</p>
      </Link>

      <div className="flex">
        <Link href="#about" scroll={false}>
          <p className="text-secondary-1 typo-body hover:text-secondary-4">
            About
          </p>
        </Link>
        <p className="text-secondary-1 typo-body mx-2">•</p>
        <Link href="#projects" scroll={false}>
          <p className="text-secondary-1 typo-body hover:text-secondary-4">
            Projects
          </p>
        </Link>
        <p className="text-secondary-1 typo-body mx-2">•</p>
        <Link href="#contact" scroll={false}>
          <p className="text-secondary-1 typo-body hover:text-secondary-4">
            Contact
          </p>
        </Link>
      </div>
    </header>
  );
};

export default Header;
