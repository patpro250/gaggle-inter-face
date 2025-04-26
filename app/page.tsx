import React from "react";
import BrandVideoCard from "./component/web/branding/page";
import HeroBanner from "./component/web/burner/page";
import Navbar from "./component/web/nav/page";
import TestimonialsSection from "./component/web/testmony/page";
import FeaturesSection from "./component/web/features/page";
import PlansSection from "./component/web/plan/page";
import CallToAction from "./component/web/calltoaction/page";
import Footer from "./component/web/footer/page";

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
