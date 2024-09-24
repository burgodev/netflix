"use client";

// import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import netflixLogo from "@/public/netflixlogo.png";
import { Stack } from "../atomic";
import { Navigation } from "../Navigation";
import { useEffect, useState } from "react";
import { cn } from "@/src/utils/cn";
import facebook from "@/src/assets/facebook.svg";

const FacebookIcon = () => facebook;

const Footer = () => {
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

  return <footer className="bg-black z-10 h-[35vh] w-screen"></footer>;
};

export default Footer;
