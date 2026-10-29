import { getDictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/config";
import Header from "./components/Header";
import Footer from "./components/Footer";
import IllustratedHome from "./components/IllustratedHome";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  return (
    <>
      <a href="#main" className="skip-link">
        {dict.navigation.skip}
      </a>
      <Header lang={lang} dict={dict.navigation} />
      <IllustratedHome lang={lang} />
      <Footer dict={dict.footer} lang={lang} />
    </>
  );
}
