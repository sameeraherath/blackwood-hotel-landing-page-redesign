import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import RoomsSection from "./components/RoomsSection";
import GallerySection from "./components/GallerySection";
import Footer from "./components/Footer";
import ContactPage from "./pages/ContactPage";

const ScrollToSection = () => {
  const { hash } = useLocation(); // Get the current URL hash

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash); // Find the element based on the hash
      if (element) {
        element.scrollIntoView({ behavior: "smooth" }); // Scroll smoothly to the element
      }
    }
  }, [hash]); // Trigger the effect whenever the hash changes

  return null;
};

const App = () => {
  return (
    <Router>
      <ScrollToSection />{" "}
      {/* Component that handles scrolling based on the hash */}
      <Navbar />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
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
              </>
            }
          />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
