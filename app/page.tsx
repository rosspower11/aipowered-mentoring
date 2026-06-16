import MNav from "@/components/mentoring/MNav";
import MHero from "@/components/mentoring/MHero";
import MMarquee from "@/components/mentoring/MMarquee";
import MDifference from "@/components/mentoring/MDifference";
import MCover from "@/components/mentoring/MCover";
import MWhoFor from "@/components/mentoring/MWhoFor";
import MHowItWorks from "@/components/mentoring/MHowItWorks";
import MAbout from "@/components/mentoring/MAbout";
import MPricing from "@/components/mentoring/MPricing";
import MFAQ from "@/components/mentoring/MFAQ";
import MFinalCTA from "@/components/mentoring/MFinalCTA";
import Footer from "@/components/Footer";
import ScrollAnimator from "@/components/ScrollAnimator";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <>
      <MNav />
      <MHero />
      <MMarquee />
      <MDifference />
      <MCover />
      <MWhoFor />
      <MHowItWorks />
      <MAbout />
      <MPricing />
      <MFAQ />
      <MFinalCTA />
      <Footer />
      <ScrollAnimator />
      <BackToTop />
    </>
  );
}
