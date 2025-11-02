import React from 'react'
import { motion } from 'framer-motion'

const Top10Card = ({ 
  title, 
  description, 
  image,
  tech = [],
  date,
  readingTime, 
  liveUrl, 
  githubUrl, 
  rank = null,
  type = 'default',
  status = null,
  className = "",
  onCardClick = null
}) => {
  // Card size: decreased height, increased width for better aspect ratio
  const getCardSize = () => {
    switch (type) {
      case 'education':
        return 'w-56 h-40' // Changed from w-48 h-48 to w-56 h-40 (wider and shorter)
      case 'skill':
        return 'w-52 h-36' // Changed from w-44 h-44 to w-52 h-36 (wider and shorter)
      case 'project':
        return 'w-56 h-40' // Changed from w-48 h-48 to w-56 h-40 (wider and shorter)
      case 'experience':
        return 'w-56 h-40' // Changed from w-48 h-48 to w-56 h-40 (wider and shorter)
      default:
        return 'w-56 h-40' // Changed from w-48 h-48 to w-56 h-40 (wider and shorter)
    }
  }

  // If card has a rank/number, it will be wrapped in a numbered wrapper in the carousel
  // This component now just renders the card itself without the number
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className={`${getCardSize()} ${className} flex-shrink-0 relative cursor-pointer z-10 transition-all duration-300 ease-in-out`}
      onClick={onCardClick}
      style={{
        transformOrigin: 'center center'
      }}
    >

      {/* Card Content - Netflix-style hover animation
          On hover: scales to 1.25x, translates up 4px, elevates with z-50, applies shadow, reveals content
          Smooth 300ms transitions with ease-in-out
          Only the hovered card expands - not affected by row hover
          Note: For numbered cards, hover is handled by numbered-card-wrapper
      */}
      <div className="absolute inset-0 h-full w-full relative overflow-visible transform transition-all duration-300 ease-in-out hover:scale-[1.45] hover:-translate-y-4 hover:z-50 hover:shadow-2xl rounded-sm">
        {/* Main card container */}
        <div className="relative h-full w-full overflow-hidden rounded-sm bg-gray-800">
          {/* Background Image/Icon - show full image with contain */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat rounded-sm transition-opacity duration-300 ease-in-out hover:opacity-90 bg-gray-800"
            style={{
              backgroundImage: image.startsWith('/images/') || image.startsWith('http') || image.startsWith('/') 
                ? `url(${image})` 
                : 'none'
            }}
          >
            {/* Fallback icon if image fails to load or is emoji */}
            {(!image.startsWith('/images/') && !image.startsWith('http') && !image.startsWith('/')) && (
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-700 flex items-center justify-center text-5xl rounded-sm">
                {image}
              </div>
            )}
          </div>

          {/* Expanded Content Section - Reveals on hover with slide-up animation
              Also shows when parent numbered-card-wrapper is hovered
          */}
          <div className="absolute top-full left-0 right-0 bg-gray-900/95 rounded-b-sm overflow-hidden transform transition-all duration-300 ease-in-out opacity-0 translate-y-[-10px] hover:opacity-100 hover:translate-y-0 pointer-events-none hover:pointer-events-auto numbered-card-expanded-content">
            <div className="p-3 space-y-2">
              {/* Action Buttons Row */}
              <div className="flex items-center gap-2">
                {/* Play Button */}
                <button 
                  className="w-7 h-7 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors duration-200"
                  onClick={(e) => {
                    e.stopPropagation()
                    if (onCardClick) onCardClick()
                  }}
                >
                  <svg className="w-3.5 h-3.5 text-black ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </button>

                {/* Add to List Button */}
                <button 
                  className="w-7 h-7 bg-gray-600 rounded-full flex items-center justify-center hover:bg-gray-500 transition-colors duration-200"
                  onClick={(e) => e.stopPropagation()}
                >
                  <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </button>

                {/* Like Button */}
                <button 
                  className="w-7 h-7 bg-gray-600 rounded-full flex items-center justify-center hover:bg-gray-500 transition-colors duration-200"
                  onClick={(e) => e.stopPropagation()}
                >
                  <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>

                {/* More Info Button */}
                <button 
                  className="w-7 h-7 bg-gray-600 rounded-full flex items-center justify-center hover:bg-gray-500 transition-colors duration-200"
                  onClick={(e) => e.stopPropagation()}
                >
                  <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>

              {/* Description */}
              {description && (
                <p className="text-gray-300 text-xs leading-tight line-clamp-2">
                  {description}
                </p>
              )}

              {/* Metadata Badges */}
              {tech.length > 0 && (
                <div className="flex items-center gap-2 flex-wrap">
                  {tech.slice(0, 3).map((item, index) => (
                    <span key={index} className="px-2 py-0.5 bg-gray-700 text-white text-xs rounded font-medium">
                      {item}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Top10Card
