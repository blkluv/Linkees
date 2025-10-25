import React from "react";

const avatar = "https://i.imgur.com/sg3RinS.jpeg";

const tiktokVideos = [
  {
    id: "7427399000000000000",
    link: "https://www.tiktok.com/@rfptok/photo/7565124876340694302",
    thumb: "https://i.imgur.com/tn5rCdw.jpeg",
    title: "🤖 City of San José AI Challenge",
  },
  {
    id: "7427399111111111111",
    link: "https://www.tiktok.com/@rfptok/photo/7564936375531769119",
    thumb: "https://i.imgur.com/zYaZdWd.jpeg",
    title: "⚡ $20M Oakland",
  },
  {
    id: "7427399222222222222",
    link: "https://www.tiktok.com/@rfptok/video/7519064742170758430",
    thumb: "https://i.imgur.com/AkDEoSY.jpeg",
    title: "🏗️ Wyoming Stablecoin RFP",
  },
  {
    id: "7427399333333333333",
    link: "https://www.tiktok.com/@rfptok/video/7552154021411294494",
    thumb: "https://i.imgur.com/S8KQgCo.jpeg",
    title: "💼 NYC Casino RFP",
  },
];

const cardItems = [
  {
    title: "🤔 How RFP.AUCTION Works",
    subtitle: "1️⃣ Pitch ▶ 2️⃣ Win ▶ 3️⃣ Deliver",
    category: "how-it-works",
    image: "https://i.imgur.com/usyzFi1.png",
  },
  {
    title: "🎦 Short RFP Reels (60 SECS)",
    subtitle:
      "Brands submit challenges as 60-second reels that are simple to understand.",
    category: "how-it-works",
    image: "https://i.imgur.com/JOBqLYx.png",
  },
  {
    title: "🗣️ Short RFP Responses (60 SECS)",
    subtitle:
      "Creators pitch solutions using branded UGC RFP mics.",
    category: "how-it-works",
    image: "https://i.imgur.com/t4KQBSk.png",
  },
  {
    title: "🏆 Winner Announced",
    subtitle:
      "90% data-driven UGC analytics + 10% creative impact = modern RFP scoring.",
    category: "how-it-works",
    image: "https://i.imgur.com/juu9uzG.png",
  },
  {
    title: "📈 Social Milestones",
    subtitle:
      "LUMEE BOOTH tracks RFP winners & KPIs in AR-verified dashboards.",
    category: "how-it-works",
    image: "https://i.imgur.com/hbQCLHt.png",
  },
];

const rapidServices = [
  {
    title: "🎥 RFP Challenge",
    subtitle:
      "🎥 Turn your long RFP into a social video challenge in one day. 💰 $7,500",
    link: "https://buy.stripe.com/aFafZh8OR8GW0Gj36V5wI16",
    image: "https://i.imgur.com/R7C5ozc.png",
  },
  {
    title: "⚡ Rapid RFP Response",
    subtitle:
      "⚡ Receive a Pitch.com expert response in 1 business day. 💰 $3,500",
    link: "https://buy.stripe.com/8x24gz4yBcXc4Wz5f35wI13",
    image: "https://i.imgur.com/O5DJhbX.png",
  },
  {
    title: "🎙️ TikTok RFP UGC Mic",
    subtitle:
      "Order a branded TikTok RFP UGC mic for 60-sec replies. 💰 $1,500",
    link: "https://buy.stripe.com/4gMbJ1c136yOgFh6j75wI17",
    image: "https://i.imgur.com/xy0fn9z.png",
  },
  {
    title: "🧙🏽‍♂️ RFP Expert Consultation",
    subtitle:
      "Book a 60-min call with a RFP.AUCTION wizard. 💰 $1,200",
    link: "https://buy.stripe.com/aFa9AT4yB3mCcp1fTH5wI14",
    image: "https://i.imgur.com/CcZQ7v4.png",
  },
];

