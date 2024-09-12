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
    <Stack className="relative h-[50vh] md:h-[45vw] justify-center">
      <div className="inset-0">
        <Image
          src={`${base_url}${backgroundImage}`}
          layout="fill"
          objectFit="cover"
          alt="Netflix Banner"
          objectPosition="top"
          className="object-contain "
        />
      </div>
      <div className="relative flex flex-col pt-36 h-48 gap-4 w-[35.5vw] xl:w-[28.75vw] pl-[2.5vw]">
        <Typography variant="body">{overview}</Typography>

        <Stack className="flex-row gap-3">
          <Button>Play</Button>
          <Button>More Info</Button>
        </Stack>
      </div>
      <div className="absolute bottom-0 w-full h-30 bg-gradient-to-b from-transparent to-black"></div>
    </Stack>
  );
};

export default Banner;
