"use client";

import { FC } from "react";
import { Stack } from "../atomic";
import { Media } from "../Media";
import { Video } from "@/src/types/api";

type VideoListProps = {
  videos: Video[];
};

const VideoList: FC<VideoListProps> = ({ videos }) => {
  return (
    <Stack className="overflow-x-auto flex-row gap-2 translate-y--5vh">
      {videos.map((video) => (
        <Media video={video} key={video.id} />
      ))}
    </Stack>
  );
};

export default VideoList;
