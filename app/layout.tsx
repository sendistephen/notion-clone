import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { ConvexClientProvider } from '@/components/providers/convex-provider';
import { Toaster } from 'sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'jotion clone',
  description: 'Connected workspace where better,work collaboration happens.',
  // Define your favicon.ico path if its not in the app dir
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme:light)',
        url: '/logo.svg',
        href: '/logo.svg',
      },
      {
        media: '(prefers-color-scheme:dark)',
        url: '/logo-dark.svg',
        href: '/logo-dark.svg',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className} suppressHydrationWarning>
        {
          <ConvexClientProvider>
            <Toaster />
            <ThemeProvider
              attribute='class'
              defaultTheme='system'
              enableSystem
              disableTransitionOnChange
              storageKey='jotion-theme-2'
            >
              {children}
            </ThemeProvider>
          </ConvexClientProvider>
        }
      </body>
    </html>
  );
}
