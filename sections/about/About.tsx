// @ts-nocheck

import { Wrapper, Container } from "./About.styled";
import { Element as ScrollElement } from "react-scroll";
import Fade from "react-reveal/Fade";

const About = () => {
  return (
    <ScrollElement name='about'>
      <Wrapper>
        <Container>
          <div>
            <Fade top delay={500}>
              <h1>
                <span role='img' aria-label='waving emoji'>
                  👋
                </span>{" "}
                Hi there.
              </h1>
            </Fade>

            <Fade bottom>
              <h2>I&apos;m Huong Nguyen.</h2>
              <h3>
                Front-end Engineer based in Ho Chi Minh City. 🇻🇳
              </h3>
            </Fade>

            <div>
              <Fade delay={500}>
                <p>
                A proactive and enthusiastic front-end engineer with 6+ years of experience in a variety of big products and technologies from Crypto Trading Platform to FinTech, eCommerce, and Healthcare Platform.
                </p>
                <p>
                I love to write code in a high-paced and challenging environment with an emphasis on using best practices to develop high-quality products. I enjoy learning new technologies and share knowledge with the rest of the team
                </p>
                
                <a
                  href='https://linkedin.com/in/huonghk'
                  target='_blank'
                  rel='noreferrer'
                >
                  Click here to view my LinkedIn!
                </a>

              </Fade>
            </div>
          </div>
        </Container>
      </Wrapper>
    </ScrollElement>
  );
};

export default About;
