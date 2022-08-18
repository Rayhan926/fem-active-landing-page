import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import HeroSection from "./components/HeroSection";
import HowSection from "./components/HowSection";
import NewsLetterSection from "./components/NewsLetterSection";
import WhatWeOfferSection from "./components/WhatWeOfferSection";
import WhySection from "./components/WhySection";

const Home = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <WhySection />
      <HowSection />
      <WhatWeOfferSection />
      <NewsLetterSection />
      <Footer />
    </>
  );
};

export default Home;
