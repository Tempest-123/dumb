import React from "react";
import "../styles/HeroSection.css";
import "../styles/Carousel3D.css";

const HeroSection = () => {
  return (
    <section className="hero-section">
      {/* 3D Carousel Background */}
      <div className="carousel-3d-container">
        <div className="card-3d">
          {/* 🔹 Replace each div background with your own images */}
          <div style={{ backgroundImage: 'url("/public/portfolio/CR.jpeg")', backgroundSize: "cover" }}></div>
          <div style={{ backgroundImage: 'url("/public/portfolio/bhanap.jpeg")', backgroundSize: "cover" }}></div>
          <div style={{ backgroundImage: 'url("/public/pics/airport.jpeg")', backgroundSize: "cover" }}></div>
          <div style={{ backgroundImage: 'url("/public/pics/class-photo.jpeg")', backgroundSize: "cover" }}></div>
          <div style={{ backgroundImage: 'url("public/pics/hahaha-this-aged-well.jpeg")', backgroundSize: "cover" }}></div>
          <div style={{ backgroundImage: 'url("/public/portfolio/tausif.jpeg")', backgroundSize: "cover" }}></div>
          <div style={{ backgroundImage: 'url("public/pics/KB-mit.jpeg")', backgroundSize: "cover" }}></div>
          <div style={{ backgroundImage: 'url("public/pics/MUTBI-bag.jpeg")', backgroundSize: "cover" }}></div>
          <div style={{ backgroundImage: 'url("public/pics/proshow-ladies.jpeg")', backgroundSize: "cover" }}></div>
          <div style={{ backgroundImage: 'url("public/pics/tda-club-expo.jpeg")', backgroundSize: "cover" }}></div>
        </div>
      </div>

      {/* Hero Text Overlay */}
      <div className="hero-content">
        <h1 className="hero-title glass-text">Hi, I'm Phirozgar Irani</h1>
        <p className="hero-subtitle glass-text">
          Designer • Developer • Real World Problem Solver
        </p>
        <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight drop-shadow-lg text-white/90">
          THIS is My College Journey
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;


