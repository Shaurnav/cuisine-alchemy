import React, { useState } from "react";

export interface CardProps {
  countryName: string;
  imageSrc: string;
  setSelectedHook: any;
  selectedCountries: any[];
}

function Card({
  countryName,
  imageSrc,
  setSelectedHook,
  selectedCountries,
}: CardProps) {
  const [isSelected, setIsSelected] = useState(false);

  const cardStyle = {
    border: isSelected ? "3px solid blue" : "1px solid #ddd",
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
    marginTop: isSelected ? "20px" : "10px",
    color: "#333",
    fontSize: "18px",
    fontWeight: "bold",
    textAlign: "center",
  };

  const gotSelected = () => {
    if (isSelected) {
      setIsSelected(false);
      const filteredCountries = selectedCountries.filter(
        (country: any) => country.name !== countryName
      );
      console.log(filteredCountries);
      setSelectedHook(filteredCountries);
    } else if (selectedCountries.length < 2) {
      setIsSelected(true);
      setSelectedHook([
        ...selectedCountries,
        { name: countryName, imageSrc: imageSrc },
      ]);
      console.log(selectedCountries);
    }
  };

  return (
    <div className="h-[24rem]">
      <div style={cardStyle} onClick={gotSelected}>
        <img
          src={imageSrc}
          alt={countryName}
          style={imageStyle}
          className="flex"
        />
        {/* @ts-ignore */}
        <h3 style={titleStyle}>{countryName}</h3>
      </div>
    </div>
  );
}

export default Card;
