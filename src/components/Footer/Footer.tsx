"use client";

import { Typography } from "../atomic";
import { useEffect, useState } from "react";

import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (pathname === "/") return null;

  return (
    <footer className="bg-black z-10 h-[35vh] w-screen flex items-end justify-center align-bottom pb-[24px]">
      <Typography variant="span" className="text-[#9b9b9b]">
        @2024 by burgodev
      </Typography>
    </footer>
  );
};

export default Footer;
