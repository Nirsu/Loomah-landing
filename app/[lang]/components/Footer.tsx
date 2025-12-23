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
    <footer className="py-20 px-6 bg-text-dark text-white">
      <div className="max-w-6xl mx-auto">
        {/* CTA section */}
        <div className="text-center mb-20 p-12 bg-gradient-to-r from-accent-secondary to-accent-primary rounded-3xl relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {dict.cta_title}
            </h2>
            <p className="text-white/80 mb-8 max-w-md mx-auto text-lg">
              {dict.cta_subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-lg mx-auto">
              <input 
                type="email" 
                placeholder={dict.email_placeholder}
                className="w-full px-6 py-4 rounded-full border-0 bg-white text-text-dark placeholder:text-text-light focus:outline-none focus:ring-2 focus:ring-white/50 transition-all shadow-lg"
              />
              <button className="w-full sm:w-auto px-8 py-4 bg-text-dark text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 whitespace-nowrap">
                {dict.cta_button}
              </button>
            </div>
            <p className="mt-4 text-sm text-white/60">
              {dict.spam_notice}
            </p>
          </div>
        </div>
        
        {/* Footer grid */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Logo and tagline */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo.svg" alt="Loomah" className="h-8 w-auto brightness-0 invert" />
            </div>
            <p className="text-gray-400 max-w-xs">
              {dict.tagline}
            </p>
            
            {/* Social links */}
            <div className="flex gap-3 mt-6">
              <a 
                href="https://instagram.com/loomah.app"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 bg-white rounded-full flex items-center justify-center text-gray-800 hover:scale-110 hover:shadow-lg transition-all"
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
                className="w-11 h-11 bg-white rounded-full flex items-center justify-center text-gray-800 hover:scale-110 hover:shadow-lg transition-all"
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
            <h4 className="font-semibold mb-4 text-white">{dict.product}</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#features" className="hover:text-white transition-colors">{dict.features}</a></li>
              <li><a href="#why" className="hover:text-white transition-colors">{dict.why_loomah}</a></li>
            </ul>
          </div>
          
          {/* Company links */}
          <div>
            <h4 className="font-semibold mb-4 text-white">{dict.contact}</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="mailto:contact@loomah.fr" className="hover:text-white transition-colors">contact@loomah.fr</a></li>
            </ul>
          </div>
        </div>
        
        {/* Footer bottom */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 pt-8 border-t border-gray-800">
          <div className="text-sm text-gray-500 flex items-center gap-1">
            © {new Date().getFullYear()} Loomah · {dict.copyright}
          </div>
        </div>
      </div>
    </footer>
  );
}
