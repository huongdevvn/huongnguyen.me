import { Fira_Code } from 'next/font/google'
import '../styles/globals.css';
import type { AppProps } from 'next/app';

const FireCodeFont = Fira_Code({
  subsets: ['latin']
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --firacode-font: ${FireCodeFont.style.fontFamily};
          }
        `}
      </style>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
