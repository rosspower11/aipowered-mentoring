import Script from "next/script";
import {
  BOOKING_EMBED_SCRIPT,
  BOOKING_HEADING,
  BOOKING_IFRAME_ID,
  BOOKING_IFRAME_SRC,
} from "@/lib/mentoring";

export default function MBookingEmbed() {
  return (
    <div className="m-booking anim d2" id="book">
      <h3 className="m-booking-title">{BOOKING_HEADING}</h3>
      <div className="m-booking-frame">
        <iframe
          src={BOOKING_IFRAME_SRC}
          style={{ width: "100%", border: "none", overflow: "hidden" }}
          scrolling="no"
          id={BOOKING_IFRAME_ID}
          title="Book your Claude Strategy Call with Ross"
        />
      </div>
      <Script src={BOOKING_EMBED_SCRIPT} strategy="lazyOnload" />
    </div>
  );
}
