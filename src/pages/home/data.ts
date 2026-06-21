export type ProductStatus =
  | { type: "low-stock"; text: string }
  | { type: "in-stock"; text: string };

export type Product = {
  id: string;
  category: string;
  title: string;
  price: number;
  rating: number;
  deliveryTime?: string;
  deliveryLabel?: string;
  status: ProductStatus;
  imageGradient: string;
};

export type Category = {
  id: string;
  label: string;
  icon: string;
};

export const buyAgainProducts: Product[] = [
  {
    id: "1",
    category: "BAKERY",
    title: "Artisan Sourdough",
    price: 250,
    rating: 4.8,
    deliveryTime: "15m",
    status: { type: "low-stock", text: "Only 2 left nearby" },
    imageGradient: "linear-gradient(135deg, #1a6b7a 0%, #2d9aaa 50%, #4ecdc4 100%)",
  },
  {
    id: "2",
    category: "CERAMICS",
    title: "Ceramic Mug Set",
    price: 1200,
    rating: 4.7,
    deliveryTime: "15m",
    status: { type: "in-stock", text: "In Stock" },
    imageGradient: "linear-gradient(135deg, #c4b5a0 0%, #a8d8d0 50%, #7ec8c8 100%)",
  },
];

export const communityFavorites: Product[] = [
  {
    id: "3",
    category: "BAKERY",
    title: "Fresh Croissants",
    price: 180,
    rating: 4.9,
    deliveryTime: "15m",
    status: { type: "in-stock", text: "In Stock" },
    imageGradient: "linear-gradient(135deg, #1a5f6e 0%, #3a9aad 100%)",
  },
  {
    id: "4",
    category: "FLORIST",
    title: "Spring Bouquet",
    price: 450,
    rating: 4.8,
    deliveryTime: "15m",
    status: { type: "in-stock", text: "In Stock" },
    imageGradient: "linear-gradient(135deg, #2a7a8a 0%, #5ec4c4 100%)",
  },
  {
    id: "5",
    category: "GIFTING",
    title: "Curated Gift Box",
    price: 890,
    rating: 4.6,
    deliveryLabel: "Today",
    status: { type: "in-stock", text: "In Stock" },
    imageGradient: "linear-gradient(135deg, #b8d4e8 0%, #d4e8f4 50%, #a8c8e0 100%)",
  },
];

export const categories: Category[] = [
  { id: "bakery", label: "Bakery", icon: "croissant" },
  { id: "pharma", label: "Pharma", icon: "pharma" },
  { id: "electronics", label: "Electronics", icon: "monitor" },
  { id: "flowers", label: "Flowers", icon: "flower" },
  { id: "pets", label: "Pets", icon: "paw" },
  { id: "repair", label: "Repair", icon: "wrench" },
  { id: "gifting", label: "Gifting", icon: "gift" },
  { id: "essentials", label: "Essentials", icon: "basket" },
];
