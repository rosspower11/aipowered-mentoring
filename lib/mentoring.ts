/** 1:1 Private Mentoring with Ross — mentoring.aipowered.xyz */

export const CHECKOUT_URL = "https://checkout.aipowered.xyz/private-mentoring";
export const BOOK_CTA = "Book your session";

/** USD prices come straight from the checkout. GBP shown as an approximate guide. */
export const TIERS = [
  {
    id: "1hr",
    hours: "1 hour",
    usd: "$600",
    gbp: "£445",
    tag: "",
    blurb: "One focused hour to crack a specific problem or get a workflow live.",
    featured: false,
  },
  {
    id: "2hr",
    hours: "2 hours",
    usd: "$1,100",
    gbp: "£816",
    tag: "Most popular",
    blurb: "Room to go deeper — set things up properly and build more than one thing.",
    featured: true,
  },
  {
    id: "3hr",
    hours: "3 hours",
    usd: "$1,600",
    gbp: "£1,187",
    tag: "Best value",
    blurb: "A proper working session to tackle the big stuff end to end, together.",
    featured: false,
  },
] as const;
