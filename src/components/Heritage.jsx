export default function Heritage() {
  return (
    <section id="about" className="relative py-24 md:py-32 px-6 bg-white dark:bg-gray-950">
      <div className="relative max-w-apple mx-auto">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-950 dark:text-white mb-6 md:mb-8 tracking-tight">
            About Us
          </h2>
          <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed" style={{ lineHeight: '1.7' }}>
            Barrios Amethysts is located in the prestigious mines of Artigas, Uruguay. We own the largest territory of mines in the Catalán region of Uruguay, which is known by its rich supply of Amethyst and Agate. The minerals from this region are among the finest minerals around the world and are recognized mainly by three aspects: Color, Shape and Clarity.
          </p>
        </div>

        {/* 3-column cards - clean with subtle dividers */}
        <div className="grid md:grid-cols-3 gap-0 mb-20 md:mb-24">
          <div className="p-8 md:p-10 md:pr-8 border-b md:border-b-0 md:border-r border-gray-300 dark:border-gray-800">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-950 dark:text-white mb-4 tracking-tight">
              What we do
            </h3>
            <p className="text-gray-700 dark:text-gray-400 leading-relaxed text-base" style={{ lineHeight: '1.7' }}>
              Barrios Amethysts is a family run company specializing in mining, processing and exporting Agates, Amethysts and Citrine directly from the mines. We work hand-in-hand with our customers, suppliers and partners to ensure the best quality of the products. Today, we export mainly to Germany, China, Brazil and USA.
            </p>
          </div>
          
          <div className="p-8 md:p-10 md:px-8 border-b md:border-b-0 md:border-r border-gray-300 dark:border-gray-800">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-950 dark:text-white mb-4 tracking-tight">
              Why we do it
            </h3>
            <p className="text-gray-700 dark:text-gray-400 leading-relaxed text-base" style={{ lineHeight: '1.7' }}>
              A passion to discover unique minerals has inspired the Barrios Amethysts family during the last 25 years, and we have been always comitted to ensure the quality of the products without damaging the environment. We look forward to sharing with you the beauty that nature has to offer!! We love what we do!
            </p>
          </div>

          <div className="p-8 md:p-10 md:pl-8">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-950 dark:text-white mb-4 tracking-tight">
              When all started
            </h3>
            <p className="text-gray-700 dark:text-gray-400 leading-relaxed text-base" style={{ lineHeight: '1.7' }}>
              Founded in 1992, Barrios Amethysts has been a growing family business for almost 33 amazing years now. Barrios Amethysts is a lifelong dream. From our humble beginnings, the family and the team successfully developed Barrios Amethysts into what it is today.
            </p>
          </div>
        </div>

        {/* Gallery images - clean stacked layout */}
        <div className="space-y-0 hairline">
          <div className="w-full overflow-hidden">
            <img 
              src="/images/gallery_03.jpg" 
              alt="Barrios Amethysts Gallery - Showroom Interior" 
              className="w-full h-auto"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
