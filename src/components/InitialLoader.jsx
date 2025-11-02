import React, { useState, useEffect } from 'react'
import ProfileSelect from './ProfileSelect'

const InitialLoader = () => {
  const [showLoading, setShowLoading] = useState(true)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    // Show loading screen: 0.7s animation + buffer time
    // Then start transition
    let hideLoadingTimer = null
    
    const transitionTimer = setTimeout(() => {
      setIsTransitioning(true)
      // After transition animation completes, hide loading
      hideLoadingTimer = setTimeout(() => {
        setShowLoading(false)
      }, 700) // slide-out-fwd-center duration (0.7s)
    }, 1000) // Reduced buffer time

    return () => {
      clearTimeout(transitionTimer)
      if (hideLoadingTimer) {
        clearTimeout(hideLoadingTimer)
      }
    }
  }, [])

  // Show loading screen first
  if (showLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <h1 className={`text-5xl lg:text-6xl font-bold text-red-600 tracking-in-expand ${isTransitioning ? 'slide-out-fwd-center' : ''}`}>
          PHIROZGAR IRANI
        </h1>
      </div>
    )
  }

  // Show profile selection after loading
  return <ProfileSelect />
}

export default InitialLoader

