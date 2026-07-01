import Image from "next/image";
import type { Locale } from "@/lib/i18n/config";
import { ArrowRight } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";

interface HeaderProps {
  lang: Locale;
  dict: {
    how: string;
    why: string;
    waitlist: string;
  };
}

export default function Header({ lang, dict }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-paper/90 backdrop-blur-xl">
      <div className="mx-auto flex h-[4.75rem] max-w-[90rem] items-center justify-between px-5 sm:px-8 lg:px-12">
        <a href={`/${lang}`} className="focus-ring rounded-md" aria-label="Loomah">
          <Image src="/logo.svg" alt="" width={116} height={50} priority />
        </a>

        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Navigation principale"
        >
          <a
            href={`/${lang}#how`}
            className="focus-ring rounded-md text-sm font-bold text-muted transition-colors hover:text-ink"
          >
            {dict.how}
          </a>
          <a
            href={`/${lang}#why`}
            className="focus-ring rounded-md text-sm font-bold text-muted transition-colors hover:text-ink"
          >
            {dict.why}
          </a>
        </nav>

        <div className="flex items-center gap-2 sm:gap-4">
          <LanguageSwitcher currentLang={lang} />
          <a
            href={`/${lang}#waitlist`}
            className="focus-ring group hidden items-center gap-2 rounded-xl bg-terracotta px-5 py-3 text-sm font-bold text-white shadow-[0_10px_24px_rgba(152,75,53,0.16)] transition duration-300 hover:-translate-y-0.5 hover:bg-terracotta-dark active:translate-y-0 sm:inline-flex"
          >
            {dict.waitlist}
            <ArrowRight
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
              strokeWidth={1.75}
            />
          </a>
        </div>
      </div>
    </header>
  );
}
