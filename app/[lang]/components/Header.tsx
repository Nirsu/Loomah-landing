"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import type { Locale } from "@/lib/i18n/config";
import { ArrowRight, Menu, X } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";
interface HeaderProps {
  lang: Locale;
  dict: { how: string; why: string; waitlist: string };
}
export default function Header({ lang, dict }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const links = [
    {
      anchor: "discover",
      label: lang === "fr" ? "L’univers Loomah" : "The Loomah world",
    },
    { anchor: "how", label: dict.how },
    {
      anchor: "why",
      label: lang === "fr" ? "Notre histoire" : "Our story",
    },
  ];
  return (
    <header
      className="site-header"
      onKeyDown={(event) => {
        if (event.key === "Escape" && menuOpen) {
          setMenuOpen(false);
          menuButton.current?.focus();
        }
      }}
    >
      <div className="header-inner wrap">
        <a
          href={`/${lang}`}
          className="brand"
          aria-label={lang === "fr" ? "Loomah, accueil" : "Loomah, home"}
        >
          <Image
            src="/logo.svg"
            alt="Loomah"
            width={325}
            height={139}
            preload
          />
        </a>
        <nav
          className="desktop-nav"
          aria-label={
            lang === "fr" ? "Navigation principale" : "Main navigation"
          }
        >
          <a href={`/${lang}#discover`}>
            {lang === "fr" ? "L’univers Loomah" : "The Loomah world"}
          </a>
          <a href={`/${lang}#how`}>{dict.how}</a>
          <a href={`/${lang}#why`}>
            {lang === "fr" ? "Notre histoire" : "Our story"}
          </a>
        </nav>
        <div className="header-actions">
          <LanguageSwitcher currentLang={lang} />
          <a href={`/${lang}#waitlist`} className="button button-small">
            {lang === "fr" ? "M'inscrire" : "Join the waitlist"}
          </a>
          <button
            ref={menuButton}
            type="button"
            className="menu-toggle"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={
              lang === "fr"
                ? menuOpen
                  ? "Fermer le menu"
                  : "Ouvrir le menu"
                : menuOpen
                  ? "Close menu"
                  : "Open menu"
            }
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <X size={20} aria-hidden="true" />
            ) : (
              <Menu size={20} aria-hidden="true" />
            )}
          </button>
        </div>
      </div>
      <nav
        id="mobile-navigation"
        className="mobile-nav"
        hidden={!menuOpen}
        aria-label={lang === "fr" ? "Navigation mobile" : "Mobile navigation"}
      >
        {links.map((link) => (
          <a
            key={link.anchor}
            href={`/${lang}#${link.anchor}`}
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
            <ArrowRight size={20} aria-hidden="true" />
          </a>
        ))}
        <a
          className="mobile-nav-cta"
          href={`/${lang}#waitlist`}
          onClick={() => setMenuOpen(false)}
        >
          {lang === "fr" ? "Rejoindre la liste d'attente" : "Join the waitlist"}
          <ArrowRight size={20} aria-hidden="true" />
        </a>
      </nav>
    </header>
  );
}
