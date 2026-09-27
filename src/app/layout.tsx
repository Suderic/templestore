import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { AuthProvider } from '@/context/AuthContext';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { DevBanner } from '@/components/layout/DevBanner';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Templestore — Premium App & Website Template Marketplace',
  description:
    'Curated, production-grade Next.js and React templates with instant QR code purchasing, glassmorphic UI, and 1 year of free updates.',
  keywords: ['Next.js templates', 'React marketplace', 'QR code purchasing', 'Glassmorphism', 'SaaS boilerplate'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..900;1,9..144,300..900&family=Manrope:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased selection:bg-indigo-500 selection:text-white">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange={false}>
          <AuthProvider>
            <DevBanner />
            <Navbar />
            <main className="flex-1 w-full relative">
              {/* Subtle ambient light glow orbs in the background */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] overflow-hidden pointer-events-none -z-10">
                <div className="absolute -top-40 left-1/4 w-96 h-96 bg-indigo-500/15 dark:bg-indigo-500/20 rounded-full blur-[100px]" />
                <div className="absolute top-20 right-1/4 w-96 h-96 bg-purple-500/15 dark:bg-purple-500/20 rounded-full blur-[120px]" />
                <div className="absolute top-48 left-1/2 -translate-x-1/2 w-[500px] h-60 bg-pink-500/10 dark:bg-pink-500/15 rounded-full blur-[110px]" />
              </div>

              {children}
            </main>
            <Footer />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
