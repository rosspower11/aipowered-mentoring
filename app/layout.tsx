import type { Metadata } from "next";
import "./globals.css";
import "./mentoring.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://mentoring.aipowered.xyz"),
  title: "Claude Setup & Strategy with Ross | AI Powered",
  description:
    "Getting AI right for you and your business. A 50-minute 1:1 call to go from confused about Claude to a strong setup, strategy and blueprint. £250.",
  keywords: ["Claude setup", "Claude strategy", "Cowork setup", "private session", "Ross Power", "AI Powered"],
  icons: {
    icon: "https://aipowered-assets.com/logos/AiPowered_Submark_BlackBG_Small.jpg",
    apple: "https://aipowered-assets.com/logos/AiPowered_Submark_BlackBG_Small.jpg",
  },
  openGraph: {
    title: "Claude Setup & Strategy with Ross | AI Powered",
    description:
      "Getting AI right for you and your business. Go in unsure about Claude. Come out with setup, strategy and a blueprint.",
    siteName: "AI Powered",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Claude Setup & Strategy with Ross",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Claude Setup & Strategy with Ross | AI Powered",
    description: "Getting AI right for you and your business. 50 minutes. £250.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
