import React from "react";
import Third from "../../Pages/DashBoard/Third"
import Footer from "../../components/Footer";
import Four from "../../Pages/DashBoard/Four"
import Second from "../../Pages/DashBoard/Second"
import Header from "@/components/Header";
import First from "./First";

function Layout() {
  return (
    <div className="flex flex-col gap-10 md:gap-18">
      <Header />
      <First />
      <Second />
      <Third />
      <Four />
      <Footer />
    </div>
  );
}

export default Layout;