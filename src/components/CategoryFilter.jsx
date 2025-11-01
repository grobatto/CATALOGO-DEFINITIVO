import { categories } from '../data/products'

export default function CategoryFilter({ activeCategory, onCategoryChange }) {
  return (
    <div className="sticky top-16 md:top-20 z-40 bg-gray-50/95 dark:bg-gray-950/90 border-b border-brand-green-100 dark:border-brand-green-900/40 backdrop-blur-xl">
      <div className="max-w-apple mx-auto px-6 md:px-8">
        <div className="flex gap-8 md:gap-12 overflow-x-auto scrollbar-hide py-6">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`
                whitespace-nowrap transition-all relative pb-2 tracking-wide
                ${activeCategory === category.id 
                  ? 'text-lg md:text-xl font-semibold text-brand-green-600 dark:text-brand-green-200' 
                  : 'text-base md:text-lg font-light text-gray-500 dark:text-gray-400 hover:text-brand-green-500 dark:hover:text-brand-green-200'
                }
              `}
            >
              {category.name}
              {activeCategory === category.id && (
                <span className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-green-500 via-savannah-500 to-brand-purple-500 rounded-full"></span>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

