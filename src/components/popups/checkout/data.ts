export type CheckoutProductItem = {
  id: string;
  type: "product";
  name: string;
  detail: string;
  price: number;
  quantity: number;
  imageUrl: string;
};

export type CheckoutServiceItem = {
  id: string;
  type: "service";
  name: string;
  detail: string;
  price: number;
};

export type CheckoutItem = CheckoutProductItem | CheckoutServiceItem;

export const checkoutItems: CheckoutItem[] = [
  {
    id: "sourdough",
    type: "product",
    name: "Artisan Sourdough",
    detail: "450g • Hand-sliced",
    price: 350,
    quantity: 1,
    imageUrl:
      "https://lh3.googleusercontent.com/aida/AP1WRLtfqGhHCXdHAP7zMTvmB5nmTvkIEpcC4IFXXX3k7AB9PwM_7qZoKnMbw8740FqrvTgx3XM_jvGohOMSQK4Q6ZMo7DmK5pJeUaNa_fpOOh1iAOjftc80TWTD4rdr-OhbgRdwLvgvi7untzlaSdK1pCfg1BDKkHB2gyrxl2PxOOXDeBLGpR4ShjEftR9rYzMyJL9_uvPfUU6EOa-dizdg3xPFUovKNhq56CYWhUIymGakJYRLEDGJ53yfM58",
  },
  {
    id: "cleaning",
    type: "service",
    name: "Deep Cleaning",
    detail: "Today • 4:00 PM - 5:00 PM",
    price: 899,
  },
];

export const deliveryAddress = {
  label: "Home",
  line: "Silver Oak Apartments, Indiranagar",
  fields: [
    { label: "Building / Block", value: "Block C, 4th Floor" },
    { label: "Flat Number", value: "402" },
    { label: "Gate Entry", value: "Gate 2 (Main Security)" },
    { label: "Landmark", value: "Near Metro Pillar 124" },
  ],
};

export const checkoutBreakdown = {
  subtotal: 1249,
  deliveryFee: "FREE" as const,
  gst: 67.45,
  total: 1316.45,
  rewardsAvailable: 250,
};
