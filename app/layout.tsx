
import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import './globals.css'
import RentModal from './components/models/RentModel'
import ClientOnly from './components/navbar/ClientOnly'
import Navbar from './components/navbar/Navbar'

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
      <body className={opnsns.className}>
        <Navbar/>
        {children}</body>
{/* 
      <ClientOnly>
      <RentModal />

      </ClientOnly> */}
    </html>
  )
}
