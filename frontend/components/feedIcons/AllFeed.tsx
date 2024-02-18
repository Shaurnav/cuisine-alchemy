import FeedIcon from "./feedicon";

export default function AllFeed() {
  const feedData = [
    {
      username: "joy_ghosh15",
      title: "Falafel Burger with Tahini Bbq Sauce and Avocado",
      description:
        "Falafel Burger with Tahini BBQ Sauce and Avocado Slaw, showcasing the fusion of Middle Eastern and American cuisines",
      imageUrl: "./falafel.webp",
    },
    {
      username: "adibsood",
      title: "Borscht-inspired Shakshukha",
      description:
        "A unique fusion dish combining Russian borscht with Arabic shakshuka. Beet-infused tomato sauce simmered with bell peppers, onions, and spices, topped with poached eggs. Served with a dollop of labneh and a sprinkle of fresh dill",
      imageUrl: "./borscht.webp",
    },
    {
      username: "sharmaTheParma",
      title: "Churro Eclair with White Chocolate Ganache",
      description:
        "An innovative fusion dessert that marries the delicate elegance of French éclairs with the vibrant flavors of Mexican churros. Crispy choux pastry filled with a decadent spiced white chocolate ganache, infused with cinnamon, nutmeg, and a hint of cayenne pepper.",
      imageUrl: "churro.webp",
    },
    {
      username: "Xiao215",
      title: "Matcha Pineapple Coconut Panna Cotta",
      description:
        "A fusion dessert blending Japanese matcha with Sri Lankan pineapple and coconut. Creamy matcha-infused coconut milk panna cotta topped with fresh pineapple compote.",
      imageUrl: "matcha.webp",
    },
    {
      username: "nBanga",
      title: "Moroccan Paella with Harissa Aioli",
      description:
        "A fusion dish merging Spanish paella with Moroccan flavors. Saffron-infused rice cooked with North African spices, mixed seafood, and chorizo",
      imageUrl: "moroccan.webp",
    },
    {
      username: "wallace_browning",
      title: "Matcha Tres Leches Cake with Dragon Fruit Compote",
      description:
        "A decadent blend of Mexican tres leches cake infused with Japanese matcha powder.",
      imageUrl: "matccha.webp",
    },
    {
      username: "shrishJ",
      title: "Thai-Med Bruschetta",
      description:
        "Toasted baguette slices topped with a fusion of hummus, mango salsa, and Thai basil.",
      imageUrl: "Thai-Med.webp",
    },
    {
      username: "srinidhii.v",
      title: "Masala Dosa Calzone",
      description:
        "A creative fusion dish blending the iconic South Indian dosa with the comforting flavors of Italian calzone",
      imageUrl: "masala.webp",
    },
    {
      username: "aliyanChaCha",
      title: "Sushi Samosa",
      description:
        "Combining the elegance of Japanese sushi with the beloved Indian samosa",
      imageUrl: "sushi.webp",
    },
  ];

  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between", // Adjusts spacing between items
    alignItems: "stretch", // Ensures that items are aligned
  };

  // Inline style for individual cards to reduce margin
  const cardStyle = {
    margin: "10px", // Adjust the space between cards as needed
    flex: "1 0 21%", // Adjust the basis percentage depending on how many cards per row you want
    // For example, 21% will attempt to fit approximately 4 cards in a row (minus margins)
  };

  return (
    <div style={containerStyle}>
      {feedData.map((item, index) => (
        <div style={cardStyle} key={index}>
          <FeedIcon
            username={item.username}
            title={item.title}
            description={item.description}
            imageUrl={item.imageUrl}
          />
        </div>
      ))}
    </div>
  );
}
