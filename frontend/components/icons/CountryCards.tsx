import React from "react";
import { useState } from "react";
import Card from "./Card";

function CountryCards({selectedCountries, setSelectedCountries}: any) {

  const countries = [
    { name: "CHINA", imageSrc: "./china.webp" },
    { name: "MEXICO", imageSrc: "./mexican.webp" },
    { name: "ITALY", imageSrc: "./italian.webp" },
    { name: "INDIA", imageSrc: "./india.webp" },
    { name: "JAPAN", imageSrc: "./japan.webp" },
    { name: "LEBANON", imageSrc: "./lebanon.webp" },
    { name: "USA", imageSrc: "./usa.webp" },
    { name: "ADD NEW", imageSrc: "./addnew.webp" },
  ];

  const galleryStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "row", // Correctly typed as a FlexDirection value
    overflowX: "scroll", // Correctly typed as a string, but specifically allowed for overflowX
    gap: "10px", // Ensures space between items
  };

  return (
    <div style={galleryStyle}>
      {countries.map((country, index) => (
        <Card
          key={index}
          countryName={country.name}
          imageSrc={country.imageSrc}
          setSelectedHook={setSelectedCountries}
          selectedCountries={selectedCountries}
        />
      ))}
    </div>
  );
}

export default CountryCards;
