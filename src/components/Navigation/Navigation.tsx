"use client";

import Link from "next/link";

import { cn } from "@/src/utils/cn";

import React from "react";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const pathname = usePathname();

  console.log("pathname", pathname);

  return (
    <ul className="flex gap-8 align-center h-fit">
      <li className="h-fit">
        <Link
          href="/home"
          className={cn(
            pathname === "/home" ? "font-medium" : "text-[#e5e5e5]" // TODO: theme
          )}
        >
          Home
        </Link>
      </li>
      <li className="h-fit">
        <Link
          href="/tv-shows"
          className={cn(
            pathname === "/tv-shows" ? "font-medium" : "text-[#e5e5e5]"
          )}
        >
          Tv Shows
        </Link>
      </li>
      <li className="h-fit">
        <Link
          href="/movies"
          className={cn(
            pathname === "/movies" ? "font-medium" : "text-[#e5e5e5]"
          )}
        >
          Movies
        </Link>
      </li>
      <li className="h-fit">
        <Link
          href="/my-list"
          className={cn(
            pathname === "/my-list" ? "font-medium" : "text-[#e5e5e5]"
          )}
        >
          My List
        </Link>
      </li>
    </ul>
  );
};

export default Navigation;
