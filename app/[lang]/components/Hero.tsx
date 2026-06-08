import Image from "next/image";
import {
  Accessibility,
  Armchair,
  BriefcaseBusiness,
  Check,
  Coffee,
  FerrisWheel,
  Puzzle,
  Trees,
  Utensils,
} from "lucide-react";
import WaitlistForm from "./WaitlistForm";

interface HeroProps {
  lang: string;
  dict: {
    title: string;
    description: string;
    proof: string;
    categories: string[];
    preview_label: string;
    preview_title: string;
    amenity_stroller: string;
    amenity_chair: string;
    amenity_play: string;
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

export default function Hero({ dict, lang }: HeroProps) {
  const categoryIcons = [
    Coffee,
    Utensils,
    Trees,
    Puzzle,
    BriefcaseBusiness,
  ];

  return (
    <section className="paper-noise relative overflow-hidden border-b border-line">
      <div className="absolute -left-28 top-44 h-72 w-72 rounded-full bg-terracotta-soft/45 blur-3xl" />
      <div className="absolute -right-32 top-16 h-96 w-96 rounded-full bg-sage-soft/70 blur-3xl" />

      <div className="relative mx-auto grid min-h-[calc(100dvh-4.75rem)] max-w-[90rem] items-center gap-14 px-5 py-16 sm:px-8 lg:grid-cols-[minmax(0,1.03fr)_minmax(28rem,.97fr)] lg:px-12 lg:py-20">
        <div className="reveal-up min-w-0 max-w-[43rem]">
          <h1 className="font-display text-balance text-[clamp(3.1rem,6.6vw,6.25rem)] leading-[0.94] tracking-[-0.045em] text-ink">
            {dict.title}
          </h1>
          <p className="text-pretty mt-7 max-w-[39rem] text-lg leading-8 text-muted sm:text-xl">
            {dict.description}
          </p>

          <div className="mt-9">
            <WaitlistForm dict={dict.form} lang={lang} />
          </div>

          <p className="mt-5 flex items-center gap-2 text-sm font-bold text-ink">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-sage-soft text-sage">
              <Check className="h-4 w-4" strokeWidth={1.75} />
            </span>
            {dict.proof}
          </p>

          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-line pt-6">
            {dict.categories.map((category, index) => {
              const Icon = categoryIcons[index % categoryIcons.length];
              return (
                <span
                  key={category}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-muted"
                >
                  <Icon
                    className="h-4 w-4 text-terracotta"
                    strokeWidth={1.75}
                  />
                  {category}
                </span>
              );
            })}
          </div>
        </div>

        <div
          className="reveal-up relative mx-auto min-w-0 w-full max-w-[39rem] lg:ml-auto"
          style={{ animationDelay: "120ms" }}
        >
          <div className="absolute left-[9%] top-[12%] h-[74%] w-[82%] rotate-[-4deg] rounded-[46%_54%_50%_50%] bg-terracotta-soft" />
          <div className="absolute right-[4%] top-[3%] h-20 w-20 rounded-full border border-sage/20 bg-sage-soft" />
          <div className="absolute bottom-[5%] left-[2%] h-14 w-14 rounded-full border border-terracotta/20 bg-white" />

          <div className="relative flex min-h-[31rem] items-end justify-end sm:min-h-[39rem]">
            <div className="absolute left-0 top-[27%] z-20 w-[10.5rem] rounded-2xl border border-white/80 bg-white/95 p-4 shadow-[0_18px_60px_rgba(69,48,37,0.13)] backdrop-blur sm:left-[2%] sm:w-[15.5rem] sm:p-5">
              <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-terracotta">
                {dict.preview_label}
              </p>
              <p className="font-display mt-2 text-2xl leading-tight text-ink">
                {dict.preview_title}
              </p>
              <ul className="mt-5 space-y-3">
                <li className="flex items-center gap-3 text-sm font-bold text-muted">
                  <Accessibility
                    className="h-5 w-5 text-sage"
                    strokeWidth={1.75}
                  />
                  {dict.amenity_stroller}
                </li>
                <li className="flex items-center gap-3 text-sm font-bold text-muted">
                  <Armchair
                    className="h-5 w-5 text-sage"
                    strokeWidth={1.75}
                  />
                  {dict.amenity_chair}
                </li>
                <li className="flex items-center gap-3 text-sm font-bold text-muted">
                  <FerrisWheel
                    className="h-5 w-5 text-sage"
                    strokeWidth={1.75}
                  />
                  {dict.amenity_play}
                </li>
              </ul>
            </div>

            <Image
              src="/screen_app.png"
              alt={
                lang === "fr"
                  ? "Carte de l'application Loomah affichant des lieux adaptés aux familles"
                  : "Loomah app map showing family-friendly places"
              }
              width={559}
              height={1141}
              className="relative z-10 h-auto w-[15rem] drop-shadow-[0_28px_35px_rgba(52,38,31,0.22)] sm:w-[21rem] lg:w-[22rem]"
              priority
              sizes="(max-width: 640px) 272px, 352px"
            />
          </div>

          <div className="absolute right-[8%] top-[45%] z-20">
            <span className="map-pulse absolute inset-0 rounded-full bg-terracotta" />
            <span className="relative block h-4 w-4 rounded-full border-[3px] border-white bg-terracotta shadow-md" />
          </div>
        </div>
      </div>
    </section>
  );
}
