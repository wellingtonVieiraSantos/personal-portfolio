import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Providers } from './providers'

export const metadata: Metadata = {
  title: {
    default: 'Portifolio Ton | Desenvolvedor Next.js',
    template: '%s | Desenvolvedor Next.js'
  },
  description: ''
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='pt-BR' suppressHydrationWarning className='scroll-smooth'>
      <body className='dark:bg-primary-bg-dark dark:text-primary-text-dark bg-primary-bg text-primary-text'>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
