import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

/**
 * Tools/Languages Section Component
 * 
 * This component creates two auto-moving carousels:
 * - One moving from left to right
 * - One moving from right to left
 * 
 * Features:
 * - Auto-scrolling carousels with smooth animation
 * - Hover to pause individual carousel
 * - Color switch on hover (black/red text to red/black)
 * - Cards sized to fit content (only as big as the name)
 */
const ToolsLanguages = () => {
  // Split tools/languages into two equal groups
  const allTools = [
    'Database Systems', 'Object Oriented Programming', 'Data Structures', 
    'Operating Systems', 'Computer Networks', 'Software Development Cycles', 
    'C', 'C++', 'Java', 'AI', 'HTML', 'Tailwind', 'JavaScript', 'React', 
    'Node', 'Express', 'MongoDB', 'OracleSQL', 'SQLite', 'MySQL', 
    'REST API', 'Gemini API', 'Calendar API', 'GitHub', 'Canva', 'Figma', 
    'Slack', 'MS Teams', 'Postman'
  ]

  // Split into two arrays for two carousels
  const midpoint = Math.ceil(allTools.length / 2)
  const carousel1Items = allTools.slice(0, midpoint)
  const carousel2Items = allTools.slice(midpoint)

  const [isCarousel1Paused, setIsCarousel1Paused] = useState(false)
  const [isCarousel2Paused, setIsCarousel2Paused] = useState(false)
  const carousel1Ref = useRef(null)
  const carousel2Ref = useRef(null)

  // Auto-scroll carousel 1 (left to right) - seamless loop
  useEffect(() => {
    if (!carousel1Ref.current || isCarousel1Paused) return

    let animationId = null
    const scrollCarousel = () => {
      if (carousel1Ref.current && !isCarousel1Paused) {
        const scrollWidth = carousel1Ref.current.scrollWidth
        const clientWidth = carousel1Ref.current.clientWidth
        const scrollLeft = carousel1Ref.current.scrollLeft
        
        // If we've scrolled past the first set of items, reset to beginning
        if (scrollLeft >= scrollWidth / 3) {
          carousel1Ref.current.scrollLeft = scrollLeft - (scrollWidth / 3)
        } else {
          carousel1Ref.current.scrollLeft += 0.5
        }
      }
      animationId = requestAnimationFrame(scrollCarousel)
    }
    
    animationId = requestAnimationFrame(scrollCarousel)
    return () => {
      if (animationId) cancelAnimationFrame(animationId)
    }
  }, [isCarousel1Paused])

  // Auto-scroll carousel 2 (right to left) - seamless loop
  useEffect(() => {
    if (!carousel2Ref.current || isCarousel2Paused) return

    let animationId = null
    const scrollCarousel = () => {
      if (carousel2Ref.current && !isCarousel2Paused) {
        const scrollWidth = carousel2Ref.current.scrollWidth
        const scrollLeft = carousel2Ref.current.scrollLeft
        
        // If we've scrolled back past the first set, reset to end
        if (scrollLeft <= 0) {
          carousel2Ref.current.scrollLeft = (scrollWidth / 3)
        } else {
          carousel2Ref.current.scrollLeft -= 0.5
        }
      }
      animationId = requestAnimationFrame(scrollCarousel)
    }
    
    animationId = requestAnimationFrame(scrollCarousel)
    return () => {
      if (animationId) cancelAnimationFrame(animationId)
    }
  }, [isCarousel2Paused])

  return (
    <section id="tools-languages" className="relative z-1 bg-black py-2">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Section Title - aligned with navbar logo */}
        <h2 className="text-2xl font-bold text-white mb-6 p-0 m-0 pl-4 sm:pl-6 lg:pl-8">
          Concepts/Tools / Languages I have used before
        </h2>

        {/* First Carousel - Left to Right */}
        <div className="relative overflow-hidden">
          <div
            ref={carousel1Ref}
            className="flex gap-4 overflow-x-auto scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            onMouseEnter={() => setIsCarousel1Paused(true)}
            onMouseLeave={() => setIsCarousel1Paused(false)}
          >
            {/* Duplicate items for seamless loop */}
            {[...carousel1Items, ...carousel1Items, ...carousel1Items].map((tool, index) => (
              <ToolCard key={`carousel1-${index}`} tool={tool} carouselId={1} />
            ))}
          </div>
        </div>

        {/* Spacer */}
        <div className="h-6"></div>

        {/* Second Carousel - Right to Left */}
        <div className="relative overflow-hidden">
          <div
            ref={carousel2Ref}
            className="flex gap-4 overflow-x-auto scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            onMouseEnter={() => setIsCarousel2Paused(true)}
            onMouseLeave={() => setIsCarousel2Paused(false)}
          >
            {/* Duplicate items for seamless loop */}
            {[...carousel2Items, ...carousel2Items, ...carousel2Items].map((tool, index) => (
              <ToolCard key={`carousel2-${index}`} tool={tool} carouselId={2} />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

/**
 * Individual Tool Card Component
 * - Black background with red text (switches on hover)
 * - Sized to fit content only
 */
const ToolCard = ({ tool, carouselId }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="flex-shrink-0 group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`px-4 py-2 rounded-sm transition-all duration-300 ${
          isHovered ? 'bg-red-600 text-black' : 'bg-black text-red-600'
        }`}
        style={{ 
          fontFamily: 'Inter, Helvetica Neue, Arial, sans-serif',
          border: '1px solid #DC2626'
        }}
      >
        <span className="text-sm font-medium whitespace-nowrap">
          {tool}
        </span>
      </div>
    </motion.div>
  )
}

export default ToolsLanguages
