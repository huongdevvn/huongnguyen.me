import Head from 'next/head';

const SEO = () => (
  <Head>
    <title>Huong Nguyen | Front-end Engineer</title>
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
    <meta
      property="og:url"
      content="https://portfolio-ayodele.vercel.app/"
      key="ogurl"
    />
    <meta property="og-locale" content="en-GB" />
    <meta property="og-type" content="website" />
    <meta property="og:image" content="/laptop.jpg" key="ogimage" />
    <meta property="og:site_name" content="Huong Nguyen" key="ogsitename" />
    {/* End of Open Graph SEO */}

    
    <link rel="icon" href="/icon.png" />
  </Head>
);

export default SEO;
