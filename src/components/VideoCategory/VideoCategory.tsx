"use client";

import { FC } from "react";
import { Stack, Typography } from "../atomic";
import { VideoList } from "../VideoList";
import { Video } from "@/src/types/api";

type VideoCategoryProps = {
  title: string;
  fetchUrl: string;
  videos: Video[];
};

const VideoCategory: FC<VideoCategoryProps> = ({ title, videos }) => {
  return (
    <Stack className="overflow-hidden gap-4">
      <Typography variant="h2">{title}</Typography>
      {videos?.length && <VideoList videos={videos} />}
    </Stack>
  );
};

export default VideoCategory;
