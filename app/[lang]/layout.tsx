import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import { i18n, type Locale } from "@/lib/i18n/config";

const nunito = localFont({
  src: "../../public/fonts/Nunito-Variable.ttf",
  variable: "--font-nunito",
  weight: "200 1000",
  display: "swap",
});

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang: langParam } = await params;
  const lang = (
    i18n.locales.includes(langParam as Locale) ? langParam : i18n.defaultLocale
  ) as Locale;

  const metadata = {
    en: {
      title: "Loomah – Family days out, made simple.",
      description:
        "Find baby-friendly and kid-friendly places around you. Cafés, restaurants, parks and spaces that welcome families. Go out without stress.",
    },
    fr: {
      title: "Loomah – Sortir en famille, tout simplement.",
      description:
        "Découvrez autour de vous les cafés, restaurants, activités et lieux vraiment adaptés aux familles avec de jeunes enfants.",
    },
  };

  return {
    metadataBase: new URL("https://loomah.fr"),
    title: metadata[lang].title,
    description: metadata[lang].description,
    keywords: [
      "baby-friendly",
      "kid-friendly",
      "family places",
      "parents",
      "stroller-friendly",
      "baby changing",
      "family restaurants",
      "family cafes",
    ],
    openGraph: {
      title: metadata[lang].title,
      description: metadata[lang].description,
      type: "website",
      images: ["/illustrations/hero-neighborhood.webp"],
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang: langParam } = await params;
  const lang = (
    i18n.locales.includes(langParam as Locale) ? langParam : i18n.defaultLocale
  ) as Locale;

  return (
    <html lang={lang} data-scroll-behavior="smooth">
      <body className={`${nunito.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
