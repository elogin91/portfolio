import './globals.css'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import styles from "./page.module.css"

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
        <nav>
          <h1>
            My navbar
          </h1>
        </nav>
        {children}
      </body>
    </html>
  )
}
