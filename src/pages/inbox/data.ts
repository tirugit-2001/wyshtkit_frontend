export const inboxFilters = ["All", "Active Orders", "Messages"] as const;
export type InboxFilter = (typeof inboxFilters)[number];

export type ThreadAccent = "teal" | "pink" | "neutral" | "primary" | "secondary";

export type InboxThread = {
  id: string;
  title: string;
  time: string;
  statusLabel: string;
  statusAccent: ThreadAccent;
  preview: string;
  urgent?: boolean;
  pulse?: boolean;
  avatarUrl?: string;
  initials?: string;
  avatarAccent?: ThreadAccent;
  icon?: "cart";
  showRewards?: boolean;
  borderAccent?: ThreadAccent;
  backgroundTint?: ThreadAccent;
};

export const inboxThreads: InboxThread[] = [
  {
    id: "order-99285",
    title: "New Order #OHF-99285",
    time: "URGENT",
    statusLabel: "High Priority",
    statusAccent: "teal",
    preview: "Custom Sourdough • 12m SLA",
    urgent: true,
    pulse: true,
    icon: "cart",
    showRewards: true,
    borderAccent: "teal",
    backgroundTint: "teal",
  },
  {
    id: "melrose",
    title: "Melrose Bakery",
    time: "Just now",
    statusLabel: "Action Required",
    statusAccent: "pink",
    preview: "Please approve your preview...",
    avatarUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCpSwEMTxFY6d5D1G2Ye-qLKo5JAvWaTiBrZjr2RqWN4uyiM3l_kyCtlRMBKgrRWV6iiOMf4BRSz8DMdF6GmVEZqQfMNI9ziVCxSKcNKbpxnCiTdwLmTOO36J8RxXbuHffas_mPaCIMWyrjjp_yk7Z77nXYyEws4HOYNxt95B9ZpEqwYYKjYWLHjPON9nn8-_B2qog_j63VJl__fQrEghfTnT5ZtMx57dKeqKR6TDEF6QF-RX-Q1U6lFCh1kR-jq5jouR_00IgYTezM",
    showRewards: true,
    borderAccent: "pink",
    backgroundTint: "pink",
  },
  {
    id: "priya",
    title: "Priya Sharma",
    time: "10:45 AM",
    statusLabel: "New Request",
    statusAccent: "primary",
    preview: "Thanks for the update!",
    initials: "PS",
    avatarAccent: "pink",
  },
  {
    id: "aarav",
    title: "Aarav Patel",
    time: "9:12 AM",
    statusLabel: "On the Way",
    statusAccent: "teal",
    preview: "Is the delivery on track?",
    initials: "AP",
    avatarAccent: "secondary",
  },
];

export const activeConversation = {
  id: "melrose",
  name: "Melrose Bakery",
  avatarUrl:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCpSwEMTxFY6d5D1G2Ye-qLKo5JAvWaTiBrZjr2RqWN4uyiM3l_kyCtlRMBKgrRWV6iiOMf4BRSz8DMdF6GmVEZqQfMNI9ziVCxSKcNKbpxnCiTdwLmTOO36J8RxXbuHffas_mPaCIMWyrjjp_yk7Z77nXYyEws4HOYNxt95B9ZpEqwYYKjYWLHjPON9nn8-_B2qog_j63VJl__fQrEghfTnT5ZtMx57dKeqKR6TDEF6QF-RX-Q1U6lFCh1kR-jq5jouR_00IgYTezM",
  orderId: "Order #OHF-99281",
  previewDue: "08:42",
  estimatedArrival: "15m Estimated Arrival",
  lifecycleStage: "Review" as const,
};

export type OrderSummaryItem =
  | {
      id: string;
      name: string;
      status: string;
      statusAccent: "pink" | "teal";
      price: number;
      imageUrl: string;
    }
  | {
      id: string;
      name: string;
      status: string;
      statusAccent: "pink" | "teal";
      price: number;
      icon: "coffee";
    };

