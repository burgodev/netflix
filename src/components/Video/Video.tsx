"use client";

import { Video as VideoType } from "@/src/types/api";
import { FC, useState, useRef } from "react";
import Image from "next/image";
import { VideoInfo } from "./components/VideoInfo";

type VideoProps = {
  video: VideoType;
  hoverAlign?: "left" | "center";
};

const Video: FC<VideoProps> = ({ video, hoverAlign = "center" }) => {
  const [isHovered, setIsHovered] = useState(false);
  const hoverTimeout = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    hoverTimeout.current = setTimeout(() => {
      setIsHovered(true);
    }, 500);
  };

  const handleMouseLeave = () => {
    if (hoverTimeout.current) {
      clearTimeout(hoverTimeout.current);
      hoverTimeout.current = null;
    }
    setIsHovered(false);
  };

  return (
    <div
      className={`relative h-[20vh] min-w-[30vw] sm:min-w-[22.25vw] md:min-w-[18.25vw] lg:min-w-[15.25vw] group transform transition-all duration-300 ${
        isHovered ? "opacity-100 scale-150 z-10 cursor-pointer" : "opacity-75"
      } ${hoverAlign === "left" ? "origin-left" : "origin-center"}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="w-full h-full min-w-[15vw]">
        <Image
          objectFit="cover"
          layout="fill"
          alt={video.title}
          src={video.backgroundImage}
        />
      </div>

      {isHovered && (
        <VideoInfo
          duration={video.duration}
          genres={video.genres}
          display={isHovered}
        />
      )}
    </div>
  );
};

export default Video;
