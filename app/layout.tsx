import './globals.css';
import { Inter } from 'next/font/google';
import { ClientLayout } from '@/components/layout';
import { Navbar } from '@/components/layout';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Dexter Ellis - Web3 Technical Director',
  description: 'Technical Director specializing in Web3, Blockchain, and Full-Stack Development',
  icons: {
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/icon.png',
  },
};

interface RootLayoutProps {
  readonly children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen bg-gray-900`}>
        <ClientLayout>
          <Navbar />
          <main className="pt-28">{children}</main>
        </ClientLayout>
      </body>
    </html>
  );
}

