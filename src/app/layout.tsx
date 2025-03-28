import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Providers } from './providers'
import Head from 'next/head'

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
      <Head>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <body className='dark:bg-primary-bg-dark dark:text-primary-text-dark bg-primary-bg text-primary-text min-h-dvh'>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
