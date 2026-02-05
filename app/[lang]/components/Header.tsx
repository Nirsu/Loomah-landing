import type { Locale } from "@/lib/i18n/config";
import LanguageSwitcher from "./LanguageSwitcher";
import Image from "next/image";

interface HeaderProps {
  lang: Locale;
}

export default function Header({ lang }: HeaderProps) {
  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-5xl">
      <div className="glass-strong rounded-2xl shadow-lg shadow-black/5">
        <div className="px-6 py-3 flex items-center justify-between">
          {/* Logo */}
          <a href={`/${lang}`} className="flex items-center gap-2 transition-transform hover:scale-105">
            <Image src="/logo.svg" alt="Loomah" width={110} height={28} priority />
          </a>
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium text-text-light hover:text-accent-secondary transition-colors">
              Features
            </a>
            <a href="#why" className="text-sm font-medium text-text-light hover:text-accent-secondary transition-colors">
              Why Loomah
            </a>
          </nav>
          
          {/* Language Switcher */}
          <LanguageSwitcher currentLang={lang} />
        </div>
      </div>
    </header>
  );
}
