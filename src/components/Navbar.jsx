import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isProfileOpen, setIsProfileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ]

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`netflix-navbar ${isScrolled ? 'netflix-navbar-scrolled' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left Side - Logo and Navigation Items */}
          <div className="flex items-center space-x-8">
            {/* Netflix Logo - Exact Position */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold text-red-600 drop-shadow-[0_4px_6px_rgba(0,0,0,10)] cursor-pointer tracking-tight"
              onClick={() => scrollToSection('#home')}
              style={{ fontFamily: 'Inter, Helvetica Neue, Arial, sans-serif' }}
            >
              <img src="/images/hero/NETFLIX-phirozgar.png" alt="Phirozgar" className="w-25 h-20" />
            </motion.div>

            {/* Navigation Items - Next to Logo */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => scrollToSection(item.href)}
                  className="netflix-nav-item"
                >
                  {item.name}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Right Side Icons - Search and Profile only */}
          <div className="flex items-center space-x-4">
            {/* Search Icon */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="text-white hover:text-gray-300 transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </motion.button>

            {/* Profile Avatar */}
            <div className="relative">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="w-8 h-8 bg-gray-600 rounded flex items-center justify-center text-white hover:bg-gray-500 transition-colors duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </motion.button>

              {/* Profile Dropdown Menu */}
              {isProfileOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 mt-2 w-48 bg-black/95 backdrop-blur-sm border border-gray-700 rounded-lg shadow-2xl py-2 z-50"
                >
                  <div className="px-4 py-2 text-gray-300 text-sm border-b border-gray-700">
                    Switch Profile
                  </div>
                  <button className="w-full text-left px-4 py-2 text-gray-300 hover:bg-gray-800 transition-colors duration-200">
                    Student
                  </button>
                  <button className="w-full text-left px-4 py-2 text-red-600 hover:bg-gray-800 transition-colors duration-200">
                    Recruiter
                  </button>
                  <button className="w-full text-left px-4 py-2 text-gray-300 hover:bg-gray-800 transition-colors duration-200">
                    Kevin Feige
                  </button>
                  <button className="w-full text-left px-4 py-2 text-gray-300 hover:bg-gray-800 transition-colors duration-200">
                    Mom
                  </button>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar
