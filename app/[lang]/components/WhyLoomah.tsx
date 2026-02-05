interface Benefit {
  emoji: string;
  title: string;
  description: string;
}

interface WhyDict {
  badge: string;
  title: string;
  subtitle: string;
  benefits: Benefit[];
  quote: string;
}

export default function WhyLoomah({ dict }: { dict: WhyDict }) {
  return (
    <section id="why" className="py-32 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-pastel-cream via-white to-pastel-purple/20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-r from-pastel-peach/30 via-transparent to-pastel-violet/30 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-20">
          <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-accent-secondary/10 to-accent-primary/10 text-accent-secondary rounded-full text-sm font-semibold border border-accent-secondary/20 mb-6">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
            </svg>
            {dict.badge}
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-dark mb-6 tracking-tight">
            {dict.title}
          </h2>
          <p className="text-lg md:text-xl text-text-light max-w-2xl mx-auto">
            {dict.subtitle}
          </p>
        </div>
        
        {/* Benefits - Modern cards grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {dict.benefits.map((benefit, index) => {
            const gradientOverlays = [
              'bg-gradient-to-br from-pastel-peach/50 to-transparent',
              'bg-gradient-to-br from-pastel-mint/50 to-transparent',
              'bg-gradient-to-br from-pastel-pink/50 to-transparent'
            ];
            const iconGradients = [
              'bg-gradient-to-br from-pastel-peach to-accent-light',
              'bg-gradient-to-br from-pastel-mint to-accent-green/30',
              'bg-gradient-to-br from-pastel-pink to-pastel-violet'
            ];
            
            return (
              <div 
                key={benefit.title}
                className="group glass-strong p-8 rounded-[2rem] card-hover border border-white/50 relative overflow-hidden"
              >
                {/* Subtle gradient overlay on hover */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${gradientOverlays[index] || gradientOverlays[2]}`} />
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-lg transition-transform group-hover:scale-110 group-hover:-rotate-3 ${iconGradients[index] || iconGradients[2]}`}>
                    {benefit.emoji}
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold mb-4 text-text-dark">
                    {benefit.title}
                  </h3>
                  <p className="leading-relaxed text-text-light">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Emotional quote - Modern style */}
        <div className="mt-24 text-center max-w-4xl mx-auto relative">
          {/* Decorative quote marks */}
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-8xl text-accent-primary/10 font-serif">"</div>
          
          <div className="glass-strong rounded-[2rem] p-12 border border-white/50">
            <p className="text-xl md:text-2xl lg:text-3xl text-text-dark font-medium italic leading-relaxed">
              {dict.quote}
            </p>
            <div className="mt-8 flex items-center justify-center gap-3">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pastel-peach to-accent-light border-2 border-white" />
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pastel-mint to-accent-green/50 border-2 border-white" />
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pastel-pink to-pastel-violet border-2 border-white" />
              </div>
              <span className="text-sm text-text-light font-medium">Familles Loomah</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
