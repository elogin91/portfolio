import './globals.css'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import styles from "./page.module.css"
import { Header } from './components/header'
import { Footer } from './components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cristina Dev',
  description: 'Personal Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
