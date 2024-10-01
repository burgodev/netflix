"use client";

import { fetchVimeoAccessToken, getVimeoAccessToken } from "@/src/api/vimeo";
import { Stack } from "@/src/components";
import { VideoDisplay } from "@/src/components/VideoDisplay";

const Watch = () => {
  const token = getVimeoAccessToken();

  console.log("token", token);

  if (token === "undefined" || !token) {
    console.log("!token");
    fetchVimeoAccessToken();
  }

  return (
    <Stack className="h-screen w-screen items-center justify-center">
      <VideoDisplay />
    </Stack>
  );
};

export default Watch;
