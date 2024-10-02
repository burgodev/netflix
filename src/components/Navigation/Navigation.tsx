"use client";

import Link from "next/link";

import { cn } from "@/src/utils/cn";

import React from "react";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const pathname = usePathname();

  return (
    <ul className="hidden sm:flex gap-8 align-center h-fit">
      <li className="h-fit">
        <Link
          href="/home"
          className={cn(
            pathname === "/home" ? "font-medium" : "text-subtext" // TODO: theme
          )}
        >
          Home
        </Link>
      </li>
      {/* <li className="h-fit">
        <Link
          href="/tv-shows"
          className={cn(
            pathname === "/tv-shows" ? "font-medium" : "text-subtext"
          )}
        >
          Tv Shows
        </Link>
      </li>
      <li className="h-fit">
        <Link
          href="/movies"
          className={cn(
            pathname === "/movies" ? "font-medium" : "text-subtext"
          )}
        >
          Movies
        </Link>
      </li>
      <li className="h-fit">
        <Link
          href="/my-list"
          className={cn(
            pathname === "/my-list" ? "font-medium" : "text-subtext"
          )}
        >
          My List
        </Link>
      </li> */}
    </ul>
  );
};

export default Navigation;
