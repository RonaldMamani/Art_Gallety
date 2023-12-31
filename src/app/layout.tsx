import './globals.css'
import type { Metadata } from 'next'
import { Big_Shoulders_Display } from 'next/font/google'

const font = Big_Shoulders_Display({subsets: ['latin'], weight: ['400', '500', '600', '700', '800']})

export const metadata: Metadata = {
  title: 'Art Gallery',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${font.className}`}>{children}</body>
    </html>
  )
}
