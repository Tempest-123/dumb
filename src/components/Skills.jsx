import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Carousel from './Carousel'
import Card from './Card'
import ProjectModal from './ProjectModal'
import skillsData from '../data/skills.json'

const Skills = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selected, setSelected] = useState(null)

  const handleCardClick = (skill) => {
    setSelected({
      title: skill.name,
      description: skill.description,
      image: skill.image,
      tech: [skill.category, skill.level],
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
    <section id="skills" className="py-2 bg-black relative z-[1]">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Carousel title="Trending Now — Skills" className='pl-4'>
          {skillsData.map((skill, index) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card
                title={skill.name}
                description={skill.description}
                image={skill.image}
                tech={[skill.category, skill.level]}
                type="skill"
                onCardClick={() => handleCardClick(skill)}
              />
            </motion.div>
          ))}
        </Carousel>
      </motion.div>
      <ProjectModal isOpen={isModalOpen} onClose={handleClose} project={selected} />
    </section>
  )
}

export default Skills