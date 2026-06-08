import { Heart, Map, SlidersHorizontal } from "lucide-react";

interface HowProps {
  dict: {
    eyebrow: string;
    title: string;
    description: string;
    steps: Array<{
      number: string;
      title: string;
      description: string;
      detail: string;
    }>;
  };
}

export default function BentoFeatures({ dict }: HowProps) {
  const icons = [Map, SlidersHorizontal, Heart];

  return (
    <section id="how" className="scroll-mt-20 bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-[82rem] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-8 border-b border-line pb-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-terracotta">
              {dict.eyebrow}
            </p>
            <h2 className="font-display text-balance mt-4 max-w-xl text-5xl leading-[0.98] tracking-[-0.04em] sm:text-6xl">
              {dict.title}
            </h2>
          </div>
          <p className="text-pretty max-w-2xl text-lg leading-8 text-muted lg:justify-self-end">
            {dict.description}
          </p>
        </div>

        <ol className="divide-y divide-line">
          {dict.steps.map((step, index) => {
            const Icon = icons[index];
            return (
              <li
                key={step.number}
                className="group grid gap-5 py-10 sm:grid-cols-[5rem_4rem_minmax(0,.75fr)_minmax(0,1fr)] sm:items-start sm:gap-8 sm:py-14"
              >
                <span className="font-display text-4xl italic text-terracotta/70">
                  {step.number}
                </span>
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-paper-warm text-terracotta transition duration-300 group-hover:-rotate-3 group-hover:bg-terracotta-soft">
                  <Icon className="h-7 w-7" strokeWidth={1.75} />
                </span>
                <h3 className="font-display text-3xl leading-tight tracking-[-0.025em] sm:text-4xl">
                  {step.title}
                </h3>
                <div>
                  <p className="text-pretty text-base leading-7 text-muted sm:text-lg">
                    {step.description}
                  </p>
                  <p className="mt-4 inline-flex rounded-md bg-terracotta-soft/65 px-3 py-1.5 text-sm font-bold text-terracotta-dark">
                    {step.detail}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
