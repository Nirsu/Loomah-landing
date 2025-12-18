import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "../globals.css";
import { i18n, type Locale } from "@/lib/i18n/config";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}): Promise<Metadata> {
  const { lang } = await params;
  
  const metadata = {
    en: {
      title: "Loomah – For the little moments that matter",
      description:
        "Find baby-friendly and kid-friendly places around you. Cafés, restaurants, parks and spaces that welcome families. Go out without stress.",
    },
    fr: {
      title: "Loomah – Pour les petits moments en famille",
      description:
        "Trouvez des lieux adaptés aux bébés et aux enfants autour de vous. Cafés, restaurants, parcs et espaces qui accueillent les familles. Sortez sans stress.",
    },
  };

  return {
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
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: Locale }>;
}>) {
  const { lang } = await params;
  
  return (
    <html lang={lang}>
      <body className={`${nunito.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
