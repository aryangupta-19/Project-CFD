import { Routes, Route } from "react-router-dom";
import * as React from 'react';
import Navbar from "./navbar.jsx";
import "./app.css";
import Portfolio from "./Portfolio.jsx";
import Market from "./Market.jsx";


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
