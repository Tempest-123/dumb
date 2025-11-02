import React from "react";
import "../styles/EducationBento.css";

const EducationBento = () => {
  return (
    <section
      id="education"
      className="py-20 bg-transparent text-white flex flex-col items-center"
    >
      <h2 className="text-5xl font-bold mb-10">My Education Journey</h2>

      <div className="grid-wrapper">
        <div className="my-custom-grid-container">
          {[...Array(30)].map((_, i) => (
            <div key={i} className={`grid-box grid-box${i + 1}`}>
              {i + 1}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationBento;
