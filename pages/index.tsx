import Head from 'next/head';
import { useRef } from 'react';
import About from '../components/about';
import Contact from '../components/contact';
import Container from '../components/container';
import Footer from '../components/footer';
import Header from '../components/header';
import Projects from '../components/projects';

const HomePage = () => {
  const aboutSectionRef = useRef<HTMLDivElement | null>(null);
  const projectsSectionRef = useRef<HTMLDivElement | null>(null);
  const contactSectionRef = useRef<HTMLDivElement | null>(null);

  const sections = [
    { name: 'about', ref: aboutSectionRef },
    { name: 'projects', ref: projectsSectionRef },
    { name: 'contact', ref: contactSectionRef }
  ];

  const scrollToSection = (name: string) => {
    const section = sections.find(section => section.name == name);

    if (section && section.ref) {
      window.scrollTo({
        behavior: 'smooth',
        top:
          section.ref.current!.getBoundingClientRect().top -
          document.body.getBoundingClientRect().top -
          58 -
          64
      });
    }
  };

  return (
    <div>
      <Head>
        <title>Huong Nguyen | Front-end Engineer</title>
      </Head>
      <div className="bg-primary-2">
        <Container>
          <Header onScrollToSection={scrollToSection} />

          <div className="py-16">
            <About ref={aboutSectionRef} />

            <div className="mt-16">
              <Projects ref={projectsSectionRef} />
            </div>

            <div className="mt-16">
              <Contact ref={contactSectionRef} />
            </div>
          </div>

          <Footer />
        </Container>
      </div>
    </div>
  );
};

export default HomePage;
