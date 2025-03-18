import React from "react";
import ReactDOM from "react-dom/client";
import Dribble from "./assets/images/dribble.png";
import Linkees, { CHANNEL_TYPES } from "linkees";
import "./css/normalize.css";

const items = [
    {
        title: "🔗 LINK",
        subtitle: "Add a 30 day Telegram channel link to wataa.menu",
        type: CHANNEL_TYPES.WEBSITE, // Or a more appropriate CHANNEL_TYPES value
        link: "https://buy.stripe.com/8wM15ph0z8LG6dO5l8",
        image: pay, // Use the image import here
    },
    {
        title: "Telegram",
        subtitle: "@heysagnik | DM @HAHZNFT after payment",
        type: CHANNEL_TYPES.TELEGRAM,
        link: "https://github.com/heysagnik",
    },
    {
        title: "Instagram",
        subtitle: "@heysagnik |  Promote Livestream on IG",
        type: CHANNEL_TYPES.INSTAGRAM,
        link: "https://instagram.com/heysagnik",
    },
    {
        title: "Twitter",
        subtitle: "@heysagnik | 😉",
        type: CHANNEL_TYPES.TWITTER,
        link: "https://twitter.com/atl5d",
    },
    {
        title: "LinkedIn",
        subtitle: "ATL5D Business",
        type: CHANNEL_TYPES.LINKEDIN,
        link: "https://www.linkedin.com/groups/13062182/",
    },
    {
        title: "Telegram",
        subtitle: "@ATL5D | ONLY ATL5D FANS",
        type: CHANNEL_TYPES.TELEGRAM, // Assuming you have this in CHANNEL_TYPES
        link: "https://t.me/atl5d",
    },
    {
        title: "Dribbble",
        subtitle: "@virtuonic | shots of dezigns ",
        type: CHANNEL_TYPES.DRIBBLE, // Use the correct CHANNEL_TYPES value
        link: "https://dribbble.com/virtuonic",
        image: Dribble, // Use the image import here
    },
    {
        title: "Telegram",
        subtitle: "@HAHZNFT | Wizard of Hahz ",
        type: CHANNEL_TYPES.TELEGRAM, // Assuming you have this in CHANNEL_TYPES
        link: "https://t.me/hahz5d",
    },
];

const rootElement = document.getElementById("root");
if (rootElement) {
    ReactDOM.createRoot(rootElement)?.render(
        <React.StrictMode>
            <Linkees cardItems={items} name={"ATL5D"} />
            {/* headerAvatar={'https://i.imgur.com/FI8QVOa.jpeg'}*/}
        </React.StrictMode>
    );
}
