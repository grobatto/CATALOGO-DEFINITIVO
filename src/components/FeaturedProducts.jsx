export default function FeaturedProducts() {
  const products = [
    { 
      name: 'Signature Metal Base Collection', 
      image: '/images/bases-metal/IMG_2623.jpg',
      link: '#collections-1'
    },
    { 
      name: 'Crystal Towers Collection', 
      image: '/images/torres/IMG_5127.jpg',
      link: '#collections-1'
    }
  ]
  
  return (
    <div className="hairline-top hairline-bottom bg-white dark:bg-gray-950">
      <div className="max-w-apple mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {products.map((product, idx) => (
            <a
              key={idx}
              href={product.link}
              className={`grid grid-cols-8 ${idx === 0 ? 'md:hairline-bottom md:border-r' : ''} md:last:hairline-bottom
                        hover:bg-gray-50 dark:hover:bg-gray-900 transition-apple cursor-pointer group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-950`}
              aria-label={`View ${product.name}`}
            >
              <div className="col-span-3 hairline border-l-0 border-t-0 border-b-0 md:border-b-0">
                <div className="w-full aspect-[4/5] bg-gray-100 dark:bg-gray-900 overflow-hidden">
                  <img 
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-apple group-hover:brightness-105" 
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
              <div className="col-span-5 p-6 md:p-10 flex flex-col justify-between">
                <p className="text-[10px] uppercase tracking-widest text-gray-500 dark:text-gray-500 font-medium">
                  Featured Product
                </p>
                <div className="mt-auto flex items-end justify-between gap-4">
                  <div>
                    <h3 className="font-semibold text-2xl mb-2 text-gray-950 dark:text-white tracking-tight leading-tight">
                      {product.name}
                    </h3>
                  </div>
                  <div className="text-2xl text-gray-950 dark:text-white transition-apple group-hover:scale-110">
                    →
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

