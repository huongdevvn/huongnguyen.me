import {
  Container,
  FooterWrapper,
  FooterContents,
  Line,
} from "./Footer.styled";

const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <Line />

        <FooterContents>
          <p>Built with Next.js, TailwindCSS and Styled Components</p>

          <div>
            <a
              href="https://linkedin.com/in/huongdevvn"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/huongdevvn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </div>
        </FooterContents>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
