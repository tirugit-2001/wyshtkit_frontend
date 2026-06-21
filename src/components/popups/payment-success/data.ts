export type PaymentOrderItem = {
  name: string;
  details: string;
  price: number;
  imageGradient?: string;
};

export type TimelineStepStatus = "completed" | "active" | "pending";

export type TimelineStep = {
  label: string;
  description?: string;
  status: TimelineStepStatus;
};

export const defaultOrderItem: PaymentOrderItem = {
  name: "Artisan Sourdough",
  details: "450g • Sliced",
  price: 350,
  imageGradient: "linear-gradient(135deg, #c4a882 0%, #a08060 100%)",
};

export const defaultTimeline: TimelineStep[] = [
  { label: "Order Placed", status: "completed" },
  {
    label: "Preview Phase",
    description: "Check your Inbox in ~5 mins to preview and approve your loaf",
    status: "active",
  },
  { label: "Dispatched", status: "pending" },
  { label: "Delivered", status: "pending" },
];

export const ADD_ITEMS_COUNTDOWN_SECONDS = 119;
