"use client";

import Link from "next/link";
import { Stack } from "../atomic/Stack";
import { cn } from "@/src/utils/cn";
import { Typography } from "../atomic";
import { useRouter } from "next/router";
import React from "react";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const pathname = usePathname();

  console.log("pathname", pathname);

  return (
    <Stack className="align-center">
      <ul className="flex gap-8">
        <li>
          <Link href="/home">
            <Typography
              variant="body"
              className={cn(
                pathname === "/home" ? "font-medium" : "text-[#e5e5e5]" // TODO: theme
              )}
            >
              Home
            </Typography>
          </Link>
        </li>
        <li>
          <Link
            href="/tv-shows"
            className={cn(
              pathname === "/tv-shows" ? "font-medium" : "text-[#e5e5e5]"
            )}
          >
            Tv Shows
          </Link>
        </li>
        <li>
          <Link
            href="/movies"
            className={cn(
              pathname === "/movies" ? "font-medium" : "text-[#e5e5e5]"
            )}
          >
            Movies
          </Link>
        </li>
        <li>
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
    </Stack>
  );
};

export default Navigation;