function App() {
  return (
    <div className="netflix-container">
      {/* HEADER */}
      <header className="header">
        <div className="header-left">
          <img src={avatar} alt="RFP.AUCTION" className="avatar" />
          <div>
            <h1 className="brand">RFP.AUCTION</h1>
            <p className="tagline">
              ⚡ We reduced the 90-day RFP cycle to 1 day with 1-minute social
              video challenges and analytics-scored responses. Verified on-chain
              for accountability. ▶ Pitch ▶ Win ▶ Deliver 🏆
            </p>
          </div>
        </div>
        <a
          href="https://t.me/hahznft"
          target="_blank"
          rel="noopener noreferrer"
          className="chat-btn"
        >
          💬 Chat with Wizard of Hahz
        </a>
      </header>

      {/* 🎥 ACTIVE RFP REELS */}
      <section className="section">
        <h2 className="section-title">🎥 Active RFP Reels</h2>
        <div className="video-grid">
          {tiktokVideos.map((v) => (
            <a
              key={v.id}
              href={v.link}
              target="_blank"
              rel="noopener noreferrer"
              className="video-preview"
            >
              <img src={v.thumb} alt={v.title} className="video-thumb" />
              <div className="video-overlay">
                <span className="video-title">{v.title}</span>
                <span className="watch-btn">▶ Watch on TikTok</span>
              </div>
            </a>
          ))}
        </div>
        <a
          href="https://tiktok.com/@RFPTOK"
          target="_blank"
          rel="noopener noreferrer"
          className="more-link"
        >
          ▶ See More Active RFPs
        </a>
      </section>

      {/* HOW IT WORKS */}
      <section className="section">
        <h2 className="section-title">🤔 How It Works</h2>
        <div className="cards">
          {cardItems.map((item, i) => (
            <div key={i} className="card">
              <img src={item.image} alt={item.title} className="card-img" />
              <div className="card-body">
                <h3>{item.title}</h3>
                <p>{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* RAPID SERVICES */}
      <section className="section">
        <h2 className="section-title">⚡ Rapid Services</h2>
        <div className="cards">
          {rapidServices.map((item, i) => (
            <a
              key={i}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="card"
            >
              <img src={item.image} alt={item.title} className="card-img" />
              <div className="card-body">
                <h3>{item.title}</h3>
                <p>{item.subtitle}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-links">
          <a href="https://www.tiktok.com/@rfptok" target="_blank">🎵 TikTok</a>
          <a href="https://www.linkedin.com/groups/13062182" target="_blank">💼 LinkedIn</a>
          <a href="https://app.lumeebooth.com" target="_blank">📸 LUMEE BOOTH</a>
          <a href="https://t.me/hahznft" target="_blank">🧙🏽‍♂️ Telegram</a>
        </div>
        <p className="footer-copy">© 2025 RFP.AUCTION · All Rights Reserved</p>
      </footer>

      {/* STYLES */}
    <style jsx>{`
  .netflix-container {
    background: linear-gradient(135deg, #e50914, #9b5de5, #00b4d8);
    background-size: 200% 200%;
    animation: gradientShift 10s ease infinite;
    min-height: 100vh;
    color: #fff;
    font-family: 'Inter', sans-serif;
    padding: 1.5rem;
  }
  @keyframes gradientShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  /* HEADER */
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    background: rgba(0, 0, 0, 0.4);
    border-radius: 1rem;
    padding: 1.5rem;
    backdrop-filter: blur(10px);
    margin-bottom: 2rem;
    text-align: left;
  }
  .header-left {
    display: flex;
    align-items: center;
    gap: 1.2rem;
    flex: 1 1 100%;
    flex-wrap: wrap;
  }
  .avatar {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 3px solid #fff;
  }
  .brand {
    font-size: clamp(1.8rem, 5vw, 2.6rem);
    font-weight: 800;
    margin: 0.5rem 0;
  }
  .tagline {
    font-size: clamp(1rem, 3.6vw, 1.2rem);
    opacity: 0.9;
    line-height: 1.5;
    max-width: 90%;
  }
  .chat-btn {
    background: linear-gradient(90deg, #ff6b6b, #9b5de5);
    color: #fff;
    padding: 0.9rem 1.5rem;
    border-radius: 40px;
    font-weight: 700;
    text-decoration: none;
    transition: all 0.3s ease;
    display: inline-block;
    box-shadow: 0 0 12px rgba(0, 0, 0, 0.2);
  }
  .chat-btn:hover {
    transform: scale(1.05);
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.4);
  }

  /* --- Responsive Fixes --- */
  @media (max-width: 768px) {
    .header {
      flex-direction: column;
      text-align: center;
      padding: 1.5rem 1rem;
    }
    .header-left {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
    .brand {
      font-size: 2rem;
    }
    .tagline {
      font-size: 1rem;
      max-width: 95%;
    }
    .chat-btn {
      margin-top: 1rem;
      width: 100%;
      max-width: 320px;
    }
  }

  /* Small mobile tweaks */
  @media (max-width: 480px) {
    .avatar {
      width: 65px;
      height: 65px;
    }
    .brand {
      font-size: 1.6rem;
    }
    .chat-btn {
      font-size: 0.95rem;
      padding: 0.85rem 1.2rem;
    }
  }
`}</style>
    </div>
  );
}

export default App;
