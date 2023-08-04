import React from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Features from "./Components/Features";
import LongFeatures from "./Components/LongFeatures";
import Mics from "./Components/Mics";
import Map from "./Components/Map";
import Work from "./Components/Work";
import Join from "./Components/Join";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div className="min-h-screen w-full bg-[#060623] text-white font-Inter">
      <Header />
      <Hero />
      <Features />
      <LongFeatures />
      <Mics />
      <Map />
      <Work />
      <Join />
      <Footer />
    </div>
  );
};

export default App;
