import { Linkees, CHANNEL_TYPES } from "linkees";
import "linkees/dist/style.css";
import avatar from "./assets/avatar.jpeg";

const cardItems = [
  // 🔹 Active Auctions Section
  {
    title: "🎬 Active RFP.AUCTIONS",
    subtitle: "Watch 1-minute RFP videos on @RFPTOK",
    type: CHANNEL_TYPES.TIKTOK,
    link: "https://www.tiktok.com/@rfptok",
  },

  // 🔹 RFP Process Blueprint
  {
    title: "🧩 The RFP Process",
    subtitle: "1️⃣ Submit ▶ 2️⃣ Pitch ▶ 3️⃣ Win ▶ 4️⃣ Deliver",
    type: CHANNEL_TYPES.WEBSITE,
    link: "https://rfp.auction", // keep root for clarity
  },

  // 🔹 RFP Services Section
  {
    title: "⚡️ Turn RFP Into a 1-Min Video",
    subtitle: "🎥 We script + shoot your RFP intro in 24 hrs",
    type: CHANNEL_TYPES.STRIPE,
    link: "https://buy.stripe.com/", // replace w/ product link
  },
  {
    title: "🎤 AR Mic Effect",
    subtitle: "🤳 Branded mic filter for your challenge (2-3 days)",
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
    title: "📲 LUMEEBOOTH Milestones",
    subtitle: "🎯 Track project progress w/ AR proof updates",
    type: CHANNEL_TYPES.WEBSITE,
    link: "https://lumeebooth.com",
  },

  // 🔹 UGC Interaction
  {
    title: "💬 RFP Questions",
    subtitle: "Ask your RFP question in a fun UGC video 🧠",
    type: CHANNEL_TYPES.YOUTUBE,
    link: "https://youtube.com/@rfpit?si=72kl5w-4xIX1i1a1",
  },
  {
    title: "🎥 RFP Responses",
    subtitle: "Watch creators pitch their ideas in 60 seconds 🚀",
    type: CHANNEL_TYPES.YOUTUBE,
    link: "https://youtube.com/@rfpit?si=72kl5w-4xIX1i1a1",
  },

  // 🔹 Socials
  {
    title: "🎯 @RFPTOK",
    subtitle: "Follow for live RFP drops and challenges",
    type: CHANNEL_TYPES.TIKTOK,
    link: "https://www.tiktok.com/@rfptok",
  },
  {
    title: "💼 LinkedIn",
    subtitle: "See case studies and city collabs",
    type: CHANNEL_TYPES.LINKEDIN,
    link: "https://www.linkedin.com/company/rfp-auction/",
  },
  {
    title: "📸 LUMEEBOOTH",
    subtitle: "Powering RFP video & AR milestone tracking",
    type: CHANNEL_TYPES.WEBSITE,
    link: "https://lumeebooth.com",
  },
];

function App() {
  return (
    <Linkees
      name="RFP.AUCTION"
      bio="🎥 Turn RFPs into 1-minute video challenges. Submit ▶ Pitch ▶ Win ▶ Deliver 🏆"
      cardItems={cardItems}
      headerAvatar={avatar}
    />
  );
}

export default App;
