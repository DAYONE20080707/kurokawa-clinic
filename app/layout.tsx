import "./globals.css"
import type { Metadata, Viewport } from "next"
import ToastProvider from "@/components/providers/ToastProvider"
import { Noto_Serif_JP, Spectral } from "next/font/google"
import { GoogleTagManager } from "@next/third-parties/google"

// Noto Serif JP フォントの設定
const notoSerifJP = Noto_Serif_JP({
  weight: ["200", "300", "400", "500", "600", "700", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
})

// Spectral フォントの設定
const spectral = Spectral({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
})

// Marcellus フォントの設定
// const marcellus = Marcellus({
//   weight: ["400"], // Marcellusは400のみ利用可能
//   subsets: ["latin"],
//   display: "swap",
// })

export const metadata: Metadata = {
  title: {
    template: "%s | 医療法人 愛基会　黒川医院",
    default: "医療法人 愛基会　黒川医院",
  },
  icons: {
    icon: "/common/favicon.ico",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

interface RootLayoutProps {
  children: React.ReactNode
}

const RootLayout = async ({ children }: RootLayoutProps) => {
  return (
    <html lang="ja">
      <body className="font-notoSerifJP text-baseColor">
        <GoogleTagManager gtmId="GTM-5VZQPT43" />
        <ToastProvider />
        {children}
      </body>
    </html>
  )
}

export default RootLayout
