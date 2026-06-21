export type ActivityFilter = "all" | "social" | "commerce";

export type ActivityType = "social" | "commerce" | "order";

export const activityFilters: { id: ActivityFilter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "social", label: "Social" },
  { id: "commerce", label: "Commerce" },
];

export const activityItems = [
  {
    id: "1",
    type: "social" as const,
    user: "Sarah J.",
    message: "liked your sourdough scoring clip",
    timestamp: "2M AGO",
    avatarGradient: "linear-gradient(135deg, #e8959a 0%, #c96b72 100%)",
  },
  {
    id: "2",
    type: "commerce" as const,
    title: "New Sale: Order #WY-9921 received from Alex C.",
    details: "₹1,250 • 3 items • Indiranagar",
    timestamp: "JUST NOW",
    highlighted: true,
  },
  {
    id: "3",
    type: "order" as const,
    title: "Melrose Bakery is preparing your Sourdough",
    progress: 60,
    estimate: "EST. 12 MINS",
    timestamp: "",
  },
];

export const filterActivity = (filter: ActivityFilter) => {
  if (filter === "all") return activityItems;
  if (filter === "social") return activityItems.filter((item) => item.type === "social");
  return activityItems.filter((item) => item.type === "commerce" || item.type === "order");
};
