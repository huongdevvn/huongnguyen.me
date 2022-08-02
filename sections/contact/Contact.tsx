// @ts-nocheck

import { Wrapper, Container } from "./Contact.styled";
import Image from "next/image";
import Fade from "react-reveal/Fade";

import rick from "public/avatar.jpeg";

const Contact = () => (
  <Wrapper>
    <Container>
      <div>
        <h3>Get In Touch.</h3>
        <p>
          Feel free to reach out if you want to talk about anything!{" "}
          <span role="img" aria-label="waving emoji">
            😎
          </span>
        </p>

        <a href="mailto:huonghk.uit@gmail.com">huonghk.uit@gmail.com</a>
      </div>

      <div>
        <Fade left delay={500}>
          <Image
            src={rick}
            alt="Profile"
            placeholder="blur"
            className="rounded-full"
            objectFit="cover"
            width={200}
            height={200}
          />
        </Fade>
      </div>
    </Container>
  </Wrapper>
);

export default Contact;
