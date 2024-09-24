import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import RoomsSection from "./components/RoomsSection";
import GallerySection from "./components/GallerySection";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <main>
        <section id="home">
          <HeroSection />
        </section>
        <section id="about">
          <AboutSection />
        </section>
        <section id="rooms">
          <RoomsSection />
        </section>
        <section id="gallery">
          <GallerySection />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
