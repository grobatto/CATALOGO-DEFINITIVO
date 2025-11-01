import { useState } from 'react'
import { Link } from 'react-router-dom'
import { X, ChevronLeft, ChevronRight, ArrowLeft } from 'lucide-react'
import ImageWithFallback from '../components/ImageWithFallback'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'

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

export default function PiezasGrandesPage() {
  const [selectedImage, setSelectedImage] = useState(null)

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
    <div className="bg-gradient-to-b from-gray-950 via-purple-900 to-gray-950 min-h-screen text-white relative overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-purple-900/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-purple-800/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Back Navigation */}
        <div className="sticky top-20 z-40 px-6 md:px-8 pt-8 pb-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-purple-300 hover:text-purple-200 transition-colors group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" strokeWidth={1.5} />
            <span className="text-sm font-medium">Back to Catalogue</span>
          </Link>
        </div>

        {/* Hero Section */}
        <section className="px-6 md:px-8 py-20 md:py-32 text-center border-b border-purple-800/20" style={{ backgroundColor: '#7C4988' }}>
          <div className="max-w-4xl mx-auto">
            <div className="mb-6 flex justify-center">
              <div>
                <span className="text-xs uppercase tracking-widest text-purple-400 font-semibold">Museum Collection</span>
                <div className="h-0.5 w-32 bg-gradient-to-r from-purple-400 via-purple-500 to-transparent mx-auto mt-3" />
              </div>
            </div>

            <h1 className="text-7xl md:text-8xl lg:text-9xl font-thin tracking-tight mb-8 text-center">
              The Grand Collection
            </h1>

            <p className="text-lg md:text-2xl text-purple-200 font-light mb-6 max-w-3xl mx-auto">
              Museum-quality large specimens from our private collection
            </p>

            <p className="text-sm md:text-base text-purple-300/70 font-light">
              {piezasGrandesImages.length} exceptional amethysts • Each one of a kind • Available for serious collectors worldwide
            </p>
          </div>
        </section>

        {/* Image Grid */}
        <section className="px-6 md:px-8 py-24 md:py-32">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {piezasGrandesImages.map((image, index) => (
                <div
                  key={index}
                  className="group relative aspect-square overflow-hidden rounded-xl bg-gradient-to-br from-purple-900/30 to-gray-900/60 cursor-pointer backdrop-blur-sm border border-purple-500/20 hover:border-purple-400/50 transition-all duration-500 shadow-2xl hover:shadow-purple-500/30"
                  onClick={() => setSelectedImage(image)}
                >
                  {/* Image */}
                  <div className="absolute inset-0">
                    <ImageWithFallback
                      src={`/images/PIEZAS GRANDES/${image}`}
                      alt={`Large Specimen ${index + 1}`}
                      className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>

                  {/* Overlay - Deep purple gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-purple-950/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />

                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-600/0 via-purple-500/0 to-purple-400/0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 mix-blend-screen" />

                  {/* Number badge */}
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-purple-500/40 backdrop-blur-md border border-purple-400/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-sm font-semibold text-purple-100">{index + 1}</span>
                  </div>

                  {/* Info text - Bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    <p className="text-purple-200 text-sm font-medium mb-3 text-center">Specimen {index + 1}</p>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        handleWhatsApp(image)
                      }}
                      className="w-full px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white font-semibold rounded-lg transition-colors duration-200 text-sm"
                    >
                      Inquire Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="px-6 md:px-8 py-20 md:py-24 text-center border-t border-purple-800/20">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg md:text-2xl text-purple-200 font-light mb-8">
              Each specimen is one of a kind and available for immediate acquisition.
            </p>
            <a
              href="https://wa.me/59899967347?text=I%27d%20like%20information%20about%20the%20Piezas%20Grandes%20collection"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 text-white font-semibold rounded-lg transition-all duration-200 group shadow-lg hover:shadow-purple-500/50"
            >
              <span>Request Information</span>
              <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </section>

        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-[150] bg-gray-950/99 backdrop-blur-lg flex items-center justify-center p-4 md:p-8 animate-fadeIn"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full bg-purple-600/40 hover:bg-purple-600/60 text-purple-200 hover:text-white transition-all duration-200 flex items-center justify-center backdrop-blur-md border border-purple-400/40 hover:border-purple-300/80"
              aria-label="Close lightbox"
            >
              <X size={24} strokeWidth={1.5} />
            </button>

            {/* Counter */}
            <div className="absolute top-6 left-6 z-10 px-4 py-2 rounded-full bg-purple-600/40 backdrop-blur-md border border-purple-400/40">
              <p className="text-purple-200 text-sm font-light">
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

            {/* Navigation - Bottom Center */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-6 z-10">
              {/* Previous */}
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  navigateLightbox('prev')
                }}
                className="w-11 h-11 rounded-full bg-purple-600/40 hover:bg-purple-600/60 text-purple-200 hover:text-white transition-all duration-200 flex items-center justify-center backdrop-blur-md border border-purple-400/40 hover:border-purple-300/80 group/nav"
                aria-label="Previous image"
              >
                <ChevronLeft size={20} className="group-hover/nav:-translate-x-0.5 transition-transform" strokeWidth={1.5} />
              </button>

              {/* Hint */}
              <div className="text-purple-300/70 text-xs font-light">
                Press ← → or click to navigate
              </div>

              {/* Next */}
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  navigateLightbox('next')
                }}
                className="w-11 h-11 rounded-full bg-purple-600/40 hover:bg-purple-600/60 text-purple-200 hover:text-white transition-all duration-200 flex items-center justify-center backdrop-blur-md border border-purple-400/40 hover:border-purple-300/80 group/nav"
                aria-label="Next image"
              >
                <ChevronRight size={20} className="group-hover/nav:translate-x-0.5 transition-transform" strokeWidth={1.5} />
              </button>
            </div>

            {/* CTA Button - Bottom Right */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                handleWhatsApp(selectedImage)
              }}
              className="absolute bottom-8 right-8 px-8 py-3 bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-purple-500/50"
            >
              Inquire
            </button>
          </div>
        )}

        <Footer />
        <WhatsAppButton />
      </div>
    </div>
  )
}
