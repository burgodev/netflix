import { Video } from "@/src/types/api";
import { Typography } from "../atomic";
import { FC } from "react";
import Image from "next/image";

const base_url = "https://image.tmdb.org/t/p/original/";

type VideoProps = {
  video: Video;
};
// TODO: Video
const Media: FC<VideoProps> = ({ video }) => {
  console.log("video", video);
  return (
    <div className="relative min-w-[10vw] min-h-[10vw] flex-1">
      <Image
        objectFit="cover"
        layout="fill"
        alt={video.title}
        src={`${base_url}${
          // isLargeRow ? movie.poster_path : movie.backdrop_path
          video.backgroundImage
        }`}
      />
      {/* <Typography variant={"h1"}>{video.title}</Typography> */}
    </div>
  );
};

export default Media;
