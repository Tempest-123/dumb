import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Carousel from './Carousel'
import Card from './Card'
import ProjectModal from './ProjectModal'
import experienceData from '../data/experience.json'

const Experience = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selected, setSelected] = useState(null)

  const handleCardClick = (exp) => {
    setSelected({
      title: exp.role,
      description: `${exp.organization} • ${exp.duration}`,
      image: exp.image,
      tech: [exp.type],
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
    <section id="experience" className="bg-black relative z-[1]">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Carousel title="Experience" className='pl-4'>
          {/* Filter to show only: Web Maintenance Intern, Full Stack Intern, PARIKSHIT Management Head */}
          {experienceData.filter(exp => 
            exp.role.toLowerCase().includes('web maintenance intern') ||
            exp.role.toLowerCase().includes('full stack') ||
            exp.role.toLowerCase().includes('full stack developer') ||
            exp.role.toLowerCase().includes('management head')
          ).map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card
                title={exp.role}
                description={`${exp.organization} • ${exp.duration}`}
                image={exp.image}
                tech={[exp.type]}
                type="experience"
                onCardClick={() => handleCardClick(exp)}
              />
            </motion.div>
          ))}
        </Carousel>
      </motion.div>
      <ProjectModal isOpen={isModalOpen} onClose={handleClose} project={selected} />
    </section>
  )
}

export default Experience
