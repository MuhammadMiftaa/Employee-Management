/* eslint-disable no-unused-vars */
import { useState } from "react";

// components
import Header from "../components/HeaderComponent";
import Home from "../components/HomeComponent";
import Business from "../components/BusinessComponents.jsx";
import Profile from "../components/ProfileComponents.jsx";
import Footer from "../components/FooterComponents.jsx";

// css
import "../assets/css/base.css";
import "../assets/css/main.css";
import "../assets/css/slideshow.css";
import "../assets/css/vendor.css";
import React, { useEffect } from "react";

// js
// import $ from "jquery";
import "../assets/js/modernizr.js";
import "../assets/js/pace.min.js";
// import "../assets/js/plugins.js";
// import "../assets/js/main.js";

export default function Landingpage() {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const handleImagesLoaded = () => {
    setImagesLoaded(true);
  };

  return (
    <>
      <Header />
      <Home />
      <Business />
      <Profile />
      <Footer />
    </>
  );
}
