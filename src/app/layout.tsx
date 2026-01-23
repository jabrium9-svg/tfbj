import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'The Fold | Stay Connected to Your Flock',
  description: 'Conversational continuity for religious leaders. Because pastoral care doesn\'t end at the church door.',
  openGraph: {
    title: 'The Fold | Stay Connected to Your Flock',
    description: 'Conversational continuity for religious leaders. Because pastoral care doesn\'t end at the church door.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
