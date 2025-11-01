import { useState, useEffect } from 'react'
import { X, ChevronLeft, ChevronRight, Search, Download, Share2, Heart } from 'lucide-react'
import ImageWithFallback from './ImageWithFallback'
import { useWishlist } from '../hooks/useWishlist'

export default function ProductGrid({ collection, onBack }) {
  const [images, setImages] = useState([])
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [searchTerm, setSearchTerm] = useState('')
  const [sortBy, setSortBy] = useState('name')
  const [zoom, setZoom] = useState(100)
  const { toggleWishlist, isInWishlist } = useWishlist()

  useEffect(() => {
    const loadImages = async () => {
      try {
        // Dynamic import of all images
        const modules = import.meta.glob('/public/images/**/*.{jpg,jpeg,png}', { eager: true })
        
        // Filter images for the current collection
        let collectionImages = Object.keys(modules)
          .filter(path => path.includes(`/images/${collection}/`))
          .map(path => path.replace('/public', ''))
          .sort()
        
        // Apply search filter
        if (searchTerm) {
          collectionImages = collectionImages.filter(img =>
            img.toLowerCase().includes(searchTerm.toLowerCase())
          )
        }
        
        // Apply sorting
        if (sortBy === 'name') {
          collectionImages.sort((a, b) => a.localeCompare(b))
        }
        
        console.log(`Loaded ${collectionImages.length} images for collection: ${collection}`)
        setImages(collectionImages)
        setZoom(100)
        setCurrentIndex(0)
        setLightboxOpen(false)
      } catch (error) {
        console.error(`Error loading images for collection ${collection}:`, error)
        setImages([])
      }
    }
    
    loadImages()
  }, [collection, searchTerm, sortBy])

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const downloadImage = () => {
    const link = document.createElement('a')
    link.href = images[currentIndex]
    link.download = `${collection}-${currentIndex + 1}`
    link.click()
  }

  const shareImage = () => {
    if (navigator.share) {
      navigator.share({
        title: `Barrios ${collection}`,
        text: `Check out this amazing specimen!`,
        url: window.location.href
      })
    }
  }

  return (
    <div>
      <button
        onClick={onBack}
        className="mb-8 px-5 py-2 text-sm font-medium text-white border border-white/30 hover:border-white hover:bg-white hover:text-gray-950 transition-apple flex items-center gap-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        aria-label="Back to Collections"
      >
        ← Back to Collections
      </button>

      {/* Search & Sort Controls */}
      <div className="mb-8 flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-3 text-gray-500 dark:text-gray-500" size={20} />
          <input
            type="text"
            placeholder="Search images..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 hairline bg-white dark:bg-gray-900 text-gray-950 dark:text-white focus:outline-none focus:border-gray-950 dark:focus:border-white transition-apple"
            aria-label="Search images"
          />
        </div>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="px-4 py-3 hairline bg-white dark:bg-gray-900 text-gray-950 dark:text-white focus:outline-none focus:border-gray-950 dark:focus:border-white transition-apple cursor-pointer"
          aria-label="Sort images"
        >
          <option value="name">Sort by Name</option>
          <option value="newest">Sort by Newest</option>
        </select>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
        {images.length > 0 ? (
          images.map((img, idx) => (
            <div
              key={idx}
              onClick={() => {
                setCurrentIndex(idx)
                setLightboxOpen(true)
              }}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  setCurrentIndex(idx)
                  setLightboxOpen(true)
                }
              }}
              className="relative overflow-hidden cursor-pointer group aspect-[4/5] bg-gray-100 dark:bg-gray-800 hairline hover:shadow-soft transition-apple"
              aria-label={`View ${collection} specimen ${idx + 1}`}
            >
              <ImageWithFallback
                src={img}
                alt={`${collection} specimen ${idx + 1}`}
                className="w-full h-full object-cover transition-apple group-hover:brightness-105"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-apple" />
              <div className="absolute bottom-2 left-2 right-2 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-apple">
                <span className="text-white text-[10px] font-medium px-2 py-1 bg-black/50 backdrop-blur-sm">View</span>
                <span className="text-white text-[10px] font-medium px-2 py-1 bg-black/50 backdrop-blur-sm">HD</span>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="text-gray-400">No images found</p>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightboxOpen && images.length > 0 && (
        <div className="fixed inset-0 z-50 bg-black/95 flex flex-col items-center justify-center p-4 overflow-hidden">
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-apple z-10 p-2 focus-visible:outline-2 focus-visible:outline-white"
            aria-label="Close lightbox"
          >
            <X size={32} strokeWidth={1.5} />
          </button>

          <div className="relative w-full h-full flex flex-col items-center justify-center max-w-5xl">
            {/* Image Container - Centered */}
            <div className="flex items-center justify-center flex-1 mb-4">
              <div style={{ transform: `scale(${zoom / 100})` }} className="transition-transform">
                <ImageWithFallback
                  src={images[currentIndex]}
                  alt={`${collection} ${currentIndex + 1}`}
                  className="max-h-[60vh] max-w-full object-contain"
                />
              </div>
            </div>

            {/* Controls - Always visible at bottom */}
            <div className="w-full flex flex-col gap-4">
              {/* Image counter */}
              <p className="text-center text-white text-sm font-medium">
                {currentIndex + 1} / {images.length}
              </p>
              
              {/* Control buttons */}
              <div className="flex items-center justify-between gap-4">
                <button
                  onClick={prevImage}
                  className="text-white hover:text-gray-300 transition-apple p-2 focus-visible:outline-2 focus-visible:outline-white flex-shrink-0"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={40} strokeWidth={1.5} />
                </button>

                <div className="flex items-center gap-4 flex-1 justify-center flex-wrap">
                  {/* Zoom Controls */}
                  <button
                    onClick={() => setZoom(Math.max(100, zoom - 10))}
                    className="text-white hover:text-gray-300 transition-apple text-sm px-3 py-1 hairline border-gray-500 rounded-full"
                    aria-label="Zoom out"
                  >
                    -
                  </button>
                  <span className="text-white text-sm min-w-12 text-center">{zoom}%</span>
                  <button
                    onClick={() => setZoom(Math.min(200, zoom + 10))}
                    className="text-white hover:text-gray-300 transition-apple text-sm px-3 py-1 hairline border-gray-500 rounded-full"
                    aria-label="Zoom in"
                  >
                    +
                  </button>

                  {/* Download & Share */}
                  <button
                    onClick={downloadImage}
                    className="text-white hover:text-gray-300 transition-apple p-2 focus-visible:outline-2 focus-visible:outline-white"
                    title="Download"
                    aria-label="Download image"
                  >
                    <Download size={20} />
                  </button>
                  <button
                    onClick={shareImage}
                    className="text-white hover:text-gray-300 transition-apple p-2 focus-visible:outline-2 focus-visible:outline-white"
                    title="Share"
                    aria-label="Share image"
                  >
                    <Share2 size={20} />
                  </button>
                </div>

                <button
                  onClick={nextImage}
                  className="text-white hover:text-gray-300 transition-apple p-2 focus-visible:outline-2 focus-visible:outline-white flex-shrink-0"
                  aria-label="Next image"
                >
                  <ChevronRight size={40} strokeWidth={1.5} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
