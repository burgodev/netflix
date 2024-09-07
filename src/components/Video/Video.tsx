import { Video as VideoType } from "@/src/types/api";

import { FC } from "react";
import Image from "next/image";

import { VideoInfo } from "./components";

const base_url = "https://image.tmdb.org/t/p/original/";

type VideoProps = {
  video: VideoType;
};

const Video: FC<VideoProps> = ({ video }) => {
  return (
    <div className="relative group opacity-90 transform transition-transform duration-300 hover:scale-150 hover:z-10 hover:opacity-100 hover:origin-left">
      <div className="relative w-full h-full min-w-[15vw] min-h-[10vw] flex-1">
        <Image
          className="rounded-[6px]"
          objectFit="cover"
          layout="fill"
          alt={video.title}
          src={`${base_url}${video.backgroundImage}`}
        />
      </div>

      <VideoInfo />
    </div>
  );
};
export default Video;
