import React, { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'

/**
 * ProjectModal Component
 * 
 * Full-screen modal overlay that:
 * - Renders outside DOM hierarchy using React Portal (directly under body)
 * - Prevents page scrolling when open
 * - Appears above all content with highest z-index
 * - Uses fixed positioning to fill entire viewport
 * - Includes backdrop overlay and centered content
 */
const ProjectModal = ({ isOpen, onClose, project }) => {
  const [portalContainer, setPortalContainer] = useState(null)

  // Create portal container and manage body scroll lock
  useEffect(() => {
    if (isOpen) {
      // Create or get portal container
      let container = document.getElementById('modal-portal-root')
      if (!container) {
        container = document.createElement('div')
        container.id = 'modal-portal-root'
        container.style.position = 'fixed'
        container.style.top = '0'
        container.style.left = '0'
        container.style.width = '100%'
        container.style.height = '100%'
        container.style.pointerEvents = 'none'
        container.style.zIndex = '999999'
        document.body.appendChild(container)
      }
      setPortalContainer(container)

      // Prevent body scroll - store original overflow to restore later
      const originalOverflow = document.body.style.overflow
      const originalPaddingRight = document.body.style.paddingRight
      
      // Calculate scrollbar width to prevent layout shift
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
      
      document.body.style.overflow = 'hidden'
      if (scrollbarWidth > 0) {
        document.body.style.paddingRight = `${scrollbarWidth}px`
      }

      // Close modal on Escape key
      const handleEscape = (e) => {
        if (e.key === 'Escape') {
          onClose()
        }
      }
      document.addEventListener('keydown', handleEscape)

      return () => {
        document.removeEventListener('keydown', handleEscape)
        // Restore original body styles
        document.body.style.overflow = originalOverflow
        document.body.style.paddingRight = originalPaddingRight
      }
    } else {
      // Clean up portal container when modal closes
      const container = document.getElementById('modal-portal-root')
      if (container && container.parentNode) {
        container.parentNode.removeChild(container)
      }
      setPortalContainer(null)
    }
  }, [isOpen, onClose])

  // Don't render if modal is closed, no project, or portal not ready
  if (!isOpen || !project || !portalContainer) return null

  // Modal content to be portaled
  const modalContent = (
    <AnimatePresence mode="wait">
      {/* Fixed modal container - fills entire viewport */}
      <motion.div
        key="modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 flex items-center justify-center p-4"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 999999,
          pointerEvents: 'auto'
        }}
      >
        {/* Dark transparent backdrop overlay - dims the background */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          onClick={onClose}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 1
          }}
        />

        {/* Modal Content - centered above backdrop */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="relative w-full max-w-4xl mx-auto bg-black rounded-lg overflow-hidden shadow-2xl max-h-[85vh] flex flex-col z-10"
          onClick={(e) => e.stopPropagation()}
          style={{
            position: 'relative',
            zIndex: 10
          }}
        >
          {/* Close Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors duration-200"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </motion.button>

          {/* Video/Image Section - show full image with contain */}
          <div className="relative bg-gray-900" style={{ height: '48vh', minHeight: '260px' }}>
            <div 
              className="w-full h-full bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: project.image.startsWith('/images/') || project.image.startsWith('http') || project.image.startsWith('/') 
                  ? `url(${project.image})` 
                  : 'none'
              }}
            >
              {/* Fallback for emoji icons */}
              {(!project.image.startsWith('/images/') && !project.image.startsWith('http') && !project.image.startsWith('/')) && (
                <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-700 flex items-center justify-center text-8xl">
                  {project.image}
                </div>
              )}
            </div>

            {/* Video Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

            {/* Title and Action Buttons */}
            <div className="absolute bottom-6 left-6 right-6">
              <h1 className="text-4xl font-bold text-white mb-4">
                {project.title}
              </h1>

              {/* Action Buttons */}
              <div className="flex items-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded font-semibold hover:bg-gray-200 transition-colors duration-200"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                  View More
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 bg-gray-600 hover:bg-gray-500 rounded-full flex items-center justify-center transition-colors duration-200"
                >
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 bg-gray-600 hover:bg-gray-500 rounded-full flex items-center justify-center transition-colors duration-200"
                >
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </motion.button>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-6 md:p-8 overflow-y-auto scrollbar-hide">
            {/* Metadata Badges */}
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-gray-700 text-white text-sm rounded font-medium">
                {project.date}
              </span>
              <span className="px-3 py-1 bg-gray-700 text-white text-sm rounded font-medium">
                {project.readingTime} min read
              </span>
              <span className="px-3 py-1 bg-gray-700 text-white text-sm rounded font-medium">
                {project.tech[0]}
              </span>
            </div>

            {/* Genre Tags */}
            <div className="text-gray-300 text-lg mb-6 opacity-70">
              {project.tech.slice(0, 3).join(' • ')}
            </div>

            {/* Description and Details */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Description */}
              <div className="lg:col-span-2">
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  {project.description}
                </p>
                
              </div>

              {/* Sidebar Info */}
              <div className="space-y-6">
                {/* Tech Stack */}
                <div>
                  <h3 className="text-white font-semibold mb-3">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-700 text-white text-sm rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Type */}
                <div>
                  <h3 className="text-white font-semibold mb-3">Project Type</h3>
                  <div className="text-gray-300">
                    <div>Web Application</div>
                    <div>Full-Stack Development</div>
                    <div>UI/UX Design</div>
                  </div>
                </div>

                {/* Links */}
                <div>
                  <h3 className="text-white font-semibold mb-3">Links</h3>
                  <div className="space-y-2">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        className="block text-blue-400 hover:text-blue-300 transition-colors duration-200"
                      >
                        View Live Demo
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        className="block text-blue-400 hover:text-blue-300 transition-colors duration-200"
                      >
                        View Source Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )

  // Render modal using portal directly under body to avoid stacking context issues
  return createPortal(modalContent, portalContainer)
}

export default ProjectModal
