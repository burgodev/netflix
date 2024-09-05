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
    <Stack className="overflow-visible flex-row gap-2 translate-y--5vh cursor-pointer">
      {videos.map((video) => (
        <div key={video.id} className="relative">
          <Media video={video} />
        </div>
      ))}
    </Stack>
  );
};

export default VideoList;
