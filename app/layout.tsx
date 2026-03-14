import type { Metadata } from 'next'
import { Orbitron, IBM_Plex_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const orbitron = Orbitron({ subsets: ['latin'], variable: '--font-orbitron' })
const ibmPlexMono = IBM_Plex_Mono({ subsets: ['latin'], weight: '400', variable: '--font-ibm-plex' })

export const metadata: Metadata = {
  title: 'Neutron Nexus — Innovation Day 2026',
  description: 'Student Innovation Day | 28th March 2026 | Where Ideas Collide',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${orbitron.variable} ${ibmPlexMono.variable}`}>
      <body className="font-sans antialiased bg-neutral-950">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
