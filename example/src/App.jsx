import React from "react";

/**
 * Mobile-optimized, Netflix-style landing
 * - Uses Imgur thumbnail variants (…l.jpg/png) + srcSet/sizes
 * - Strict max-width:100% images, aspect-ratio wrappers
 * - No horizontal overflow on iOS Safari
 */

const avatar = "https://i.imgur.com/sg3RinS.jpeg";

// NOTE: use Imgur's 'l' thumbnail suffix for mobile (large thumbnail, ~640px wide).
// Example: https://i.imgur.com/tn5rCdw.jpeg  -> https://i.imgur.com/tn5rCdwl.jpeg
const tiktokVideos = [
  {
    id: "7427399000000000000",
    link: "https://www.tiktok.com/@rfptok/photo/7565124876340694302",
    thumb: "https://i.imgur.com/tn5rCdwl.jpeg",
    full:  "https://i.imgur.com/tn5rCdw.jpeg",
    title: "🤖 City of San José AI Challenge",
  },
  {
    id: "7427399111111111111",
    link: "https://www.tiktok.com/@rfptok/photo/7564936375531769119",
    thumb: "https://i.imgur.com/zYaZdWdl.jpeg",
    full:  "https://i.imgur.com/zYaZdWd.jpeg",
    title: "⚡ $20M Oakland",
  },
  {
    id: "7427399222222222222",
    link: "https://www.tiktok.com/@rfptok/video/7519064742170758430",
    thumb: "https://i.imgur.com/AkDEoSYl.jpeg",
    full:  "https://i.imgur.com/AkDEoSY.jpeg",
    title: "🏗️ Wyoming Stablecoin RFP",
  },
  {
    id: "7427399333333333333",
    link: "https://www.tiktok.com/@rfptok/video/7552154021411294494",
    thumb: "https://i.imgur.com/S8KQgCol.jpeg",
    full:  "https://i.imgur.com/S8KQgCo.jpeg",
    title: "💼 NYC Casino RFP",
  },
];

// Card art: also switch to 'l' thumbnails; fall back to original if missing.
const cardItems = [
  {
    title: "🤔 How RFP.AUCTION Works",
    subtitle: "1️⃣ Pitch ▶ 2️⃣ Win ▶ 3️⃣ Deliver",
    imageSmall: "https://i.imgur.com/usyzFi1l.png",
    imageFull:  "https://i.imgur.com/usyzFi1.png",
  },
  {
    title: "🎦 Short RFP Reels (60 SECS)",
    subtitle: "Brands submit challenges as 60-second reels that are simple to understand.",
    imageSmall: "https://i.imgur.com/JOBqLYxl.png",
    imageFull:  "https://i.imgur.com/JOBqLYx.png",
  },
  {
    title: "🗣️ Short RFP Responses (60 SECS)",
    subtitle: "Creators pitch solutions using branded UGC RFP mics.",
    imageSmall: "https://i.imgur.com/t4KQBSkl.png",
    imageFull:  "https://i.imgur.com/t4KQBSk.png",
  },
  {
    title: "🏆 Winner Announced",
    subtitle: "90% data-driven UGC analytics + 10% creative impact = modern RFP scoring.",
    imageSmall: "https://i.imgur.com/juu9uzGl.png",
    imageFull:  "https://i.imgur.com/juu9uzG.png",
  },
  {
    title: "📈 Social Milestones",
    subtitle: "LUMEE BOOTH tracks RFP winners & KPIs in AR-verified dashboards.",
    imageSmall: "https://i.imgur.com/hbQCLHtl.png",
    imageFull:  "https://i.imgur.com/hbQCLHt.png",
  },
];

