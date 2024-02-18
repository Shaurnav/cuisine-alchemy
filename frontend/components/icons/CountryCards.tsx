import React from "react";
import Card from "./Card"; // Make sure the path is correct

function CountryCards() {
  const countries = [
    { name: "China", imageSrc: "./china.png" },
    { name: "Mexican", imageSrc: "./mexican.png" },
    { name: "France", imageSrc: "./france.png" },
    { name: "India", imageSrc: "./india.png" },
    { name: "Japan", imageSrc: "./japan.png" },
    { name: "Thai", imageSrc: "./thai.png" },
    { name: "Korean", imageSrc: "./korean.png" },
    { name: "AddNew", imageSrc: "./addnew.png" },
  ];

  const galleryStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "row", // Correctly typed as a FlexDirection value
    overflowX: "scroll", // Correctly typed as a string, but specifically allowed for overflowX
    padding: "20px",
    gap: "10px", // Ensures space between items
  };

  return (
    <div style={galleryStyle}>
      {countries.map((country, index) => (
        <Card
          key={index}
          countryName={country.name}
          imageSrc={country.imageSrc}
        />
      ))}
    </div>
  );
}

export default CountryCards;
