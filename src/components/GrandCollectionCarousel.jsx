import { useState, useEffect } from 'react'
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

// Duplicate array for infinite loop effect
const infiniteImages = [...piezasGrandesImages, ...piezasGrandesImages]

export default function GrandCollectionCarousel() {
  const [translateX, setTranslateX] = useState(0)
  
  // Calculate width needed per image (each image is ~300px on desktop)
  const imageWidth = 320 // px with gap included
  const totalWidth = piezasGrandesImages.length * imageWidth
  
  useEffect(() => {
    let animationFrame
    let currentX = 0
    
    const animate = () => {
      // Move slowly (0.5px per frame for smooth motion)
      currentX -= 0.5
      
      // Reset when we've scrolled one full set of images
      if (currentX <= -totalWidth) {
        currentX = 0
      }
      
      setTranslateX(currentX)
      animationFrame = requestAnimationFrame(animate)
    }
    
    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [totalWidth])

  return (
    <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] overflow-hidden bg-gradient-to-r from-brand-green-800 via-brand-purple-700 to-brand-green-800 py-12">
      {/* Sliding Container */}
      <div className="relative h-64 md:h-80">
        <div 
          className="absolute inset-0 flex gap-6"
          style={{ transform: `translateX(${translateX}px)` }}
        >
          {infiniteImages.map((image, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-64 md:w-80 h-64 md:h-80 overflow-hidden rounded-2xl bg-white/10 backdrop-blur-sm border border-savannah-200/30 shadow-2xl shadow-brand-purple-900/40"
            >
              <ImageWithFallback
                src={`/images/PIEZAS GRANDES/${image}`}
                alt={`Large Specimen ${(index % piezasGrandesImages.length) + 1}`}
                className="w-full h-full object-contain p-0"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