const rapidServices = [
  {
    title: "🎥 RFP Challenge",
    subtitle: "🎥 Turn your long RFP into a social video challenge in one day. 💰 $7,500",
    link: "https://buy.stripe.com/aFafZh8OR8GW0Gj36V5wI16",
    imageSmall: "https://i.imgur.com/R7C5ozcl.png",
    imageFull:  "https://i.imgur.com/R7C5ozc.png",
  },
  {
    title: "⚡ Rapid RFP Response",
    subtitle: "⚡ Receive a Pitch.com expert response in 1 business day. 💰 $3,500",
    link: "https://buy.stripe.com/8x24gz4yBcXc4Wz5f35wI13",
    imageSmall: "https://i.imgur.com/O5DJhbXl.png",
    imageFull:  "https://i.imgur.com/O5DJhbX.png",
  },
  {
    title: "🎙️ TikTok RFP UGC Mic",
    subtitle: "Order a branded TikTok RFP UGC mic for 60-sec replies. 💰 $1,500",
    link: "https://buy.stripe.com/4gMbJ1c136yOgFh6j75wI17",
    imageSmall: "https://i.imgur.com/xy0fn9zl.png",
    imageFull:  "https://i.imgur.com/xy0fn9z.png",
  },
  {
    title: "🧙🏽‍♂️ RFP Expert Consultation",
    subtitle: "Book a 60-min call with a RFP.AUCTION wizard. 💰 $1,200",
    link: "https://buy.stripe.com/aFa9AT4yB3mCcp1fTH5wI14",
    imageSmall: "https://i.imgur.com/CcZQ7v4l.png",
    imageFull:  "https://i.imgur.com/CcZQ7v4.png",
  },
];

