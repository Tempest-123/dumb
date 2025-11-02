import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Education from './components/Education'
import Experience from './components/Experience'
import Projects from './components/Projects'
import ToolsLanguages from './components/ToolsLanguages'
import ProjectsDatabase from './components/ProjectsDatabase'
import ProjectsFrontend from './components/ProjectsFrontend'
import ProjectsAI from './components/ProjectsAI'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main>
        {/* Section order:
            0. Hero section (unchanged)
            1. Continue Watching (My Education)
            2. Experience (filtered to show specific experiences)
            3. All My Projects (all projects)
            4. Tools / Languages I have used before (auto-moving carousels)
            5. Projects you might like - Database (Dashboard, CRUD, BlockBook)
            6. Projects you might like - Frontend / UI (Parikshit, Dashboard, Brainwave, Blockbook, ISRO, Portfolio)
            7. Projects you might like - AI (PATRICK)
            8. Contact me
        */}
        <Hero />
        <Education />
        <Experience />
        <Projects />
        <ToolsLanguages />
        <ProjectsDatabase />
        <ProjectsFrontend />
        <ProjectsAI />
        <Contact />
      </main>
      {/* <Footer /> */}
    </div>
  )
}

export default App
