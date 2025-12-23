import type { Locale } from "@/lib/i18n/config";
import LanguageSwitcher from "./LanguageSwitcher";
import Image from "next/image";

interface HeaderProps {
  lang: Locale;
}

export default function Header({ lang }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-accent-light/30">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href={`/${lang}`} className="flex items-center gap-2">
          <Image src="/logo.svg" alt="Loomah" width={120} height={32} priority />
        </a>
        
        {/* Language Switcher */}
        <LanguageSwitcher currentLang={lang} />
      </div>
    </header>
  );
}
