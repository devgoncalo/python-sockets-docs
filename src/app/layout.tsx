import './globals.css'
import { ReactNode } from 'react'
import { Roboto_Flex as Roboto } from 'next/font/google'

import { Hero } from '@/components/Hero'
import { Powered } from '@/components/Powered'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })

export const metadata = {
  title: 'Programação de Sockets em Linguagem Python',
  description:
    'Uma documentação completa sobre como Programar Sockets em Linguagem Python construída com Next.js, TailwindCSS, Typescript powered by Vercel',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${roboto.variable} flex flex-col md:flex-row bg-gray-100 dark:bg-gray-900 font-sans text-gray-900 dark:text-gray-100`}
      >
        <div className="md:h-[100vh] w-full md:w-1/2">
          {/* Left */}
          <div className="relative flex h-screen flex-col items-center justify-between overflow-hidden border-r border-white/10 bg-[url(../assets/bg-stars.svg)] bg-cover px-8 md:px-28 py-16 pb-[8rem] md:pb-[4rem]">
            {/* Blur */}
            <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-blue-700 opacity-50 blur-full" />

            {/* Stripes */}
            <div className="absolute bottom-0 right-2 top-0 w-2 bg-stripes" />

            <Hero />
            <Powered />
          </div>
        </div>

        {/* Right */}
        <div className="h-[100vh] w-full md:w-1/2 md:overflow-y-auto">
          <div className="flex flex-col items-center bg-[url(../assets/bg-stars.svg)] bg-cover">
            <div className="mt-10 w-[350px] md:w-[600px] flex flex-col gap-10 justify-center overflow-x-hidden">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
