import './globals.css'
import { Inter } from 'next/font/google'
import ClientLayout from '@/components/ClientLayout'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dexter Ellis - Web3 Technical Director',
  description: 'Technical Director specializing in Web3, Blockchain, and Full-Stack Development',
  icons: {
    icon: '/logo.svg',
    shortcut: '/logo.svg',
    apple: '/logo.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen bg-gray-900`}>
      <ClientLayout>
          <div className="relative z-10">
            {children}
          </div>
        </ClientLayout>
      </body>
    </html>
  )
}
