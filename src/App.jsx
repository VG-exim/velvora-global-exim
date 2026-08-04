import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import Layout from "./layouts/Layout";

import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import ExportMarkets from "./pages/ExportMarkets";
import Contact from "./pages/Contact";

import FloatingContact from "./components/FloatingContact";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 120,
    });

    AOS.refresh();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />} />
          <Route path="export-markets" element={<ExportMarkets />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>

      <FloatingContact />
      <ScrollToTop />
    </>
  );
}

export default App;