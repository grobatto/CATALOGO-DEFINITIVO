export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-brand-green-900 via-brand-purple-900 to-brand-green-900 text-white">
      <div className="py-12 px-6">
        <div className="max-w-apple mx-auto">
          {/* Three column layout on desktop, centered on mobile */}
          <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-8">
            {/* Column 1: Brand */}
            <div className="text-center md:text-left">
              <p className="text-base font-semibold text-white mb-2">
                Barrios Amethysts
              </p>
              <p className="text-[13px] text-brand-green-100 leading-relaxed">
                Family owned and operated since 1991
              </p>
            </div>
            
            {/* Column 2: Contact */}
            <div className="text-center">
              <p className="text-[13px] text-brand-green-100 leading-relaxed">
                Artigas, Uruguay
              </p>
              <a 
                href="mailto:barriosamethystsuruguay@gmail.com"
                className="text-[13px] text-savannah-200 hover:text-white transition-apple"
              >
                barriosamethystsuruguay@gmail.com
              </a>
            </div>
            
            {/* Column 3: Links */}
            <div className="text-center md:text-right">
              <div className="flex flex-col md:flex-row justify-center md:justify-end gap-4 md:gap-6 text-[13px]">
                <a 
                  href="#" 
                  className="text-savannah-200 hover:text-white transition-apple"
                >
                  Privacy Policy
                </a>
                <a 
                  href="#" 
                  className="text-savannah-200 hover:text-white transition-apple"
                >
                  Terms
                </a>
                <a 
                  href="#contact" 
                  className="text-savannah-200 hover:text-white transition-apple"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="text-center pt-6 border-t border-brand-green-700/40">
            <p className="text-[13px] text-brand-green-200">
              © 2025 Barrios Amethysts. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
