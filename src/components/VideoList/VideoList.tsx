"use client";

import { FC, useState } from "react";
import { Stack } from "../atomic";
import { Video } from "../Video";
import { Video as VideoType } from "@/src/types/api";
import { useVideoListNavigation } from "./hooks";

type VideoListProps = {
  videos: VideoType[];
};

const VideoList: FC<VideoListProps> = ({ videos }) => {
  const { handleScrollLeft, handleScrollRight, translateX } =
    useVideoListNavigation();

  return (
    <div className="relative">
      <button
        onClick={handleScrollLeft}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-40"
      >
        &lt;
      </button>
      <Stack
        className="relative overflow-visible flex-row gap-2 cursor-pointer transition-transform duration-500 hover:z-20"
        style={{ transform: `translateX(${translateX}vw)` }}
      >
        {videos.map((video, i) => (
          <Video
            video={video}
            hoverAlign={i === 0 ? "left" : "center"}
            key={video.id}
          />
        ))}
      </Stack>
      <button
        onClick={handleScrollRight}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-40"
      >
        &gt;
      </button>
    </div>
  );
};

export default VideoList;
