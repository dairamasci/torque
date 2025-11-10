import './globals.css';
import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import { AnimatedBackground } from '@/components/animated-background';
import { GlobalKeyframes } from '@/components/global-keyframes';
import { Navbar } from '@/components/navbar';

export const metadata: Metadata = {
  title: 'Torque',
  description: 'Torque',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-neutral-50 text-neutral-900 antialiased dark:bg-neutral-950 dark:text-neutral-100">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <AnimatedBackground />
          <div className="relative z-10">
            <Navbar />
            <main className="mx-auto max-w-6xl px-4 py-8 sm:py-12">{children}</main>
          </div>
          <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(100%_100%_at_50%_0%,rgba(255,255,255,0.15)_0%,rgba(255,255,255,0)_50%)]" />
          <GlobalKeyframes />
        </ThemeProvider>
      </body>
    </html>
  );
}
