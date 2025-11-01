// Reusable skeleton loader components for better loading UX

export const ProductCardSkeleton = () => (
  <div className="animate-pulse">
    {/* Image skeleton */}
    <div className="aspect-square bg-gray-200 dark:bg-gray-800 mb-6"></div>

    {/* Badge skeleton */}
    <div className="h-6 w-24 bg-gray-200 dark:bg-gray-800 mb-4"></div>

    {/* Title skeleton */}
    <div className="h-8 bg-gray-200 dark:bg-gray-800 mb-2 w-3/4"></div>

    {/* Subtitle skeleton */}
    <div className="h-4 bg-gray-200 dark:bg-gray-800 mb-4 w-1/2"></div>

    {/* Description skeleton */}
    <div className="space-y-2 mb-6">
      <div className="h-4 bg-gray-200 dark:bg-gray-800 w-full"></div>
      <div className="h-4 bg-gray-200 dark:bg-gray-800 w-5/6"></div>
      <div className="h-4 bg-gray-200 dark:bg-gray-800 w-4/6"></div>
    </div>

    {/* Button skeleton */}
    <div className="h-12 bg-gray-200 dark:bg-gray-800"></div>
  </div>
)

export const ProductGridSkeleton = ({ count = 6 }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-20">
    {Array.from({ length: count }).map((_, index) => (
      <ProductCardSkeleton key={index} />
    ))}
  </div>
)

export const ImageSkeleton = ({ className = "" }) => (
  <div className={`animate-pulse bg-gray-200 dark:bg-gray-800 ${className}`}>
    <div className="flex items-center justify-center h-full">
      <svg
        className="w-12 h-12 text-gray-300 dark:text-gray-700"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          fillRule="evenodd"
          d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  </div>
)

export const HeroSkeleton = () => (
  <div className="animate-pulse min-h-screen flex flex-col items-center justify-center bg-white pt-20 pb-16">
    <div className="relative flex items-center justify-center w-full mb-8">
      <div className="max-h-[72vh] max-w-[92vw] md:max-w-[85vw] aspect-square bg-gray-200"></div>
    </div>
    <div className="text-center px-6 mb-12">
      <div className="h-12 bg-gray-200 w-96 mx-auto mb-4"></div>
      <div className="h-6 bg-gray-200 w-64 mx-auto"></div>
    </div>
  </div>
)

export default {
  ProductCardSkeleton,
  ProductGridSkeleton,
  ImageSkeleton,
  HeroSkeleton
}
