"use client";

import { FC, useEffect, useState } from "react";
import { Stack, Typography } from "../atomic";
import { Media } from "../Media";
import { Video } from "@/src/types/api";
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
      <Typography variant="body">{title}</Typography>
      <VideoList videos={videos} />
    </Stack>
  );
};

export default VideoCategory;
