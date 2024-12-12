import React from "react";
import Layout from "./utils/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import data from "./data/landing-page.json";
import Service from "./pages/Service";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import PrivacyPolicy from "./components/footerComponents/PrivacyPolicy";
import ReturnPolicy from "./components/footerComponents/ReturnPolicy";
import ScrollToTop from "./elements/ScrollToTop";
import ShippingPolicy from "./components/footerComponents/ShippingPolicy";
import PricingPolicy from "./components/footerComponents/PricingPolicy";
import TermsAndConditions from "./components/footerComponents/TermsAndConditions";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About about={data.about} />} />
          <Route
            path="/services"
            element={<Service service={data.service} />}
          />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/products"
            element={<Products products={data.products} />}
          />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/refund-policy" element={<ReturnPolicy />} />
          <Route path="/shipping-policy" element={<ShippingPolicy />} />
          <Route path="/pricing-policy" element={<PricingPolicy />} />
          <Route
            path="/terms-and-conditions"
            element={<TermsAndConditions />}
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
