import Image from "next/image";
import HeroSection from "./component/HeroSection";
import StatsSection from "./component/StatsSection";
import FeaturedSection from "./component/FeaturedSection";
import ClientsCarousel from "./component/ClientsCarousel";
import ExpandingGallery from "./component/ExpandingGallery";
// import TestimonialSection from "./component/TestimonialSection";
import SeamlessWorkflow from "./component/SeamlessWorkflow";
import ClientReviews from "./component/ClientReviews";
import Footer from "./component/Footer";
import GapWrapper from "./component/GapWrapper";
import WrapProducts from "./component/WrapProducts";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <StatsSection />
      <FeaturedSection />
      <ClientsCarousel />
      <ExpandingGallery />
      {/* <TestimonialSection /> */}
      <WrapProducts />
      <SeamlessWorkflow />
      <ClientReviews />
      <GapWrapper />
      <Footer />
    </div>
  );
}
