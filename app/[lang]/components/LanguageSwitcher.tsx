"use client";

import { usePathname, useRouter } from "next/navigation";
import type { Locale } from "@/lib/i18n/config";

interface LanguageSwitcherProps {
  currentLang: Locale;
}

export default function LanguageSwitcher({ currentLang }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const router = useRouter();

  const switchLanguage = (newLang: Locale) => {
    // Replace current locale in pathname with new locale
    const newPathname = pathname.replace(`/${currentLang}`, `/${newLang}`);
    router.push(newPathname);
  };

  return (
    <div className="flex items-center gap-1 bg-white/80 backdrop-blur-sm rounded-full p-1 border border-pastel-violet/30 shadow-sm">
      <button
        onClick={() => switchLanguage("fr")}
        className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
          currentLang === "fr"
            ? "bg-gradient-to-r from-accent-primary to-accent-light text-white shadow-sm"
            : "text-text-light hover:text-accent-primary"
        }`}
      >
        FR
      </button>
      <button
        onClick={() => switchLanguage("en")}
        className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
          currentLang === "en"
            ? "bg-gradient-to-r from-accent-primary to-accent-light text-white shadow-sm"
            : "text-text-light hover:text-accent-primary"
        }`}
      >
        EN
      </button>
    </div>
  );
}
