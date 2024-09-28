"use client";

// import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import netflixLogo from "@/public/netflixlogo.png";
import { Stack } from "../atomic";
import { Navigation } from "../Navigation";
import { useEffect, useState } from "react";
import { cn } from "@/src/utils/cn";
import { usePathname } from "next/navigation";

const Header = () => {
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

  const handleLogoClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (pathname !== "/home") return null;

  return (
    <header className="fixed z-10 w-screen">
      {/* TODO: Do I need this extra div? */}
      <div
        className={cn(
          "flex justify-between px-[2.5vw] lg:py-6 m-auto transition-colors duration-300",
          isScrolled
            ? "bg-black"
            : "bg-[linear-gradient(180deg,rgba(0,0,0,.7)_10%,transparent)]"
        )}
      >
        <Stack className="gap-8 flex-row items-center">
          <Image
            onClick={handleLogoClick}
            className="object-contain cursor-pointer"
            src={netflixLogo}
            alt="Netflix logo"
            width={120}
          />
          <Navigation />
        </Stack>

        <div></div>

        {/* <SignedOut>
          <div className="bg-primary py-3 px-5 rounded-[6px] font-semibold">
            <SignInButton />
          </div>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn> */}
      </div>
    </header>
  );
};

export default Header;
