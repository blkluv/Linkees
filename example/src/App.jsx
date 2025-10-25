import React from "react";

/**
 * RFP.AUCTION — Apple Vision–style UX (mobile-first)
 * - Pastel red→purple→blue gradient, soft glass, large tap targets
 * - Header wraps perfectly; button spans width on mobile
 * - Reels: 9:16 thumbnails, horizontal snap carousel on mobile, grid on desktop
 * - How It Works: info only (no outbound links)
 * - Rapid Services: Stripe links
 * - Imgur thumbnails (…l) + srcSet/sizes, strict overflow guards
 * - Respects prefers-reduced-motion
 */

const avatar = "https://i.imgur.com/sg3RinS.jpeg";

/** Imgur mobile thumbnails (…l) with full fallback */
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

const howItems = [
  {
    title: "🤔 How RFP.AUCTION Works",
    subtitle: "1️⃣ Pitch ▶ 2️⃣ Win ▶ 3️⃣ Deliver",
    small: "https://i.imgur.com/usyzFi1l.png",
    full:  "https://i.imgur.com/usyzFi1.png",
  },
  {
    title: "🎦 Short RFP Reels (60 SECS)",
    subtitle: "Brands submit challenges as simple 60-second reels.",
    small: "https://i.imgur.com/JOBqLYxl.png",
    full:  "https://i.imgur.com/JOBqLYx.png",
  },
  {
    title: "🗣️ Short RFP Responses (60 SECS)",
    subtitle: "Creators pitch solutions using branded UGC RFP mics.",
    small: "https://i.imgur.com/t4KQBSkl.png",
    full:  "https://i.imgur.com/t4KQBSk.png",
  },
  {
    title: "🏆 Winner Announced",
    subtitle: "90% analytics + 10% creative impact = modern scoring.",
    small: "https://i.imgur.com/juu9uzGl.png",
    full:  "https://i.imgur.com/juu9uzG.png",
  },
  {
    title: "📈 Social Milestones",
    subtitle: "LUMEE BOOTH tracks winners & KPIs with AR verification.",
    small: "https://i.imgur.com/hbQCLHtl.png",
    full:  "https://i.imgur.com/hbQCLHt.png",
  },
];

const rapidServices = [
  {
    title: "🎥 RFP Challenge",
    subtitle: "Turn a long RFP into a social video challenge in 1 day. 💰 $7,500",
    link: "https://buy.stripe.com/aFafZh8OR8GW0Gj36V5wI16",
    small: "https://i.imgur.com/R7C5ozcl.png",
    full:  "https://i.imgur.com/R7C5ozc.png",
  },
  {
    title: "⚡ Rapid RFP Response",
    subtitle: "Receive a Pitch.com expert response in 1 business day. 💰 $3,500",
    link: "https://buy.stripe.com/8x24gz4yBcXc4Wz5f35wI13",
    small: "https://i.imgur.com/O5DJhbXl.png",
    full:  "https://i.imgur.com/O5DJhbX.png",
  },
  {
    title: "🎙️ TikTok RFP UGC Mic",
    subtitle: "Order a branded UGC mic for 60-sec replies. 💰 $1,500",
    link: "https://buy.stripe.com/4gMbJ1c136yOgFh6j75wI17",
    small: "https://i.imgur.com/xy0fn9zl.png",
    full:  "https://i.imgur.com/xy0fn9z.png",
  },
  {
    title: "🧙🏽‍♂️ RFP Expert Consultation",
    subtitle: "Book a 60-min call with a RFP.AUCTION wizard. 💰 $1,200",
    link: "https://buy.stripe.com/aFa9AT4yB3mCcp1fTH5wI14",
    small: "https://i.imgur.com/CcZQ7v4l.png",
    full:  "https://i.imgur.com/CcZQ7v4.png",
  },
];

