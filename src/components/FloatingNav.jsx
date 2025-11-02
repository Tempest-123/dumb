import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const FloatingNav = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    };

    if (isProfileOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isProfileOpen]);

  const handleProfileSwitch = (profile) => {
    setIsProfileOpen(false);
    if (profile === "recruiter") {
      navigate("/recruiter");
    } else if (profile === "student") {
      navigate("/student");
    }
    // Add more profile routes as needed
  };

  return (
    <>
      {/* Center Navigation */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 flex gap-8 text-lg font-semibold text-white/90 z-40">
        <a href="#hero" className="hover:text-pink-400 transition-all">Home</a>
        <a href="#journey" className="hover:text-blue-400 transition-all">Journey</a>
        <a href="#education" className="hover:text-yellow-400 transition-all">Education</a>
        <a href="#projects" className="hover:text-green-400 transition-all">Projects</a>
      </nav>

      {/* Profile Dropdown - Top Right */}
      <div className="fixed top-4 right-4 z-50" ref={dropdownRef}>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsProfileOpen(!isProfileOpen)}
          className="w-10 h-10 bg-gray-600/80 backdrop-blur-sm rounded flex items-center justify-center text-white hover:bg-gray-500/80 transition-colors duration-300 shadow-lg"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
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
            <button 
              onClick={() => handleProfileSwitch("student")}
              className="w-full text-left px-4 py-2 text-blue-400 hover:bg-gray-800 transition-colors duration-200"
            >
              Student
            </button>
            <button 
              onClick={() => handleProfileSwitch("recruiter")}
              className="w-full text-left px-4 py-2 text-gray-300 hover:bg-gray-800 transition-colors duration-200"
            >
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
    </>
  );
};

export default FloatingNav;
