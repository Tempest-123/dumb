import React from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
  const socialLinks = [
    { name: 'GitHub', icon: '🐙', url: 'https://github.com/Phirozgar', color: 'hover:bg-gray-800' },
    { name: 'LinkedIn', icon: '💼', url: 'https://www.linkedin.com/in/phirozgarirani11/', color: 'hover:bg-blue-600' },
    { name: 'Email', icon: '📧', url: 'mailto:phirozgar.work@gmail.com', color: 'hover:bg-red-500' },
  ]

  return (
    <footer id="contact" className="bg-black text-gray-300 relative z-[1] pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-netflix font-bold text-white mb-4">
            Let's build something awesome together{' '}
            <motion.span
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block"
            >
              🤝
            </motion.span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Feel free to reach out for collaborations, freelance work, or just to say hi!
          </p>
        </motion.div>

        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-10 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-white mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <span className="text-2xl">📧</span>
                <span>phirozgar.work@gmail.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-2xl">📍</span>
                <span>Mumbai, Maharashtra, India</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-2xl">⏰</span>
                <span>Usually responds within 24 hours</span>
              </li>
            </ul>
          </motion.div>

          {/* Quick Links (optional section you can rename or remove) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-white mb-6">Quick Links from my work</h3>
            <ul className="space-y-3">
              <li><a href="https://www.parikshitspace.in/" className="hover:text-white transition">Parikshit Student Satellite Website</a></li>
              <li><a href="https://www.lancelotribeiro.com/" className="hover:text-white transition">Lancelot Ribeiro Website</a></li>
            </ul>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-white mb-6">Follow Me</h3>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className={`flex items-center space-x-2 px-4 py-2 bg-gray-900 rounded-lg ${social.color} transition-all duration-300`}
                >
                  <span className="text-2xl">{social.icon}</span>
                  <span>{social.name}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-12 pt-6 text-center text-sm text-gray-500"
        >
          <p>© {new Date().getFullYear()} Phirozgar Irani. All rights reserved.</p>
          <p className="mt-1">Crafted with ❤️ using React, Tailwind, and Framer Motion.</p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Contact
