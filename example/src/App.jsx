import React from "react";

const avatar = "https://i.imgur.com/sg3RinS.jpeg";

const tiktokVideos = [
  {
    id: "7427399000000000000",
    link: "https://www.tiktok.com/@rfptok/video/7427399000000000000",
    thumb: "https://i.imgur.com/qS7xV8A.png",
    title: "🎥 City of San José AI Challenge",
  },
  {
    id: "7427399111111111111",
    link: "https://www.tiktok.com/@rfptok/video/7427399111111111111",
    thumb: "https://i.imgur.com/PPN4HgZ.png",
    title: "⚡ Rapid RFP Challenge",
  },
  {
    id: "7427399222222222222",
    link: "https://www.tiktok.com/@rfptok/video/7427399222222222222",
    thumb: "https://i.imgur.com/s2i2NGT.png",
    title: "🏗️ Infrastructure Innovation Bid",
  },
  {
    id: "7427399333333333333",
    link: "https://www.tiktok.com/@rfptok/video/7427399333333333333",
    thumb: "https://i.imgur.com/FHEG8Uv.png",
    title: "💼 City Tech RFP Showcase",
  },
  {
    id: "7427399444444444444",
    link: "https://www.tiktok.com/@rfptok/video/7427399444444444444",
    thumb: "https://i.imgur.com/CEQlmEq.png",
    title: "🏆 RFP Winner Announced",
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
          padding: 2rem;
        }
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          background: rgba(0,0,0,0.4);
          border-radius: 1rem;
          padding: 2rem;
          backdrop-filter: blur(10px);
          margin-bottom: 3rem;
        }
        .header-left {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          max-width: 70%;
        }
        .avatar {
          width: 90px;
          height: 90px;
          border-radius: 50%;
          border: 3px solid #fff;
        }
        .brand {
          font-size: 2.5rem;
          font-weight: 800;
          margin: 0;
        }
        .tagline {
          opacity: 0.9;
          font-size: 1.1rem;
          line-height: 1.5;
          margin-top: 0.5rem;
        }
        .chat-btn {
          background: linear-gradient(90deg, #ff6b6b, #9b5de5);
          color: #fff;
          padding: 1rem 1.8rem;
          border-radius: 50px;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        .chat-btn:hover {
          transform: scale(1.05);
          box-shadow: 0 0 20px rgba(255,255,255,0.4);
        }
        .section {
          margin-bottom: 4rem;
        }
        .section-title {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          border-left: 6px solid #fff;
          padding-left: 1rem;
        }
        .video-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 2rem;
        }
        .video-preview {
          position: relative;
          border-radius: 1rem;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .video-thumb {
          width: 100%;
          height: 500px;
          object-fit: cover;
          border-radius: 1rem;
        }
        .video-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 1.5rem;
          background: linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.8) 100%);
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          color: #fff;
        }
        .watch-btn {
          background: linear-gradient(90deg, #e50914, #9b5de5, #00b4d8);
          padding: 0.5rem 1rem;
          border-radius: 30px;
          font-weight: 700;
          margin-top: 0.5rem;
          width: fit-content;
        }
        .video-preview:hover {
          transform: scale(1.03);
          box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        }
        .more-link {
          display: block;
          text-align: center;
          margin-top: 2rem;
          font-weight: 700;
          text-decoration: none;
          background: linear-gradient(90deg, #e50914, #9b5de5, #00b4d8);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .cards {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 2rem;
        }
        .card {
          background: rgba(255,255,255,0.1);
          border-radius: 1rem;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        }
        .card-img {
          width: 100%;
          height: 180px;
          object-fit: contain;
          background: rgba(0,0,0,0.2);
        }
        .card-body {
          padding: 1.5rem;
        }
        .card-body h3 {
          margin: 0 0 0.5rem 0;
          font-size: 1.3rem;
        }
        .card-body p {
          opacity: 0.85;
          font-size: 1rem;
        }
        .footer {
          margin-top: 4rem;
          padding: 2rem;
          text-align: center;
          background: rgba(0,0,0,0.4);
          border-radius: 1rem;
          backdrop-filter: blur(8px);
        }
        .footer-links {
          display: flex;
          justify-content: center;
          gap: 2rem;
          flex-wrap: wrap;
          margin-bottom: 1rem;
        }
        .footer-links a {
          color: #fff;
          text-decoration: none;
          font-weight: 600;
        }
        .footer-links a:hover {
          text-decoration: underline;
        }
        .footer-copy {
          font-size: 0.9rem;
          opacity: 0.8;
        }
      `}</style>
    </div>
  );
}

export default App;
