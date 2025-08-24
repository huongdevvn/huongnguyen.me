import Link from 'next/link';
import { forwardRef } from 'react';
import UpworkIcon from '../public/ic-upwork.svg';
import GithubIcon from '../public/ic-github.svg';
import LinkedInIcon from '../public/ic-linkedin.svg';

const About = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref}>
      <div className="xl:grid xl:grid-cols-2 xl:gap-x-10">
        <div>
          <p className="typo-body text-secondary-4">Hi there!👋 I am</p>
          <p className="typo-headline text-secondary-4">{`Huong Nguyen.`}</p>
          <p className="typo-subheadline text-secondary-3">{`> Front-end Lead`}</p>
          <p className="typo-body text-secondary-1 mt-4">
           With 9 years of experience delivering scalable web applications in fast-paced startup environments. My expertise spans Crypto Trading, FinTech, eCommerce, Healthcare and PropTech. 
            <br /> <br />I specialize in front-end architecture and modern web technologies, with a strong track record of mentoring teams and collaborating with stakeholders to ship exceptional user experiences.
          </p>
          <div className="flex gap-x-4 mt-8 items-center justify-start">
            <Link href="https://linkedin.com/in/huongdevvn" target="_blank">
              <span className="w-8 h-8 fill-secondary-1 opacity-40 hover:opacity-100 inline-block">
                <LinkedInIcon />
              </span>
            </Link>

            <Link href="https://github.com/huongdevvn" target="_blank">
              <span className="w-8 h-8 fill-secondary-1 opacity-40 hover:opacity-100 inline-block">
                <GithubIcon />
              </span>
            </Link>

            <Link href="https://www.upwork.com/freelancers/~01320a9dbc0e1a20aa" target="_blank">
              <span className="w-8 h-7 fill-secondary-1 opacity-40 hover:opacity-100 inline-block">
                <UpworkIcon />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
});

About.displayName = 'About';

export default About;
