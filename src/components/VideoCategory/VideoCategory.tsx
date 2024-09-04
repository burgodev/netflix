"use client";

import { FC, useEffect, useState } from "react";
import { Stack, Typography } from "../atomic";
import { Media } from "../Media";
import { Video } from "@/src/types/api";
import { VideoList } from "../VideoList";
import { useVideoQuery } from "@/src/hooks";

type VideoCategoryProps = {
  title: string;
  videos: Video[];
};

const VideoCategory: FC<VideoCategoryProps> = ({ title, videos }) => {
  return (
    <Stack className="gap-2">
      <Typography variant="body">{title}</Typography>
      <VideoList videos={videos} />
    </Stack>
  );
};

export default VideoCategory;
