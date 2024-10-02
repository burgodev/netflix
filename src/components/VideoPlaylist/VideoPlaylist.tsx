"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { getVimeoVideo } from "@/src/api/vimeo";
import { Stack, Typography } from "../atomic";

const VideoPlaylist = () => {
  return (
    <Stack className="gap-4">
      <Typography>Video 1</Typography>
      <Typography>Video 2</Typography>
      <Typography>Video 3</Typography>
      <Typography>Video 4</Typography>
      <Typography>Video 5</Typography>
    </Stack>
  );
};

export default VideoPlaylist;
