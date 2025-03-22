
import React, { useState, useEffect } from "react";
import Logo from "../assets/PLogo.png";
import { MdOutlineArrowDropDown, MdMenu } from "react-icons/md"; // Import hamburger menu icon
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false); // State to manage the sheet visibility

  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      // Check if page is scrolled more than 10px
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    // Add event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);
  

  return (
    <nav
      className={`fixed top-0 w-full z-70 transition-all duration-300 ${
        scrolled ? "bg-white/70 backdrop-blur-md shadow-sm" : "bg-white"
      }`}
    >
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between px-4 md:px-14 py-6">
        <Link to="#">
        <div>
          <img src={Logo} alt="Logo" className=" h-5 w-35 object-cover" />
        </div>
        </Link>

        <div className="hidden md:flex gap-6">
          <Link className="hover:text-blue-600 transition-colors">Home</Link>
          <Link className="hover:text-blue-600 transition-colors">FAQs</Link>
          <div className="flex items-center gap-1 hover:text-blue-600 transition-colors cursor-pointer">
            <Link>Industries</Link>
            <MdOutlineArrowDropDown />
          </div>
          <Link className="hover:text-blue-600 transition-colors">Blogs</Link>
        </div>
        <div className="flex gap-2">
          <Button className="px-4 py-2 rounded-[40px]">Contact Us</Button>
          {/* Mobile View */}
          <div className="flex items-center gap-4 md:hidden">
            {/* Hamburger Menu Icon */}
            <div className="cursor-pointer" onClick={() => setOpen(!open)}>
              <MdMenu size={24} />
            </div>
          </div>
        </div>
      </div>

      {/* Sheet for mobile menu */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent className="z-100">
          <SheetHeader>
            <SheetTitle>
              {" "}
              {/* <div>
                <img src={Logo} alt="Logo" className=" h-4 w-30 object-cover" />
              </div> */}
            </SheetTitle>
          </SheetHeader>
          <div className="flex flex-col gap-4 pl-6">
            <Link
              onClick={() => setOpen(false)}
              className="text-lg hover:text-blue-600"
            >
              Home
            </Link>
            <Link
              onClick={() => setOpen(false)}
              className="text-lg hover:text-blue-600"
            >
              FAQs
            </Link>
            <Link
              onClick={() => setOpen(false)}
              className="text-lg hover:text-blue-600"
            >
              Industries
            </Link>
            <Link
              onClick={() => setOpen(false)}
              className="text-lg hover:text-blue-600"
            >
              Blogs
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default Header;
