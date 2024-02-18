import FeedIcon from "./feedicon";

export default function AllFeed() {
  const feedData = [
    {
      username: "joy_ghosh15",
      title: "Sample Title 1",
      description: "This is a sample description for the first feed item.",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      username: "adibsood",
      title: "Sample Title 1",
      description: "This is a sample description for the second feed item.",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      username: "sharmaTheParma",
      title: "Sample Title 1",
      description: "This is a sample description for the first feed item.",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      username: "Xiao215",
      title: "Sample Title 1",
      description: "This is a sample description for the first feed item.",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      username: "nBanga",
      title: "Sample Title 1",
      description: "This is a sample description for the first feed item.",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      username: "wallace_browning",
      title: "Sample Title 1",
      description: "This is a sample description for the first feed item.",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      username: "shrishJ",
      title: "Sample Title 1",
      description: "This is a sample description for the first feed item.",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      username: "srinidhii.v",
      title: "Sample Title 1",
      description: "This is a sample description for the first feed item.",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      username: "aliyanChaCha",
      title: "Sample Title 1",
      description: "This is a sample description for the first feed item.",
      imageUrl: "https://via.placeholder.com/150",
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
  // return (
  //   <div>
  //     {feedData.map((item, index) => (
  //       //@ts-ignore
  //       <div>
  //         <FeedIcon
  //         username={item.username}
  //         title={item.title}
  //         description={item.description}
  //         imageUrl={item.imageUrl}
  //         key={index}
  //       />
  //         </div>
  //     ))}
  //   </div>
  // );
}
