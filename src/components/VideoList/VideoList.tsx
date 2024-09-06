"use client";

import { FC } from "react";
import { Stack } from "../atomic";
import { Video } from "../Video";
import { Video as VideoType } from "@/src/types/api";

type VideoListProps = {
  videos: VideoType[];
};

const VideoList: FC<VideoListProps> = ({ videos }) => {
  return (
    <Stack className="overflow-visible flex-row gap-2 translate-y--5vh cursor-pointer">
      {videos.map((video) => (
        <div key={video.id} className="relative">
          <Video video={video} />
        </div>
      ))}
    </Stack>
  );
};

export default VideoList;
