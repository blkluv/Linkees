import avatar from "./assets/avatar.jpeg";

// Add working image URLs for each card (no Unsplash)
const cardItems = [
  // 📲 ACTIVE RFPS SECTION
  {
    title: "📲 Active RFPs (@RFPTOK)",
    subtitle: "Watch 1-min video pitches & vote your favorite 🔥",
    type: "tiktok",
    link: "https://www.tiktok.com/@rfptok",
    category: "active-rfps",
    image: "https://img.icons8.com/color/480/000000/tiktok--v1.png",
  },

  // 🤔 HOW IT WORKS SECTION
  {
    title: "🤔 HOW IT WORKS",
    subtitle: "1️⃣ Submit ▶ 2️⃣ Pitch ▶ 3️⃣ Vote ▶ 4️⃣ Deliver",
    type: "website",
    link: "https://rfp.auction",
    category: "how-it-works",
    image: "https://img.icons8.com/color/480/000000/process.png",
  },
  {
    title: "👀 SHORT RFP VIDEOS (60 SECS)",
    subtitle: "Brands submit challenges as 60-second videos",
    type: "youtube",
    link: "https://youtube.com/@rfpit",
    category: "how-it-works",
    image: "https://img.icons8.com/color/480/000000/video.png",
  },
  {
    title: "🎙️ SHORT RFP REPLIES (60 SECS)",
    subtitle: "Creators pitch solutions in 60-second responses",
    type: "youtube",
    link: "https://youtube.com/@rfpit",
    category: "how-it-works",
    image: "https://img.icons8.com/color/480/000000/microphone.png",
  },
  {
    title: "🏆 ANNOUNCE WINNER",
    subtitle: "Community votes decide the winning proposal",
    type: "tiktok",
    link: "https://www.tiktok.com/@rfptok",
    category: "how-it-works",
    image: "https://img.icons8.com/color/480/000000/trophy.png",
  },
  {
    title: "📈 TRACK MILESTONES",
    subtitle: "AR verification shows real-time progress updates",
    type: "website",
    link: "https://lumeebooth.com",
    category: "how-it-works",
    image: "https://img.icons8.com/color/480/000000/analytics.png",
  },

  // ⚡️ RAPID SERVICES SECTION
  {
    title: "⚡️ Rapid RFP Question",
    subtitle: "Turn your RFP into a video challenge in 24hrs 🎥",
    type: "stripe",
    link: "https://buy.stripe.com/",
    category: "rapid-services",
    image: "https://img.icons8.com/color/480/000000/quick-mode-on.png",
  },
  {
    title: "⚡️ Rapid RFP Response", 
    subtitle: "Script + edit your 60-second pitch video 🎬",
    type: "stripe",
    link: "https://buy.stripe.com/",
    category: "rapid-services",
    image: "https://img.icons8.com/color/480/000000/video-editing.png",
  },
  {
    title: "🎤 AR Mic Effect",
    subtitle: "Custom TikTok filter for your challenge (2-3 days)",
    type: "stripe",
    link: "https://buy.stripe.com/",
    category: "rapid-services",
    image: "https://img.icons8.com/color/480/000000/augmented-reality.png",
  },

  // 🎬 UGC PARTICIPATION SECTION
  {
    title: "💬 UGC (Question)",
    subtitle: "Submit your RFP as a 1-min video challenge 🧠",
    type: "youtube",
    link: "https://youtube.com/@rfpit",
    category: "ugc-participation",
    image: "https://img.icons8.com/color/480/000000/ask-question.png",
  },
  {
    title: "🎥 UGC (Response)",
    subtitle: "Pitch your solution in 60 seconds & earn votes 🚀",
    type: "youtube",
    link: "https://youtube.com/@rfpit",
    category: "ugc-participation",
    image: "https://img.icons8.com/color/480/000000/voice-presentation.png",
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
    link: "https://www.linkedin.com/company/rfp-auction/",
    category: "social-network",
    image: "https://img.icons8.com/color/480/000000/linkedin.png",
  },
  {
    title: "📸 LUMEE BOOTH",
    subtitle: "Powering every RFP milestone w/ AR proof",
    type: "website",
    link: "https://lumeebooth.com",
    category: "social-network",
    image: "https://img.icons8.com/color/480/000000/camera.png",
  }
];

