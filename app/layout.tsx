import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import "./mentoring.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://mentoring.aipowered.xyz"),
  title: "Claude Strategy Call with Ross | AI Powered",
  description:
    "Book a 1-hour Claude Strategy Call with Ross. Get clear on your focus, Cowork set up with a clean file structure, and the connectors that matter most. $600.",
  keywords: ["Claude strategy call", "Claude mentoring", "Cowork setup", "private session", "Ross Power", "AI Powered"],
  icons: {
    icon: "https://aipowered-assets.com/logos/AiPowered_Submark_BlackBG_Small.jpg",
    apple: "https://aipowered-assets.com/logos/AiPowered_Submark_BlackBG_Small.jpg",
  },
  openGraph: {
    title: "Claude Strategy Call with Ross | AI Powered",
    description:
      "One hour to get clear on Claude. Your focus, Cowork set up, and the connectors that matter most.",
    siteName: "AI Powered",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Claude Strategy Call with Ross",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Claude Strategy Call with Ross | AI Powered",
    description: "One hour to get clear on Claude. Cowork set up. Connectors mapped. $600.",
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
        <Script id="affiliate-tracking" strategy="afterInteractive">{`
(function() {
  var params = new URLSearchParams(window.location.search);
  var amId = params.get('am_id');
  if (amId) {
    sessionStorage.setItem('am_id', amId);
  } else {
    amId = sessionStorage.getItem('am_id');
  }
  if (!amId) return;
  function applyAffiliate() {
    document.querySelectorAll('a[href*="checkout.aipowered.xyz"]').forEach(function(link) {
      var url = new URL(link.href);
      url.searchParams.set('am_id', amId);
      link.href = url.toString();
    });
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyAffiliate);
  } else {
    applyAffiliate();
  }
})();
`}</Script>
      </body>
    </html>
  );
}
