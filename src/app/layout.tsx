import type { Metadata } from 'next'
import { Poppins, Montserrat } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Providers } from './providers'
import Head from 'next/head'

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['300', '400', '700']
})

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
  weight: ['700']
})

export const metadata: Metadata = {
  title: {
    default: 'Portifolio Ton | Desenvolvedor Next.js',
    template: '%s | Desenvolvedor Next.js'
  },
  description:
    'Portifolio pessoal de Wellington Vieira, Desenvolvedor Front-end Next.js, para compartilhamento de projetos e experiências profissionais e busca de novas oportunidades.'
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
      <body className={`min-h-dvh ${montserrat.variable} ${poppins.variable}`}>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
