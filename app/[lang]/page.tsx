import { getDictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/config";
import Header from "./components/Header";
import Hero from "./components/Hero";
import BentoFeatures from "./components/BentoFeatures";
import WhyLoomah from "./components/WhyLoomah";
import Footer from "./components/Footer";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <>
      <Header lang={lang} />
      <main className="min-h-screen">
        <Hero dict={dict.hero} />
        <BentoFeatures dict={dict.what} />
        <WhyLoomah dict={dict.why} />
        <Footer dict={dict.footer} />
      </main>
    </>
  );
}
