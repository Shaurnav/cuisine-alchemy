interface FeedIconProps {
  username: string;
  title: string;
  description: string;
  imageUrl: string;
}

export default function FeedIcon({
  username,
  title,
  description,
  imageUrl,
}): FeedIconProps {
  return (
    <div
      style={{
        width: "425px",
        margin: "20px",
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h2>{title}</h2>
      <img
        src={imageUrl}
        alt={title}
        style={{ width: "100%", height: "320px", objectFit: "cover" }}
      />
      <p style={{ padding: "0 20px" }}>{description}</p>
    </div>
  );
}
