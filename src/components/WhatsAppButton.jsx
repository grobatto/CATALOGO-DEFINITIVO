import { useState, useEffect } from 'react'

export default function WhatsAppButton() {
  const [open, setOpen] = useState(false)
  const phoneNumber = '59898765432' // Actualizar con número real
  const message = encodeURIComponent('Hola, me interesa conocer más sobre los productos de Barrios Amethysts')
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`

  // Handle Esc key to close panel
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape' && open) {
        setOpen(false)
      }
    }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [open])

  return (
    <div>
      {/* Panel overlay */}
      {open && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-20 z-40"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          
          {/* Panel */}
          <div className="fixed bottom-24 right-6 z-50 w-80 bg-white dark:bg-gray-950 border border-brand-green-100 dark:border-brand-green-900/40 rounded-2xl shadow-medium">
            <div className="px-4 py-3 border-b border-brand-green-50 dark:border-brand-green-900/40 bg-brand-green-50 dark:bg-brand-green-900/20 rounded-t-2xl">
              <p className="text-sm font-semibold text-brand-green-700 dark:text-brand-green-100">Start a conversation</p>
              <p className="text-xs text-gray-600 dark:text-gray-400">Choose a topic and send your message</p>
            </div>
            <div className="p-4 space-y-3">
              <select 
                className="w-full border border-brand-green-100 dark:border-brand-green-900/40 rounded-lg bg-white dark:bg-gray-900 text-gray-950 dark:text-white text-sm px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-green-400 transition-apple"
                aria-label="Select conversation topic"
              >
                <option>General inquiry</option>
                <option>Request catalog</option>
                <option>Wholesale bulk</option>
                <option>Specific piece</option>
              </select>
              <textarea 
                className="w-full h-24 border border-brand-green-100 dark:border-brand-green-900/40 rounded-lg bg-white dark:bg-gray-900 text-gray-950 dark:text-white text-sm px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-brand-green-400 transition-apple" 
                placeholder="Write your message..." 
                defaultValue="Hola, me interesa conocer más sobre los productos de Barrios Amethysts"
                aria-label="Your message"
              />
              <a 
                href={whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full inline-flex items-center justify-center px-4 py-2.5 bg-brand-green-600 text-white text-sm font-semibold rounded-full hover:bg-brand-green-500 transition-apple focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-purple-400"
              >
                Send on WhatsApp
              </a>
            </div>
          </div>
        </>
      )}

      {/* Floating button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-brand-green-600 text-white rounded-full shadow-medium hover:shadow-lg hover:bg-brand-green-500 transition-apple flex items-center justify-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-purple-400"
        title="Chat with us on WhatsApp"
        aria-label={open ? 'Close WhatsApp chat' : 'Open WhatsApp chat'}
        aria-expanded={open}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      </button>
    </div>
  )
}
