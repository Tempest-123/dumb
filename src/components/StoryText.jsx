import React from "react";
import "../styles/StoryText.css";

const StoryText = () => {
  return (
    <div className="relative mt-10 flex flex-col items-center justify-center">
      <svg
        id="cursor"
        width="300"
        height="100"
        viewBox="0 0 300 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <text
          id="text"
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="48"
          fontWeight="bold"
          fill="url(#gradient)"
        >
          WELCOME TO MY STORY
        </text>
        <defs>
          <linearGradient id="gradient" gradientTransform="rotate(45)">
            <stop offset="0%" stopColor="#ff758c" />
            <stop offset="100%" stopColor="#ff7eb3" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default StoryText;
