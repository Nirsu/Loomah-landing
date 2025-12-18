import Image from "next/image";

interface HeroDict {
  tagline: string;
  headline: string;
  description: string;
  email_placeholder: string;
  cta_button: string;
  coming_soon: string;
}

export default function Hero({ dict }: { dict: HeroDict }) {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-b from-pastel-purple via-white to-white">
      {/* Decorative elements */}
      <div className="absolute top-32 left-10 w-64 h-64 bg-accent-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent-pink/10 rounded-full blur-3xl" />
      
      <div className="max-w-6xl mx-auto px-6 py-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="text-center lg:text-left">
            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-dark leading-tight mb-6">
              {dict.headline}
            </h1>
            
            {/* Description */}
            <p className="text-lg md:text-xl text-text-light leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              {dict.description}
            </p>
            
            {/* Email signup form */}
            <div className="max-w-md mx-auto lg:mx-0">
              <div className="flex flex-col sm:flex-row gap-3 mb-4">
                <input 
                  type="email" 
                  placeholder={dict.email_placeholder}
                  className="flex-1 px-6 py-4 rounded-2xl border-2 border-accent-light bg-white focus:outline-none focus:border-accent-secondary focus:ring-2 focus:ring-accent-secondary/20 transition-all text-text-dark placeholder:text-text-light"
                />
                <button className="px-8 py-4 bg-accent-secondary text-white font-semibold rounded-2xl shadow-lg shadow-accent-secondary/30 hover:shadow-xl hover:shadow-accent-secondary/40 transition-all duration-300 hover:-translate-y-0.5 whitespace-nowrap">
                  {dict.cta_button}
                </button>
              </div>
              <p className="text-sm text-text-light flex items-center gap-2 justify-center lg:justify-start">
                <span className="text-accent-secondary">✨</span>
                {dict.coming_soon}
              </p>
            </div>
          </div>
          
          {/* App screenshot */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-8 bg-gradient-to-br from-accent-primary/30 via-accent-pink/20 to-accent-secondary/30 rounded-[3rem] blur-3xl opacity-50" />
              
              {/* Device mockup image */}
              <div className="relative w-72 md:w-80">
                <Image
                  src="/screen_app.png"
                  alt="Loomah App Screenshot"
                  width={320}
                  height={650}
                  className="relative z-10 drop-shadow-2xl"
                  priority
                  unoptimized
                />
              </div>
              
              {/* Floating elements */}
              <div className="absolute -left-8 top-1/4 bg-white rounded-2xl p-3 shadow-lg shadow-gray-200/50 z-20 animate-bounce" style={{ animationDuration: '3s' }}>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-pastel-mint rounded-full flex items-center justify-center">🍼</div>
                  <span className="text-sm font-medium text-text-dark">Baby-friendly!</span>
                </div>
              </div>
              
              <div className="absolute -right-4 bottom-1/3 bg-white rounded-2xl p-3 shadow-lg shadow-gray-200/50 z-20 animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-pastel-peach rounded-full flex items-center justify-center">⭐</div>
                  <span className="text-sm font-medium text-text-dark">4.9/5</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
