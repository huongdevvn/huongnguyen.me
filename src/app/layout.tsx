import type { Metadata } from 'next';
import { Fira_Code } from 'next/font/google';
import '@/styles/globals.css';

const fireCode = Fira_Code({
  subsets: ['latin'],
  variable: '--firacode-font',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://huongnguyen.me'),
  title: 'Huong Nguyen | Front-end Engineer',
  description: 'A proactive and enthusiastic front-end engineer with 6+ years of experience in a variety of big products and technologies from Crypto Trading Platform to FinTech, eCommerce, and Healthcare Platform.',
  authors: [{ name: 'Huong Nguyen' }],
  openGraph: {
    title: 'Huong Nguyen | Front-end Engineer',
    description: 'A proactive and enthusiastic front-end engineer with 6+ years of experience in a variety of big products and technologies from Crypto Trading Platform to FinTech, eCommerce, and Healthcare Platform.',
    url: 'https://huongnguyen.me/',
    locale: 'en-GB',
    type: 'website',
    images: ['/avatar.webp'],
    siteName: 'Huong Nguyen',
  },
};

import { ThemeProvider } from '@/components/theme-provider';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth antialiased ${fireCode.variable}`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const theme = localStorage.getItem('theme') || 'dark';
                if (theme === 'dark') {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body className="bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-400 selection:bg-lime-400 selection:text-zinc-950 transition-colors duration-300">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
