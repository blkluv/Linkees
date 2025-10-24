import { Linkees, CHANNEL_TYPES } from "linkees";
import "linkees/dist/style.css";
import avatar from "./assets/avatar.jpeg";

// Add image URLs for each card
const cardItems = [
  // 📲 ACTIVE RFPS SECTION
  {
    title: "📲 Active RFPs (@RFPTOK)",
    subtitle: "Watch 1-min video pitches & vote your favorite 🔥",
    type: CHANNEL_TYPES.TIKTOK,
    link: "https://www.tiktok.com/@rfptok",
    category: "active-rfps",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=225&fit=crop&auto=format",
  },

  // 🤔 HOW IT WORKS SECTION
  {
    title: "🤔 HOW",
    subtitle: "1️⃣ Submit ▶ 2️⃣ Pitch ▶ 3️⃣ Vote ▶ 4️⃣ Deliver",
    type: CHANNEL_TYPES.WEBSITE,
    link: "https://rfp.auction",
    category: "how-it-works",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=225&fit=crop&auto=format",
  },
  {
    title: "👀 SHORT RFP VIDEOS (60 SECS)",
    subtitle: "Brands submit challenges as 60-second videos",
    type: CHANNEL_TYPES.YOUTUBE,
    link: "https://youtube.com/@rfpit",
    category: "how-it-works",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=225&fit=crop&auto=format",
  },
  {
    title: "🎙️ SHORT RFP REPLIES (60 SECS)",
    subtitle: "Creators pitch solutions in 60-second responses",
    type: CHANNEL_TYPES.YOUTUBE,
    link: "https://youtube.com/@rfpit",
    category: "how-it-works",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=225&fit=crop&auto=format",
  },
  {
    title: "🏆 ANNOUNCE WINNER",
    subtitle: "Community votes decide the winning proposal",
    type: CHANNEL_TYPES.TIKTOK,
    link: "https://www.tiktok.com/@rfptok",
    category: "how-it-works",
    image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=400&h=225&fit=crop&auto=format",
  },
  {
    title: "📈 TRACK MILESTONES",
    subtitle: "AR verification shows real-time progress updates",
    type: CHANNEL_TYPES.WEBSITE,
    link: "https://lumeebooth.com",
    category: "how-it-works",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=225&fit=crop&auto=format",
  },

  // ⚡️ RAPID SERVICES SECTION
  {
    title: "⚡️ Rapid RFP Question",
    subtitle: "Turn your RFP into a video challenge in 24hrs 🎥",
    type: CHANNEL_TYPES.STRIPE,
    link: "https://buy.stripe.com/",
    category: "rapid-services",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=225&fit=crop&auto=format",
  },
  {
    title: "⚡️ Rapid RFP Response", 
    subtitle: "Script + edit your 60-second pitch video 🎬",
    type: CHANNEL_TYPES.STRIPE,
    link: "https://buy.stripe.com/",
    category: "rapid-services",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=225&fit=crop&auto=format",
  },
  {
    title: "🎤 AR Mic Effect",
    subtitle: "Custom TikTok filter for your challenge (2-3 days)",
    type: CHANNEL_TYPES.STRIPE,
    link: "https://buy.stripe.com/",
    category: "rapid-services",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=225&fit=crop&auto=format",
  },

  // 🎬 UGC PARTICIPATION SECTION
  {
    title: "💬 UGC (Question)",
    subtitle: "Submit your RFP as a 1-min video challenge 🧠",
    type: CHANNEL_TYPES.YOUTUBE,
    link: "https://youtube.com/@rfpit",
    category: "ugc-participation",
    image: "https://images.unsplash.com/photo-1520333789090-1afc82db536a?w=400&h=225&fit=crop&auto=format",
  },
  {
    title: "🎥 UGC (Response)",
    subtitle: "Pitch your solution in 60 seconds & earn votes 🚀",
    type: CHANNEL_TYPES.YOUTUBE,
    link: "https://youtube.com/@rfpit",
    category: "ugc-participation",
    image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400&h=225&fit=crop&auto=format",
  },

  // 🌐 SOCIAL & NETWORK SECTION
  {
    title: "🎯 @RFPTOK",
    subtitle: "Follow for daily RFP drops + live challenges",
    type: CHANNEL_TYPES.TIKTOK,
    link: "https://www.tiktok.com/@rfptok",
    category: "social-network",
    image: "https://images.unsplash.com/photo-1611605698335-8b1569810432?w=400&h=225&fit=crop&auto=format",
  },
  {
    title: "💼 LinkedIn",
    subtitle: "City collabs, partners, & RFP case studies",
    type: CHANNEL_TYPES.LINKEDIN,
    link: "https://www.linkedin.com/company/rfp-auction/",
    category: "social-network",
    image: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?w=400&h=225&fit=crop&auto=format",
  },
  {
    title: "📸 LUMEE BOOTH",
    subtitle: "Powering every RFP milestone w/ AR proof",
    type: CHANNEL_TYPES.WEBSITE,
    link: "https://lumeebooth.com",
    category: "social-network",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=225&fit=crop&auto=format",
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
          width: 80px;
          height: 80px;
          border-radius: 50%;
          border: 3px solid #e50914;
        }

        .header-name {
          font-size: 2rem;
          font-weight: bold;
          margin: 0;
          background: linear-gradient(45deg, #e50914, #ff6b6b);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .header-bio {
          font-size: 1.1rem;
          opacity: 0.8;
          margin: 0.5rem 0 0 0;
          max-width: 600px;
          line-height: 1.5;
        }

        .category-section {
          margin-bottom: 3rem;
        }

        .category-title {
          font-size: 1.5rem;
          font-weight: bold;
          margin-bottom: 1rem;
          padding-left: 0.5rem;
          border-left: 4px solid #e50914;
          color: white;
        }

        .cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 1.5rem;
        }

        .netflix-card {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 0.75rem;
          transition: all 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.1);
          overflow: hidden;
          position: relative;
        }

        .netflix-card:hover {
          transform: scale(1.05);
          border-color: #e50914;
          box-shadow: 0 10px 30px rgba(229, 9, 20, 0.4);
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
        }

        .card-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
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
          padding: 1rem;
        }

        .card-icon {
          font-size: 1.5rem;
          background: rgba(0, 0, 0, 0.7);
          border-radius: 50%;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Card Content */
        .card-content {
          padding: 1.5rem;
          position: relative;
          background: rgba(0, 0, 0, 0.3);
        }

        .card-title {
          font-size: 1.1rem;
          font-weight: 600;
          margin: 0 0 0.5rem 0;
          line-height: 1.3;
          color: white;
        }

        .card-subtitle {
          font-size: 0.9rem;
          opacity: 0.7;
          margin: 0;
          line-height: 1.4;
          color: rgba(255, 255, 255, 0.8);
        }

        .card-arrow {
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
          opacity: 0;
          transform: translateX(-10px);
          transition: all 0.3s ease;
          font-weight: bold;
          color: #e50914;
          font-size: 1.2rem;
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
          
          .cards-grid {
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            gap: 1rem;
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

// Helper function remains the same
function getIconByType(type) {
  const icons = {
    [CHANNEL_TYPES.TIKTOK]: "🎵",
    [CHANNEL_TYPES.YOUTUBE]: "📺", 
    [CHANNEL_TYPES.WEBSITE]: "🌐",
    [CHANNEL_TYPES.STRIPE]: "💳",
    [CHANNEL_TYPES.LINKEDIN]: "💼"
  };
  return icons[type] || "🔗";
}

export default App;
