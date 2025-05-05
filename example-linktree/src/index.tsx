import React from "react";
import ReactDOM from "react-dom/client";
import Linkees, { CHANNEL_TYPES } from "linkees";
import "./css/normalize.css";

// 🎥 Types for Shorts Player
interface ShortsPlayerProps {
  id: string;
}

// 🎥 Shorts Player Component (9:16 Aspect Ratio)
const ShortsPlayer: React.FC<ShortsPlayerProps> = ({ id }) => (
  <div className="shorts-container">
    <iframe
      width="100%"
      height="100%"
      src={`https://www.youtube.com/embed/${id}?autoplay=1&mute=1`}  // Changed to nocookie domain
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className="shorts-iframe"
      title={`YouTube Short ${id}`}
      loading="lazy"
      referrerPolicy="strict-origin-when-cross-origin"  // Added for security
    />
  </div>
);

// 🔗 Type for Linkee items
interface LinkeeItem {
  title: string;
  subtitle: string;
  type: typeof CHANNEL_TYPES[keyof typeof CHANNEL_TYPES];  // More precise type
  link: string;
  image?: string;
}

// 🔗 Linkees Config (Gen Z Edition)
const items: LinkeeItem[] = [
  // Add your actual items here, e.g.:
  // {
  //   title: "Example Linkee",
  //   subtitle: "Short Description",
  //   type: "link",
  //   link: "https://example.com",
  //   image: "https://example.com/image.jpg"
  // },
];

// 🎥 Trending Shorts IDs
const shortsIds = [
  "fi6Lu65fB5E", // Replace with actual Shorts IDs
  "QjBv_ctwf3A",
  "XUCs4e0d-MM",
] as const;  // as const for literal type inference

type ShortsId = typeof shortsIds[number];  // Type for individual ID

// Root component
const App: React.FC = () => {
  // Consider moving this data to a separate config file
  return (
    <>
      <Linkees cardItems={items} name={"JERSEY CLUB TUBE. 🔥"} />
      <div className="shorts-feed">
        <h2>
          <span role="img" aria-label="fire emoji">🔥</span> TRENDING SHORTS
        </h2>
        {shortsIds.map((id) => (
          <ShortsPlayer key={id} id={id} />
        ))}
      </div>
    </>
  );
};

// Render with error boundary in production
const rootElement = document.getElementById("root");
if (rootElement) {
  try {
    ReactDOM.createRoot(rootElement).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  } catch (error) {
    console.error("Failed to render app:", error);
    // Fallback UI could go here
  }
} else {
  console.error("Root element not found");
  // You might want to create the root element dynamically in some cases
}
