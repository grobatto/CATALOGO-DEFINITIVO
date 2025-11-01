import Hero from '../components/Hero'
import Heritage from '../components/Heritage'
import Gallery from '../components/Gallery'
import FeaturedProducts from '../components/FeaturedProducts'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'
import { useEffect } from 'react'

export default function HomePage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('show')
        })
      },
      { threshold: 0.1 }
    )
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <div className="reveal"><Hero /></div>
      <div className="reveal"><FeaturedProducts /></div>
      <div className="reveal"><Gallery /></div>
      <div className="reveal"><Heritage /></div>
      <div className="reveal"><Contact /></div>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

