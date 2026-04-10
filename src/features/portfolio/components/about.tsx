import Link from 'next/link';
import { forwardRef } from 'react';
import UpworkIcon from '~public/ic-upwork.svg';
import GithubIcon from '~public/ic-github.svg';
import LinkedInIcon from '~public/ic-linkedin.svg';

const About = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} className="p-8 md:p-12 lg:p-16 border-b border-zinc-300 dark:border-zinc-900 bg-zinc-50 dark:bg-zinc-950 transition-colors">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4 mb-2">
          <span className="w-12 h-[1px] bg-lime-500 dark:bg-lime-400"></span>
          <p className="text-zinc-500 dark:text-zinc-300 font-primary text-sm uppercase tracking-[0.25em]">Front-end Architect // Lead Engineer</p>
        </div>
        
        <h1 className="text-zinc-950 dark:text-zinc-100 font-primary font-medium text-4xl md:text-6xl lg:text-7xl tracking-tighter leading-none mt-4">
          Huong Nguyen.
        </h1>
        
        <div className="max-w-2xl mt-8">
          <p className="font-primary text-base text-zinc-800 dark:text-zinc-300 leading-relaxed border-l-2 border-zinc-300 dark:border-zinc-800 pl-6 mb-8">
            With 10 years of experience delivering scalable web applications in fast-paced startup environments. My expertise spans Crypto Trading, FinTech, eCommerce, Healthcare and PropTech. 
            <br /> <br />I specialize in front-end architecture and modern web technologies, with a strong track record of mentoring teams and collaborating with stakeholders to ship exceptional user experiences.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-8 border-t border-zinc-300 dark:border-zinc-900">
            <div>
              <p className="text-zinc-400 dark:text-zinc-600 text-[10px] uppercase tracking-widest mb-1">Experience</p>
              <p className="text-zinc-900 dark:text-zinc-300 font-primary text-sm uppercase font-bold">9+ Years</p>
            </div>

            <div>
              <p className="text-zinc-400 dark:text-zinc-600 text-[10px] uppercase tracking-widest mb-1">Location</p>
              <p className="text-zinc-900 dark:text-zinc-300 font-primary text-sm uppercase font-bold">HCMC, VN</p>
            </div>
            <div>
              <p className="text-zinc-400 dark:text-zinc-600 text-[10px] uppercase tracking-widest mb-1">Status</p>
              <p className="text-zinc-950 dark:text-zinc-300 font-primary text-sm uppercase font-bold text-lime-600 dark:text-lime-400">Available</p>
            </div>
          </div>
        </div>

        <div className="flex gap-x-6 mt-12 items-center">
          <div className="flex items-center gap-3 pr-6 border-r border-zinc-200 dark:border-zinc-900">
            <span className="w-1.5 h-1.5 rounded-full bg-lime-500 dark:bg-lime-400 shadow-[0_0_8px_rgba(163,230,53,0.3)] dark:shadow-[0_0_8px_rgba(163,230,53,0.5)]"></span>
            <p className="text-zinc-500 dark:text-zinc-500 text-xs uppercase tracking-widest">Network / Social</p>
          </div>
          <Link href="https://linkedin.com/in/huongdevvn" target="_blank" className="group">
            <span className="w-5 h-5 fill-zinc-400 dark:fill-zinc-500 group-hover:fill-lime-600 dark:group-hover:fill-lime-400 transition-colors inline-block [&>svg]:w-full [&>svg]:h-full">
              <LinkedInIcon />
            </span>
          </Link>

          <Link href="https://github.com/huongdevvn" target="_blank" className="group">
            <span className="w-5 h-5 fill-zinc-400 dark:fill-zinc-500 group-hover:fill-lime-600 dark:group-hover:fill-lime-400 transition-colors inline-block [&>svg]:w-full [&>svg]:h-full">
              <GithubIcon />
            </span>
          </Link>

          <Link href="https://www.upwork.com/freelancers/~01320a9dbc0e1a20aa" target="_blank" className="group">
            <span className="w-5 h-5 fill-zinc-400 dark:fill-zinc-500 group-hover:fill-lime-600 dark:group-hover:fill-lime-400 transition-all duration-300 md:scale-[0.85] scale-[0.85] inline-block [&>svg]:w-full [&>svg]:h-full origin-center">
              <UpworkIcon />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
});

About.displayName = 'About';

export default About;
