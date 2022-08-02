export type projectType = {
  title: string;
  image: string;
  stack: string[];
  url: string;
  github: string;
  summary: string;
};

export const projects: projectType[] = [
  {
    title: "[E-Commerce] Panprices",
    image:
      "https://res.cloudinary.com/diqi0mq3a/image/upload/v1659428839/Screen_Shot_2022-08-02_at_15.27.14_wyedvu.png",
    stack: ["Next.js,", "Typescript", "TailwindCSS", "Cypress", "SEO"],
    url: "https://panprices.com/se-en/",
    github: "",
    summary:
      `I worked full-time remotely as a Front-end Architect. Panprices creates a hybrid marketplace that enables consumers to discover products, compare prices, and buy what they are looking for cheaper than in their local country.`
  },

  {
    title: "[Fintech] Ariya Digital",
    image:
      "https://res.cloudinary.com/diqi0mq3a/image/upload/c_scale,w_1888/v1659428614/ariya_hhok4w.jpg",
    stack: ["Next.js", "JavaScript", "Styled-Component", "GraphQL"],
    url: "https://www.linkedin.com/company/ariyadigital/",
    github: "#",
    summary:
      "I worked full-time remotely as a Front-end Architect. Ariya Digital enables family offices and individual investors to invest purposefully in diversified impact assets around the world. It brings together impact domain experts, social entrepreneurs, impact funds, and investors interested in private assets with a double bottom line."
  },

  {
    title: "[Healthtech] SENS Motion®",
    image:
      "https://res.cloudinary.com/diqi0mq3a/image/upload/v1659428281/sens_jtlglq.jpg",
    stack: ["React.js", "Ionic", "Typescript", "TailwindCSS", "Cypress"],
    url: "https://sens.dk/en/company-profile/",
    github: "#",
    summary:
      "I worked remotely as a Front-end Engineer. SENS Innovation ApS develops medical sensor products, based on advanced sensor technology, for monitoring of physical activity with patients."
  },

  {
    title: "[Fintech] Liquid - Crypto Trading Platform",
    image:
      "https://res.cloudinary.com/diqi0mq3a/image/upload/v1659428057/Liquid_gdjkty.webp",
    stack: ["React.js", "Javascript", "CSS Modules", "WebSocket", "RestAPI"],
    url: "https://app.liquid.com/exchange",
    github: "#",
    summary:
      "Joined team from the early-stage as a Front-end Engineer. Liquid is one of the world's largest cryptocurrency-fiat exchange platforms serving millions of customers worldwide."
  }
];
