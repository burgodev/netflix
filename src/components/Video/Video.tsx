"use client";

import { Video as VideoType } from "@/src/types/api";
import { FC, useState, useRef } from "react";
import Image from "next/image";
import { VideoInfo } from "./components/VideoInfo";
import { useRouter } from "next/navigation";

type VideoProps = {
  video: VideoType;
  isVertical?: boolean;
};

const Video: FC<VideoProps> = ({ video, isVertical }) => {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);
  const hoverTimeout = useRef<NodeJS.Timeout | null>(null);

  const vimeoUrl = video.link;
  const parts = vimeoUrl.split("/");
  const videoId = parts[parts.length - 1];

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

  const onClick = () => {
    router.push(`/watch/${videoId}`);
  };

  return (
    <div
      onClick={onClick}
      className={`relative group transform transition-all duration-300 origin-center${
        isHovered ? "opacity-100 scale-110 z-10 cursor-pointer" : "opacity-75"
      }
      ${
        isVertical
          ? "h-[7.5vw] w-[7.5vw]"
          : "h-[25vh] md:h-[35vh] xl:h-[50vh] min-w-[30vw] sm:min-w-[22.25vw] md:min-w-[18vw]"
      }  
      `}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative w-full h-full">
        <Image
          sizes="(max-width: 768px) 30vw, (max-width: 1200px) 18.25, (max-width: 1400px) 15.25, 30vw"
          className="object-cover rounded-[6px]"
          fill
          alt={`${video.title}`}
          src={video.backgroundImage}
        />
      </div>

      {/* {isHovered && (
        <VideoInfo
          duration={video.duration}
          genres={video.genres}
          display={isHovered}
        />
      )} */}
    </div>
  );
};

export default Video;
