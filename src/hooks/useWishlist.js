import { useState, useEffect } from 'react'

export function useWishlist() {
  const [wishlist, setWishlist] = useState(() => {
    const saved = localStorage.getItem('wishlist')
    return saved ? JSON.parse(saved) : []
  })

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist))
  }, [wishlist])

  const toggleWishlist = (image) => {
    setWishlist(prev =>
      prev.includes(image)
        ? prev.filter(img => img !== image)
        : [...prev, image]
    )
  }

  const isInWishlist = (image) => wishlist.includes(image)

  return { wishlist, toggleWishlist, isInWishlist }
}
