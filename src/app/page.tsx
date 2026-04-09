"use client";

import Script from 'next/script';
import { useCallback, useMemo, useRef } from 'react';
import { About, Projects, Contact } from '~features/portfolio';
import { Header, Footer, Container } from '~features/layout';

const HomePage = () => {
  const aboutSectionRef = useRef<HTMLDivElement | null>(null);
  const projectsSectionRef = useRef<HTMLDivElement | null>(null);
  const contactSectionRef = useRef<HTMLDivElement | null>(null);

  const sections = useMemo(() => [
    { name: 'about', ref: aboutSectionRef },
    { name: 'projects', ref: projectsSectionRef },
    { name: 'contact', ref: contactSectionRef }
  ], [aboutSectionRef, projectsSectionRef, contactSectionRef]);

  const scrollToSection = useCallback((name: string) => {
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
  }, [sections]);

  return (
    <main className="font-primary">
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-HBQVT4HVDF"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){window.dataLayer.push(arguments);}
        gtag('js', new Date());

          gtag('config', 'G-HBQVT4HVDF');
      `}
      </Script>

      <Container>
        <Header onScrollToSection={scrollToSection} />

        <div className="flex flex-col">
          <About ref={aboutSectionRef} />

          <Projects ref={projectsSectionRef} />

          <Contact ref={contactSectionRef} />
        </div>

        <Footer />
      </Container>
    </main>
  );
};

export default HomePage;
