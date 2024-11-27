import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dexter Ellis - Web3 Technical Director',
  description: 'Technical Director specializing in Web3, Blockchain, and Full-Stack Development',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth bg-gray-900">
      <body className={`${inter.className} min-h-screen bg-gray-900`}>
        {children}
      </body>
    </html>
  )
}
