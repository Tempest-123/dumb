import React, { useRef, useState, useEffect, useRef as useRefAlias } from 'react'
import { motion } from 'framer-motion'

const Carousel = ({ title, children, className = "" }) => {
  const scrollRef = useRef(null)
  const containerRef = useRef(null)
  const [isScrolling, setIsScrolling] = useState(false)
  const touchStartRef = useRef({ x: 0, y: 0 })

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300
      const currentScroll = scrollRef.current.scrollLeft
      const targetScroll = direction === 'left'
        ? currentScroll - scrollAmount
        : currentScroll + scrollAmount

      scrollRef.current.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      })
    }
  }

  const handleMouseEnter = () => setIsScrolling(true)
  const handleMouseLeave = () => setIsScrolling(false)

  // Fix wheel scroll - let vertical scroll pass through, handle horizontal scroll
  useEffect(() => {
    if (!containerRef.current || !scrollRef.current) return

    const handleWheel = (e) => {
      const isVerticalIntent = Math.abs(e.deltaY) > Math.abs(e.deltaX)
      const isHorizontalIntent = Math.abs(e.deltaX) > Math.abs(e.deltaY)

      if (isVerticalIntent) {
        // Vertical scroll intent - let it pass to the page
        e.preventDefault()
        window.scrollBy(0, e.deltaY)
      } else if (isHorizontalIntent && scrollRef.current) {
        // Horizontal scroll intent - scroll the carousel
        e.preventDefault()
        scrollRef.current.scrollLeft += e.deltaX
      }
    }

    const container = containerRef.current
    container.addEventListener('wheel', handleWheel, { passive: false })

    return () => {
      container.removeEventListener('wheel', handleWheel)
    }
  }, [])

  // Touch handling: allow horizontal swipe; forward vertical to page
  const handleTouchStart = (e) => {
    const t = e.touches[0]
    touchStartRef.current = { x: t.clientX, y: t.clientY }
  }

  const handleTouchMove = (e) => {
    if (!scrollRef.current) return
    const t = e.touches[0]
    const dx = t.clientX - touchStartRef.current.x
    const dy = t.clientY - touchStartRef.current.y

    if (Math.abs(dy) > Math.abs(dx)) {
      // Vertical intent: let the page scroll; prevent the row from hijacking
      // Do not call preventDefault so the page can scroll naturally
      return
    }

    // Horizontal intent: consume and scroll row
    scrollRef.current.scrollLeft -= dx
    touchStartRef.current = { x: t.clientX, y: t.clientY }
    e.preventDefault()
  }

  return (
    <div className={`relative ${className}`}>
      {/* Section Title - aligned with navbar logo (matches px-4 sm:px-6 lg:px-8) */}
      <h2 className="text-2xl font-bold text-white mb-6 p-0 m-0 pl-4 sm:pl-6 lg:pl-8">
        {title}
      </h2>

      {/* Carousel Container */}
      <div className="relative">
        {/* Left Arrow */}
        <motion.button
          initial={{ opacity: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={`absolute left-2 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-black/80 hover:bg-black text-white rounded-full flex items-center justify-center transition-all duration-300 ${
            isScrolling ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
          }`}
          onClick={() => scroll('left')}
        >
          <span className="text-xl">‹</span>
        </motion.button>

        {/* Right Arrow */}
        <motion.button
          initial={{ opacity: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={`absolute right-2 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-black/80 hover:bg-black text-white rounded-full flex items-center justify-center transition-all duration-300 ${
            isScrolling ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
          }`}
          onClick={() => scroll('right')}
        >
          <span className="text-xl">›</span>
        </motion.button>

        {/* Scrollable Content */}
        <div
          ref={containerRef}
          className="carousel-row"
        >
          <div
            ref={scrollRef}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="flex space-x-2 overflow-x-auto overflow-y-visible pl-4 pr-4 sm:pl-6 sm:pr-6 lg:pl-8 lg:pr-8 pb-6"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', touchAction: 'pan-x', overscrollBehaviorY: 'contain' }}
          >
          {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Carousel
