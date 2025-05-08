import React from "react";
import ReactDOM from "react-dom/client";
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
      src={`https://www.youtube.com/embed/${id}?autoplay=1&mute=1`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className="shorts-iframe"
      title={`YouTube Short ${id}`}
      loading="lazy"
      referrerPolicy="strict-origin-when-cross-origin"
    />
  </div>
);

// 🎥 Trending Shorts IDs
const shortsIds = [
  "fi6Lu65fB5E",
  "QjBv_ctwf3A",
  "XUCs4e0d-MM",
  "GsvGKb9ENcM",
  "go_4XaGvH0c",
  "Xrq_TDyABx8",
  "kLRrHKZOeSI",
  "hTpE1cDB4aM",
  "LHkvQQmnuUU",
] as const;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type ShortsId = typeof shortsIds[number];

// Root App Component
const App: React.FC = () => {
  return (
    <>
      <header className="header">
        <img
          src="https://i.imgur.com/epDdeaf.jpeg"
          alt="Jersey.FM Logo"
          className="header-logo"
        />
        <h1 className="header-title">JERSEY.FM TUBE</h1>
        <p className="header-description">
          The hottest Jersey Club ReelMix Shorts. You can mint your fav 🔥 ReelMix on our{" "}
          <a href="https://tv.jersey.fm" target="_blank" rel="noopener noreferrer">
            📺 TV
          </a>{" "}
          then resell them.
        </p>
      </header>

      <div className="shorts-feed">
        <h2>
          <span role="img" aria-label="fire emoji">
          💿
          </span>{" "}
          JERSEY CLUB SHORTS
        </h2>
        {shortsIds.map((id) => (
          <ShortsPlayer key={id} id={id} />
        ))}
      </div>
    </>
  );
};

// Render to the DOM
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
  }
} else {
  console.error("Root element not found");
}
