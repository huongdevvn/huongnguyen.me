import Link from 'next/link';
import { forwardRef } from 'react';

const Contact = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} className="p-8 md:p-12 lg:p-16 border-b border-zinc-200 dark:border-zinc-900 bg-white dark:bg-[#060608] transition-colors">
      <div className="flex items-center gap-4 mb-4">
        <span className="w-8 h-[1px] bg-lime-400"></span>
        <p className="text-zinc-600 dark:text-zinc-300 font-primary text-sm uppercase tracking-[0.25em]">Get In Touch</p>
      </div>

      <div className="mt-12 flex flex-col items-center justify-center text-center max-w-lg mx-auto">
        <h2 className="font-primary text-3xl md:text-5xl font-medium text-zinc-900 dark:text-zinc-100 tracking-tighter leading-tight mb-6">
          Let&apos;s talk.
        </h2>
        <p className="font-primary text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-10 uppercase tracking-widest opacity-80">
          Feel free to reach out for collaborations or just to say hi!
        </p>
        
        <Link 
          href="mailto:huonghk.uit@gmail.com"
          className="px-8 py-4 border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 hover:border-lime-500 dark:hover:border-lime-400 hover:bg-lime-500 dark:hover:bg-lime-400 hover:text-zinc-950 text-zinc-700 dark:text-zinc-300 font-primary font-bold text-xs uppercase tracking-[0.2em] transition-all duration-300"
        >
          Send Message
        </Link>
      </div>
    </div>
  );
});

Contact.displayName = 'Contact';

export default Contact;
