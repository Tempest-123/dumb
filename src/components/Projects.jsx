import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Carousel from './Carousel'
import Top10Card from './Top10Card'
import ProjectModal from './ProjectModal'
import projectsData from '../data/projects.json'

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleCardClick = (project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
  }

  return (
    <section id="projects" className="py-2 bg-black relative z-[1]">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Carousel title="All My Projects" className='pl-4'>
          {projectsData.map((project, index) => {
            // If project has a rank, wrap it in a numbered wrapper structure
            if (project.rank) {
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="numbered-card-wrapper flex-shrink-0 flex items-center"
                >
                  {/* First div - Number display */}
                  <div className="netflix-top10-ranking-number flex items-center justify-center">
                    {index + 1}
                  </div>
                  {/* Second div - Card */}
                  <div className="card-container">
                    <Top10Card
                      title={project.title}
                      description={project.description}
                      image={project.image}
                      tech={project.tech}
                      date={project.date}
                      readingTime={project.readingTime}
                      liveUrl={project.liveUrl}
                      githubUrl={project.githubUrl}
                      rank={null}
                      status={project.status}
                      type="project"
                      onCardClick={() => handleCardClick(project)}
                    />
                  </div>
                </motion.div>
              )
            }
            // No rank - render normally
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Top10Card
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  tech={project.tech}
                  date={project.date}
                  readingTime={project.readingTime}
                  liveUrl={project.liveUrl}
                  githubUrl={project.githubUrl}
                  rank={null}
                  status={project.status}
                  type="project"
                  onCardClick={() => handleCardClick(project)}
                />
              </motion.div>
            )
          })}
        </Carousel>
      </motion.div>

      {/* Project Modal */}
      <ProjectModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        project={selectedProject}
      />
    </section>
  )
}

export default Projects
