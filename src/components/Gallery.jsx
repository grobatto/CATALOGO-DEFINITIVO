import { useState } from 'react'
import ProductGrid from './ProductGrid'
import React from 'react'

const collections = [
  { id: 'bases-metal', name: 'Signature Metal Base', desc: 'Premium pieces on elegant metal stands', count: 57, preview: '/images/bases-metal/IMG_2623.jpg' },
  { id: 'torres', name: 'Crystal Towers', desc: 'Polished amethyst towers in varying heights', count: 32, preview: '/images/torres/IMG_5127.jpg' },
  { id: 'cortados', name: 'Cut Base Geodes', desc: 'Polished agate with amethyst interiors', count: 20, preview: '/images/cortados/IMG_2631.jpg' },
  { id: 'corazones', name: 'Hearts Collection', desc: 'Romantic druzy hearts in natural colors', count: 2, preview: '/images/corazones/Copia de IMG_5140.jpg' },
  { id: 'chapas', name: 'Agate Slabs', desc: 'Translucent agate sheets for artistic applications', count: 21, preview: '/images/chapas/IMG_8116.jpg' },
  { id: 'esferas', name: 'Crystal Spheres', desc: 'Perfectly polished spheres for meditation', count: 7, preview: '/images/esferas/Photoroom_20250624_114937.png' },
  { id: 'piramides', name: 'Pyramids', desc: 'Geometric precision pieces', count: 11, preview: '/images/piramides/IMG_2660.jpg' },
  { id: 'huevos', name: 'Polished Eggs', desc: 'Elegant egg-shaped specimens', count: 2, preview: '/images/huevos/WhatsApp Image 2025-08-04 at 9.30.08 AM.jpeg' },
  { id: 'preformados', name: 'Pre-formed Pieces', desc: 'Ready-to-use shaped pieces', count: 6, preview: '/images/preformados/WhatsApp Image 2025-10-06 at 10.25.14 AM.jpeg' },
  { id: 'home-deco', name: 'Home Decor Special', desc: 'Museum-quality statement pieces', count: 9, preview: '/images/home-deco/SPECIAL PIECE - DECO (Amatista con calcita pieza natural).png' },
  { id: 'estalactitas', name: 'Stalactites', desc: 'Rare natural formations', count: 1, preview: '/images/estalactitas/A9223C05-5CCF-4C28-BF79-BE796F694DBD.jpg' },
  { id: 'bultos', name: 'Wholesale Bulk', desc: 'Volume orders for retailers', count: 4, preview: '/images/bultos/FEED.png' },
]

export default function Gallery() {
  const [selectedCollection, setSelectedCollection] = useState(null)

  // Scroll to top when collection is selected
  React.useEffect(() => {
    if (selectedCollection) {
      document.getElementById('collections-1')?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [selectedCollection])

  return (
    <div>
      {/* Product Grid View - Shows when a collection is selected */}
      {selectedCollection ? (
        <section id="collections-1" className="py-20 md:py-28 px-6 bg-black">
          <div className="max-w-apple mx-auto">
            <ProductGrid 
              collection={selectedCollection} 
              onBack={() => setSelectedCollection(null)}
            />
          </div>
        </section>
      ) : (
        <>
          {/* Gallery 1 - Our Collections (Black) */}
          <section id="collections-1" className="py-20 md:py-28 px-6 bg-black">
            <div className="max-w-apple mx-auto">
              <div className="text-center mb-16 md:mb-20">
                <h2 className="text-4xl md:text-5xl font-semibold text-white mb-4 tracking-tight">Our Collections</h2>
                <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">Each piece carefully selected from our mines, showcasing nature's artistry at its finest</p>
              </div>

              <div className="grid md:grid-cols-3 gap-0 border border-hairline-dark">
              {collections.slice(0, Math.ceil(collections.length/2)).map((col, idx) => (
                <div
                  key={col.id}
                  onClick={() => setSelectedCollection(col.id)}
                  className={`relative overflow-hidden border-hairline-dark
                             ${idx !== collections.slice(0, Math.ceil(collections.length/2)).length - 1 ? 'border-b' : ''}
                             ${idx % 3 !== 2 ? 'md:border-r' : ''}
                             cursor-pointer group transition-apple
                             ${idx === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setSelectedCollection(col.id);
                    }
                  }}
                  aria-label={`View ${col.name} collection with ${col.count} pieces`}
                >
                  <div className={`bg-gray-900 ${idx === 0 ? 'h-[500px]' : 'h-80'}`}>
                    <img 
                      src={col.preview} 
                      alt={col.name}
                      className="w-full h-full object-cover transition-apple group-hover:brightness-105 group-hover:-translate-y-0.5"
                      loading="lazy"
                      decoding="async"
                      onError={(e) => { 
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML = '<div class="text-gray-500 text-xs text-center px-2 h-full flex items-center justify-center">No preview</div>';
                      }}
                    />
                  </div>
                  
                  {/* Text overlay - minimal, only on hover for better photo visibility */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-apple bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-6">
                    <h3 className="text-xl font-semibold text-white mb-1 tracking-tight">{col.name}</h3>
                    <p className="text-sm text-gray-300">{col.count} pieces</p>
                  </div>
                </div>
              ))}
              </div>
            </div>
          </section>

          {/* Gallery 2 - More Selections (Beige) */}
          <section id="collections-2" className="py-20 md:py-28 px-6" style={{ backgroundColor: '#F5F1E8' }}>
            <div className="max-w-apple mx-auto">
              <div className="text-center mb-16 md:mb-20">
                <h2 className="text-3xl md:text-4xl font-semibold text-gray-950 mb-3 tracking-tight">More Selections</h2>
                <p className="text-base md:text-lg text-gray-800 leading-relaxed">Discover additional curated categories</p>
              </div>

              <div className="grid md:grid-cols-2 gap-0 border border-hairline-light">
              {collections.slice(Math.ceil(collections.length/2)).map((col, idx) => (
                <div
                  key={col.id}
                  onClick={() => setSelectedCollection(col.id)}
                  className={`relative overflow-hidden border-hairline-light
                            ${idx !== collections.slice(Math.ceil(collections.length/2)).length - 1 ? 'border-b' : ''}
                            ${idx % 2 === 0 ? 'md:border-r' : ''}
                            cursor-pointer group transition-apple`}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setSelectedCollection(col.id);
                    }
                  }}
                  aria-label={`View ${col.name} collection with ${col.count} pieces`}
                >
                  <div className="h-96 bg-gray-100">
                    <img 
                      src={col.preview} 
                      alt={col.name}
                      className="w-full h-full object-cover transition-apple group-hover:brightness-105 group-hover:-translate-y-0.5"
                      loading="lazy"
                      decoding="async"
                      onError={(e) => { 
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML = '<div class="text-gray-500 text-xs text-center px-2 h-full flex items-center justify-center">No preview</div>';
                      }}
                    />
                  </div>
                  
                  {/* Text overlay - minimal, only on hover for better photo visibility */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-apple bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-6">
                    <h3 className="text-xl font-semibold text-white mb-1 tracking-tight">{col.name}</h3>
                    <p className="text-sm text-gray-300">{col.count} pieces</p>
                  </div>
                </div>
              ))}
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  )
}
