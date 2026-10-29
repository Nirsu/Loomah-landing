"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  ChevronDown,
  Mail,
  BookOpen,
  Coffee,
  Trees,
} from "lucide-react";
import type { Locale } from "@/lib/i18n/config";

const copy = {
  fr: {
    title: "Sortir en famille,",
    accent: "tout simplement.",
    intro:
      "Cafés, parcs, bibliothèques… Trouvez où aller avec vos enfants et les infos utiles pour préparer votre sortie.",
    cta: "Rejoindre la liste d'attente",
    available: "Recevez le lien de téléchargement par email dès la sortie.",
    discoverLabel: "ET SI ON SORTAIT ?",
    discoverTitle: "À chaque envie, une idée de sortie.",
    discoverIntro:
      "Pas besoin d’aller loin pour passer un bon moment. Juste de savoir où aller.",
    categories: [
      {
        name: "Une pause gourmande",
        short: "Cafés & restaurants",
        title: "Un café pour vous. Une place pour eux.",
        text: "Repérez les cafés et restaurants à découvrir en famille. Pour prendre le temps de manger ou de boire un café ensemble.",
        image: "cafe",
        icon: Coffee,
      },
      {
        name: "Un grand bol d’air",
        short: "Parcs & jardins",
        title: "De l’herbe, des rires et un peu d’air frais.",
        text: "Trouvez les parcs et jardins autour de vous pour courir, explorer ou simplement profiter d’un après-midi ensemble.",
        image: "park",
        icon: Trees,
      },
      {
        name: "Envie de découvrir",
        short: "Bibliothèques & activités",
        title: "De quoi éveiller leur curiosité.",
        text: "Une bibliothèque, une activité, un nouveau quartier : trouvez de nouvelles idées pour éveiller leur curiosité.",
        image: "library",
        icon: BookOpen,
      },
    ],
    exploreCta: "Rejoindre la liste d'attente",
    howLabel: "MOINS CHERCHER, PLUS PROFITER",
    howTitle: "Votre prochaine sortie,\nen trois étapes.",
    steps: [
      {
        title: "Explorez les lieux autour de vous",
        text: "Ouvrez la carte et explorez les adresses du quartier. Les bonnes idées sont parfois à deux rues.",
      },
      {
        title: "Vérifiez les infos pratiques",
        text: "Consultez les infos pratiques et les équipements pour choisir un lieu qui convient à votre famille.",
      },
      {
        title: "Gardez vos adresses favorites",
        text: "Enregistrez vos favoris pour les retrouver quand l’envie de sortir vous prend.",
      },
    ],
    screenAlt: "Aperçu de la carte Loomah avec les lieux autour de Paris",
    whyLabel: "NOTRE HISTOIRE",
    whyTitle: "Moins de préparation.\nPlus de temps ensemble.",
    whyQuestion: '"On va où avec les enfants ?"',
    whyText:
      "Une place pour la poussette, un coin pour jouer… On se pose les mêmes questions que vous.",
    whyText2:
      "Nous créons Loomah pour vous aider à trouver les bons endroits et profiter de vos sorties en famille.",
    faqLabel: "À SAVOIR",
    faqTitle: "Des questions ?",
    faqs: [
      {
        q: "Est-ce que je peux déjà télécharger Loomah ?",
        a: "Loomah arrive bientôt. Inscrivez-vous à la newsletter pour recevoir les liens App Store et Google Play au lancement.",
      },
      {
        q: "Quels types de lieux vais-je trouver ?",
        a: "Des cafés, restaurants, parcs, bibliothèques et activités à découvrir avec de jeunes enfants. La carte réunit les lieux et leurs informations pratiques pour vous aider à préparer votre sortie.",
      },
      {
        q: "À quoi servira mon adresse email ?",
        a: "À vous envoyer des nouvelles de Loomah et vous prévenir du lancement. Vous pourrez vous désinscrire. Retrouvez les détails dans notre politique de confidentialité.",
      },
    ],
  },
  en: {
    title: "Family days out,",
    accent: "made simple.",
    intro:
      "Cafés, parks, libraries… Find places to go with your children and the practical details to plan your outing.",
    cta: "Join the waitlist",
    available: "Get the download link by email when we launch.",
    discoverLabel: "LET’S GO SOMEWHERE",
    discoverTitle: "Ideas for every kind of family outing.",
    discoverIntro:
      "You don’t have to go far for a good day out. Find somewhere that suits your plans.",
    categories: [
      {
        name: "A food break",
        short: "Cafés & restaurants",
        title: "A coffee for you. A welcome for them.",
        text: "Discover cafés and restaurants to enjoy with your family. Take the time to enjoy a meal or a coffee together.",
        image: "cafe",
        icon: Coffee,
      },
      {
        name: "A breath of fresh air",
        short: "Parks & gardens",
        title: "Space to play and enjoy the fresh air.",
        text: "Find parks and gardens nearby to run, explore or simply spend an afternoon together.",
        image: "park",
        icon: Trees,
      },
      {
        name: "Something to discover",
        short: "Libraries & activities",
        title: "Something to spark their curiosity.",
        text: "A library, an activity, a new neighbourhood: find fresh ideas to spark their curiosity.",
        image: "library",
        icon: BookOpen,
      },
    ],
    exploreCta: "Join the waitlist",
    howLabel: "LESS SEARCHING, MORE ENJOYING",
    howTitle: "Your next outing,\nin three steps.",
    steps: [
      {
        title: "Explore places nearby",
        text: "Open the map and explore the neighbourhood. Your next favourite place might be just two streets away.",
      },
      {
        title: "Check the practical details",
        text: "Check practical information and facilities to choose a place that suits your family.",
      },
      {
        title: "Save your favourite places",
        text: "Save your favourites, ready for the next time you feel like heading out.",
      },
    ],
    screenAlt:
      "Preview of the Loomah map showing places around Paris, in French",
    whyLabel: "OUR STORY",
    whyTitle: "Less planning.\nMore time together.",
    whyQuestion: '"Where can we go with the kids?"',
    whyText:
      "Room for the stroller, somewhere to play… We ask the same questions you do.",
    whyText2:
      "We're creating Loomah to help you find the right places and enjoy time out with your family.",
    faqLabel: "GOOD TO KNOW",
    faqTitle: "Any questions?",
    faqs: [
      {
        q: "Can I download Loomah yet?",
        a: "Loomah is coming soon. Join the newsletter to receive the App Store and Google Play links at launch.",
      },
      {
        q: "What kinds of places will I find?",
        a: "Cafés, restaurants, parks, libraries and activities to enjoy with young children. The map brings places and their practical information together to help you plan your outing.",
      },
      {
        q: "What will you use my email for?",
        a: "To share news about Loomah and let you know when we launch. You can unsubscribe. You’ll find more details in our privacy policy.",
      },
    ],
  },
};

