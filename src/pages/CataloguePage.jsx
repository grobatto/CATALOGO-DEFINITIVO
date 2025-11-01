import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ChevronDown, Sparkles } from 'lucide-react'
import ProductCard from '../components/ProductCard'
import CategoryFilter from '../components/CategoryFilter'
import MarketSelector from '../components/MarketSelector'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'
import GrandCollectionCarousel from '../components/GrandCollectionCarousel'
import { heroProduct, getProductsByCategoryAndMarket } from '../data/products'
import ImageWithFallback from '../components/ImageWithFallback'

export default function CataloguePage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [activeMarket, setActiveMarket] = useState('retail')
  const navigate = useNavigate()
  const filteredProducts = getProductsByCategoryAndMarket(activeCategory, activeMarket)

  const scrollToSpecimens = () => {
    document.getElementById('specimens-section')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="bg-white dark:bg-gray-950 min-h-screen">
      {/* Hero Section - Apple Style */}
      <section className="relative min-h-screen flex flex-col items-center justify-center bg-white pt-20 pb-16">
        {/* Hero Image */}
        <div className="relative flex items-center justify-center w-full mb-8">
          <div className="transition-transform duration-500 ease-out">
            <ImageWithFallback
              src="/images/maincat.png"
              alt="Barrios Catalogue Hero"
              className="max-h-[72vh] max-w-[92vw] md:max-w-[85vw] object-contain"
            />
          </div>
          
          {/* Title + Subtitle Overlaid on top */}
          <div className="absolute top-0 left-0 right-0 text-center px-6 -translate-y-6">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-semibold tracking-tight text-gray-950 mb-2 mx-auto">
              Barrios Catalogue
            </h1>
            <p className="text-2xl md:text-3xl font-light text-gray-600 mt-4 mx-auto">
              Premium Specimens from Uruguay
            </p>
          </div>
        </div>

        {/* Footer Text */}
        <div className="text-center px-6 mb-12">
          <p className="text-lg md:text-xl font-light text-gray-500">
            Exceptional specimens for discerning collectors worldwide
          </p>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToSpecimens}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-300"
          aria-label="Scroll to specimens"
          style={{ animation: 'bounce 2s infinite' }}
        >
          <ChevronDown size={28} strokeWidth={1.5} />
        </button>
      </section>

      {/* Piezas Grandes CTA Section - Prominent Black Banner */}
      <section className="relative text-white py-16 md:py-20 overflow-hidden border-t border-green-800/30 border-b border-green-800/30" style={{ backgroundColor: '#20503B' }}>
        {/* Decorative gradient overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-green-700/40 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-green-800/30 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-4xl mx-auto text-center px-6">
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles size={24} className="text-purple-400" />
            <span className="text-sm uppercase tracking-widest text-purple-300">Museum Collection</span>
            <Sparkles size={24} className="text-purple-400" />
          </div>
          
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-thin tracking-tight mb-6">
            The Grand Collection
          </h2>
          
          <p className="text-xl md:text-2xl font-light text-purple-200 mb-12">
            Museum-quality large specimens from our private collection
          </p>
          
          {/* Auto-advancing Carousel */}
          <div className="mb-10">
            <GrandCollectionCarousel />
          </div>
          
          <button
            onClick={() => navigate('/piezas-grandes')}
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 text-white text-lg font-semibold rounded-lg transition-all duration-200 group shadow-lg hover:shadow-purple-500/50"
          >
            <span>View Collection</span>
            <span className="text-2xl group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>
      </section>

      {/* Market Selector */}
      <MarketSelector 
        market={activeMarket}
        onMarketChange={setActiveMarket}
      />

      {/* Category Filter */}
      <CategoryFilter 
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      {/* Specimens Grid */}
      <section id="specimens-section" className="py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-20">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-24">
              <p className="text-xl text-gray-600 dark:text-gray-400">
                No specimens found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 md:py-32 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-3xl mx-auto text-center px-6">
          <p className="text-2xl md:text-3xl font-light text-gray-950 dark:text-white mb-8">
            Each specimen is one of a kind.
          </p>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12">
            Available for viewing and acquisition worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/59899967347?text=I'd%20like%20information%20about%20the%20Barrios%20Catalogue"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gray-950 text-white font-medium hover:bg-gray-800 transition-apple"
            >
              Request Information
            </a>
            <a
              href="#specimens-section"
              className="px-8 py-4 border border-gray-950 dark:border-white text-gray-950 dark:text-white font-medium hover:bg-gray-50 dark:hover:bg-gray-900 transition-apple"
            >
              Schedule a Visit
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}

