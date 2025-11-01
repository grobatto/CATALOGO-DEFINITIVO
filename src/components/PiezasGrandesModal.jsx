import { useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import ImageWithFallback from './ImageWithFallback'

const piezasGrandesImages = [
  'IMG_3945.png',
  'IMG_3946.png',
  'IMG_3947.png',
  'IMG_3948.png',
  'IMG_3949.png',
  'IMG_3950.png',
  'IMG_3951.png',
  'IMG_3952.png',
  'IMG_3953.png',
  'IMG_3954.png',
  'IMG_3955.png',
  'IMG_3956.png',
  'IMG_3964.png',
  'IMG_3965.png',
  'IMG_3966.png',
  'IMG_3967.png',
  'IMG_3968.png',
  'IMG_3969.png',
  'IMG_3970.png',
  'IMG_3971.png',
  'IMG_3972.png',
  'IMG_3973.png',
  'IMG_3974.png',
  'IMG_3975.png',
  'IMG_3976.png',
  'IMG_3977.png',
  'IMG_3978.png',
  'IMG_3979.png',
  'IMG_3980.png',
  'IMG_3981.png',
  'IMG_3983.png',
  'IMG_3984.png',
  'IMG_3985.png',
  'IMG_3986.png',
  'IMG_3987.png',
  'IMG_3988.png',
  'IMG_3989.png',
  'IMG_3990.png',
  'IMG_3991.png',
  'IMG_3992.png',
  'IMG_3993.png',
  'IMG_4009.png',
  'IMG_4010.png',
  'IMG_4011.png',
  'IMG_4012.png',
  'IMG_4013.png',
  'IMG_4014.png',
  'IMG_4015.png',
  'IMG_4016.png',
  'IMG_4017.png',
  'IMG_4018.png',
  'IMG_4019.png',
  'IMG_4020.png',
  'IMG_4021.png',
  'IMG_4022.png',
  'IMG_4023.png',
  'IMG_4024.png',
  'IMG_4025.png',
  'IMG_4026.png',
  'IMG_4027.png',
  'IMG_4028.png',
  'IMG_4029.png',
  'IMG_4030.png',
  'IMG_4031.png',
  'IMG_4032.png',
  'IMG_4033.png',
  'IMG_4034.png',
  'IMG_4035.png',
  'IMG_4036.png',
  'IMG_4037.png',
  'IMG_4038.png',
  'IMG_4039.png',
  'IMG_4040.png',
  'IMG_4041.png',
  'IMG_4042.png',
]

export default function PiezasGrandesModal({ isOpen, onClose }) {
  const [selectedImage, setSelectedImage] = useState(null)
  const [hoveredIndex, setHoveredIndex] = useState(null)

  if (!isOpen) return null

  const handleWhatsApp = (imageName) => {
    const message = `I'm interested in learning more about this exceptional large specimen from the Barrios Catalogue`
    const url = `https://wa.me/59899967347?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  const navigateLightbox = (direction) => {
    if (!selectedImage) return
    const currentIndex = piezasGrandesImages.indexOf(selectedImage)
    let nextIndex
    
    if (direction === 'next') {
      nextIndex = (currentIndex + 1) % piezasGrandesImages.length
    } else {
      nextIndex = (currentIndex - 1 + piezasGrandesImages.length) % piezasGrandesImages.length
    }
    
    setSelectedImage(piezasGrandesImages[nextIndex])
  }

  return (
    <>
      {/* Backdrop - Premium blur effect */}
      <div 
        className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-xl animate-fadeIn"
        onClick={onClose}
      />

      {/* Modal Container - Refined */}
      <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 md:p-6">
        <div className="relative w-full max-w-7xl h-[90vh] flex flex-col bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden animate-fadeIn">
          
          {/* Header - Minimal & Clean */}
          <div className="relative z-10 px-6 md:px-10 pt-8 pb-6 border-b border-gray-200 dark:border-gray-800">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400 font-medium mb-2">Exceptional Collection</p>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-thin tracking-tight text-gray-950 dark:text-white leading-tight">
                  Piezas Grandes
                </h2>
                <p className="text-base md:text-lg text-gray-500 dark:text-gray-400 font-light mt-3">
                  Museum-quality large specimens from our private collection
                </p>
              </div>

              {/* Close Button - Premium */}
              <button
                onClick={onClose}
                className="flex-shrink-0 w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-400 hover:text-gray-950 dark:hover:text-white transition-all duration-200 flex items-center justify-center group"
                aria-label="Close"
              >
                <X size={24} className="group-hover:rotate-90 transition-transform duration-300" strokeWidth={1.5} />
              </button>
            </div>
          </div>

          {/* Image Grid - Responsive masonry-style */}
          <div className="flex-1 overflow-y-auto p-6 md:p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-7">
              {piezasGrandesImages.map((image, index) => (
                <div
                  key={index}
                  className="group relative aspect-square overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800 cursor-pointer shadow-sm hover:shadow-lg transition-all duration-300"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onClick={() => setSelectedImage(image)}
                >
                  {/* Image Container */}
                  <div className="absolute inset-0">
                    <ImageWithFallback
                      src={`/images/PIEZAS GRANDES/${image}`}
                      alt={`Large Specimen ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>

                  {/* Overlay - Subtle gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Info Badge - Appears on hover */}
                  <div className="absolute inset-0 flex flex-col items-center justify-end p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                    <p className="text-white text-sm font-medium mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                      Specimen {index + 1}
                    </p>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        handleWhatsApp(image)
                      }}
                      className="px-4 py-2 bg-white text-gray-950 text-xs font-semibold rounded-md hover:bg-gray-100 transition-all duration-200 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 delay-150"
                    >
                      Inquire
                    </button>
                  </div>

                  {/* Corner indicator */}
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-white/30">
                    <span className="text-white text-xs font-semibold">{index + 1}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer - Collection info */}
          <div className="px-6 md:px-10 py-4 border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50">
            <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 font-light">
              {piezasGrandesImages.length} exceptional specimens • Each one of a kind • Available for serious collectors worldwide
            </p>
          </div>
        </div>
      </div>

      {/* Lightbox - Premium full-screen viewer */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[102] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-8 group animate-fadeIn"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close button - Top right */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-200 flex items-center justify-center backdrop-blur-sm border border-white/20 hover:border-white/40"
            aria-label="Close lightbox"
          >
            <X size={24} strokeWidth={1.5} />
          </button>

          {/* Counter - Top left */}
          <div className="absolute top-6 left-6 z-10 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
            <p className="text-white text-sm font-light">
              {piezasGrandesImages.indexOf(selectedImage) + 1} / {piezasGrandesImages.length}
            </p>
          </div>

          {/* Main image container */}
          <div 
            className="relative w-full max-w-5xl h-[80vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <ImageWithFallback
              src={`/images/PIEZAS GRANDES/${selectedImage}`}
              alt="Large Specimen Detail"
              className="w-full h-full object-contain"
              loading="eager"
            />
          </div>

          {/* Navigation Arrows - Bottom */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-6 z-10">
            {/* Previous */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                navigateLightbox('prev')
              }}
              className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-200 flex items-center justify-center backdrop-blur-sm border border-white/20 hover:border-white/40 group/nav"
              aria-label="Previous image"
            >
              <ChevronLeft size={20} className="group-hover/nav:-translate-x-0.5 transition-transform" strokeWidth={1.5} />
            </button>

            {/* Keyboard hint */}
            <div className="text-white/50 text-xs font-light">
              Use arrow keys or click to navigate
            </div>

            {/* Next */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                navigateLightbox('next')
              }}
              className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-200 flex items-center justify-center backdrop-blur-sm border border-white/20 hover:border-white/40 group/nav"
              aria-label="Next image"
            >
              <ChevronRight size={20} className="group-hover/nav:translate-x-0.5 transition-transform" strokeWidth={1.5} />
            </button>
          </div>

          {/* CTA Button - Bottom right */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              handleWhatsApp(selectedImage)
            }}
            className="absolute bottom-8 right-8 px-8 py-3 bg-white text-gray-950 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Request Information
          </button>
        </div>
      )}
    </>
  )
}

