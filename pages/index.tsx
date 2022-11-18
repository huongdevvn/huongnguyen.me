import Head from 'next/head';
import About from '../components/about';
import Contact from '../components/contact';
import Container from '../components/container';
import Footer from '../components/footer';
import Header from '../components/header';
import Projects from '../components/projects';

const HomePage = () => {
  return (
    <div>
      <Head>
        <title>Huong Nguyen | Front-end Engineer</title>
      </Head>
      <div className="bg-primary-2">
        <Container>
          <Header />

          <div className="py-16">
            <About />

            <div className="mt-16">
              <Projects />
            </div>

            <div className="mt-16">
              <Contact />
            </div>
          </div>
          <Footer />
        </Container>
      </div>
    </div>
  );
};

export default HomePage;
