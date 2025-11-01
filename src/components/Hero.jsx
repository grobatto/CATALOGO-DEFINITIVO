import { Link } from 'react-router-dom'

export default function Hero({ variant = 'links' }) {
  return (
    <section className="pt-16 md:pt-20">
      <div className="relative min-h-[90vh] md:min-h-screen bg-gradient-to-br from-gray-50 via-white to-brand-green-50 dark:from-gray-950 dark:via-gray-900 dark:to-brand-green-900/30 overflow-hidden flex items-center">
        {/* Background watermark text - extremely subtle */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
          <h1 className="text-[16vw] md:text-[14vw] lg:text-[12vw] font-bold tracking-apple-tight text-center leading-none text-brand-green-700/20 dark:text-brand-green-200/10">
            BARRIOS<br/>AMETHYSTS
          </h1>
        </div>
        
        {/* Main content container */}
        <div className="relative w-full py-16 md:py-20 px-6 md:px-8 z-10">
          <div className="max-w-7xl mx-auto">
            
            {/* Typography stack */}
            <div className="text-center mb-12 md:mb-16">
              <p className="text-xs md:text-sm uppercase tracking-wider mb-4 md:mb-5 text-brand-purple-500 dark:text-brand-purple-200 font-medium">
                Premium Uruguayan Amethysts
              </p>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-brand-green-600 dark:text-brand-green-200 mb-8 md:mb-10 leading-tight max-w-4xl mx-auto">
                Your direct source to Uruguayan amethysts
              </h2>
              
              {/* CTAs - Apple-like links by default */}
              {variant === 'links' ? (
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-8 mb-12 md:mb-16">
                  <Link 
                    to="/catalogue"
                    className="text-lg md:text-xl font-medium text-brand-green-600 dark:text-brand-green-200 hover:text-brand-green-500 dark:hover:text-brand-green-100 transition-apple inline-flex items-center gap-2"
                  >
                    View Catalogue <span className="text-xl">›</span>
                  </Link>
                  <a 
                    href="#contact" 
                    className="text-lg md:text-xl font-medium text-brand-purple-600 dark:text-brand-purple-200 hover:text-brand-purple-500 dark:hover:text-brand-purple-100 transition-apple inline-flex items-center gap-2"
                  >
                    Request Catalog <span className="text-xl">›</span>
                  </a>
                </div>
              ) : (
                /* Fallback: Black button variant */
                <div className="flex justify-center mb-12 md:mb-16">
                  <Link 
                    to="/catalogue"
                    className="px-8 py-3 bg-brand-green-600 text-white text-base md:text-lg font-semibold rounded-full hover:bg-brand-green-500 transition-apple focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-purple-400"
                  >
                    View Catalogue
                  </Link>
                </div>
              )}
            </div>
            
            {/* Product image - centered, slightly smaller */}
            <div className="flex justify-center">
              <div className="w-full max-w-xl md:max-w-2xl lg:max-w-3xl">
                <div className="aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded-3xl border border-brand-green-100/60 dark:border-brand-green-900/40 shadow-soft">
                  <img 
                    src="/images/hero-bg.jpg" 
                    alt="Premium Uruguayan Amethyst Collection" 
                    className="w-full h-full object-cover shadow-soft" 
                    loading="eager"
                    decoding="async"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
