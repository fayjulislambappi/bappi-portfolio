import type { Metadata } from 'next'
import { Inter, Outfit } from 'next/font/google'
import SpiderCursor from '@/components/SpiderCursor'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' })

export const metadata: Metadata = {
  title: 'Md Fayjul Islam Bappi',
  description: 'Frontend Developer & MERN Stack Specialist',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body className={inter.className}>
        <SpiderCursor />
        {children}
      </body>
    </html>
  )
}
