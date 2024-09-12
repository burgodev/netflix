"use client";

import { FC } from "react";
import { Stack, Typography } from "../atomic";
import { VideoList } from "../VideoList";
import { useVideoQuery } from "@/src/hooks";

type VideoCategoryProps = {
  title: string;
  fetchUrl: string;
};

const VideoCategory: FC<VideoCategoryProps> = ({ title, fetchUrl }) => {
  const { videos, loading } = useVideoQuery({ fetchUrl });

  return (
    <Stack className="gap-2 min-h-[25vh]">
      <Typography variant="h2">{title}</Typography>
      <VideoList videos={videos} />
    </Stack>
  );
};

export default VideoCategory;
