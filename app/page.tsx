import React from "react";
import BrandVideoCard from "./component/web/branding/page";
import HeroBanner from "./component/web/burner/page";
import Navbar from "./component/web/nav/page";

const Home = () => {
  return (
    <div className=" bg-amber-0 overflow-y-scroll h-screen">
      <Navbar />
      <HeroBanner />
      <BrandVideoCard />
    </div>
  );
};

export default Home;
