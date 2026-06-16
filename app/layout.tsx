import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import "./mentoring.css";

const CDN = "https://pub-557b5f7935344f8e91f1d0f115f8ec73.r2.dev";

export const metadata: Metadata = {
  metadataBase: new URL("https://mentoring.aipowered.xyz"),
  title: "Private 1:1 Mentoring with Ross | AI Powered",
  description:
    "Book private 1:1 time with Ross. Your business, your pace, his full focus — guided by the ClaudeOS methodology. 1, 2 or 3 hour sessions.",
  keywords: ["1:1 mentoring", "Claude mentoring", "AI mentoring", "private session", "Ross Power", "AI Powered"],
  icons: {
    icon: "https://aipowered-assets.com/logos/AiPowered_Submark_BlackBG_Small.jpg",
    apple: "https://aipowered-assets.com/logos/AiPowered_Submark_BlackBG_Small.jpg",
  },
  openGraph: {
    title: "Private 1:1 Mentoring with Ross | AI Powered",
    description:
      "Your business, your pace, Ross's full focus. Private 1:1 sessions guided by the ClaudeOS methodology.",
    siteName: "AI Powered",
    type: "website",
    images: [
      {
        url: `${CDN}/web-preview-assets/social-preview.png`,
        width: 1200,
        height: 630,
        alt: "Private 1:1 Mentoring with Ross",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Private 1:1 Mentoring with Ross | AI Powered",
    description: "Your business, your pace, Ross's full focus. Private 1:1 sessions.",
    images: [`${CDN}/web-preview-assets/social-preview.png`],
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
