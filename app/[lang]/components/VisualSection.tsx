import Image from "next/image";

interface VisualDict {
  badge: string;
  title: string;
  description: string;
  features: string[];
  app: {
    header: string;
    subtitle: string;
    place1: {
      name: string;
      description: string;
    };
    place2: {
      name: string;
      description: string;
    };
  };
}

export default function VisualSection({ dict }: { dict: VisualDict }) {
  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Phone mockup - left */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br from-accent-primary/20 to-accent-pink/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-accent-secondary/20 to-accent-primary/20 rounded-full blur-3xl" />
              
              {/* Device mockup image */}
              <div className="relative w-64 md:w-72">
                <Image 
                  src="/screen_app.png" 
                  alt="Loomah App"
                  width={288}
                  height={590}
                  className="relative z-10 drop-shadow-2xl"
                  priority
                  unoptimized
                />
              </div>

              {/* Floating feature badges */}
              <div className="absolute -right-4 top-1/4 px-4 py-2 bg-white rounded-xl shadow-lg shadow-accent-primary/10 border border-gray-100 z-20 animate-bounce-slow">
                <span className="text-sm font-medium">🍼 Changing table</span>
              </div>
              <div className="absolute -left-4 bottom-1/3 px-4 py-2 bg-white rounded-xl shadow-lg shadow-accent-pink/10 border border-gray-100 z-20 animate-pulse">
                <span className="text-sm font-medium">♿ Stroller access</span>
              </div>
            </div>
          </div>

          {/* Text content - right */}
          <div>
            <span className="inline-block px-4 py-2 bg-pastel-lavender text-accent-primary rounded-full text-sm font-semibold mb-6">
              {dict.badge}
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-text-dark mb-6 leading-tight">
              {dict.title}
            </h2>
            <p className="text-lg text-text-light mb-10 leading-relaxed">
              {dict.description}
            </p>
            
            {/* Feature list */}
            <ul className="space-y-5">
              {dict.features.map((item) => (
                <li key={item} className="flex items-start gap-4 group">
                  <span className="flex-shrink-0 w-8 h-8 bg-accent-secondary rounded-lg flex items-center justify-center text-white text-sm group-hover:scale-110 transition-transform">
                    ✓
                  </span>
                  <span className="text-text-dark text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
