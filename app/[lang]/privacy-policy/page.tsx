import { getDictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/config";
import LegalPage from "../components/LegalPage";

export default async function PrivacyPolicy({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return <LegalPage dict={dict} lang={lang} page={dict.legal.privacy} />;
}