export const orderSummary = {
  title: "Mixed Order Summary",
  total: 630,
  items: [
    {
      id: "sourdough",
      name: "Artisan Sourdough",
      status: "Review Required",
      statusAccent: "pink" as const,
      price: 350,
      imageUrl:
        "https://lh3.googleusercontent.com/aida/AP1WRLtfqGhHCXdHAP7zMTvmB5nmTvkIEpcC4IFXXX3k7AB9PwM_7qZoKnMbw8740FqrvTgx3XM_jvGohOMSQK4Q6ZMo7DmK5pJeUaNa_fpOOh1iAOjftc80TWTD4rdr-OhbgRdwLvgvi7untzlaSdK1pCfg1BDKkHB2gyrxl2PxOOXDeBLGpR4ShjEftR9rYzMyJL9_uvPfUU6EOa-dizdg3xPFUovKNhq56CYWhUIymGakJYRLEDGJ53yfM58",
    },
    {
      id: "brew",
      name: "Nitro Cold Brew",
      status: "Packed & Ready • Waiting for Sourdough",
      statusAccent: "teal" as const,
      price: 280,
      icon: "coffee" as const,
    },
  ] satisfies OrderSummaryItem[],
};

export type MessageKind = "system" | "merchant" | "proof";

export type InboxMessage = {
  id: string;
  time: string;
  kind: MessageKind;
  icon?: "bag" | "inventory" | "verified";
  iconAccent?: ThreadAccent;
  avatarUrl?: string;
  title?: string;
  body: string;
  boldFragment?: string;
  proof?: {
    title: string;
    imageUrl: string;
    description: string;
  };
};

export const inboxMessages: InboxMessage[] = [
  {
    id: "1",
    time: "10:55 AM",
    kind: "system",
    icon: "bag",
    iconAccent: "secondary",
    title: "Order Placed",
    body: "Your order for Artisan Sourdough has been received and is being secured by Melrose Bakery.",
  },
  {
    id: "2",
    time: "11:05 AM",
    kind: "system",
    icon: "inventory",
    iconAccent: "teal",
    body: "Standard item (Nitro Cold Brew) has been secured and packed. It will ship together with your personalized item.",
    boldFragment: "Nitro Cold Brew",
  },
  {
    id: "3",
    time: "11:02 AM",
    kind: "merchant",
    avatarUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCpSwEMTxFY6d5D1G2Ye-qLKo5JAvWaTiBrZjr2RqWN4uyiM3l_kyCtlRMBKgrRWV6iiOMf4BRSz8DMdF6GmVEZqQfMNI9ziVCxSKcNKbpxnCiTdwLmTOO36J8RxXbuHffas_mPaCIMWyrjjp_yk7Z77nXYyEws4HOYNxt95B9ZpEqwYYKjYWLHjPON9nn8-_B2qog_j63VJl__fQrEghfTnT5ZtMx57dKeqKR6TDEF6QF-RX-Q1U6lFCh1kR-jq5jouR_00IgYTezM",
    body: "Hi! I'm preparing your Artisan Sourdough. We just need a few details to get everything exactly how you like it.",
  },
  {
    id: "4",
    time: "11:15 AM",
    kind: "proof",
    icon: "verified",
    iconAccent: "pink",
    proof: {
      title: "Digital Proof: Artisan Sourdough",
      imageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCQwWJUHAcKeo6iNjzzWvujyauqBW6imDaI-khv5tgDUyA8rHutncvDC3Mwx6FTT7Sfmcim8_cES5DetAfFkO5z89J2GAvcnwXTda83xvZW1vQs058N_PGHdHEtVxZPKGB0rAaGwiujJZrayafGs4tE7sdQWmBZgJJcpxf1WR7SvDI7WcJMyNBoTArB0V0mSL13BdHS0SwCNvLOV_C0Is5fiikuF7XMG1lIIYsrcjnvuvVJmf9swrkpfKLnoLh_Zibt0pPN8tAyFfCX",
      description:
        "Please review the crust texture and scoring pattern before we begin the final bake.",
    },
    body: "",
  },
];

export const lifecycleSteps = [
  { id: "securing", label: "Securing", state: "complete" as const },
  { id: "prep", label: "Prep", state: "complete" as const },
  { id: "review", label: "Review", state: "active" as const },
  { id: "on-way", label: "On Way", state: "pending" as const },
];
