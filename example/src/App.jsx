import { Linkees, CHANNEL_TYPES } from "linkees";
import "linkees/dist/style.css";
import avatar from "./assets/avatar.jpeg";

const cardItems = [
  // 🔹 Active Auctions
  {
    title: "🎬 Active RFP.AUCTIONS",
    subtitle: "Watch 1-min video pitches & vote your favorite 🔥",
    type: CHANNEL_TYPES.TIKTOK,
    link: "https://www.tiktok.com/@rfptok",
  },

  // 🔹 RFP Process Overview
  {
    title: "🧩 How It Works",
    subtitle: "1️⃣ Submit ▶ 2️⃣ Pitch ▶ 3️⃣ Vote ▶ 4️⃣ Deliver",
    type: CHANNEL_TYPES.WEBSITE,
    link: "https://rfp.auction",
  },

  // 🔹 Creator + Brand Services
  {
    title: "⚡️ Turn Your RFP Into a Video",
    subtitle: "🎥 We script + edit your 60-second intro in 24 hrs",
    type: CHANNEL_TYPES.STRIPE,
    link: "https://buy.stripe.com/", // replace with live Stripe product
  },
  {
    title: "🎤 AR Mic Effect",
    subtitle: "🤳 Custom TikTok filter for your challenge (2-3 days)",
    type: CHANNEL_TYPES.STRIPE,
    link: "https://buy.stripe.com/",
  },
  {
    title: "🏆 Announce Winners",
    subtitle: "🏁 Post your winner reveal on @RFPTOK (1 day)",
    type: CHANNEL_TYPES.STRIPE,
    link: "https://buy.stripe.com/",
  },
  {
    title: "📲 Track Milestones",
    subtitle: "🎯 LUMEE BOOTH AR updates show verified progress",
    type: CHANNEL_TYPES.WEBSITE,
    link: "https://lumeebooth.com",
  },

  // 🔹 UGC Participation
  {
    title: "💬 Ask a Question",
    subtitle: "Submit your RFP question as a 1-min UGC video 🧠",
    type: CHANNEL_TYPES.YOUTUBE,
    link: "https://youtube.com/@rfpit?si=72kl5w-4xIX1i1a1",
  },
  {
    title: "🎥 Submit a Response",
    subtitle: "Pitch your idea in 60 seconds & earn votes 🚀",
    type: CHANNEL_TYPES.YOUTUBE,
    link: "https://youtube.com/@rfpit?si=72kl5w-4xIX1i1a1",
  },

  // 🔹 Social & Network
  {
    title: "🎯 @RFPTOK",
    subtitle: "Follow for daily RFP drops + live challenges",
    type: CHANNEL_TYPES.TIKTOK,
    link: "https://www.tiktok.com/@rfptok",
  },
  {
    title: "💼 LinkedIn",
    subtitle: "City collabs, partners, & RFP case studies",
    type: CHANNEL_TYPES.LINKEDIN,
    link: "https://www.linkedin.com/company/rfp-auction/",
  },
  {
    title: "📸 LUMEE BOOTH",
    subtitle: "Powering every RFP milestone w/ AR proof",
    type: CHANNEL_TYPES.WEBSITE,
    link: "https://lumeebooth.com",
  },
];

function App() {
  return (
    <Linkees
      name="RFP.AUCTION"
      bio="⚡ The world’s first 9-minute RFP process. Turn bids into 1-minute video challenges — Submit ▶ Pitch ▶ Vote ▶ Deliver 🏆"
      cardItems={cardItems}
      headerAvatar={avatar}
    />
  );
}

export default App;
