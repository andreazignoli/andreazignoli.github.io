import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import './globals.css'

export const metadata: Metadata = {
  title: 'Andrea Zignoli — AI Sport Tech Consultant',
  description:
    'I help sport tech startups turn physiology and performance data into production-ready AI solutions. M.Eng. Mechatronics + PhD Sports Science.',
  openGraph: {
    title: 'Andrea Zignoli — AI Sport Tech Consultant',
    description:
      'Bridging sports science research and deployed code — from physiology models to production APIs.',
    url: 'https://andreazignoli.github.io',
    siteName: 'Andrea Zignoli',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    creator: '@andrea_zignoli',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body className="bg-background text-foreground antialiased font-sans">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
