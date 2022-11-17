import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html className="scroll-smooth antialiased">
      <Head>
        <meta
          name="description"
          content="A proactive and enthusiastic front-end engineer with 6+ years of experience in a variety of big products and technologies from Crypto Trading Platform to FinTech, eCommerce, and Healthcare Platform."
        />
        <meta name="author" content="Huong Nguyen" />

        {/* Open Graph SEO */}
        <meta
          property="og:title"
          content="Huong Nguyen | Front-end Engineer"
          key="ogtitle"
        />
        <meta
          property="og:description"
          content="A proactive and enthusiastic front-end engineer with 6+ years of experience in a variety of big products and technologies from Crypto Trading Platform to FinTech, eCommerce, and Healthcare Platform."
          key="ogdesc"
        />
        <meta property="og:url" content="https://huongnguyen.me/" key="ogurl" />
        <meta property="og-locale" content="en-GB" />
        <meta property="og-type" content="website" />
        <meta property="og:image" content="/avatar.webp" key="ogimage" />
        <meta property="og:site_name" content="Huong Nguyen" key="ogsitename" />
        {/* End of Open Graph SEO */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
