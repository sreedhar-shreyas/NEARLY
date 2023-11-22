
import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import './globals.css'

const opnsns = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NEARLY',
  description: 'A NORTHEASTERN UNI ROOMMATE-APARTMENT FINDER',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={opnsns.className}>{children}</body>
    </html>
  )
}
