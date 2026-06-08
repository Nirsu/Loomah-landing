import Image from "next/image";
import WaitlistForm from "./WaitlistForm";

interface FooterProps {
  lang: string;
  dict: {
    eyebrow: string;
    title: string;
    description: string;
    download_note: string;
    tagline: string;
    contact: string;
    instagram: string;
    tiktok: string;
    copyright: string;
    form: {
      placeholder: string;
      button: string;
      privacy: string;
      invalid: string;
      success: string;
      error: string;
    };
  };
}

export default function Footer({ dict, lang }: FooterProps) {
  return (
    <footer id="waitlist" className="scroll-mt-20 bg-white">
      <div className="mx-auto max-w-[82rem] px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
        <div className="relative overflow-hidden rounded-[2rem] bg-terracotta-soft px-6 py-14 sm:px-12 sm:py-16 lg:px-20">
          <div className="absolute -right-20 -top-28 h-80 w-80 rounded-full border-[70px] border-white/30" />
          <div className="absolute -bottom-24 left-[42%] h-48 w-48 rounded-full bg-white/20" />
          <div className="relative max-w-3xl">
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-terracotta-dark">
              {dict.eyebrow}
            </p>
            <h2 className="font-display text-balance mt-4 text-5xl leading-[0.98] tracking-[-0.04em] sm:text-6xl">
              {dict.title}
            </h2>
            <p className="text-pretty mt-6 max-w-2xl text-lg leading-8 text-muted">
              {dict.description}
            </p>
            <div className="mt-8">
              <WaitlistForm dict={dict.form} lang={lang} compact />
            </div>
            <p className="mt-5 text-sm font-bold text-terracotta-dark">
              {dict.download_note}
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto grid max-w-[82rem] gap-8 px-5 py-10 sm:px-8 md:grid-cols-[1fr_auto] md:items-end lg:px-12">
          <div>
            <Image src="/logo.svg" alt="Loomah" width={116} height={50} />
            <p className="mt-3 text-sm text-muted">{dict.tagline}</p>
          </div>
          <div className="flex flex-col gap-4 text-sm font-bold text-muted sm:flex-row sm:items-center sm:gap-7">
            <a
              href="mailto:contact@loomah.fr"
              className="focus-ring rounded-md transition-colors hover:text-terracotta-dark"
            >
              {dict.contact}
            </a>
            <a
              href="https://www.instagram.com/loomah_app/"
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring rounded-md transition-colors hover:text-terracotta-dark"
            >
              {dict.instagram}
            </a>
            <a
              href="https://tiktok.com/@loomah_app"
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring rounded-md transition-colors hover:text-terracotta-dark"
            >
              {dict.tiktok}
            </a>
            <span className="font-medium text-muted/70">
              © {new Date().getFullYear()} Loomah. {dict.copyright}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
