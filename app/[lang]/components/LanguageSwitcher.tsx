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
      router.push(pathname.replace(`/${currentLang}`, `/${locale}`));
    }
  }

  return (
    <div
      className="flex items-center rounded-xl border border-line bg-paper-warm/70 p-1"
      aria-label={currentLang === "fr" ? "Choisir la langue" : "Choose language"}
    >
      {locales.map((locale) => {
        const isActive = locale === currentLang;

        return (
          <button
            key={locale}
            type="button"
            onClick={() => switchLanguage(locale)}
            aria-pressed={isActive}
            className={`focus-ring min-w-9 rounded-lg px-2.5 py-1.5 text-[0.7rem] font-extrabold tracking-[0.1em] transition duration-200 ${
              isActive
                ? "bg-white text-terracotta-dark shadow-[0_3px_10px_rgba(76,53,39,0.08)]"
                : "text-muted hover:text-terracotta-dark"
            }`}
          >
            {locale.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
}
