export const profileData = {
  name: "Melrose Bakery",
  bio: "Artisan sourdough and small-batch pastries. Naturally leavened since 1974.",
  rating: 4.8,
  reviews: "2.4k",
  followers: "12.5k",
  delivery: "15m",
  bannerUrl:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCvBkHn5ENwR5opkk_JpbmD9JeEjRXaUJXwA6n-lejQOpYRjVRUNGN0_UecVqM8dh-lFF97doE9ehzJzpl1osEUjvlvYwq33qhJNTH06Igwk9iLJotM1O5G3zvO6INGT59p8xAMO0-GymKj1UuOA5dTORRKYJIaL1CewWqjPns7ffbYTNwgwFFgBhBNDhVoFBv73wL5rzcvY6pg1EHrDjkINnMgYxy-WtXYD_HxYDk-bqjpDg1TakJphv2UNqtRaSDejyKDfq8iqKJh",
  avatarUrl:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCpSwEMTxFY6d5D1G2Ye-qLKo5JAvWaTiBrZjr2RqWN4uyiM3l_kyCtlRMBKgrRWV6iiOMf4BRSz8DMdF6GmVEZqQfMNI9ziVCxSKcNKbpxnCiTdwLmTOO36J8RxXbuHffas_mPaCIMWyrjjp_yk7Z77nXYyEws4HOYNxt95B9ZpEqwYYKjYWLHjPON9nn8-_B2qog_j63VJl__fQrEghfTnT5ZtMx57dKeqKR6TDEF6QF-RX-Q1U6lFCh1kR-jq5jouR_00IgYTezM",
};

export type ProfileProduct = {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  views: string;
  orders: string;
  revenue: string;
};

export const profileProducts: ProfileProduct[] = [
  {
    id: "sourdough",
    name: "Artisan Sourdough",
    price: 350,
    imageUrl:
      "https://lh3.googleusercontent.com/aida/AP1WRLtfqGhHCXdHAP7zMTvmB5nmTvkIEpcC4IFXXX3k7AB9PwM_7qZoKnMbw8740FqrvTgx3XM_jvGohOMSQK4Q6ZMo7DmK5pJeUaNa_fpOOh1iAOjftc80TWTD4rdr-OhbgRdwLvgvi7untzlaSdK1pCfg1BDKkHB2gyrxl2PxOOXDeBLGpR4ShjEftR9rYzMyJL9_uvPfUU6EOa-dizdg3xPFUovKNhq56CYWhUIymGakJYRLEDGJ53yfM58",
    views: "1.2k",
    orders: "340",
    revenue: "₹1.1L",
  },
];

export const profileTabs = ["Menu", "Reviews", "Story"] as const;

export const menuCategories = [
  "Bestsellers",
  "Freshly Baked",
  "Bundles",
  "Pastries",
  "Beans",
] as const;

export type ProfileTab = (typeof profileTabs)[number];
export type MenuCategory = (typeof menuCategories)[number];

export const categorySectionTitles: Record<MenuCategory, string> = {
  Bestsellers: "Freshly Baked",
  "Freshly Baked": "Freshly Baked",
  Bundles: "Bundles",
  Pastries: "Pastries",
  Beans: "Beans",
};
