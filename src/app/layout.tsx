import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import './globals.css'

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700']
})

export const metadata: Metadata = {
  title: 'Purchaseway Time Flow',
  description:
    'Aplicativo que permite visualizar e monitorar como você gasta seu tempo, ajudando a identificar padrões e otimizar sua produtividade.'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${openSans.className} bg-primary from-primary overflow-hidden bg-gradient-to-bl to-black antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
