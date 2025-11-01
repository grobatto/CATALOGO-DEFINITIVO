import { useState, useEffect, useRef } from 'react'
import { ImageSkeleton } from './SkeletonLoader'

export default function ImageWithFallback({
  src,
  alt,
  className = '',
  loading = 'lazy',
  showSkeleton = true
}) {
  const [error, setError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [isVisible, setIsVisible] = useState(false)
  const imgRef = useRef(null)

  // Intersection Observer for better lazy loading
  useEffect(() => {
    if (!imgRef.current || loading === 'eager') {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      {
        rootMargin: '50px', // Start loading 50px before the image enters viewport
      }
    )

    observer.observe(imgRef.current)

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current)
      }
    }
  }, [loading])

  const handleLoad = () => {
    setIsLoading(false)
  }

  const handleError = () => {
    setError(true)
    setIsLoading(false)
  }

  // Error state
  if (error) {
    return (
      <div className={`${className} bg-gray-100 dark:bg-gray-900 flex items-center justify-center`}>
        <div className="text-center p-6">
          <svg
            className="w-12 h-12 mx-auto mb-2 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <p className="text-gray-500 dark:text-gray-400 text-sm">Image Not Available</p>
        </div>
      </div>
    )
  }

  return (
    <div ref={imgRef} className="relative">
      {/* Show skeleton while loading */}
      {isLoading && showSkeleton && <ImageSkeleton className={className} />}

      {/* Actual image - only load when visible */}
      {isVisible && (
        <img
          src={src}
          alt={alt}
          className={`${className} ${isLoading ? 'opacity-0 absolute inset-0' : 'opacity-100'} transition-opacity duration-300`}
          loading={loading}
          onLoad={handleLoad}
          onError={handleError}
        />
      )}
    </div>
  )
}