function App() {
  return (
    <div className="netflix-container">
      {/* HEADER */}
      <header className="header">
        <div className="header-left">
          <img src={avatar} alt="RFP.AUCTION" className="avatar" loading="lazy" decoding="async" />
          <div className="header-text">
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
            <a key={v.id} href={v.link} target="_blank" rel="noopener noreferrer" className="video-preview">
              {/* 9:16 wrapper keeps thumbs perfectly inside on mobile */}
              <div className="video-wrapper">
                <img
                  src={v.thumb}
                  srcSet={`${v.thumb} 640w, ${v.full} 1200w`}
                  sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
                  alt={v.title}
                  className="video-thumb"
                  loading="lazy"
                  decoding="async"
                  onError={(e) => { e.currentTarget.src = v.full; }}
                />
              </div>
              <div className="video-overlay">
                <span className="video-title">{v.title}</span>
                <span className="watch-btn">▶ Watch on TikTok</span>
              </div>
            </a>
          ))}
        </div>
        <a href="https://tiktok.com/@RFPTOK" target="_blank" rel="noopener noreferrer" className="more-link">
          ▶ See More Active RFPs
        </a>
      </section>

      {/* HOW IT WORKS (informational only) */}
      <section className="section">
        <h2 className="section-title">🤔 How It Works</h2>
        <div className="cards">
          {cardItems.map((item, i) => (
            <div key={i} className="card">
              {/* 16:9 safe wrapper to prevent overflow */}
              <div className="ratio-16x9">
                <img
                  src={item.imageSmall}
                  srcSet={`${item.imageSmall} 640w, ${item.imageFull} 1200w`}
                  sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
                  alt={item.title}
                  className="card-img"
                  loading="lazy"
                  decoding="async"
                  onError={(e) => { e.currentTarget.src = item.imageFull; }}
                />
              </div>
              <div className="card-body">
                <h3 className="card-title">{item.title}</h3>
                <p className="card-subtitle">{item.subtitle}</p>
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
            <a key={i} href={item.link} target="_blank" rel="noopener noreferrer" className="card link-card">
              <div className="ratio-16x9">
                <img
                  src={item.imageSmall}
                  srcSet={`${item.imageSmall} 640w, ${item.imageFull} 1200w`}
                  sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
                  alt={item.title}
                  className="card-img"
                  loading="lazy"
                  decoding="async"
                  onError={(e) => { e.currentTarget.src = item.imageFull; }}
                />
              </div>
              <div className="card-body">
                <h3 className="card-title">{item.title}</h3>
                <p className="card-subtitle">{item.subtitle}</p>
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
        /* Global guards so nothing overflows on iOS Safari */
        :global(html), :global(body) { overflow-x: hidden; }
        :global(*) { box-sizing: border-box; }
        :global(img) { max-width: 100%; height: auto; display: block; }

        .netflix-container {
          background: linear-gradient(135deg, #e50914, #9b5de5, #00b4d8);
          background-size: 200% 200%;
          animation: gradientShift 10s ease infinite;
          min-height: 100vh;
          color: #fff;
          font-family: 'Inter', system-ui, -apple-system, Segoe UI, Roboto, Arial;
          padding: 1.25rem;
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
          background: rgba(0,0,0,0.4);
          border-radius: 1rem;
          padding: 1.25rem;
          backdrop-filter: blur(10px);
          margin-bottom: 2rem;
        }
        .header-left {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex: 1 1 100%;
          flex-wrap: wrap;
        }
        .header-text { flex: 1; min-width: 240px; }
        .avatar {
          width: 74px; height: 74px; border-radius: 50%; border: 3px solid #fff; flex-shrink: 0;
        }
        .brand { font-size: clamp(1.8rem, 6vw, 2.6rem); font-weight: 800; margin: .25rem 0; word-break: break-word; }
        .tagline { font-size: clamp(.95rem, 3.6vw, 1.15rem); opacity: .95; line-height: 1.6; }
        .chat-btn {
          background: linear-gradient(90deg, #ff6b6b, #9b5de5);
          color: #fff; padding: .9rem 1.5rem; border-radius: 999px; font-weight: 800;
          text-decoration: none; transition: transform .2s ease, box-shadow .2s ease; text-align: center;
          box-shadow: 0 6px 18px rgba(0,0,0,.25);
        }
        .chat-btn:hover { transform: translateY(-1px); }

        /* Sections */
        .section { margin: 2rem 0; }
        .section-title {
          font-size: clamp(1.4rem, 5.2vw, 2rem);
          font-weight: 800; margin-bottom: 1rem; border-left: 6px solid #fff; padding-left: .9rem;
        }

        /* Reels (9:16) */
        .video-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
          gap: 1rem;
        }
        .video-preview { position: relative; border-radius: 1rem; overflow: hidden; background: rgba(255,255,255,.08); }
        .video-wrapper { position: relative; width: 100%; aspect-ratio: 9 / 16; }
        .video-thumb {
          position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover;
        }
        .video-overlay {
          position: absolute; inset: auto 0 0 0; padding: .9rem;
          background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,.85) 100%);
        }
        .video-title { font-weight: 700; font-size: clamp(.95rem, 3vw, 1.05rem); text-shadow: 0 2px 6px rgba(0,0,0,.6); }
        .watch-btn {
          margin-top: .45rem; display: inline-block; padding: .45rem .9rem; border-radius: 999px;
          font-weight: 800; font-size: .9rem; background: linear-gradient(90deg, #e50914, #9b5de5, #00b4d8);
        }
        .more-link {
          display: block; text-align: center; margin-top: 1.2rem; font-weight: 800;
          background: linear-gradient(90deg, #e50914, #9b5de5, #00b4d8);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
        }

        /* Cards (16:9) */
        .cards { display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 1rem; }
        .card { background: rgba(255,255,255,.08); border-radius: 1rem; overflow: hidden; border: 1px solid rgba(255,255,255,.12); }
        .ratio-16x9 { position: relative; width: 100%; aspect-ratio: 16 / 9; }
        .card-img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: contain; background: rgba(0,0,0,.15); }
        .card-body { padding: 1rem; }
        .card-title { margin: 0 0 .35rem; font-size: 1.08rem; font-weight: 800; }
        .card-subtitle { margin: 0; opacity: .88; font-size: .98rem; line-height: 1.45; }
        .link-card { color: inherit; text-decoration: none; }

        /* Footer */
        .footer { margin-top: 2.25rem; padding: 1.25rem; text-align: center; background: rgba(0,0,0,.35); border-radius: 1rem; backdrop-filter: blur(8px); }
        .footer-links { display: flex; flex-wrap: wrap; justify-content: center; gap: .9rem 1.25rem; margin-bottom: .6rem; }
        .footer-links a { color: #fff; text-decoration: none; font-weight: 700; }
        .footer-links a:hover { text-decoration: underline; }
        .footer-copy { font-size: .92rem; opacity: .85; }

        /* Mobile stacking */
        @media (max-width: 768px) {
          .header { flex-direction: column; align-items: center; text-align: center; gap: 1.1rem; }
          .header-left { flex-direction: column; align-items: center; text-align: center; }
          .header-text { max-width: 96%; }
          .chat-btn { width: 100%; max-width: 320px; }
        }
        @media (max-width: 480px) {
          .avatar { width: 64px; height: 64px; }
        }
      `}</style>
    </div>
  );
}

export default App;
