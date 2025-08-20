import type { Metadata } from 'next'
import { Poppins, Montserrat } from 'next/font/google'
import '../styles/globals.css'
import { Providers } from './providers'
import Head from 'next/head'
import Footer from '@/components/Footer'
import Nav from '@/components/Nav'

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
    <html
      lang='pt-BR'
      suppressHydrationWarning
      className='scroll-smooth scrollbar-custom'
    >
      <Head>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <body
        className={`w-full min-h-dvh ${montserrat.variable} ${poppins.variable}`}
      >
        <Nav />
        <Providers>{children}</Providers>
        <Footer />
      </body>
    </html>
  )
}
