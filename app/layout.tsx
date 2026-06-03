import type { Metadata, Viewport } from 'next'
import { Inter, Space_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

const spaceMono = Space_Mono({ 
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: '--font-space-mono'
});

export const metadata: Metadata = {
  title: 'Portfolio | Junior Full Stack Developer',
  description: 'Ruby on Rails specialist building clean, scalable web applications.',
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

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fdf2f4' },
    { media: '(prefers-color-scheme: dark)', color: '#1a2a1a' },
  ],
}

import { LanguageProvider } from "@/components/language-provider"
import { ThemeProvider } from "@/components/theme-provider"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceMono.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <LanguageProvider>
            {children}
            {process.env.NODE_ENV === 'production' && <Analytics />}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
