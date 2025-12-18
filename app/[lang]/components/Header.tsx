import type { Locale } from "@/lib/i18n/config";
import LanguageSwitcher from "./LanguageSwitcher";

interface HeaderProps {
  lang: Locale;
}

export default function Header({ lang }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-accent-light/30">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href={`/${lang}`} className="flex items-center gap-2">
          <span className="text-xl font-bold text-text-dark">Loomah</span>
        </a>
        
        {/* Language Switcher */}
        <LanguageSwitcher currentLang={lang} />
      </div>
    </header>
  );
}
