import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Card from "@/components/Card";
import Second from "@/Pages/DashBoard/Second";
import Header from "@/components/Header";
import Layout from "@/Pages/DashBoard/Layout";
import First from "@/Pages/DashBoard/First";

function AppRoute() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/second" element={<Second />} />
        <Route path="/header" element={<Header />} />
        <Route path="/first" element={<First />} />
      </Routes>
    </Router>
  );
}

export default AppRoute;
