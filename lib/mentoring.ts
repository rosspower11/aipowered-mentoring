/** Claude Strategy Call — mentoring.aipowered.xyz */

export const CHECKOUT_URL = "https://checkout.aipowered.xyz/private-mentoring";
export const BOOK_CTA = "Book your strategy call";

export const PRODUCT_NAME = "Claude Strategy Call";
export const DURATION = "1 hour";
export const PRICE_USD = "$600";
export const PRICE_GBP = "£445";

export const OUTCOMES = [
  { text: "Cowork live on your real tools, tested and working", icon: "cowork" },
  { text: "A clean file and folder structure Claude can navigate", icon: "files" },
  { text: "Connectors and MCPs ranked by what moves the needle for you", icon: "integrations" },
  { text: "Skills to build first from the work you repeat every week", icon: "skills" },
  { text: "Agents and scheduled tasks mapped to your actual week", icon: "agents" },
  { text: "Projects and Memory set up so Claude knows your business and voice", icon: "memory" },
  { text: "Clear data boundaries so you know exactly what is safe to connect", icon: "privacy" },
  { text: "Session recording plus a plan provided following the call", icon: "deliverable" },
] as const;

export const FOLLOW_UP =
  "On the back of the strategy call, we'll find the path that's best for you.";

export const SESSION_INCLUDES = [
  "Live 1:1 with Ross, screen to screen",
  "A focused agenda built around your business",
  "Guided by the ClaudeOS methodology",
  "Full session recording to keep",
] as const;
