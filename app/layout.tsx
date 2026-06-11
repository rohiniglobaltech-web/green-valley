import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import './globals.css'

export const metadata: Metadata = {
  title: 'Green Valley – Premium Villas & Plots Near Marasuru Gate, Bangalore',
  description:
    'Green Valley is an upcoming premium villa and plot project near Marasuru Gate, Bangalore. 3 & 4 BHK villas, 30×40 & 40×60 plots, spread over 2 lush acres. Affordable luxury living.',
  keywords: ['Green Valley', 'Bangalore villas', 'plots near Marasuru Gate', 'luxury villas Bangalore', 'Best Properties'],
  openGraph: {
    title: 'Green Valley – Premium Villas & Plots Near Marasuru Gate',
    description: 'Affordable luxury living amidst serene greenery. 3 & 4 BHK Villas and villa plots in Bangalore.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-gv-dark text-white font-sans antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
