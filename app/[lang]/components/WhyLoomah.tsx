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
    <section id="why" className="py-24 px-6 bg-pastel-cream">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-accent-secondary/10 text-accent-secondary rounded-full text-sm font-semibold mb-4">
            {dict.badge}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-text-dark mb-6">
            {dict.title}
          </h2>
          <p className="text-lg text-text-light max-w-2xl mx-auto">
            {dict.subtitle}
          </p>
        </div>
        
        {/* Benefits - cards grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {dict.benefits.map((benefit) => (
              <div 
                key={benefit.title}
                className="group p-8 rounded-3xl transition-all duration-300 hover:scale-105 bg-white border border-gray-100 shadow-sm"
              >
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6 bg-pastel-peach">
                  {benefit.emoji}
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold mb-3 text-text-dark">
                  {benefit.title}
                </h3>
                <p className="leading-relaxed text-text-light">
                  {benefit.description}
                </p>
              </div>
          ))}
        </div>
        
        {/* Emotional quote */}
        <div className="mt-20 text-center max-w-3xl mx-auto">
          <p className="text-xl md:text-2xl text-text-light italic leading-relaxed">
            {dict.quote}
          </p>
        </div>
      </div>
    </section>
  );
}
