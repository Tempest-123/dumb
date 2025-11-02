import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const ProfileSelect = () => {
  const navigate = useNavigate();
  const profiles = [
    { id: 'student', name: 'Student', icon: '🎓', color: 'from-blue-500 to-purple-600' },
    { id: 'recruiter', name: 'Recruiter', icon: '💼', color: 'from-green-500 to-blue-600' },
    { id: 'kevin', name: 'Kevin Feige', icon: '🎬', color: 'from-red-500 to-pink-600' },
  ];

  const handleProfileClick = (profileId) => {
    if (profileId === 'recruiter') {
      navigate('/recruiter');
    } else if (profileId === 'student') {
      navigate('/student');
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-red-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl font-netflix font-bold text-white mb-16"
        >
          Who's Watching?
        </motion.h1>

        <div className="flex flex-wrap justify-center gap-8 max-w-4xl">
          {profiles.map((profile, index) => (
            <motion.div
              key={profile.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ 
                scale: 1.1,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleProfileClick(profile.id)}
              className="group cursor-pointer"
            >
              <div className={`netflix-profile-avatar bg-gradient-to-br ${profile.color} flex flex-col items-center justify-center`}>
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="text-4xl mb-2"
                >
                  {profile.icon}
                </motion.div>
                <span className="text-white font-netflix text-lg group-hover:text-red-600 transition-colors duration-300">
                  {profile.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-16"
        >
          <p className="text-gray-400 text-lg">
            Click on "Recruiter" to view the portfolio
            <span className="text-xs">
            <br/>Click on "Student" to view my college journey so far (It's my blog 😅)
            <br/>Click on "Kevin Feige" to see my movie reviews and thoughts
            <br/>Click on "Mom" to see a special message for my mom
            </span>
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default ProfileSelect
