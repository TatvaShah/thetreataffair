import type { SiteConfig } from "@/lib/types";

export const site: SiteConfig = {
  name: "The Treat Affair",
  tagline: "Elevated dessert, popcorn, and confection carts for weddings, parties, and corporate events across the GTA.",
  category: "Event treat carts",
  schemaType: "FoodEstablishment",
  area: "Toronto and GTA, ON",
  siteUrl: "https://thetreataffair.vercel.app",

  theme: {
    preset: "catering-events",
    colors: { accent: "#8B4513" },
    wordmark: "script",
  },
  logo: "/images/logo.jpg",
  showNameWithLogo: true,

  hero: {
    variant: "split",
    eyebrow: "Serving the GTA",
    headline: "Elevated treat carts for every celebration",
    subhead:
      "Dessert, popcorn, cotton candy, crepes, and confection carts for weddings, parties, and corporate events. DM to book your date.",
    images: [
      { src: "/images/post-5.jpg", alt: "Fall flavoured treat cart display" },
      { src: "/images/post-1.jpg", alt: "The Treat Affair thanksgiving greeting" },
      { src: "/images/post-2.jpg", alt: "Popcorn and cotton candy cart" },
    ],
    secondaryCta: { label: "See the carts", href: "#gallery" },
  },

  highlights: [
    "Dessert and confection carts",
    "Popcorn and cotton candy",
    "Crepe experiences",
    "Weddings, parties, corporate",
  ],

  about: {
    title: "A little treat, a whole lot of fun",
    body: [
      "The Treat Affair brings elevated food carts to Toronto and the GTA. Freshly popped popcorn, fluffy cotton candy, interactive crepes, and dessert fruit carts make the sweetest addition to any celebration.",
      "Weddings, parties, and corporate events welcome. Send a DM with your date and event type to enquire.",
    ],
    image: { src: "/images/post-8.jpg", alt: "Fresh fruit dessert cart" },
  },

  menu: {
    label: "Menu",
    title: "What we bring",
    intro: "Every cart is customized for your event. Share your date and theme for a quote.",
    variant: "list",
    showPrices: false,
    priceNote: "Message us for pricing on your date and guest count.",
    groups: [
      {
        title: "Treat carts",
        note: "Quoted for your event",
        items: [
          { name: "Popcorn cart", description: "Freshly popped popcorn for guests to enjoy." },
          { name: "Cotton candy", description: "Fluffy cotton candy with nostalgic fun." },
          { name: "Crepe Affair", description: "Interactive crepes with delicious fillings." },
          { name: "Dessert and fruit carts", description: "Fresh fruit, toppings, and sweet confection setups." },
        ],
      },
    ],
  },

  gallery: {
    title: "Recent affairs",
    items: [
      {
        src: "/images/post-1.jpg",
        width: 1080,
        height: 1080,
        alt: "Thanksgiving greeting from The Treat Affair",
        caption: "Happy Thanksgiving",
        href: "https://www.instagram.com/p/DeZimemSsb9/",
      },
      {
        src: "/images/post-2.jpg",
        width: 922,
        height: 1632,
        alt: "Popcorn and cotton candy cart",
        caption: "Popcorn and cotton candy",
        href: "https://www.instagram.com/p/DeNqvsAJFm-/",
      },
      {
        src: "/images/post-3.jpg",
        width: 706,
        height: 1254,
        alt: "Halloween festive treat carts",
        caption: "Halloween carts",
        href: "https://www.instagram.com/p/Dd-Cp6npf8m/",
      },
      {
        src: "/images/post-4.jpg",
        width: 720,
        height: 1280,
        alt: "The Crepe Affair interactive dessert",
        caption: "The Crepe Affair",
        href: "https://www.instagram.com/p/Ddz0JWZp0Ey/",
      },
      {
        src: "/images/post-5.jpg",
        width: 1080,
        height: 1440,
        alt: "Fall flavour treat cart",
        caption: "Fall flavours",
        href: "https://www.instagram.com/p/DdmI5k9yIwl/",
      },
      {
        src: "/images/post-6.jpg",
        width: 720,
        height: 1280,
        alt: "Cookie Monster themed popcorn cart",
        caption: "Themed popcorn cart",
        href: "https://www.instagram.com/p/DdfQnfMpgcI/",
      },
      {
        src: "/images/post-7.jpg",
        width: 1080,
        height: 1920,
        alt: "Secret Affair sauce with fresh fruit",
        caption: "The Secret Affair",
        href: "https://www.instagram.com/p/DdXhkgFJ7_4/",
      },
      {
        src: "/images/post-8.jpg",
        width: 720,
        height: 1280,
        alt: "Dessert fruit bar cart",
        caption: "Dessert fruit bar",
        href: "https://www.instagram.com/p/DdSI3Pnp8ZV/",
      },
    ],
  },

  reels: { items: [] },

  instagram: {
    handle: "thetreataffair",
    embeds: [
      "https://www.instagram.com/p/DeNqvsAJFm-/",
      "https://www.instagram.com/p/Ddz0JWZp0Ey/",
      "https://www.instagram.com/p/DdmI5k9yIwl/",
    ],
    embedsTitle: "Fresh from Instagram",
  },

  order: {
    title: "Book by Instagram DM",
    intro:
      "Tap the button for a starter message with your date, guest count, and cart style.",
    dmMessage:
      "Hi The Treat Affair! I would like to book a treat cart.\nEvent date:\nGuest count / servings:\nEvent type (wedding, party, corporate):\nCart idea (popcorn, cotton candy, crepes, dessert fruit):",
    links: [],
    note: "Serving the GTA and surrounding areas. DM to enquire about your next event.",
  },

  reviews: { items: [] },

  faq: [
    {
      q: "How do I book?",
      a: "Send an Instagram DM with your event date, guest count, and which cart you would like.",
    },
    {
      q: "Where do you serve?",
      a: "The Treat Affair serves Toronto, the GTA, and surrounding areas.",
    },
    {
      q: "What carts do you offer?",
      a: "Popcorn, cotton candy, crepes, dessert fruit, and confection carts customized for your event.",
    },
    {
      q: "Do you post prices online?",
      a: "Quotes depend on date, guest count, and cart style. Share your details by DM for a personal quote.",
    },
  ],

  contact: {
    area: "Toronto and the GTA, Ontario",
    socials: [],
  },

  seo: {
    title: "The Treat Affair | Event treat carts in Toronto and the GTA",
    description:
      "Elevated dessert, popcorn, cotton candy, and crepe carts for weddings, parties, and corporate events across the GTA. Book by Instagram DM.",
    keywords: [
      "treat carts Toronto",
      "popcorn cart GTA",
      "event dessert cart Toronto",
      "The Treat Affair",
    ],
    ogPhoto: "/images/og-photo.jpg",
  },
};
