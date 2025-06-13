import BrandVideoCard from "@/component2/web/branding/page";
import HeroBanner from "@/component2/web/burner/page";
import CallToAction from "@/component2/web/calltoaction/page";
import FeaturesSection from "@/component2/web/features/page";
import Navbar from "@/component2/web/nav/page";
import PlansSection from "@/component2/web/plan/page";
import TestimonialsSection from "@/component2/web/testmony/page";
import Footer from "./catalog/Footer";

const Home = () => {
  return (
    <div className=" bg-amber-0 overflow-y-scroll h-screen">
      <Navbar />

      <HeroBanner />

      <FeaturesSection />

      <PlansSection />

      <TestimonialsSection />

      <BrandVideoCard />

      <CallToAction />

      <Footer />
    </div>
  );
};

export default Home;
