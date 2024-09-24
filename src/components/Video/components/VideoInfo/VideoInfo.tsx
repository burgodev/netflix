import { FC } from "react";

import {
  PlayIcon,
  PlusIcon,
  HandThumbUpIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/solid";
import { OutlinedIcon } from "../../../OutlinedIcon";
import { Stack, Typography } from "../../../atomic";
import { Video } from "@/src/types/api";

type VideoInfoProps = Pick<Video, "duration" | "genres"> & {
  display: boolean;
};

const VideoInfo: FC<VideoInfoProps> = ({ duration, genres, display }) => {
  return (
    <Stack
      className={`bg-black transition-opacity duration-300 p-2 sm:p-3 lg:p-4 gap-1 md:gap-2 lg:gap-3 border-radius rounded-[6px]${
        display ? "opacity-100" : "opacity-0"
      }`}
    >
      <Stack className="flex-row justify-between">
        <Stack className="flex-row gap-1 lg:gap-2">
          <OutlinedIcon>
            <PlayIcon className="h-[2vw] w-[2vw] md:h-[1vw] md:w-[1vw] xl:h-[0.9vw] xl:w-[0.9vw] text-white" />
          </OutlinedIcon>
          <OutlinedIcon>
            <PlusIcon className="h-[2vw] w-[2vw] md:h-[1vw] md:w-[1vw] xl:h-[0.9vw] xl:w-[0.9vw] text-white" />
          </OutlinedIcon>
          <OutlinedIcon>
            <HandThumbUpIcon className="h-[2vw] w-[2vw] md:h-[1vw] md:w-[1vw] xl:h-[0.9vw] xl:w-[0.9vw] text-white" />
          </OutlinedIcon>
        </Stack>

        <OutlinedIcon>
          <ChevronDownIcon className="h-[2vw] w-[2vw] md:h-[1vw] md:w-[1vw] xl:h-[0.75vw] xl:w-[0.75vw] text-white" />
        </OutlinedIcon>
      </Stack>
      <Stack className="flex-row gap-2 align-center">
        <Typography variant="span" className="text-[#BCBCBC]">
          {duration}
        </Typography>
      </Stack>

      <Stack className="flex-row flex-wrap gap-3">
        {genres.map((genre) => (
          <Typography key={genre} variant="span">
            {genre}
          </Typography>
        ))}
      </Stack>
    </Stack>
  );
};

export default VideoInfo;
