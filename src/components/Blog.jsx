import React from "react";
import FloatingNav from "../components/FloatingNav.jsx";
import HeroSection from "../components/HeroSection";
import StoryText from "../components/StoryText";
import EducationBento from "../components/EducationBento";

const Blog = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e] text-white overflow-x-hidden">
      <FloatingNav />
      <HeroSection />
      <section className="relative flex flex-col items-center justify-center min-h-[100vh] mt-[-10vh]">
        <StoryText />
      </section>
      <EducationBento />
    </div>
  );
};

export default Blog;
