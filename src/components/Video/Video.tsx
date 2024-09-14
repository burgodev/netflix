import { Video as VideoType } from "@/src/types/api";

import { FC } from "react";
import Image from "next/image";

import { VideoInfo } from "./components/VideoInfo";

export const base_url = "https://image.tmdb.org/t/p/original/"; // todo: remove this from here

type VideoProps = {
  video: VideoType;
  hoverAlign: "left" | "center"; // todo
};

const Video: FC<VideoProps> = ({ video }) => {
  return (
    <div className="relative h-[20vh] w-[15vw] group transform transition-transform opacity-75 hover:opacity-100 duration-300 hover:cursor-pointer hover:scale-150 hover:z-10 hover:origin-left">
      <div className="w-full h-full min-w-[15vw] min-h-[10vw] flex-1">
        <Image
          className="rounded-[6px]"
          objectFit="cover"
          layout="fill"
          alt={video.title}
          src={`${base_url}${video.backgroundImage}`}
        />
      </div>

      <VideoInfo duration={video.duration} genres={video.genres} />
    </div>
  );
};
export default Video;
