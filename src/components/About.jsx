import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const infoItems = [
    {
      icon: '🎓',
      label: 'College',
      value: 'MIT Manipal'
    },
    {
      icon: '💻',
      label: 'Interests',
      value: 'Frontend, UI/UX, Databases'
    },
    {
      icon: '🤝',
      label: 'Strengths',
      value: 'Collaboration, Creativity, Reliability'
    }
  ]

  return (
    <section id="about" className="section-padding bg-gradient-to-br from-mint/10 to-lavender/10">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Column - Image/Illustration */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full h-96 lg:h-[500px]">
              {/* Placeholder for about image */}
              <div className="absolute inset-0 bg-gradient-to-br from-peach to-mint rounded-3xl shadow-soft-lg flex items-center justify-center">
                <motion.div
                  animate={{ 
                    scale: [1, 1.05, 1],
                    rotate: [0, 2, -2, 0]
                  }}
                  transition={{ 
                    duration: 6, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="text-8xl lg:text-9xl"
                >
                  🪴
                </motion.div>
              </div>
              
              {/* Decorative Elements */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="absolute -top-6 -left-6 w-20 h-20 bg-white rounded-2xl shadow-soft flex items-center justify-center text-3xl"
              >
                💡
              </motion.div>
              
              <motion.div
                initial={{ scale: 0, rotate: 180 }}
                animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: 180 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="absolute -bottom-6 -right-6 w-16 h-16 bg-white rounded-xl shadow-soft flex items-center justify-center text-2xl"
              >
                🎯
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - About Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-4xl lg:text-5xl font-outfit font-bold text-charcoal mb-6"
              >
                A bit about me{' '}
                <motion.span
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="inline-block"
                >
                  🪴
                </motion.span>
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="text-lg lg:text-xl text-secondary font-inter leading-relaxed mb-8"
              >
                I'm a third-year Computer Science student who loves turning ideas into beautiful, 
                functional digital experiences. I thrive in collaborative environments and believe 
                that great design starts with empathy and curiosity.
              </motion.p>
            </div>

            {/* Info Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="grid gap-6"
            >
              {infoItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                  transition={{ delay: 1.2 + index * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="flex items-center space-x-4 p-4 bg-white/60 rounded-2xl shadow-soft hover:shadow-soft-lg transition-all duration-300"
                >
                  <div className="text-3xl">{item.icon}</div>
                  <div>
                    <div className="font-semibold text-charcoal">{item.label}</div>
                    <div className="text-secondary">{item.value}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Download Resume Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 1.6, duration: 0.8 }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary text-lg px-8 py-4"
              >
                Download Resume
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
