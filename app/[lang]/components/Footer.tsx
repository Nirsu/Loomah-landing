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
    terms: string;
    privacy: string;
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
  const fr = lang === "fr";
  return (
    <footer className="site-footer">
      <section
        id="waitlist"
        className="waitlist-section wrap"
        aria-labelledby="waitlist-title"
      >
        <p className="eyebrow">{dict.eyebrow}</p>
        <h2 id="waitlist-title">
          {fr ? (
            <>
              Les belles sorties
              <br />
              commencent <span>ici.</span>
            </>
          ) : (
            <>
              Lovely outings
              <br />
              start <span>here.</span>
            </>
          )}
        </h2>
        <p className="waitlist-description">{dict.description}</p>
        <WaitlistForm dict={dict.form} lang={lang} compact />
        <p className="store-note">
          {fr
            ? "Bientôt sur iOS et Android."
            : "Coming soon to iOS and Android."}
        </p>
      </section>
      <div className="footer-links wrap">
        <div className="footer-brand">
          <a href={`/${lang}`} aria-label="Loomah">
            <Image src="/logo.svg" alt="Loomah" width={325} height={139} />
          </a>
          <p>{dict.tagline}</p>
        </div>
        <div>
          <h3>{fr ? "Découvrir Loomah" : "Discover Loomah"}</h3>
          <a href={`/${lang}#discover`}>
            {fr ? "L’univers Loomah" : "The Loomah world"}
          </a>
          <a href={`/${lang}#how`}>
            {fr ? "Comment ça marche" : "How it works"}
          </a>
          <a href={`/${lang}#why`}>{fr ? "Notre histoire" : "Our story"}</a>
        </div>
        <div>
          <h3>{fr ? "Restons en contact" : "Stay in touch"}</h3>
          <a href="mailto:contact@loomah.fr">{dict.contact}</a>
          <a
            href="https://www.instagram.com/loomah_app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {dict.instagram}
          </a>
          <a
            href="https://tiktok.com/@loomah_app"
            target="_blank"
            rel="noopener noreferrer"
          >
            {dict.tiktok}
          </a>
        </div>
        <div>
          <h3>{fr ? "Informations légales" : "Legal information"}</h3>
          <a href={`/${lang}/privacy-policy`}>{dict.privacy}</a>
          <a href={`/${lang}/terms-of-us`}>{dict.terms}</a>
        </div>
      </div>
      <div className="footer-bottom wrap">
        <span>© {new Date().getFullYear()} Loomah</span>
        <span>
          {fr
            ? "Fait avec ❤️ par des parents pour des parents"
            : "Made with ❤️ by parents, for parents"}
        </span>
      </div>
      <div className="footer-landscape">
        <Image
          src="/illustrations/footer-neighborhood-v2.webp"
          alt=""
          width={2172}
          height={724}
          sizes="100vw"
        />
      </div>
    </footer>
  );
}
