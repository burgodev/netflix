import { Video } from "@/src/types/api";
import { Stack, Typography } from "../atomic";
import { FC } from "react";
import Image from "next/image";

const base_url = "https://image.tmdb.org/t/p/original/";

type VideoProps = {
  video: Video;
};

const Media: FC<VideoProps> = ({ video }) => {
  return (
    <div className="relative group opacity-90 transform transition-transform duration-300 hover:scale-150 hover:z-10 hover:opacity-100">
      <div className="relative w-full h-full min-w-[15vw] min-h-[10vw] flex-1">
        <Image
          className="rounded-[6px]"
          objectFit="cover"
          layout="fill"
          alt={video.title}
          src={`${base_url}${video.backgroundImage}`}
        />
      </div>

      <Stack className="bg-[#141414] h-10vh opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <Stack className="flex-row">1</Stack>
        <Stack className="flex-row">2</Stack>
        <Stack className="flex-row">3</Stack>
      </Stack>
    </div>
  );
};
export default Media;
