import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";



const Home = lazy(() => import("./components/Home/Hero"));
const About = lazy(() => import("./components/About/About"));
const Tiles = lazy(() => import("./components/Tiles/Tiles"));
const Sanitaryware = lazy(()=> import("./components/Sanitaryware/Sanitaryware"))
const BathFittings = lazy(() => import("./components/BathFittings/BathFittings"))
const GalleryHero = lazy (()=>import("./components/Gallery/GalleryHero"))
const Contact = lazy (()=> import("./components/Contact/Contact"))
function App() {
  return (
    <>
     
      <Navbar />
      <ScrollToTop />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/tiles" element={<Tiles />} />
          <Route path="/sanitaryware" element={<Sanitaryware />}/>
          <Route path="/bath-fittings" element={<BathFittings/>}/>
          <Route path="/gallery" element={<GalleryHero/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </Suspense>

      <Footer />
    </>
  );
}

export default App;