function App() {
  return (
    <div className="page">
      {/* HEADER */}
      <header className="hero" role="banner">
        <div className="hero-left">
          <img src={avatar} alt="RFP.AUCTION logo" className="avatar" loading="lazy" decoding="async" />
          <div className="copy">
            <h1 className="brand">RFP.AUCTION</h1>
            <p className="tagline">
              ⚡ We reduced the 90-day RFP cycle to 1 day with 1-minute social video challenges and
              analytics-scored responses. Verified on-chain for accountability. ▶ Pitch ▶ Win ▶ Deliver 🏆
            </p>
          </div>
        </div>

        <a
          href="https://t.me/hahznft"
          target="_blank"
          rel="noopener noreferrer"
          className="cta"
          aria-label="Chat with Wizard of Hahz on Telegram"
        >
          💬 Chat with Wizard of Hahz
        </a>
      </header>

      {/* 🎥 ACTIVE RFP REELS */}
      <section className="section" aria-labelledby="reels">
        <h2 id="reels" className="title">🎥 Active RFP Reels</h2>

        {/* Mobile: horizontal snap carousel; Desktop: grid */}
        <div className="reels">
          {tiktokVideos.map((v) => (
            <a key={v.id} href={v.link} target="_blank" rel="noopener noreferrer" className="reel" aria-label={`${v.title} — watch on TikTok`}>
              <div className="reel-media">
                <img
                  src={v.thumb}
                  srcSet={`${v.thumb} 640w, ${v.full} 1200w`}
                  sizes="(max-width: 600px) 80vw, (max-width: 1024px) 33vw, 320px"
                  alt={v.title}
                  className="reel-img"
                  loading="lazy"
                  decoding="async"
                  onError={(e) => { e.currentTarget.src = v.full; }}
                />
              </div>
              <div className="reel-overlay">
                <span className="reel-title">{v.title}</span>
                <span className="reel-btn">▶ Watch on TikTok</span>
              </div>
            </a>
          ))}
        </div>

        <a href="https://tiktok.com/@RFPTOK" target="_blank" rel="noopener noreferrer" className="more">
          ▶ See More Active RFPs
        </a>
      </section>

      {/* 🤔 HOW IT WORKS (no links) */}
      <section className="section" aria-labelledby="how">
        <h2 id="how" className="title">🤔 How It Works</h2>
        <div className="grid">
          {howItems.map((item, i) => (
            <article key={i} className="card" role="article">
              <div className="ratio-16x9">
                <img
                  src={item.small}
                  srcSet={`${item.small} 640w, ${item.full} 1200w`}
                  sizes="(max-width: 600px) 90vw, (max-width: 1024px) 45vw, 380px"
                  alt={item.title}
                  className="card-img"
                  loading="lazy"
                  decoding="async"
                  onError={(e) => { e.currentTarget.src = item.full; }}
                />
              </div>
              <div className="card-body">
                <h3 className="card-title">{item.title}</h3>
                <p className="card-sub">{item.subtitle}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ⚡ RAPID SERVICES */}
      <section className="section" aria-labelledby="services">
        <h2 id="services" className="title">⚡ Rapid Services</h2>
        <div className="grid">
          {rapidServices.map((item, i) => (
            <a key={i} href={item.link} target="_blank" rel="noopener noreferrer" className="card link" aria-label={`${item.title} — open product`}>
              <div className="ratio-16x9">
                <img
                  src={item.small}
                  srcSet={`${item.small} 640w, ${item.full} 1200w`}
                  sizes="(max-width: 600px) 90vw, (max-width: 1024px) 45vw, 380px"
                  alt={item.title}
                  className="card-img"
                  loading="lazy"
                  decoding="async"
                  onError={(e) => { e.currentTarget.src = item.full; }}
                />
              </div>
              <div className="card-body">
                <h3 className="card-title">{item.title}</h3>
                <p className="card-sub">{item.subtitle}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer" role="contentinfo">
        <nav className="links" aria-label="Social links">
          <a href="https://www.tiktok.com/@rfptok" target="_blank" rel="noopener noreferrer">🎵 TikTok</a>
          <a href="https://www.linkedin.com/groups/13062182" target="_blank" rel="noopener noreferrer">💼 LinkedIn</a>
          <a href="https://app.lumeebooth.com" target="_blank" rel="noopener noreferrer">📸 LUMEE BOOTH</a>
          <a href="https://t.me/hahznft" target="_blank" rel="noopener noreferrer">🧙🏽‍♂️ Telegram</a>
        </nav>
        <p className="copy">© 2025 RFP.AUCTION · All Rights Reserved</p>
      </footer>

      {/* STYLES */}
      <style jsx>{`
        /* ---------- Design Tokens (Apple Vision–style pastel) ---------- */
        :root {
          --bg-grad: linear-gradient(160deg, #f05a7e 0%, #b07cf6 55%, #77d0f5 100%);
          --glass: rgba(255,255,255,0.22);
          --glass-deep: rgba(0,0,0,0.08);
          --text-strong: rgba(255,255,255,0.98);
          --text-soft: rgba(255,255,255,0.86);
          --shadow-1: 0 8px 30px rgba(0,0,0,0.18);
          --shadow-2: 0 12px 50px rgba(0,0,0,0.24);
          --ring: rgba(255,255,255,0.6);
        }

        /* Global guards */
        :global(html), :global(body) { overflow-x: hidden; background: #000; }
        :global(*) { box-sizing: border-box; }
        :global(img) { max-width: 100%; height: auto; display: block; }

        .page {
          min-height: 100vh;
          color: var(--text-strong);
          font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, "SF Pro Text", Inter, Segoe UI, Roboto, Arial;
          padding: calc(16px + env(safe-area-inset-top)) calc(16px + env(safe-area-inset-left)) calc(24px + env(safe-area-inset-bottom)) calc(16px + env(safe-area-inset-right));
          background: var(--bg-grad);
          background-size: 180% 180%;
          animation: bgShift 14s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .page { animation: none; }
        }
        @keyframes bgShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        /* ---------- HERO ---------- */
        .hero {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          flex-wrap: wrap;
          background: linear-gradient(180deg, rgba(255,255,255,0.18), rgba(255,255,255,0.06));
          border: 1px solid rgba(255,255,255,0.35);
          border-radius: 24px;
          padding: 18px 16px;
          box-shadow: var(--shadow-1);
          backdrop-filter: saturate(180%) blur(18px);
          -webkit-backdrop-filter: saturate(180%) blur(18px);
          margin-bottom: 20px;
        }
        .hero-left {
          display: flex;
          align-items: center;
          gap: 12px;
          flex: 1 1 560px;
          min-width: 260px;
          flex-wrap: wrap;
        }
        .avatar {
          width: 66px;
          height: 66px;
          border-radius: 50%;
          border: 3px solid white;
          box-shadow: 0 4px 14px rgba(0,0,0,0.25);
          flex-shrink: 0;
        }
        .copy { flex: 1; min-width: 220px; }
        .brand {
          margin: 2px 0 6px;
          font-weight: 800;
          letter-spacing: .2px;
          line-height: 1.12;
          font-size: clamp(24px, 7vw, 36px);
          text-shadow: 0 2px 14px rgba(0,0,0,0.25);
        }
        .tagline {
          color: var(--text-soft);
          font-size: clamp(14px, 3.8vw, 17px);
          line-height: 1.6;
          max-width: 780px;
        }
        .cta {
          appearance: none;
          border: 0;
          text-decoration: none;
          color: #fff;
          font-weight: 800;
          padding: 14px 18px;
          border-radius: 999px;
          background: linear-gradient(90deg, #ff93a8, #c29bff, #8de3ff);
          box-shadow: 0 10px 28px rgba(0,0,0,0.22), inset 0 0 0 1px var(--ring);
          transition: transform .2s ease, box-shadow .2s ease, background-position .3s ease;
          background-size: 160% 100%;
          text-align: center;
        }
        .cta:hover { transform: translateY(-1px); background-position: right center; box-shadow: var(--shadow-2); }
        .cta:active { transform: translateY(0); }

        @media (max-width: 768px) {
          .hero { flex-direction: column; align-items: center; text-align: center; }
          .hero-left { justify-content: center; }
          .cta { width: 100%; max-width: 360px; }
        }
        @media (max-width: 420px) {
          .avatar { width: 58px; height: 58px; }
        }

        /* ---------- SECTIONS ---------- */
        .section { margin: 22px 0; }
        .title {
          font-size: clamp(18px, 5.6vw, 24px);
          font-weight: 800;
          margin: 0 0 12px;
          padding-left: 10px;
          border-left: 6px solid rgba(255,255,255,0.9);
          text-shadow: 0 1px 10px rgba(0,0,0,0.2);
        }

        /* ---------- REELS: mobile carousel + desktop grid ---------- */
        .reels {
          display: grid;
          grid-auto-flow: column;
          grid-auto-columns: 80%;
          gap: 12px;
          overflow-x: auto;
          padding: 2px 2px 10px;
          scroll-snap-type: x mandatory;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
        }
        .reels::-webkit-scrollbar { display: none; }

        .reel {
          position: relative;
          display: block;
          border-radius: 18px;
          overflow: hidden;
          scroll-snap-align: start;
          background: var(--glass-deep);
          border: 1px solid rgba(255,255,255,0.28);
          box-shadow: var(--shadow-1);
        }
        .reel-media { position: relative; width: 100%; aspect-ratio: 9 / 16; }
        .reel-img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
        .reel-overlay {
          position: absolute; inset: auto 0 0 0; padding: 12px;
          background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,.85) 100%);
          color: #fff;
        }
        .reel-title { font-weight: 700; font-size: clamp(14px, 3.8vw, 16px); text-shadow: 0 2px 6px rgba(0,0,0,.6); }
        .reel-btn {
          margin-top: 6px; display: inline-block; padding: 8px 12px; border-radius: 999px;
          font-weight: 800; font-size: 13px;
          background: linear-gradient(90deg, #ff93a8, #c29bff, #8de3ff);
        }

        /* Desktop grid for reels */
        @media (min-width: 1024px) {
          .reels { display: grid; grid-auto-flow: unset; grid-auto-columns: unset; grid-template-columns: repeat(4, 1fr); overflow: visible; }
          .reel { scroll-snap-align: unset; }
        }

        .more {
          display: block;
          text-align: center;
          margin-top: 14px;
          font-weight: 800;
          background: linear-gradient(90deg, #ffd2db, #e5d3ff, #c9f1ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        /* ---------- GRID CARDS ---------- */
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
          gap: 12px;
        }
        .card {
          background: linear-gradient(180deg, rgba(255,255,255,0.18), rgba(255,255,255,0.06));
          border: 1px solid rgba(255,255,255,0.35);
          border-radius: 18px;
          overflow: hidden;
          box-shadow: var(--shadow-1);
          color: var(--text-strong);
        }
        .link { color: inherit; text-decoration: none; }
        .ratio-16x9 { position: relative; width: 100%; aspect-ratio: 16 / 9; }
        .card-img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: contain; background: rgba(0,0,0,0.1); }
        .card-body { padding: 12px 14px 14px; }
        .card-title { margin: 0 0 6px; font-size: 16px; font-weight: 800; }
        .card-sub { margin: 0; font-size: 14px; color: var(--text-soft); line-height: 1.45; }

        /* ---------- FOOTER ---------- */
        .footer {
          margin-top: 24px;
          background: linear-gradient(180deg, rgba(255,255,255,0.16), rgba(255,255,255,0.04));
          border: 1px solid rgba(255,255,255,0.3);
          border-radius: 18px;
          padding: 16px;
          text-align: center;
          box-shadow: var(--shadow-1);
          backdrop-filter: blur(10px);
        }
        .links {
          display: flex; flex-wrap: wrap; justify-content: center; gap: 10px 16px; margin-bottom: 8px;
        }
        .links a { color: #fff; text-decoration: none; font-weight: 800; }
        .links a:hover { text-decoration: underline; }
        .copy { color: var(--text-soft); font-size: 13.5px; }
      `}</style>
    </div>
  );
}

export default App;
