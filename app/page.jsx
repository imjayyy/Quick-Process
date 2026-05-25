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
      <div id="hero"><HeroSection /></div>
      <div id="about"><StatsSection /></div>
      <div id="featured"><FeaturedSection /></div>
      <ClientsCarousel />
      <div id="services"><ExpandingGallery /></div>
      {/* <TestimonialSection /> */}
      <WrapProducts />
      <div id="workflow"><SeamlessWorkflow /></div>
      <ClientReviews />
      <GapWrapper />
      <Footer />
    </div>
  );
}
