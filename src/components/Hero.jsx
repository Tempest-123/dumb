import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="relative h-screen flex items-center justify-start overflow-hidden">
      {/* Background image - scrolls with page */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/portfolio/phiroz.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'right center'
        }}
      />
      
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
      
      {/* Top blur shadow for navbar visibility */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-black/80 via-black/60 via-black/40 via-black/20 to-transparent backdrop-blur-[1px]"></div>

      
      {/* Foreground hero content */}
      <div className="relative z-10 max-w-3xl px-8 lg:px-16 w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="space-y-4"
        >
          {/* Main Title - Netflix Money Heist Style */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-7xl lg:text-6xl font-bold text-white leading-tight tracking-tight"
            style={{ 
              fontFamily: 'Inter, Helvetica Neue, Arial, sans-serif',
              textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
              letterSpacing: '-0.02em'
            }}
          >
            PHIROZGAR <br/>IRANI
          </motion.h1>

          {/* Subtitle - Netflix Show Description Style */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="space-y-2"
          >
            <p className="text-xl lg:text-xl text-white font-medium leading-snug"
               style={{ 
                 fontFamily: 'Inter, Helvetica Neue, Arial, sans-serif',
                 textShadow: '1px 1px 2px rgba(0,0,0,0.8)'
               }}
            >
              3rd Year Computer Science Student <br/>@ MIT Manipal
            </p>
            
            <p className="text-lg text-gray-200 max-w-xl leading-snug"
               style={{ 
                 fontFamily: 'Inter, Helvetica Neue, Arial, sans-serif',
                 textShadow: '1px 1px 2px rgba(0,0,0,0.8)'
               }}
            >
              Frontend | AI Applications Developer
            </p>
          </motion.div>

          {/* Action Buttons - Netflix Style */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-2 pt-2"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('#projects')}
              className="netflix-btn-primary px-6 py-2 text-base"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
              View My Work
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('#contact')}
              className="netflix-btn-secondary px-6 py-2 text-base"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              More Info
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
