interface BentoDict {
  title: string;
  subtitle: string;
  features: {
    search: {
      title: string;
      description: string;
      highlight: string;
    };
    details: {
      title: string;
      description: string;
      badges: string[];
    };
    verified: {
      title: string;
      description: string;
      loomah: string;
      community: string;
    };
    save: {
      title: string;
      description: string;
    };
  };
}

export default function BentoFeatures({ dict }: { dict: BentoDict }) {
  return (
    <section id="features" className="py-24 px-6 bg-gradient-to-b from-white to-pastel-lavender/30">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-text-dark mb-6">
            {dict.title}
          </h2>
          <p className="text-lg text-text-light max-w-2xl mx-auto">
            {dict.subtitle}
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Large card - Search & Filter */}
          <div className="lg:col-span-2 bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <div className="w-14 h-14 bg-accent-secondary/10 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-accent-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-text-dark mb-3">
                  {dict.features.search.title}
                </h3>
                <p className="text-text-light text-lg mb-4">
                  {dict.features.search.description}
                </p>
                <span className="inline-block px-4 py-2 bg-accent-secondary/10 text-accent-secondary rounded-full text-sm font-semibold">
                  {dict.features.search.highlight}
                </span>
              </div>
              <div className="relative w-48 h-48 md:w-56 md:h-56 flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-light/50 to-accent-primary/30 rounded-3xl" />
                <div className="absolute inset-4 bg-white rounded-2xl shadow-lg flex items-center justify-center">
                  <div className="text-center p-4">
                    <div className="flex justify-center gap-2 mb-3">
                      <span className="px-3 py-1 bg-pastel-peach rounded-full text-xs font-medium text-text-dark">🍼 Bébé</span>
                      <span className="px-3 py-1 bg-pastel-mint rounded-full text-xs font-medium text-text-dark">♿ PMR</span>
                    </div>
                    <div className="flex justify-center gap-2">
                      <span className="px-3 py-1 bg-pastel-pink rounded-full text-xs font-medium text-text-dark">🪑 Chaise</span>
                      <span className="px-3 py-1 bg-pastel-lavender rounded-full text-xs font-medium text-text-dark">🎮 Jeux</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Small card - Verified */}
          <div className="bg-gradient-to-br from-accent-secondary to-accent-primary rounded-3xl p-8 text-white">
            <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-3">
              {dict.features.verified.title}
            </h3>
            <p className="text-white/80 mb-6">
              {dict.features.verified.description}
            </p>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-white rounded-full" />
                <span className="text-sm font-medium">{dict.features.verified.loomah}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-white rounded-full" />
                <span className="text-sm font-medium">{dict.features.verified.community}</span>
              </div>
            </div>
          </div>

          {/* Medium card - Details */}
          <div className="lg:col-span-2 bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <div className="w-14 h-14 bg-accent-primary/20 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-accent-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-text-dark mb-3">
                  {dict.features.details.title}
                </h3>
                <p className="text-text-light text-lg mb-6">
                  {dict.features.details.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {dict.features.details.badges.map((badge) => (
                    <span key={badge} className="px-4 py-2 bg-white rounded-xl text-sm font-medium text-text-dark shadow-sm">
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
              <div className="relative w-full md:w-48 h-48 flex-shrink-0 bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="absolute inset-0 p-4">
                  <div className="h-full flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 bg-pastel-peach rounded-lg" />
                        <div className="flex-1">
                          <div className="h-3 bg-gray-200 rounded w-3/4 mb-1" />
                          <div className="h-2 bg-gray-100 rounded w-1/2" />
                        </div>
                      </div>
                      <div className="flex gap-1 mt-3">
                        {[1,2,3,4,5].map((star) => (
                          <span key={star} className="text-accent-secondary text-sm">★</span>
                        ))}
                        <span className="text-xs text-text-light ml-1">4.8</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <span className="px-2 py-1 bg-pastel-mint rounded text-xs">🍼</span>
                      <span className="px-2 py-1 bg-pastel-peach rounded text-xs">♿</span>
                      <span className="px-2 py-1 bg-pastel-pink rounded text-xs">🪑</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Small card - Save */}
          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300">
            <div className="w-14 h-14 bg-pastel-pink rounded-2xl flex items-center justify-center mb-6">
              <svg className="w-7 h-7 text-accent-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-text-dark mb-3">
              {dict.features.save.title}
            </h3>
            <p className="text-text-light">
              {dict.features.save.description}
            </p>
            <div className="mt-6 flex -space-x-2">
              <div className="w-10 h-10 bg-pastel-peach rounded-full border-2 border-white flex items-center justify-center text-sm">☕</div>
              <div className="w-10 h-10 bg-pastel-mint rounded-full border-2 border-white flex items-center justify-center text-sm">🌳</div>
              <div className="w-10 h-10 bg-pastel-pink rounded-full border-2 border-white flex items-center justify-center text-sm">🍽️</div>
              <div className="w-10 h-10 bg-accent-light rounded-full border-2 border-white flex items-center justify-center text-xs font-medium text-text-dark">+12</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
