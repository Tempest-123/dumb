import React from "react";

const FloatingNav = () => {
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 flex gap-8 text-lg font-semibold text-white/90 z-50">
      <a href="#hero" className="hover:text-pink-400 transition-all">Home</a>
      <a href="#journey" className="hover:text-blue-400 transition-all">Journey</a>
      <a href="#education" className="hover:text-yellow-400 transition-all">Education</a>
      <a href="#projects" className="hover:text-green-400 transition-all">Projects</a>
    </nav>
  );
};

export default FloatingNav;
