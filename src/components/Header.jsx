import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import LanguageSelector from './LanguageSelector'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-950 backdrop-blur-md bg-opacity-90 transition-colors">
      <div className="max-w-apple mx-auto px-4 md:px-8 h-14 md:h-20 flex justify-between items-center">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-2 md:gap-3 group">
          <img 
            src="/logonoletters.png" 
            alt="Barrios Amethysts Logo" 
            className="h-6 md:h-10 w-auto filter invert transition-apple group-hover:opacity-80"
          />
          <h1 className="hidden sm:block font-medium text-sm md:text-xl text-white tracking-tight group-hover:text-gray-300 transition-apple">
            Barrios Amethysts
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 items-center">
          <Link
            to="/"
            className="text-sm font-medium text-white hover:text-gray-300 transition-apple relative group"
          >
            Catalogue
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all group-hover:w-full"></span>
          </Link>
          
          <LanguageSelector />
          
          <a
            href="https://wa.me/59899967347?text=I'd%20like%20information%20about%20the%20Barrios%20Catalogue"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 text-sm font-medium text-gray-950 bg-white border border-white/10 rounded-none hover:bg-gray-100 transition-apple focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950"
          >
            Contact
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <LanguageSelector />
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white p-2 -mr-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white rounded"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} strokeWidth={2} /> : <Menu size={24} strokeWidth={2} />}
          </button>
        </div>
      </div>
      
      {/* Hairline border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-hairline-dark"></div>

      {/* Mobile Menu - Full screen overlay */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-gray-950 bg-opacity-95 backdrop-blur-lg z-40 flex items-center justify-center animate-fadeIn">
          <nav className="flex flex-col items-center gap-8">
            <Link
              to="/"
              onClick={closeMenu}
              className="text-white text-2xl font-medium hover:text-gray-300 transition-apple focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Catalogue
            </Link>
            
            <a
              href="https://wa.me/59899967347?text=I'd%20like%20information%20about%20the%20Barrios%20Catalogue"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="text-white text-2xl font-medium hover:text-gray-300 transition-apple focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
