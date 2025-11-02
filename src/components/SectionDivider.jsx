// src/components/SectionDivider.jsx
const SectionDivider = ({ from = "black", to = "#1a1a1a" }) => {
  return (
    <div
      className="w-full h-32 sm:h-48 md:h-64 bg-gradient-to-b"
      style={{
        backgroundImage: `linear-gradient(${from}, ${to})`,
      }}
    ></div>
  );
};

export default SectionDivider;
