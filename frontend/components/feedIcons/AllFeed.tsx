import FeedIcon from "./feedicon";

export default function AllFeed() {
  const feedData = [
    {
      username: "joy_ghosh15",
      title: "Falafel Burger with Tahini Bbq Sauce and Avocado",
      description:
        "Falafel Burger with Tahini BBQ Sauce and Avocado Slaw, showcasing the fusion of Middle Eastern and American cuisines.",
      imageUrl: "./falafel.webp",
    },
    {
      username: "Xiao215",
      title: "Matcha Pineapple Coconut Panna Cotta",
      description:
        "A fusion dessert blending Japanese matcha with Sri Lankan pineapple and coconut. Creamy matcha-infused coconut milk panna cotta topped with fresh pineapple compote.",
      imageUrl: "matcha.webp",
    },
    {
      username: "natashaBanga",
      title: "Moroccan Paella with Harissa Aioli",
      description:
        "A fusion dish merging Spanish paella with Moroccan flavors. Saffron-infused rice cooked with North African spices, mixed seafood, and chorizo.",
      imageUrl: "moroccan.webp",
    },
    {
      username: "adibsood",
      title: "Borscht-inspired Shakshukha",
      description:
        "A fusion dish of Russian borscht and Arabic shakshuka featuring a beet-infused tomato sauce with bell peppers, onions, and spices, topped with poached eggs and fresh dill.",
      imageUrl: "./borscht.webp",
    },
    {
      username: "sharmaTheParma",
      title: "Churro Eclair with White Chocolate Ganache",
      description:
        "An innovative dessert blending French éclairs and Mexican churros into a crispy pastry filled with chocolate ganache, flavored with cinnamon and a hint of cayenne pepper.",
      imageUrl: "churro.webp",
    },
    {
      username: "shrishJ",
      title: "Thai-Med Bruschetta",
      description:
        "Toasted baguette slices topped with a fusion of hummus, mango salsa, and Thai basil.",
      imageUrl: "Thai-Med.webp",
    },
    {
      username: "wallace_browning",
      title: "Matcha Tres Leches with Dragon Fruit Compote",
      description:
        "A decadent blend of Mexican tres leches cake infused with Japanese matcha powder.",
      imageUrl: "matccha.webp",
    },
    {
      username: "aliyanChaCha",
      title: "Sushi Samosa",
      description:
        "Combining the elegance of Japanese sushi with the beloved Indian samosa.",
      imageUrl: "sushi.webp",
    },
    {
      username: "srinidhii.v",
      title: "Masala Dosa Calzone",
      description:
        "A creative fusion dish blending the iconic South Indian dosa with the comforting flavors of Italian calzone.",
      imageUrl: "masala.webp",
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
    <div className="grid grid-cols-3 flex">
      {feedData.map((item, index) => (
        <div key={index}>
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
