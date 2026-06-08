import {
  Accessibility,
  BriefcaseBusiness,
  Coffee,
  FerrisWheel,
  ListChecks,
  Sparkles,
  UsersRound,
  Utensils,
} from "lucide-react";

interface WhyProps {
  dict: {
    eyebrow: string;
    title: string;
    description: string;
    benefits: Array<{ title: string; description: string }>;
    category_label: string;
    categories: string[];
    closing: string;
  };
}

export default function WhyLoomah({ dict }: WhyProps) {
  const benefitIcons = [Accessibility, ListChecks, UsersRound];
  const categoryIcons = [
    Utensils,
    FerrisWheel,
    Coffee,
    BriefcaseBusiness,
    Sparkles,
  ];

  return (
    <section
      id="why"
      className="paper-noise scroll-mt-20 overflow-hidden bg-paper-warm py-24 sm:py-32"
    >
      <div className="mx-auto max-w-[82rem] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_.95fr] lg:gap-24">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-terracotta">
              {dict.eyebrow}
            </p>
            <h2 className="font-display text-balance mt-4 max-w-2xl text-5xl leading-[0.98] tracking-[-0.04em] sm:text-6xl">
              {dict.title}
            </h2>
            <p className="text-pretty mt-7 max-w-xl text-lg leading-8 text-muted">
              {dict.description}
            </p>
          </div>

          <div className="divide-y divide-terracotta/15 border-y border-terracotta/15">
            {dict.benefits.map((benefit, index) => {
              const Icon = benefitIcons[index];
              return (
                <article
                  key={benefit.title}
                  className="grid grid-cols-[3.25rem_1fr] gap-5 py-7"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-terracotta shadow-[0_8px_24px_rgba(83,55,38,0.07)]">
                    <Icon className="h-6 w-6" strokeWidth={1.75} />
                  </span>
                  <div>
                    <h3 className="text-lg font-extrabold text-ink">
                      {benefit.title}
                    </h3>
                    <p className="text-pretty mt-2 leading-7 text-muted">
                      {benefit.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div className="mt-20 rounded-[2rem] bg-ink px-6 py-8 text-white sm:px-10 sm:py-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-terracotta-soft">
                {dict.category_label}
              </p>
              <p className="font-display text-balance mt-3 max-w-3xl text-3xl leading-tight sm:text-4xl">
                {dict.closing}
              </p>
            </div>
            <div className="flex flex-wrap gap-2 lg:max-w-[30rem] lg:justify-end">
              {dict.categories.map((category, index) => {
                const Icon = categoryIcons[index % categoryIcons.length];
                return (
                  <span
                    key={category}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.07] px-4 py-2.5 text-sm font-bold text-white/80"
                  >
                    <Icon
                      className="h-4 w-4 text-terracotta-soft"
                      strokeWidth={1.75}
                    />
                    {category}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
