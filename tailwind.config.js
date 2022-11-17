const { fontFamily } = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

const typographyPlugin = plugin(({ addComponents }) => {
  const components = {
    '.typo-headline': {
      fontFamily: 'var(--firacode-font)',
      fontWeight: 450,
      fontSize: '62px',
      lineHeight: '76px'
    },
    '.typo-subheadline': {
      fontFamily: 'var(--firacode-font)',
      fontWeight: 450,
      fontSize: '32px',
      lineHeight: '38px'
    },
    '.typo-body': {
      fontFamily: 'var(--firacode-font)',
      fontWeight: 450,
      fontSize: '18px',
      lineHeight: '24px'
    },
    '.typo-label': {
      fontFamily: 'var(--firacode-font)',
      fontWeight: 450,
      fontSize: '16px',
      lineHeight: '20px'
    },
    '.typo-label-2': {
      fontFamily: 'var(--firacode-font)',
      fontWeight: 450,
      fontSize: '14px',
      lineHeight: '18px'
    }
  };

  addComponents(components, {
    variants: ['responsive']
  });
});

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['var(--firacode-font)', ...fontFamily.sans]
      },
      colors: {
        'primary-1': '#01080e',
        'primary-2': '#011627',
        'primary-3': '#011221',
        'secondary-1': '#607b96',
        'secondary-2': '#3c9d93',
        'secondary-3': '#4d5bce',
        'secondary-4': '#ffffff',
        'accent-1': '#fea55f',
        'accent-2': '#43d9ad',
        'accent-3': '#e99287',
        'accent-4': '#c98bdf',
        line: '#1e2d3d'
      },
      container: {
        padding: '2rem'
      }
    }
  },
  future: { hoverOnlyWhenSupported: true },
  plugins: [require('@tailwindcss/line-clamp'), typographyPlugin]
};
