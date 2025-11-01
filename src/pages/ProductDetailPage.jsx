import { useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { ArrowLeft, CheckCircle } from 'lucide-react'
import { getProductById } from '../data/products'
import { useLanguage } from '../contexts/LanguageContext'
import { t } from '../data/translations'
import ImageWithFallback from '../components/ImageWithFallback'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'

export default function ProductDetailPage() {
  const { productId } = useParams()
  const navigate = useNavigate()
  const { language } = useLanguage()
  const product = getProductById(productId)
  const [selectedImage, setSelectedImage] = useState(0)

  if (!product) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-950 flex items-center justify-center">
        <div className="text-center px-6">
          <h1 className="text-3xl font-light text-gray-950 dark:text-white mb-4">
            Specimen not found
          </h1>
          <Link 
            to="/catalogue"
            className="text-gray-600 dark:text-gray-400 hover:text-gray-950 dark:hover:text-white transition-apple"
          >
            ← Back to Catalogue
          </Link>
        </div>
      </div>
    )
  }

  // Get description in current language
  const getDescription = () => {
    if (product.description && typeof product.description === 'object') {
      return product.description[language] || product.description.en
    }
    return product.description
  }

  // Format dimensions
  const formatDimensions = () => {
    if (product.market === 'wholesale' && product.dimensions) {
      return {
        pieces: product.dimensions.pieces,
        avgSize: product.dimensions.avgSize,
        totalWeight: product.dimensions.totalWeight
      }
    }
    if (product.dimensions && typeof product.dimensions === 'object') {
      return {
        height: product.dimensions.height,
        width: product.dimensions.width,
        depth: product.dimensions.depth,
        weight: product.dimensions.weight
      }
    }
    return null
  }

  const productName = product.creativeName || product.name
  const whatsappMessage = `I'd like information about ${productName} from the Barrios Catalogue`
  const whatsappUrl = `https://wa.me/59899967347?text=${encodeURIComponent(whatsappMessage)}`
  const dimensions = formatDimensions()

  return (
    <div className="bg-white dark:bg-gray-950 min-h-screen">
      {/* Back Button */}
      <div className="sticky top-16 md:top-20 z-40 bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800 backdrop-blur-md bg-opacity-95">
        <div className="max-w-apple mx-auto px-6 md:px-8 py-4">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-950 dark:hover:text-white transition-apple group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-slow" />
            <span className="font-medium">Back to Catalogue</span>
          </button>
        </div>
      </div>

      {/* Product Detail */}
      <div className="max-w-apple mx-auto px-6 md:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          
          {/* Image Gallery - 60% */}
          <div className="lg:col-span-3">
            {/* Main Image */}
            <div className="relative aspect-square bg-gray-50 dark:bg-gray-900 overflow-hidden mb-4">
              <ImageWithFallback
                src={product.images[selectedImage]}
                alt={`${product.name} - View ${selectedImage + 1}`}
                className="w-full h-full object-contain"
              />
              {product.badge && (
                <div className="absolute top-6 right-6 px-4 py-2 bg-gray-950 text-white text-sm font-medium tracking-wide">
                  {product.badge}
                </div>
              )}
            </div>

            {/* Thumbnail Gallery */}
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-3">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`
                      aspect-square overflow-hidden transition-apple
                      ${selectedImage === index 
                        ? 'ring-2 ring-gray-950 dark:ring-white' 
                        : 'ring-1 ring-gray-200 dark:ring-gray-700 hover:ring-gray-400'
                      }
                    `}
                  >
                    <ImageWithFallback
                      src={image}
                      alt={`${product.name} thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Details - 40% */}
          <div className="lg:col-span-2">
            <div className="sticky top-32">
              {/* Category Badge */}
              {product.category && (
                <div className="inline-flex items-center gap-2 mb-4">
                  <div className="w-10 h-10 rounded-full bg-purple-600 text-white flex items-center justify-center text-sm font-bold">
                    {product.category}
                  </div>
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    {product.badge}
                  </span>
                </div>
              )}

              {/* Creative Name */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-950 dark:text-white mb-2">
                {product.creativeName || product.name}
              </h1>

              {/* Technical Name */}
              {product.technicalName && (
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                  {product.technicalName}
                </p>
              )}

              {/* Description */}
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-12">
                {getDescription()}
              </p>

              {/* CTA Button */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full px-8 py-4 bg-gray-950 dark:bg-white text-white dark:text-gray-950 text-center font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition-apple mb-8"
              >
                {t('requestInfo', language)}
              </a>

              {/* Specifications */}
              <div className="space-y-6 pt-8 border-t border-gray-200 dark:border-gray-800">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  {t('dimensions', language)}
                </h3>
                
                <div className="space-y-4">
                  {product.market === 'wholesale' ? (
                    <>
                      {dimensions?.pieces && (
                        <div className="flex items-start gap-3">
                          <CheckCircle size={20} className="text-gray-400 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{t('pieces', language)}</p>
                            <p className="text-base text-gray-950 dark:text-white">{dimensions.pieces} {t('pieces', language)}</p>
                          </div>
                        </div>
                      )}
                      {dimensions?.avgSize && (
                        <div className="flex items-start gap-3">
                          <CheckCircle size={20} className="text-gray-400 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{t('avgSize', language)}</p>
                            <p className="text-base text-gray-950 dark:text-white">{dimensions.avgSize}</p>
                          </div>
                        </div>
                      )}
                      {dimensions?.totalWeight && (
                        <div className="flex items-start gap-3">
                          <CheckCircle size={20} className="text-gray-400 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{t('totalWeight', language)}</p>
                            <p className="text-base text-gray-950 dark:text-white">{dimensions.totalWeight}</p>
                          </div>
                        </div>
                      )}
                      {product.composition && (
                        <div className="flex items-start gap-3">
                          <CheckCircle size={20} className="text-gray-400 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{t('lotComposition', language)}</p>
                            <p className="text-base text-gray-950 dark:text-white">
                              {product.composition.D}% D • {product.composition.C}% C • {product.composition.B}% B • {product.composition.A}% A • {product.composition.E}% E
                            </p>
                          </div>
                        </div>
                      )}
                    </>
                  ) : (
                    <>
                      {dimensions?.height && (
                        <div className="flex items-start gap-3">
                          <CheckCircle size={20} className="text-gray-400 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{t('height', language)}</p>
                            <p className="text-base text-gray-950 dark:text-white">{dimensions.height}</p>
                          </div>
                        </div>
                      )}
                      {dimensions?.width && (
                        <div className="flex items-start gap-3">
                          <CheckCircle size={20} className="text-gray-400 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{t('width', language)}</p>
                            <p className="text-base text-gray-950 dark:text-white">{dimensions.width}</p>
                          </div>
                        </div>
                      )}
                      {dimensions?.depth && (
                        <div className="flex items-start gap-3">
                          <CheckCircle size={20} className="text-gray-400 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{t('depth', language)}</p>
                            <p className="text-base text-gray-950 dark:text-white">{dimensions.depth}</p>
                          </div>
                        </div>
                      )}
                      {dimensions?.weight && (
                        <div className="flex items-start gap-3">
                          <CheckCircle size={20} className="text-gray-400 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{t('weight', language)}</p>
                            <p className="text-base text-gray-950 dark:text-white">{dimensions.weight}</p>
                          </div>
                        </div>
                      )}
                    </>
                  )}

                  <div className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-gray-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Origin</p>
                      <p className="text-base text-gray-950 dark:text-white">{product.origin}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-gray-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Certification</p>
                      <p className="text-base text-gray-950 dark:text-white">Available upon request</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Info */}
              <div className="mt-12 p-6 bg-gray-50 dark:bg-gray-900">
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  This piece is one of a kind and available for immediate acquisition. 
                  International shipping available with full insurance and tracking. 
                  Contact us for more details or to schedule a private viewing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}

