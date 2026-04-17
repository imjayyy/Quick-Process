import Image from "next/image";
import HeroSection from "./component/HeroSection";
import StatsSection from "./component/StatsSection";
import FeaturedSection from "./component/FeaturedSection";
import ExpandingGallery from "./component/ExpandingGallery";
import TestimonialSection from "./component/TestimonialSection";
import SeamlessWorkflow from "./component/SeamlessWorkflow";
import ClientReviews from "./component/ClientReviews";
import Footer from "./component/Footer";
import GapWrapper from "./component/GapWrapper";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <StatsSection />
      <FeaturedSection />
      <ExpandingGallery />
      <TestimonialSection />
      <SeamlessWorkflow />
      <ClientReviews />
      <GapWrapper />
      <Footer />
    </div>
  );
}
