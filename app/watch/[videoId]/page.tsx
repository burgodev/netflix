"use client";

import { fetchVimeoAccessToken, getVimeoAccessToken } from "@/src/api/vimeo";
import { VideoDisplay } from "@/src/components/VideoDisplay";

const Watch = () => {
  const token = getVimeoAccessToken();

  console.log("token", token);

  if (token === "undefined" || !token) {
    console.log("!token");
    fetchVimeoAccessToken();
  }

  return <VideoDisplay />;
};

export default Watch;
