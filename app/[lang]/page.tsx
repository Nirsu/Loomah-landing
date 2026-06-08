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
      <a
        href="#main"
        className="focus-ring fixed left-4 top-4 z-[60] -translate-y-24 rounded-lg bg-ink px-4 py-3 text-sm font-bold text-white transition-transform focus:translate-y-0"
      >
        {dict.navigation.skip}
      </a>
      <Header lang={lang} dict={dict.navigation} />
      <main id="main">
        <Hero dict={dict.hero} lang={lang} />
        <BentoFeatures dict={dict.how} />
        <WhyLoomah dict={dict.why} />
      </main>
      <Footer dict={dict.footer} lang={lang} />
    </>
  );
}
