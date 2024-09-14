"use client";

import Image from "next/image";
import { Typography } from "../atomic/Typography";
import { Button, Stack } from "../atomic";
import { useVideoQuery } from "@/src/hooks";
import requests from "@/src/api/requests";
import { base_url } from "../Video/Video";

// TODO: make this component dummy
const Banner = () => {
  const { videos, loading } = useVideoQuery({
    fetchUrl: requests.fetchTopRated,
  });

  if (!videos.length) return null;

  const { backgroundImage, overview } = videos[Math.floor(Math.random() * 20)];

  return (
    <Stack className="relative w-screen h-[50vh] xl:h-[35vw] justify-center">
      <Image
        src={`${base_url}${backgroundImage}`}
        layout="fill"
        objectFit="cover"
        alt="Netflix Banner"
        objectPosition="top"
        className="object-contain"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent h-3/4 bottom-0 mt-auto"></div>
      <div className="relative flex flex-col pt-36 h-48 gap-4 sm:w-[75vw] md:w-[50vw] xl:w-[35vw] pl-[2.5vw]">
        <Typography variant="body">{overview}</Typography>

        <Stack className="flex-row gap-3">
          <Button>Play</Button>
          <Button>More Info</Button>
        </Stack>
      </div>
    </Stack>
  );
};

export default Banner;
