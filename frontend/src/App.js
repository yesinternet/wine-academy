import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import HeaderWithSubmenu from "@/components/HeaderWithSubmenu";
import HeroSlider from "@/components/HeroSlider";
import FeaturesSection from "@/components/FeaturesSection";
import Categories from "@/components/Categories";
import FeaturedProducts from "@/components/FeaturedProducts";
import SpecialOffers from "@/components/SpecialOffers";
import AboutSection from "@/components/AboutSection";
import TestimonialsSlider from "@/components/TestimonialsSlider";
import BlogSection from "@/components/BlogSection";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import AgeVerification from "@/components/AgeVerification";

const Home = () => {
  return (
    <div style={{ background: '#ffffff' }}>
      <AgeVerification />
      <HeaderWithSubmenu />
      <HeroSlider />
      <FeaturesSection />
      <Categories />
      <FeaturedProducts />
      <SpecialOffers />
      <AboutSection />
      <TestimonialsSlider />
      <BlogSection />
      <Newsletter />
      <Footer />
      <Toaster position="top-right" />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
