import { Video } from "@/src/types/api";
import { Typography } from "../atomic";
import { FC } from "react";
import Image from "next/image";

const base_url = "https://image.tmdb.org/t/p/original/";

type VideoProps = {
  video: Video;
};

const Media: FC<VideoProps> = ({ video }) => {
  console.log("video", video);
  return (
    <div className="relative w-full h-full min-w-[15vw] min-h-[10vw] flex-1 transform transition-transform duration-300 hover:scale-150 hover:z-10">
      <Image
        objectFit="cover"
        layout="fill"
        alt={video.title}
        // TODO: isLargeRow ? movie.poster_path : movie.backdrop_path
        src={`${base_url}${video.backgroundImage}`}
      />

      {/* <Typography variant={"h1"}>{video.title}</Typography> */}
    </div>
  );
};

export default Media;
