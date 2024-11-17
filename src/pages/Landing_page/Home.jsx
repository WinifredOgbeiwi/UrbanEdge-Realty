import React from 'react'
import Hero from '../../components/home/Hero'
import FeaturesSection from "../../components/home/Features";
import HomeListing from '../../components/home/HomeListing';

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturesSection />
      <HomeListing/>
    </>
  );
}

export default Home