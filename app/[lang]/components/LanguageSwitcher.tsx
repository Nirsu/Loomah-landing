"use client";

import { usePathname, useRouter } from "next/navigation";
import type { Locale } from "@/lib/i18n/config";

const locales: Locale[] = ["fr", "en"];

export default function LanguageSwitcher({
  currentLang,
}: {
  currentLang: Locale;
}) {
  const pathname = usePathname();
  const router = useRouter();

  function switchLanguage(locale: Locale) {
    if (locale !== currentLang) {
      router.push(
        pathname.replace(`/${currentLang}`, `/${locale}`) +
          window.location.search +
          window.location.hash,
      );
    }
  }

  return (
    <div
      className="language-switcher"
      role="group"
      aria-label={
        currentLang === "fr" ? "Choisir la langue" : "Choose language"
      }
    >
      {locales.map((locale) => {
        const isActive = locale === currentLang;

        return (
          <button
            key={locale}
            type="button"
            onClick={() => switchLanguage(locale)}
            aria-pressed={isActive}
            aria-label={locale === "fr" ? "Français" : "English"}
            lang={locale}
            className="language-option"
          >
            {locale.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
}
