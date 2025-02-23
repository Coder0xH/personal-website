import './globals.css'
import { Inter } from 'next/font/google'
import ClientLayout from '@/components/ClientLayout'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dexter Ellis - Web3 Technical Director',
  description: 'Technical Director specializing in Web3, Blockchain, and Full-Stack Development',
  icons: {
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  readonly children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen bg-gray-900`}>
        <ClientLayout>
          <Navbar />
          <main className="pt-28">
            {children}
          </main>
        </ClientLayout>
      </body>
    </html>
  )
}
