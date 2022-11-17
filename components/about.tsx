import Link from 'next/link';
import FacebookIcon from '../public/ic-facebook.svg';
import GithubIcon from '../public/ic-github.svg';
import LinkedInIcon from '../public/ic-linkedin.svg';

const About = () => {
  return (
    <section id="about">
      <div className="xl:grid xl:grid-cols-2 xl:gap-x-10">
        <div>
          <p className="typo-body text-secondary-4">Hi there!👋 I am</p>
          <p className="typo-headline text-secondary-4">{`Huong Nguyen.`}</p>
          <p className="typo-subheadline text-secondary-3">{`> Front-end engineer`}</p>
          <p className="typo-body text-secondary-1 mt-4">
            A proactive and enthusiastic developer with 6+ years of experience
            in a variety of big products and technologies from Crypto Trading
            Platform to FinTech, eCommerce, and Healthcare Platform.
            <br /> <br />I love to write code in a high-paced and challenging
            environment with an emphasis on using best practices to develop
            high-quality products.
          </p>

          <div className="flex gap-x-4 mt-8">
            <Link href="https://linkedin.com/in/huongdevvn">
              <span className="w-8 h-8 fill-secondary-4 hover:fill-secondary-3 inline-block">
                <LinkedInIcon />
              </span>
            </Link>

            <Link href="https://github.com/huongdevvn">
              <span className="w-8 h-8 fill-secondary-4 hover:fill-secondary-3 inline-block">
                <GithubIcon />
              </span>
            </Link>

            <Link href="https://www.facebook.com/huonghk.311">
              <span className="w-8 h-8 fill-secondary-4 hover:fill-secondary-3 inline-block">
                <FacebookIcon />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
