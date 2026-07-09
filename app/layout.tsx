import type { Metadata } from "next";
import { headers } from "next/headers";
import { Fraunces, Source_Sans_3 } from "next/font/google";
import { resolveLang, translations, t } from "@/lib/i18n";
import "./globals.css";

const sourceSans = Source_Sans_3({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined);

export async function generateMetadata(): Promise<Metadata> {
  const headerStore = await headers();
  const lang = resolveLang(headerStore.get("x-lang"));
  return {
    ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
    title: t(translations.meta.title, lang),
    description: t(translations.meta.description, lang),
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "any" },
        { url: "/favicon-32.png", type: "image/png", sizes: "32x32" },
      ],
      apple: "/apple-touch-icon.png",
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headerStore = await headers();
  const lang = resolveLang(headerStore.get("x-lang"));

  return (
    <html
      lang={lang}
      className={`${sourceSans.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans text-ink">
        {children}
      </body>
    </html>
  );
}
