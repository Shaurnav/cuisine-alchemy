import React from "react";
import { useState } from "react";
import Card from "./Card";

function CountryCards() {
  const [selectedCountries, setSelectedCountries] = useState([]);

  const countries = [
    { name: "China", imageSrc: "./china.png" },
    { name: "Mexican", imageSrc: "./mexican.png" },
    { name: "France", imageSrc: "./france.png" },
    { name: "India", imageSrc: "./india.png" },
    { name: "Japan", imageSrc: "./japan.png" },
    { name: "Lebanon", imageSrc: "./lebanon.png" },
    { name: "USA", imageSrc: "./usa.png" },
    { name: "AddNew", imageSrc: "./addnew.png" },
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
