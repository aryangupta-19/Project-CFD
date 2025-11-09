import { Routes, Route } from "react-router-dom";
import * as React from 'react';
import Navbar from "./components/navbar.jsx";
import "./components/app.css";
import Portfolio from "./components/Portfolio.jsx";
import Market from "./components/Market.jsx";


export default function ButtonAppBar() {
  return (
    <>
    {/* Navbar stays on all pages */}
    <Navbar />

    {/* Routes */}
    <Routes>
      <Route path="/" element={<Market />} />
      <Route path="/portfolio" element={<Portfolio />} />
      {/* <Route path="/history" element={<History />} /> */}
      {/* <Route path="/about" element={<About />} /> */}
    </Routes>
  </>
  );
}
 