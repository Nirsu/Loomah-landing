interface Review {
  name: string;
  text: string;
}

interface TestimonialsDict {
  badge: string;
  title: string;
  reviews: Review[];
}

export default function Testimonials({ dict }: { dict: TestimonialsDict }) {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white to-pastel-lavender/30">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-pastel-purple text-accent-primary rounded-full text-sm font-semibold mb-4">
            {dict.badge}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-text-dark">
            {dict.title}
          </h2>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {dict.reviews.map((review, index) => (
            <div 
              key={review.name}
              className="relative p-8 bg-white rounded-3xl border border-accent-light/30 hover:shadow-xl hover:shadow-accent-secondary/10 transition-all duration-300"
            >
              {/* Quote mark */}
              <div className="absolute -top-4 left-8 w-10 h-10 bg-accent-secondary rounded-xl flex items-center justify-center">
                <span className="text-white text-xl font-serif">"</span>
              </div>

              {/* Review text */}
              <p className="text-text-light leading-relaxed mt-4 mb-6">
                {review.text}
              </p>

              {/* Reviewer */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-accent-light to-accent-primary rounded-full flex items-center justify-center text-text-dark font-bold text-lg">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-text-dark">{review.name}</p>
                  <div className="flex text-accent-secondary">
                    {[...new Array(5)].map((_, i) => (
                      <span key={`star-${review.name}-${i}`}>⭐</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Decorative accent */}
              {index === 1 && (
                <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-gradient-to-br from-accent-primary/10 to-accent-pink/10 rounded-full blur-xl" />
              )}
            </div>
          ))}
        </div>

        {/* App store badges placeholder */}
        <div className="mt-16 text-center">
          <p className="text-text-light mb-6">Join them today!</p>
          <div className="flex justify-center gap-4">
            <button 
              type="button"
              className="px-6 py-3 bg-text-dark text-white rounded-xl flex items-center gap-3 hover:bg-gray-800 transition-colors"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
              </svg>
              <div className="text-left">
                <div className="text-xs opacity-75">Download on the</div>
                <div className="text-sm font-semibold">App Store</div>
              </div>
            </button>
            <button 
              type="button"
              className="px-6 py-3 bg-text-dark text-white rounded-xl flex items-center gap-3 hover:bg-gray-800 transition-colors"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 20.5v-17c0-.83.52-1.58 1.3-1.87l10.59 10.59-10.59 10.59c-.78-.29-1.3-1.04-1.3-1.87zm15.54-8.28l-2.94-1.7-2.94 2.94 2.94 2.94 2.94-1.7c.82-.47.82-1.64 0-2.11l-.01-.37zm-6.4-7.1l-8.88 8.88 2.94 2.94 11.82-6.82-5.88-5zM4.26 3.13L13.14 12 4.26 20.88c-.17-.3-.26-.65-.26-1.01v-17c0-.36.09-.71.26-1.01l-.01.27z"/>
              </svg>
              <div className="text-left">
                <div className="text-xs opacity-75">Get it on</div>
                <div className="text-sm font-semibold">Google Play</div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
