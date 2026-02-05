interface FooterDict {
  cta_title: string;
  cta_subtitle: string;
  email_placeholder: string;
  cta_button: string;
  spam_notice: string;
  tagline: string;
  copyright: string;
  product: string;
  features: string;
  why_loomah: string;
  contact: string;
}

export default function Footer({ dict }: { dict: FooterDict }) {
  return (
    <footer className="relative overflow-hidden">
      {/* CTA section - Full width modern design */}
      <div className="relative py-24 px-6">
        {/* Background with gradient mesh */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent-secondary via-accent-primary to-accent-pink" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.1),transparent_50%)]" />
        
        {/* Animated gradient orbs */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }} />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
            </span>
            <span className="text-sm font-medium text-white">Coming Soon</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            {dict.cta_title}
          </h2>
          <p className="text-white/80 mb-10 max-w-xl mx-auto text-lg md:text-xl">
            {dict.cta_subtitle}
          </p>
          
          {/* Modern email form */}
          <div className="max-w-lg mx-auto">
            <div className="flex flex-col sm:flex-row gap-3 p-2 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
              <input 
                type="email" 
                placeholder={dict.email_placeholder}
                className="flex-1 px-5 py-4 rounded-xl border-0 bg-white text-text-dark placeholder:text-text-light focus:outline-none focus:ring-2 focus:ring-white/50 transition-all text-sm"
              />
              <button className="btn-shine px-8 py-4 bg-text-dark text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 whitespace-nowrap text-sm">
                {dict.cta_button}
              </button>
            </div>
            <p className="mt-4 text-sm text-white/60 flex items-center justify-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              {dict.spam_notice}
            </p>
          </div>
        </div>
      </div>
      
      {/* Footer content */}
      <div className="bg-text-dark text-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Footer grid */}
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            {/* Logo and tagline */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <img src="/logo.svg" alt="Loomah" className="h-8 w-auto brightness-0 invert" />
              </div>
              <p className="text-gray-400 max-w-sm text-lg leading-relaxed">
                {dict.tagline}
              </p>
              
              {/* Social links - Modern style */}
              <div className="flex gap-4 mt-8">
                <a 
                  href="https://www.instagram.com/loomah_app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-12 h-12 bg-white/5 hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 rounded-xl flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 border border-white/10 hover:border-transparent hover:scale-110"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a 
                  href="https://tiktok.com/@loomah.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-12 h-12 bg-white/5 hover:bg-white rounded-xl flex items-center justify-center text-gray-400 hover:text-text-dark transition-all duration-300 border border-white/10 hover:border-transparent hover:scale-110"
                  aria-label="TikTok"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Product links */}
            <div>
              <h4 className="font-semibold mb-6 text-white text-lg">{dict.product}</h4>
              <ul className="space-y-4">
                <li>
                  <a href="#features" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    {dict.features}
                  </a>
                </li>
                <li>
                  <a href="#why" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    {dict.why_loomah}
                  </a>
                </li>
              </ul>
            </div>
            
            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-6 text-white text-lg">{dict.contact}</h4>
              <ul className="space-y-4">
                <li>
                  <a href="mailto:contact@loomah.fr" className="text-gray-400 hover:text-white transition-colors flex items-center gap-3 group">
                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-accent-primary/20 transition-colors">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    contact@loomah.fr
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Footer bottom */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/10">
            <div className="text-sm text-gray-500 flex items-center gap-2">
              <span>© {new Date().getFullYear()} Loomah</span>
              <span className="w-1 h-1 rounded-full bg-gray-600" />
              <span>{dict.copyright}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span>Made with</span>
              <span className="text-red-500 animate-pulse">❤️</span>
              <span>for families</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
