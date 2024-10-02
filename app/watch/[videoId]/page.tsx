"use client";

import { fetchVimeoAccessToken, getVimeoAccessToken } from "@/src/api/vimeo";
import { Stack } from "@/src/components";
import { VideoDisplay } from "@/src/components/VideoDisplay";
import { VideoPlaylist } from "@/src/components/VideoPlaylist";

const Watch = () => {
  const token = getVimeoAccessToken();

  console.log("token", token);

  if (token === "undefined" || !token) {
    console.log("!token");
    fetchVimeoAccessToken();
  }

  return (
    // TODO: is this the best way of compensating for header height?
    <Stack className="h-screen w-screen flex-row mt-[85px]"> 
      <VideoDisplay />
      <VideoPlaylist />
    </Stack>
  );
};

export default Watch;
