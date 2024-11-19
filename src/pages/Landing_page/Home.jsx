import React, { useState } from "react";
import Hero from "../../components/home/Hero";
import FeaturesSection from "../../components/home/Features";
import HomeListing from "../../components/home/HomeListing";
import CTA from "../../components/home/CTA";

const Home = () => {

  return (
    <>
      <Hero />
      <FeaturesSection />
      <HomeListing />
      <CTA />
    </>
  );
};

export default Home;