// Group items by category for Netflix-style sections
const categorizedItems = {
  "active-rfps": {
    title: "📲 Active RFPs",
    items: cardItems.filter(item => item.category === "active-rfps")
  },
  "how-it-works": {
    title: "🤔 How It Works", 
    items: cardItems.filter(item => item.category === "how-it-works")
  },
  "rapid-services": {
    title: "⚡️ Rapid Services",
    items: cardItems.filter(item => item.category === "rapid-services")
  },
  "ugc-participation": {
    title: "🎬 UGC Participation",
    items: cardItems.filter(item => item.category === "ugc-participation")
  },
  "social-network": {
    title: "🌐 Social & Network",
    items: cardItems.filter(item => item.category === "social-network")
  }
};

function App() {
  return (
    <div className="netflix-style-container">
      {/* Header */}
      <div className="linkees-header">
        <img src={avatar} alt="RFP.AUCTION" className="header-avatar" />
        <div className="header-info">
          <h1 className="header-name">RFP.AUCTION</h1>
          <p className="header-bio">
            ⚡ The world's first 9-minute RFP process. Turn bids into 1-minute video challenges — Submit ▶ Pitch ▶ Vote ▶ Deliver 🏆
          </p>
        </div>
      </div>

      {/* Netflix-style Category Sections WITH 16:9 IMAGE CARDS */}
      {Object.entries(categorizedItems).map(([categoryKey, category]) => (
        <div key={categoryKey} className="category-section">
          <h2 className="category-title">{category.title}</h2>
          <div className="cards-grid">
            {category.items.map((item, index) => (
              <div key={index} className="netflix-card">
                <a 
                  href={item.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="card-link"
                >
                  {/* 16:9 Image Container */}
                  <div className="card-image-container">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="card-image"
                      onError={(e) => {
                        e.target.src = "https://img.icons8.com/color/480/000000/image.png";
                      }}
                    />
                    <div className="card-overlay">
                      <div className="card-icon">
                        {getIconByType(item.type)}
                      </div>
                    </div>
                  </div>
                  
                  {/* Card Content */}
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
          background-clip: text;
        }

        .header-bio {
          font-size: 1.4rem;
          opacity: 0.9;
          margin: 1rem 0 0 0;
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

        .card-link {
          display: block;
          text-decoration: none;
          color: inherit;
        }

        /* 16:9 Image Container */
        .card-image-container {
          position: relative;
          width: 100%;
          padding-bottom: 56.25%; /* 16:9 Aspect Ratio */
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
          transition: transform 0.3s ease;
          padding: 1rem;
          background: rgba(0, 0, 0, 0.3);
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

        /* Card Content */
        .card-content {
          padding: 2rem;
          position: relative;
          background: rgba(0, 0, 0, 0.3);
        }

        .card-title {
          font-size: 1.5rem;
          font-weight: 700;
          margin: 0 0 1rem 0;
          line-height: 1.3;
          color: white;
        }

        .card-subtitle {
          font-size: 1.1rem;
          opacity: 0.8;
          margin: 0;
          line-height: 1.5;
          color: rgba(255, 255, 255, 0.9);
        }

        .card-arrow {
          position: absolute;
          top: 2rem;
          right: 2rem;
          opacity: 0;
          transform: translateX(-10px);
          transition: all 0.3s ease;
          font-weight: bold;
          color: #e50914;
          font-size: 1.8rem;
        }

        .netflix-card:hover .card-arrow {
          opacity: 1;
          transform: translateX(0);
        }

        @media (max-width: 768px) {
          .netflix-style-container {
            padding: 1rem;
          }
          
          .linkees-header {
            flex-direction: column;
            text-align: center;
            gap: 1rem;
          }
          
          .header-name {
            font-size: 2.5rem;
          }
          
          .header-bio {
            font-size: 1.2rem;
          }
          
          .category-title {
            font-size: 1.8rem;
          }
          
          .cards-grid {
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 1.5rem;
          }
        }

        @media (max-width: 480px) {
          .cards-grid {
            grid-template-columns: 1fr;
          }
          
          .header-name {
            font-size: 2rem;
          }
          
          .category-title {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
}

// Helper function
function getIconByType(type) {
  const icons = {
    "tiktok": "🎵",
    "youtube": "📺", 
    "website": "🌐",
    "stripe": "💳",
    "linkedin": "💼"
  };
  return icons[type] || "🔗";
}

export default App;