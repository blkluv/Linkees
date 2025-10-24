// Use remote avatar image
const avatar = "https://i.imgur.com/sg3RinS.jpeg";

// Add working image URLs for each card (no Unsplash)
const cardItems = [
  // 📲 ACTIVE RFPS SECTION
  {
    title: "📲 Active RFPs (@RFPTOK)",
    subtitle: "Watch 1-min video pitches & vote your favorite 🔥",
    type: "tiktok",
    link: "https://www.tiktok.com/@rfptok",
    category: "active-rfps",
    image: "https://i.imgur.com/utL4kuW.png",
  },

  // 🤔 HOW IT WORKS SECTION
  {
    title: "🤔 HOW IT WORKS",
    subtitle: "1️⃣ Submit ▶ 2️⃣ Pitch ▶ 3️⃣ Vote ▶ 4️⃣ Deliver",
    type: "website",
    link: "https://rfp.auction",
    category: "how-it-works",
    image: "https://i.imgur.com/usyzFi1.png",
  },
  {
    title: "🎦 SHORT RFP VIDEOS (60 SECS)",
    subtitle: "Brands submit challenges as 60-second videos",
    type: "youtube",
    link: "https://youtube.com/@rfpit",
    category: "how-it-works",
    image: "https://i.imgur.com/JOBqLYx.png",
  },
  {
    title: "🗣️ SHORT RFP REPLIES (60 SECS)",
    subtitle: "Creators pitch solutions in 60-second responses",
    type: "youtube",
    link: "https://youtube.com/@rfpit",
    category: "how-it-works",
    image: "https://i.imgur.com/t4KQBSk.png",
  },
  {
    title: "🏆 ANNOUNCE WINNER",
    subtitle: "Community votes decide the winning proposal",
    type: "tiktok",
    link: "https://www.tiktok.com/@rfptok",
    category: "how-it-works",
    image: "https://i.imgur.com/juu9uzG.png",
  },
  {
    title: "📈 TRACK MILESTONES",
    subtitle: "AR verification shows real-time progress updates",
    type: "website",
    link: "https://app.lumeebooth.com",
    category: "how-it-works",
    image: "https://i.imgur.com/hbQCLHt.png",
  },

  // ⚡️ RAPID SERVICES SECTION
  {
    title: "🎥 RFP Challenge",
    subtitle:
      "🎥 Turn your long boring RFP into an interactive social video challenge in one business day. 💰 $7,500",
    type: "stripe",
    link: "https://buy.stripe.com/aFafZh8OR8GW0Gj36V5wI16",
    category: "rapid-services",
    image: "https://i.imgur.com/R7C5ozc.png",
  },
  {
    title: "⚡️ Rapid RFP Response",
    subtitle:
      "⚡️ Receive a rapid RFP expert response via Pitch.com in one business day. 💰 $3,500",
    type: "stripe",
    link: "https://buy.stripe.com/8x24gz4yBcXc4Wz5f35wI13",
    category: "rapid-services",
    image: "https://i.imgur.com/O5DJhbX.png",
  },
  {
    title: "🎙️ TikTok RFP UGC Mic",
    subtitle:
      "Order a branded TikTok RFP UGC (User Generated Content) mic for 60-sec replies. 💰 $1,500",
    type: "stripe",
    link: "https://buy.stripe.com/4gMbJ1c136yOgFh6j75wI17",
    category: "rapid-services",
    image: "https://i.imgur.com/xy0fn9z.png",
  },
  {
    title: "🧙🏽‍♂️ RFP Expert Consultation",
    subtitle:
      "Book a 60-min call with a RFP.AUCTION wizard to brainstorm your RFP challenge or response. 💰 $1,200",
    type: "stripe",
    link: "https://buy.stripe.com/aFa9AT4yB3mCcp1fTH5wI14",
    category: "rapid-services",
    image: "https://i.imgur.com/CcZQ7v4.png",
  },

  // 🌐 SOCIAL & NETWORK SECTION
  {
    title: "🎯 @RFPTOK",
    subtitle: "Follow for daily RFP drops + live challenges",
    type: "tiktok",
    link: "https://www.tiktok.com/@rfptok",
    category: "social-network",
    image: "https://img.icons8.com/color/480/000000/tiktok--v1.png",
  },
  {
    title: "💼 LinkedIn",
    subtitle: "City collabs, partners, & RFP case studies",
    type: "linkedin",
    link: "https://www.linkedin.com/groups/13062182",
    category: "social-network",
    image: "https://img.icons8.com/color/480/000000/linkedin.png",
  },
  {
    title: "📸 LUMEE BOOTH",
    subtitle: "Powering every RFP milestone w/ AR proof",
    type: "website",
    link: "https://app.lumeebooth.com",
    category: "social-network",
    image: "https://img.icons8.com/color/480/000000/camera.png",
  },
];

