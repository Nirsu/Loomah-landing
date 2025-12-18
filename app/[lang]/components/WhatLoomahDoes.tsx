interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface WhatDict {
  badge: string;
  title: string;
  subtitle: string;
  features: Feature[];
}

export default function WhatLoomahDoes({ dict }: { dict: WhatDict }) {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-pastel-mint text-accent-green rounded-full text-sm font-semibold mb-4">
            {dict.badge}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-text-dark mb-6">
            {dict.title}
          </h2>
          <p className="text-lg text-text-light max-w-2xl mx-auto">
            {dict.subtitle}
          </p>
        </div>
        
        {/* Features grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {dict.features.map((feature) => (
            <div 
              key={feature.title}
              className="group relative p-8 bg-white rounded-3xl border border-accent-light/30 hover:border-accent-secondary/40 hover:shadow-xl hover:shadow-accent-secondary/10 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-accent-light to-accent-primary rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold text-text-dark mb-3">
                {feature.title}
              </h3>
              <p className="text-text-light leading-relaxed">
                {feature.description}
              </p>
              
              {/* Hover accent */}
              <div className="absolute bottom-0 left-8 right-8 h-1 bg-gradient-to-r from-accent-primary to-accent-pink rounded-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
