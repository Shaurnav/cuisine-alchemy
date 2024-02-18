import React, { useState } from "react";

function Card({ countryName, imageSrc }) {
  const [isSelected, setIsSelected] = useState(false);

  const cardStyle = {
    border: isSelected ? "2px solid blue" : "1px solid #ddd",
    borderRadius: "8px",
    cursor: "pointer",
    padding: "10px",
    margin: "10px",
    width: "300px",
    boxShadow: isSelected
      ? "0 8px 16px rgba(0, 0, 0, 0.2)"
      : "0 4px 8px rgba(0, 0, 0, 0.1)",
    transition: "box-shadow 0.3s ease, border 0.3s ease",
    transform: isSelected ? "scale(1.05)" : "scale(1)",
    overflow: "hidden",
  };

  const imageStyle = {
    maxWidth: "100%",
    display: "block",
    borderRadius: "8px",
    transition: "transform 0.3s ease",
    transform: isSelected ? "scale(1.1)" : "scale(1)",
  };

  const titleStyle = {
    color: "#333", // darker color for better readability
    fontSize: "18px", // slightly larger font size
    marginTop: "8px", // more space above the title
    textAlign: "center", // center alignment for better aesthetics
    fontWeight: "bold", // bold font weight for emphasis
  };

  return (
    <div>
      <div style={cardStyle} onClick={() => setIsSelected(!isSelected)}>
        <img src={imageSrc} alt={countryName} style={imageStyle} />
        <h3>{countryName}</h3>
      </div>
    </div>
  );
}

export default Card;
