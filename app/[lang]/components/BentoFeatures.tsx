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
    <section id="features" className="py-32 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-pastel-lavender/20 to-white" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-pastel-purple/40 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-pastel-peach/30 to-transparent rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pastel-purple border border-pastel-violet/30 mb-6">
            <span className="text-sm font-semibold text-accent-secondary">✨ Features</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-dark mb-6 tracking-tight">
            {dict.title}
          </h2>
          <p className="text-lg md:text-xl text-text-light max-w-2xl mx-auto">
            {dict.subtitle}
          </p>
        </div>

        {/* Bento Grid - Modern layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Large card - Search & Filter */}
          <div className="lg:col-span-2 group glass-strong rounded-[2rem] p-8 md:p-10 card-hover border border-white/50">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <div className="w-14 h-14 bg-gradient-to-br from-accent-secondary to-accent-primary rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-accent-secondary/20">
                  <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-text-dark mb-4">
                  {dict.features.search.title}
                </h3>
                <p className="text-text-light text-lg mb-6 leading-relaxed">
                  {dict.features.search.description}
                </p>
                <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-accent-secondary/10 to-accent-primary/10 text-accent-secondary rounded-full text-sm font-semibold border border-accent-secondary/20">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                  {dict.features.search.highlight}
                </span>
              </div>
              <div className="relative w-52 h-52 md:w-60 md:h-60 flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-light via-accent-primary/20 to-pastel-violet/30 rounded-3xl animate-gradient" />
                <div className="absolute inset-3 glass rounded-2xl flex items-center justify-center">
                  <div className="text-center p-4">
                    <div className="flex flex-wrap justify-center gap-2 mb-3">
                      <span className="px-3 py-1.5 bg-white/80 rounded-full text-xs font-medium text-text-dark shadow-sm backdrop-blur-sm">🍼 Bébé</span>
                      <span className="px-3 py-1.5 bg-white/80 rounded-full text-xs font-medium text-text-dark shadow-sm backdrop-blur-sm">♿ PMR</span>
                    </div>
                    <div className="flex flex-wrap justify-center gap-2">
                      <span className="px-3 py-1.5 bg-white/80 rounded-full text-xs font-medium text-text-dark shadow-sm backdrop-blur-sm">🪑 Chaise</span>
                      <span className="px-3 py-1.5 bg-white/80 rounded-full text-xs font-medium text-text-dark shadow-sm backdrop-blur-sm">🎮 Jeux</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Small card - Verified */}
          <div className="group bg-gradient-to-br from-accent-secondary via-accent-primary to-accent-pink rounded-[2rem] p-8 text-white card-hover relative overflow-hidden">
            {/* Shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            
            <div className="relative z-10">
              <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">
                {dict.features.verified.title}
              </h3>
              <p className="text-white/80 mb-6 leading-relaxed">
                {dict.features.verified.description}
              </p>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium">{dict.features.verified.loomah}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium">{dict.features.verified.community}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Medium card - Details */}
          <div className="lg:col-span-2 group glass-strong rounded-[2rem] p-8 md:p-10 card-hover border border-white/50">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <div className="w-14 h-14 bg-gradient-to-br from-pastel-peach to-accent-light rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-accent-primary/10">
                  <svg className="w-7 h-7 text-accent-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-text-dark mb-4">
                  {dict.features.details.title}
                </h3>
                <p className="text-text-light text-lg mb-6 leading-relaxed">
                  {dict.features.details.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {dict.features.details.badges.map((badge) => (
                    <span key={badge} className="px-4 py-2 bg-white rounded-xl text-sm font-medium text-text-dark shadow-sm border border-gray-100 hover:border-accent-secondary/30 hover:shadow-md transition-all">
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
              <div className="relative w-full md:w-52 h-52 flex-shrink-0 glass rounded-2xl overflow-hidden">
                <div className="absolute inset-0 p-5">
                  <div className="h-full flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-pastel-peach to-accent-light rounded-xl" />
                        <div className="flex-1">
                          <div className="h-3 bg-gray-200/80 rounded-full w-3/4 mb-1.5" />
                          <div className="h-2 bg-gray-100/80 rounded-full w-1/2" />
                        </div>
                      </div>
                      <div className="flex gap-1 mt-4">
                        {[1,2,3,4,5].map((star) => (
                          <span key={star} className="text-accent-primary text-lg">★</span>
                        ))}
                        <span className="text-sm text-text-light ml-2 font-medium">4.8</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <span className="px-3 py-1.5 bg-pastel-mint/80 rounded-lg text-xs backdrop-blur-sm">🍼</span>
                      <span className="px-3 py-1.5 bg-pastel-peach/80 rounded-lg text-xs backdrop-blur-sm">♿</span>
                      <span className="px-3 py-1.5 bg-pastel-pink/80 rounded-lg text-xs backdrop-blur-sm">🪑</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Small card - Save */}
          <div className="group glass-strong rounded-[2rem] p-8 card-hover border border-white/50">
            <div className="w-14 h-14 bg-gradient-to-br from-pastel-pink to-pastel-violet rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-pastel-pink/20">
              <svg className="w-7 h-7 text-accent-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-text-dark mb-4">
              {dict.features.save.title}
            </h3>
            <p className="text-text-light leading-relaxed">
              {dict.features.save.description}
            </p>
            <div className="mt-8 flex -space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-pastel-peach to-accent-light rounded-xl border-2 border-white flex items-center justify-center text-lg shadow-md group-hover:scale-110 transition-transform">☕</div>
              <div className="w-12 h-12 bg-gradient-to-br from-pastel-mint to-accent-green/30 rounded-xl border-2 border-white flex items-center justify-center text-lg shadow-md group-hover:scale-110 transition-transform delay-75">🌳</div>
              <div className="w-12 h-12 bg-gradient-to-br from-pastel-pink to-pastel-violet rounded-xl border-2 border-white flex items-center justify-center text-lg shadow-md group-hover:scale-110 transition-transform delay-150">🍽️</div>
              <div className="w-12 h-12 bg-gradient-to-br from-accent-light to-accent-primary/30 rounded-xl border-2 border-white flex items-center justify-center text-sm font-bold text-text-dark shadow-md group-hover:scale-110 transition-transform delay-200">+12</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
