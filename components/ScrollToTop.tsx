'use client'
import { useEffect, useState } from 'react'

export default function ScrollToTop() {
  const [isShown, setIsShown] = useState(false)
  const toTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    const toggle = () => {
      if (window.scrollY > 300) {
        setIsShown(true)
      } else {
        setIsShown(false)
      }
    }

    window.addEventListener('scroll', toggle)

    return () => {
      window.removeEventListener('scroll', toggle)
    }
  }, [])
  return (
    <div className='fixed bottom-8 right-8 z-[99]'>
      {isShown && (
        <div
          onClick={toTop}
          aria-label='to top'
          className='flex items-center justify-center w-10 h-10 text-white transition duration-300 ease-in-out rounded-md shadow-md cursor-pointer bg-primary hover:bg-opacity-80 hover:shadow-signUp'
        >
          <span className='mt-[6px] h-3 w-3 rotate-45 border-l border-t border-white'></span>
        </div>
      )}
    </div>
  )
}
