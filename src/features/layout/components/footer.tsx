import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="w-full py-12 px-8 md:px-12 font-primary text-zinc-500 bg-white dark:bg-[#060608] border-t border-zinc-100 dark:border-zinc-900 transition-colors flex justify-center">
      <p className="tracking-[0.4em] text-[11px] uppercase text-zinc-300 dark:text-zinc-800 text-center">
        Built with love from Vietnam 🇻🇳
      </p>
    </footer>
  );
};

export default Footer;
