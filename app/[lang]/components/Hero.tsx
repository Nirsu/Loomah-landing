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
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      {/* Modern gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pastel-purple via-white to-pastel-peach/30" />
      
      {/* Animated gradient orbs */}
      <div className="absolute top-20 left-[10%] w-96 h-96 bg-gradient-to-br from-accent-primary/20 to-accent-pink/20 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-20 right-[10%] w-[500px] h-[500px] bg-gradient-to-br from-pastel-violet/30 to-accent-secondary/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-pastel-mint/20 to-pastel-pink/20 rounded-full blur-3xl opacity-50" />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:64px_64px]" />
      
      <div className="max-w-7xl mx-auto px-6 py-16 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text content */}
          <div className="text-center lg:text-left animate-slide-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-secondary/10 border border-accent-secondary/20 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-secondary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-secondary"></span>
              </span>
              <span className="text-sm font-semibold text-accent-secondary">{dict.tagline}</span>
            </div>
            
            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-text-dark leading-[1.1] mb-6 tracking-tight">
              {dict.headline}
            </h1>
            
            {/* Description */}
            <p className="text-lg md:text-xl text-text-light leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
              {dict.description}
            </p>
            
            {/* Email signup form - Modern style */}
            <div className="max-w-md mx-auto lg:mx-0">
              <div className="relative flex flex-col sm:flex-row gap-3 p-2 rounded-2xl bg-white shadow-xl shadow-black/5 border border-gray-100">
                <input 
                  type="email" 
                  placeholder={dict.email_placeholder}
                  className="flex-1 px-5 py-3.5 rounded-xl bg-gray-50/50 border-0 focus:outline-none focus:ring-2 focus:ring-accent-secondary/20 focus:bg-white transition-all text-text-dark placeholder:text-text-light text-sm"
                />
                <button className="btn-shine px-7 py-3.5 bg-gradient-to-r from-accent-secondary to-accent-primary text-white font-semibold rounded-xl shadow-lg shadow-accent-secondary/25 hover:shadow-xl hover:shadow-accent-secondary/30 transition-all duration-300 hover:-translate-y-0.5 whitespace-nowrap text-sm">
                  {dict.cta_button}
                </button>
              </div>
              <p className="mt-4 text-sm text-text-light flex items-center gap-2 justify-center lg:justify-start">
                <svg className="w-4 h-4 text-accent-green" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {dict.coming_soon}
              </p>
            </div>
          </div>
          
          {/* App screenshot - Modern presentation */}
          <div className="relative flex justify-center lg:justify-end animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-8 bg-gradient-to-br from-accent-primary/40 via-accent-pink/30 to-pastel-violet/40 rounded-[4rem] blur-3xl opacity-60 animate-pulse-glow" />
              
              {/* Device frame */}
              <div className="relative">
                {/* Phone bezel simulation */}
                <div className="absolute -inset-3 bg-gradient-to-b from-gray-800 to-gray-900 rounded-[3.5rem] shadow-2xl" />
                
                {/* Screen */}
                <div className="relative w-72 md:w-80 rounded-[2.8rem] overflow-hidden border-[12px] border-gray-900 bg-gray-900">
                  <Image
                    src="/screen_app.png"
                    alt="Loomah App Screenshot"
                    width={320}
                    height={650}
                    className="relative z-10"
                    priority
                    unoptimized
                  />
                </div>
                
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-7 bg-gray-900 rounded-b-2xl z-20" />
              </div>
              
              {/* Floating cards */}
              <div className="absolute -left-12 top-1/4 glass rounded-2xl p-4 shadow-xl z-20 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-pastel-mint to-accent-green/30 rounded-xl flex items-center justify-center text-lg">🍼</div>
                  <div>
                    <p className="text-sm font-semibold text-text-dark">Baby-friendly!</p>
                    <p className="text-xs text-text-light">Verified spot</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -right-8 bottom-1/3 glass rounded-2xl p-4 shadow-xl z-20 animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-1">
                    {[1,2,3,4,5].map((star) => (
                      <span key={star} className="text-accent-primary text-lg">★</span>
                    ))}
                  </div>
                  <span className="text-sm font-bold text-text-dark">4.9</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-light">
        <span className="text-xs font-medium uppercase tracking-wider">Scroll</span>
        <div className="w-6 h-10 rounded-full border-2 border-text-light/30 flex items-start justify-center p-1.5">
          <div className="w-1.5 h-1.5 bg-text-light rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
