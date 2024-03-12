import '@/styles/globals.scss'
import '@/styles/lib/index'
import {Metadata, Viewport} from "next"

import {siteConfig} from "@/config/site"
import {fontSans} from "@/lib/fonts"
import {cn} from "@/utils/utils"
import {Analytics} from "@/components/customize-ui/analytics"
import Providers from "@/app/providers"
import {SiteFooter} from "@/components/layout/site-footer"
import {SiteHeader} from "@/components/layout/site-header"
import {TailwindIndicator} from "@/components/customize-ui/tailwind-indicator"
import {ThemeSwitcher} from "@/components/theme/theme-switcher"
import {Toaster as DefaultToaster} from "@/components/ui/toaster"
import {Toaster as NewYorkSonner} from "@/components/ui/sonner"
import {Toaster as NewYorkToaster} from "@/components/ui/toaster"
import {lang} from "@/locales/client";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  metadataBase: new URL(siteConfig.url),
  description: siteConfig.description,
  keywords: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "Server Components",
    "Radix UI",
  ],
  authors: [
    {
      name: "shadcn",
      url: "https://shadcn.com",
    },
  ],
  creator: "shadcn",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@shadcn",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
}

export const viewport: Viewport = {
  themeColor: [
    {media: "(prefers-color-scheme: light)", color: "white"},
    {media: "(prefers-color-scheme: dark)", color: "black"},
  ],
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({
   children
 }: RootLayoutProps) {

  return (
    <>
      <html lang={lang} suppressHydrationWarning>
      <head/>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.className
        )}
      >
      <Providers>
        <div vaul-drawer-wrapper="">
          <div className="relative flex min-h-screen flex-col bg-background">
            <SiteHeader/>
            <main className="flex-1">{children}</main>
            {/*<SiteFooter/>*/}
          </div>
        </div>
        <TailwindIndicator/>
        <ThemeSwitcher/>
        <Analytics/>
        <NewYorkToaster/>
        <DefaultToaster/>
        <NewYorkSonner/>
      </Providers>
      </body>
      </html>
    </>
  )
}
