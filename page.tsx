import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
})

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair'
})

export const metadata: Metadata = {
  title: 'Lucas Maureira | Guitarrista & Compositor',
  description: 'Música contemporánea de raíz argentina para guitarra solista y música de cámara. Obras propias que integran tango y folclore desde una perspectiva compositiva actual.',
  keywords: ['guitarrista', 'compositor', 'tango', 'folclore', 'música argentina', 'música de cámara', 'guitarra contemporánea'],
  authors: [{ name: 'Lucas Maureira' }],
  openGraph: {
    title: 'Lucas Maureira | Guitarrista & Compositor',
    description: 'Música contemporánea de raíz argentina para guitarra solista y música de cámara.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
