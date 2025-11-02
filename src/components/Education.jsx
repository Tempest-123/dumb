import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Carousel from './Carousel'
import Card from './Card'
import ProjectModal from './ProjectModal'
import educationData from '../data/education.json'

const Education = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selected, setSelected] = useState(null)

  const handleCardClick = (edu) => {
    // Map education item to modal-friendly object
    setSelected({
      title: edu.institution,
      description: `${edu.degree} • ${edu.duration}`,
      image: edu.image,
      tech: ['Education', 'Academic'],
      liveUrl: '#',
      githubUrl: '#'
    })
    setIsModalOpen(true)
  }

  const handleClose = () => {
    setIsModalOpen(false)
    setSelected(null)
  }
  return (
    <section id="education" className="relative z-20 -mt-32 bg-transparent">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Carousel title="Continue Watching (My Education)" className='pl-4'>
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card
                title={edu.institution}
                description={`${edu.degree} • ${edu.duration}`}
                image={edu.image}
                type="education"
                onCardClick={() => handleCardClick(edu)}
              />
            </motion.div>
          ))}
        </Carousel>
      </motion.div>
      <ProjectModal isOpen={isModalOpen} onClose={handleClose} project={selected} />
    </section>
  )
}

export default Education