// Group items by category for Netflix-style sections
const categorizedItems = {
  "active-rfps": {
    title: "📲 Active RFPs",
    items: cardItems.filter((item) => item.category === "active-rfps"),
  },
  "how-it-works": {
    title: "🤔 How It Works",
    items: cardItems.filter((item) => item.category === "how-it-works"),
  },
  "rapid-services": {
    title: "⚡️ Rapid Services",
    items: cardItems.filter((item) => item.category === "rapid-services"),
  },
  "ugc-participation": {
    title: "🎬 UGC Participation",
    items: cardItems.filter((item) => item.category === "ugc-participation"),
  },
  "social-network": {
    title: "🌐 Social & Network",
    items: cardItems.filter((item) => item.category === "social-network"),
  },
};

// Helper for emoji overlay
function getIconByType(type) {
  const icons = {
    tiktok: "🎵",
    youtube: "📺",
    website: "🌐",
    stripe: "💳",
    linkedin: "💼",
  };
  return icons[type] || "🔗";
}

function App() {
  return (
    <div className="netflix-style-container">
      {/* Header */}
      <div className="linkees-header">
        <img src={avatar} alt="RFP.AUCTION" className="header-avatar" />
        <div className="header-info">
          <h1 className="header-name">RFP.AUCTION</h1>
          <p className="header-bio">
            ⚡ We transformed the traditional 90-day RFP cycle into a single day
            through 1-minute social video challenges and analytics-scored responses.
            Every RFP, bid, and milestone is verified on blockchain — creating a public,
            tamper-proof record of performance and accountability. ▶ Pitch ▶ Win ▶ Deliver 🏆
          </p>
        </div>
      </div>

      {/* Netflix-style sections */}
      {Object.entries(categorizedItems).map(([key, category]) => (
        <div key={key} className="category-section">
          <h2 className="category-title">{category.title}</h2>
          <div className="cards-grid">
            {category.items.map((item, i) => (
              <div key={i} className="netflix-card">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-link"
                >
                  {/* Image */}
                  <div className="card-image-container">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="card-image"
                      onError={(e) =>
                        (e.target.src =
                          "https://img.icons8.com/color/480/000000/image.png")
                      }
                    />
                    <div className="card-overlay">
                      <div className="card-icon">{getIconByType(item.type)}</div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="card-content">
                    <h3 className="card-title">{item.title}</h3>
                    <p className="card-subtitle">{item.subtitle}</p>
                    <div className="card-arrow">▶</div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Styling */}
      <style jsx>{`
        .netflix-style-container {
          background: linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%);
          min-height: 100vh;
          color: white;
          padding: 2rem;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .linkees-header {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          margin-bottom: 3rem;
          padding: 2rem;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 1rem;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .header-avatar {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          border: 3px solid #e50914;
        }

        .header-name {
          font-size: 3rem;
          font-weight: bold;
          margin: 0;
          background: linear-gradient(45deg, #e50914, #ff6b6b);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .header-bio {
          font-size: 1.4rem;
          opacity: 0.9;
          margin-top: 1rem;
          max-width: 700px;
          line-height: 1.6;
        }

        .category-section {
          margin-bottom: 4rem;
        }

        .category-title {
          font-size: 2.2rem;
          font-weight: bold;
          margin-bottom: 1.5rem;
          padding-left: 1rem;
          border-left: 6px solid #e50914;
          color: white;
        }

        .cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 2rem;
        }

        .netflix-card {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 1rem;
          transition: all 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.1);
          overflow: hidden;
          position: relative;
        }

        .netflix-card:hover {
          transform: scale(1.05);
          border-color: #e50914;
          box-shadow: 0 15px 40px rgba(229, 9, 20, 0.4);
        }

        .card-image-container {
          position: relative;
          width: 100%;
          padding-bottom: 56.25%;
          overflow: hidden;
          background: rgba(255, 255, 255, 0.1);
        }

        .card-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: contain;
          padding: 1rem;
          background: rgba(0, 0, 0, 0.3);
          transition: transform 0.3s ease;
        }

        .netflix-card:hover .card-image {
          transform: scale(1.1);
        }

        .card-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            to bottom,
            transparent 0%,
            rgba(0, 0, 0, 0.1) 50%,
            rgba(0, 0, 0, 0.8) 100%
          );
          display: flex;
          align-items: flex-end;
          justify-content: flex-end;
          padding: 1.5rem;
        }

        .card-icon {
          font-size: 2rem;
          background: rgba(0, 0, 0, 0.7);
          border-radius: 50%;
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .card-content {
          padding: 2rem;
          background: rgba(0, 0, 0, 0.3);
          position: relative;
        }

        .card-title {
          font-size: 1.5rem;
          font-weight: 700;
          margin: 0 0 1rem 0;
        }

        .card-subtitle {
          font-size: 1.1rem;
          opacity: 0.8;
          margin: 0;
        }

        .card-arrow {
          position: absolute;
          top: 2rem;
          right: 2rem;
          opacity: 0;
          transform: translateX(-10px);
          transition: all 0.3s ease;
          color: #e50914;
          font-weight: bold;
          font-size: 1.8rem;
        }

        .netflix-card:hover .card-arrow {
          opacity: 1;
          transform: translateX(0);
        }

        @media (max-width: 768px) {
          .linkees-header {
            flex-direction: column;
            text-align: center;
          }
          .header-name {
            font-size: 2.5rem;
          }
          .cards-grid {
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          }
        }

        @media (max-width: 480px) {
          .cards-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}

export default App;
