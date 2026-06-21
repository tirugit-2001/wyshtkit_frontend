export type FeedTab = "following" | "trending" | "local";

export const feedTabs: { id: FeedTab; label: string; dot?: "pink" | "cyan" }[] =
  [
    { id: "following", label: "Following", dot: "pink" },
    { id: "trending", label: "Trending" },
    { id: "local", label: "Local", dot: "cyan" },
  ];

const logoUrl =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCM3JB0meUvqdq5xjFYlxr7CjSKJMW_f0QoFmCjgOgO57EOp56Cr8TCCE5ZZmJWV2fbGDzx2Vj7hNx_fEMV5jyUkmuCKc18x1wfdYNaXorV6yfNeAfxyK19yw1tv0FbJULvXeym4f54bXBsgbhfXO_MRoGmM_EQj7X90y286_NpZNo43VVtstzlSp46xLfhPG8HodwpZkK7Qf62Fo5t_qf83cHHTbMkk68HGGBou5kmzLMxSqsg5iL0gdRMWvpO--wmoWMiQv4n5ls6";

const melroseAvatarUrl =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCpSwEMTxFY6d5D1G2Ye-qLKo5JAvWaTiBrZjr2RqWN4uyiM3l_kyCtlRMBKgrRWV6iiOMf4BRSz8DMdF6GmVEZqQfMNI9ziVCxSKcNKbpxnCiTdwLmTOO36J8RxXbuHffas_mPaCIMWyrjjp_yk7Z77nXYyEws4HOYNxt95B9ZpEqwYYKjYWLHjPON9nn8-_B2qog_j63VJl__fQrEghfTnT5ZtMx57dKeqKR6TDEF6QF-RX-Q1U6lFCh1kR-jq5jouR_00IgYTezM";

export const stories = [
  {
    id: "yours",
    label: "Your Story",
    imageUrl: logoUrl,
    isYours: true,
  },
  {
    id: "melrose",
    label: "Melrose...",
    imageUrl: melroseAvatarUrl,
    hasRing: true,
    isLive: true,
  },
  {
    id: "coffee",
    label: "Coffee...",
    initials: "CF",
    hasRing: true,
  },
  {
    id: "floral",
    label: "Floral...",
    initials: "FL",
    hasRing: true,
    floral: true,
  },
  {
    id: "vintage",
    label: "Vintage...",
    initials: "VT",
    muted: true,
  },
  {
    id: "vintage",
    label: "Vintage...",
    initials: "VT",
    muted: true,
  },
  {
    id: "vintage",
    label: "Vintage...",
    initials: "VT",
    muted: true,
  },

  {
    id: "vintage",
    label: "Vintage...",
    initials: "VT",
    muted: true,
  },
];

export const featuredPost = {
  author: "Melrose Bakery",
  handle: "melrosebakery",
  avatarUrl: melroseAvatarUrl,
  location: "Indiranagar",
  timeAgo: "2h ago",
  imageUrl:
    "https://lh3.googleusercontent.com/aida/AP1WRLtfqGhHCXdHAP7zMTvmB5nmTvkIEpcC4IFXXX3k7AB9PwM_7qZoKnMbw8740FqrvTgx3XM_jvGohOMSQK4Q6ZMo7DmK5pJeUaNa_fpOOh1iAOjftc80TWTD4rdr-OhbgRdwLvgvi7untzlaSdK1pCfg1BDKkHB2gyrxl2PxOOXDeBLGpR4ShjEftR9rYzMyJL9_uvPfUU6EOa-dizdg3xPFUovKNhq56CYWhUIymGakJYRLEDGJ53yfM58",
  productTag: "Artisan Sourdough",
  audioLabel: "Original Audio • @melrosebakery",
  slideCount: 4,
  activeSlide: 1,
  likes: "1.2k",
  comments: "340",
  caption:
    "Fresh out of the oven! 🥖 Our signature Artisan Sourdough, naturally leavened and baked to perfection. Only a few left for today's batch. Get yours delivered in 15 mins. ✨",
};

export const shopProduct = {
  name: "Artisan Sourdough",
  bakery: "Melrose Bakery",
  price: 250,
};

export const nearbyActivity = [
  {
    id: "1",
    icon: "bag" as const,
    title: "Someone bought Sourdough",
    subtitle: "Melrose Bakery • 2 mins ago",
  },
  {
    id: "2",
    icon: "bike" as const,
    title: "Delivery requested",
    subtitle: "Indiranagar • 5 mins ago",
  },
  {
    id: "3",
    icon: "flame" as const,
    title: "Trending in your area",
    subtitle: "50+ likes in last hour",
  },
];
