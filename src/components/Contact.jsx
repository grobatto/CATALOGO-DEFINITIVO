import { useState } from 'react'
import { Send } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent('Barrios Amethysts - Inquiry')
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nInterest: ${formData.interest}\n\nMessage:\n${formData.message}`
    )
    window.location.href = `mailto:barriosamethystsuruguay@gmail.com?subject=${subject}&body=${body}`
    setFormData({ name: '', email: '', phone: '', interest: '', message: '' })
  }

  return (
    <section id="contact" className="py-24 md:py-32 px-6 bg-gray-200 dark:bg-gray-950">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20 md:mb-24">
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-950 dark:text-white mb-6 tracking-tight">
            Get In Touch
          </h2>
          <p className="text-base md:text-lg text-gray-700 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto">
            Whether you're a collector, jewelry designer, or wholesale buyer, we'd love to hear from you.
          </p>
        </div>

        {/* Two Column Layout: Contact Info + Image */}
        <div className="grid md:grid-cols-2 gap-16 md:gap-20 items-start mb-24">
          {/* Left Column: Contact Info */}
          <div>
            {/* Contact Info */}
            <div className="space-y-12 pb-16 md:pb-20 hairline-bottom">
          <div>
            <p className="text-[11px] font-medium text-gray-500 dark:text-gray-500 mb-3 tracking-wider uppercase">
              Location
            </p>
            <p className="text-gray-950 dark:text-white text-lg leading-relaxed">
              1399 Manuel Freire<br />
              Artigas, 55000<br />
              Uruguay
            </p>
          </div>

              <div>
                <p className="text-[11px] font-medium text-gray-500 dark:text-gray-500 mb-3 tracking-wider uppercase">
                  Email
                </p>
                <a 
                  href="mailto:barriosamethystsuruguay@gmail.com" 
                  className="link-apple text-lg text-gray-950 dark:text-white"
                >
                  barriosamethystsuruguay@gmail.com
                </a>
              </div>

              <div>
                <p className="text-[11px] font-medium text-gray-500 dark:text-gray-500 mb-3 tracking-wider uppercase">
                  Phone
                </p>
                <div className="space-y-3">
                  <a 
                    href="tel:+15204864301" 
                    className="link-apple block text-lg text-gray-950 dark:text-white"
                  >
                    USA: +1 (520) 486-4301
                  </a>
                  <a 
                    href="tel:+59899967347" 
                    className="link-apple block text-lg text-gray-950 dark:text-white"
                  >
                    Uruguay: +598 99 967 347
                  </a>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="pt-16 md:pt-20">
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-950 dark:text-white mb-12 tracking-tight">
            Request Catalog
          </h3>
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <input
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-0 py-4 bg-transparent hairline-bottom text-[17px] text-gray-950 dark:text-white placeholder-gray-500 dark:placeholder-gray-600 focus:outline-none focus:border-gray-950 dark:focus:border-white transition-apple"
                required
                aria-label="Your name"
              />
            </div>

            <div>
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-0 py-4 bg-transparent hairline-bottom text-[17px] text-gray-950 dark:text-white placeholder-gray-500 dark:placeholder-gray-600 focus:outline-none focus:border-gray-950 dark:focus:border-white transition-apple"
                required
                aria-label="Your email address"
              />
            </div>

            <div>
              <input
                type="tel"
                placeholder="Phone"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="w-full px-0 py-4 bg-transparent hairline-bottom text-[17px] text-gray-950 dark:text-white placeholder-gray-500 dark:placeholder-gray-600 focus:outline-none focus:border-gray-950 dark:focus:border-white transition-apple"
                aria-label="Your phone number"
              />
            </div>

            <div>
              <select
                value={formData.interest}
                onChange={(e) => setFormData({...formData, interest: e.target.value})}
                className="w-full px-0 py-4 bg-transparent hairline-bottom text-[17px] text-gray-950 dark:text-white focus:outline-none focus:border-gray-950 dark:focus:border-white transition-apple appearance-none cursor-pointer"
                required
                aria-label="Select your interest"
              >
                <option value="" className="bg-white dark:bg-gray-900">Select Your Interest</option>
                <option value="Collector" className="bg-white dark:bg-gray-900">Collector</option>
                <option value="Jewelry Designer" className="bg-white dark:bg-gray-900">Jewelry Designer</option>
                <option value="Wholesale" className="bg-white dark:bg-gray-900">Wholesale Buyer</option>
                <option value="Retail" className="bg-white dark:bg-gray-900">Retail Store</option>
              </select>
            </div>

            <div>
              <textarea
                placeholder="Tell us about your requirements..."
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                rows="5"
                className="w-full px-0 py-4 bg-transparent hairline-bottom text-[17px] text-gray-950 dark:text-white placeholder-gray-500 dark:placeholder-gray-600 focus:outline-none focus:border-gray-950 dark:focus:border-white transition-apple resize-none"
                aria-label="Your message"
              ></textarea>
            </div>

              <button
                type="submit"
                className="w-full px-8 py-3 mt-8 bg-gray-950 dark:bg-white text-white dark:text-gray-950 text-base font-semibold rounded-full hover:bg-gray-800 dark:hover:bg-gray-100 transition-apple focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gray-950"
              >
                Send Inquiry
              </button>
            </form>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="hidden md:flex justify-center items-start pt-20">
            <div className="w-full max-w-sm">
              <img 
                src="/images/main.png" 
                alt="Premium Uruguayan Amethyst" 
                className="w-full h-auto object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
