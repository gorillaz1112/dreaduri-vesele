import type React from "react"
import type { Metadata, Viewport } from "next"
import { Space_Grotesk, Permanent_Marker } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
})

const permanentMarker = Permanent_Marker({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
})

export const metadata: Metadata = {
  title: "Dreaduri Vesele | Dreaduri & Cornrows în București",
  description:
    "Transformă-ți look-ul cu dreaduri și cornrows profesionale în București. Stil reggae, spirit liber, mâini de artist.",
  keywords: ["dreaduri", "cornrows", "București", "hairstyle", "reggae", "dreadlocks"],
  authors: [{ name: "Dreaduri Vesele" }],
  openGraph: {
    title: "Dreaduri Vesele | Dreaduri & Cornrows în București",
    description: "Transformă-ți look-ul cu dreaduri și cornrows profesionale în București.",
    type: "website",
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: "#1a1510",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ro" className="scroll-smooth">
      <body className={`${spaceGrotesk.variable} ${permanentMarker.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
