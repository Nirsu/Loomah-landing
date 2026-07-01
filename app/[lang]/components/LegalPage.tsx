import type { Locale } from "@/lib/i18n/config";
import type { ComponentProps } from "react";
import Footer from "./Footer";
import Header from "./Header";

interface LegalPageProps {
  dict: {
    navigation: {
      how: string;
      why: string;
      waitlist: string;
    };
    footer: ComponentProps<typeof Footer>["dict"];
    legal: {
      back_home: string;
      updated: string;
    };
  };
  lang: Locale;
  page: {
    title: string;
    intro: string;
    sections: {
      title: string;
      body: string;
    }[];
  };
}

export default function LegalPage({ dict, lang, page }: LegalPageProps) {
  return (
    <>
      <Header lang={lang} dict={dict.navigation} />
      <main className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-24">
        <a
          href={`/${lang}`}
          className="focus-ring rounded-md text-sm font-extrabold text-terracotta-dark transition-colors hover:text-ink"
        >
          {dict.legal.back_home}
        </a>
        <p className="mt-10 text-sm font-extrabold uppercase tracking-[0.18em] text-terracotta-dark">
          {dict.legal.updated}
        </p>
        <h1 className="font-display mt-4 text-5xl leading-none sm:text-6xl">
          {page.title}
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted">{page.intro}</p>
        <div className="mt-12 space-y-10">
          {page.sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-xl font-extrabold text-ink">
                {section.title}
              </h2>
              <p className="mt-3 whitespace-pre-line leading-8 text-muted">
                {section.body}
              </p>
            </section>
          ))}
        </div>
      </main>
      <Footer dict={dict.footer} lang={lang} />
    </>
  );
}