const previews = {
  fr: [
    {
      image: "map",
      alt: "Carte Loomah : des lieux pour les familles autour de Paris",
    },
    {
      image: "place",
      alt: "Fiche d’un lieu dans Loomah : présentation, adresse et coordonnées",
    },
    {
      image: "favorites",
      alt: "Favoris Loomah : deux lieux enregistrés pour une prochaine sortie",
    },
  ],
  en: [
    {
      image: "map",
      alt: "Loomah map: family places around Paris. French app preview.",
    },
    {
      image: "place",
      alt: "Loomah place details: description, address and contact. French app preview.",
    },
    {
      image: "favorites",
      alt: "Loomah favourites: two saved places for a future outing. French app preview.",
    },
  ],
};

function Phone({
  alt,
  small = false,
  image = "map",
}: {
  alt: string;
  small?: boolean;
  image?: string;
}) {
  return (
    <div className={`phone ${small ? "phone-small" : ""}`}>
      <div className="phone-screen">
        <Image
          src={`/screenshots/${image}-clean.webp`}
          alt={alt}
          width={576}
          height={1134}
          sizes="280px"
          loading="eager"
        />
      </div>
    </div>
  );
}

export default function IllustratedHome({ lang }: { lang: Locale }) {
  const t = copy[lang];
  const [category, setCategory] = useState(0);
  const [previewIndex, setPreviewIndex] = useState(0);
  const selected = t.categories[category];
  return (
    <main id="main">
      <section className="hero wrap" aria-labelledby="hero-title">
        <div className="hero-copy">
          <h1 id="hero-title">
            {t.title}
            <br />
            <span>{t.accent}</span>
          </h1>
          <p className="hero-description">{t.intro}</p>
          <a className="button" href="#waitlist">
            {t.cta}
            <ArrowRight size={20} aria-hidden="true" />
          </a>
          <p className="store-note">{t.available}</p>
        </div>
        <div className="hero-art">
          <Image
            className="hero-scene"
            src="/illustrations/hero-neighborhood.webp"
            alt=""
            fill
            sizes="(max-width: 760px) 100vw, 55vw"
            preload
          />
          <div className="hero-phone">
            <Phone alt={t.screenAlt} />
          </div>
        </div>
      </section>
      <section
        id="discover"
        className="discover section wrap"
        aria-labelledby="discover-title"
      >
        <div className="section-heading">
          <p className="eyebrow">{t.discoverLabel}</p>
          <h2 id="discover-title">{t.discoverTitle}</h2>
          <p>{t.discoverIntro}</p>
        </div>
        <div
          className="category-tabs"
          role="tablist"
          aria-label={lang === "fr" ? "Vos envies de sortie" : "Outing ideas"}
        >
          {t.categories.map((item, i) => (
            <button
              key={item.image}
              role="tab"
              id={`tab-${i}`}
              aria-selected={category === i}
              aria-controls="category-panel"
              tabIndex={category === i ? 0 : -1}
              onClick={() => setCategory(i)}
              onKeyDown={(event) => {
                let next = i;
                if (event.key === "ArrowRight")
                  next = (i + 1) % t.categories.length;
                else if (event.key === "ArrowLeft")
                  next = (i + t.categories.length - 1) % t.categories.length;
                else if (event.key === "Home") next = 0;
                else if (event.key === "End") next = t.categories.length - 1;
                else return;
                event.preventDefault();
                setCategory(next);
                document.getElementById(`tab-${next}`)?.focus();
              }}
            >
              <item.icon size={20} aria-hidden="true" />
              {item.name}
            </button>
          ))}
        </div>
        <div
          id="category-panel"
          role="tabpanel"
          aria-labelledby={`tab-${category}`}
          tabIndex={0}
          className={`category-panel category-${selected.image}`}
        >
          <div className="category-art">
            <Image
              key={selected.image}
              src={`/illustrations/${selected.image}-v2.webp`}
              alt=""
              fill
              sizes="(max-width: 760px) 100vw, 50vw"
            />
          </div>
          <div className="category-copy">
            <p className="eyebrow">{selected.short}</p>
            <h3>{selected.title}</h3>
            <p>{selected.text}</p>
            <a className="text-link" href="#waitlist">
              {t.exploreCta}
              <ArrowRight size={20} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
      <section
        id="how"
        className="how-section section"
        aria-labelledby="how-title"
      >
        <div className="wrap how-grid">
          <div className="how-visual" id="app-preview">
            <div className="preview-stack">
              {previews[lang].map((item, index) => (
                <div key={item.image} hidden={index !== previewIndex}>
                  <Phone alt={item.alt} image={item.image} small />
                </div>
              ))}
            </div>
          </div>
          <div className="how-copy">
            <p className="eyebrow">{t.howLabel}</p>
            <h2 id="how-title">{t.howTitle}</h2>

            <ol className="steps">
              {t.steps.map((step, i) => (
                <li key={step.title}>
                  <button
                    className="step-button"
                    type="button"
                    aria-pressed={previewIndex === i}
                    aria-controls="app-preview"
                    onClick={() => setPreviewIndex(i)}
                  >
                    <span className="step-number">0{i + 1}</span>
                    <span className="step-content">
                      <span className="step-title">{step.title}</span>
                      <span className="step-short">
                        {
                          (lang === "fr"
                            ? ["Explorer", "Les infos", "Enregistrer"]
                            : ["Explore", "The details", "Save"])[i]
                        }
                      </span>
                      <span className="step-description">{step.text}</span>
                    </span>
                  </button>
                </li>
              ))}
            </ol>
            <p className="mobile-step-description" aria-live="polite">
              {t.steps[previewIndex].text}
            </p>
          </div>
        </div>
      </section>
      <section
        id="why"
        className="why-section section wrap"
        aria-labelledby="why-title"
      >
        <div className="why-copy">
          <p className="eyebrow">{t.whyLabel}</p>
          <h2 id="why-title">{t.whyTitle}</h2>
          <p className="why-question">{t.whyQuestion}</p>
          <p>{t.whyText}</p>
          <p>{t.whyText2}</p>
        </div>
        <div className="why-art">
          <Image
            src="/illustrations/library-v2.webp"
            alt=""
            fill
            sizes="(max-width: 760px) 100vw, 45vw"
          />
        </div>
      </section>
      <section className="faq-section section wrap" aria-labelledby="faq-title">
        <div>
          <p className="eyebrow">{t.faqLabel}</p>
          <h2 id="faq-title">{t.faqTitle}</h2>
          <a className="text-link" href="mailto:contact@loomah.fr">
            {lang === "fr"
              ? "Contactez-nous"
              : "Contact us"}
            <Mail size={20} aria-hidden="true" />
          </a>
        </div>
        <div className="faq-list">
          {t.faqs.map((faq) => (
            <details key={faq.q}>
              <summary>
                {faq.q}
                <ChevronDown size={20} aria-hidden="true" />
              </summary>
              <p>{faq.a}</p>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}
