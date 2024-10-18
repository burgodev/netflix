"use client";

import { FC } from "react";
import { Stack } from "../atomic";
import { Video } from "../Video";
import { Video as VideoType } from "@/src/types/api";
import { useVideoListNavigation } from "./hooks";

type VideoListProps = {
  videos: VideoType[];
};

const VideoList: FC<VideoListProps> = ({ videos }) => {
  const {
    handleScrollLeft,
    handleScrollRight,
    translateX,
    hasOverflowLeft,
    hasOverflowRight,
  } = useVideoListNavigation(videos.length);

  return (
    <div className="relative">
      {hasOverflowLeft && (
        <button
          onClick={handleScrollLeft}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-40 h-[42px] w-[42px]"
        >
          &lt;
        </button>
      )}
      <Stack
        className="relative overflow-visible flex-row gap-[1.5vw] cursor-pointer transition-transform duration-500 hover:z-20 pl-[16px] py-[16px] items-center"
        style={{ transform: `translateX(${translateX}vw)` }}
      >
        {videos.map((video, i) => (
          <Video video={video} key={video.id} />
        ))}
      </Stack>
      {hasOverflowRight && (
        <button
          onClick={handleScrollRight}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-40 h-[42px] w-[42px]"
        >
          &gt;
        </button>
      )}
    </div>
  );
};

export default VideoList;
