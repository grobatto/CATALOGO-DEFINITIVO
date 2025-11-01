import { Link } from 'react-router-dom'
import ImageWithFallback from './ImageWithFallback'
import { useLanguage } from '../contexts/LanguageContext'

export default function ProductCard({ product }) {
  const { language } = useLanguage()
  
  // Get description in current language or fallback to English
  const getDescription = () => {
    if (product.description && typeof product.description === 'object') {
      return product.description[language] || product.description.en
    }
    return product.description
  }

  // Format dimensions for display
  const formatDimensions = () => {
    if (product.market === 'wholesale' && product.dimensions) {
      return `${product.dimensions.pieces} pieces • ${product.dimensions.avgSize} • ${product.dimensions.totalWeight}`
    }
    if (product.dimensions && typeof product.dimensions === 'object') {
      return `${product.dimensions.height} × ${product.dimensions.width} × ${product.dimensions.depth} • ${product.dimensions.weight}`
    }
    return product.dimensions || ''
  }

  return (
    <Link 
      to={`/catalogue/${product.id}`}
      className="group block transition-apple"
    >
      <div className="relative aspect-square overflow-hidden bg-white dark:bg-gray-900 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-200/70 dark:border-gray-800">
        <ImageWithFallback
          src={product.images[0]}
          alt={product.creativeName || product.name}
          className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105 p-3"
          loading="lazy"
        />
        {product.badge && (
          <div className="absolute top-4 right-4 px-3 py-1 bg-brand-green-500 text-white text-xs font-medium tracking-wide uppercase shadow-sm">
            {product.badge}
          </div>
        )}
        {product.category && (
          <div className="absolute top-4 left-4 w-9 h-9 rounded-full bg-brand-purple-500 text-white flex items-center justify-center text-xs font-bold shadow-sm">
            {product.category}
          </div>
        )}
      </div>
      
      <div className="mt-6 text-center">
        {product.creativeName && (
          <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-brand-green-700 dark:text-brand-green-200 mb-1">
            {product.creativeName}
          </h3>
        )}
        {product.technicalName && (
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-2">
            {product.technicalName}
          </p>
        )}
        
        {formatDimensions() && (
          <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 mb-3">
            {formatDimensions()}
          </p>
        )}
      </div>
    </Link>
  )
}

