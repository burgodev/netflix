import { FC } from "react";

import {
  PlayIcon,
  PlusIcon,
  HandThumbUpIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/solid";
import { OutlinedIcon } from "../../OutlinedIcon";
import { Stack, Typography } from "../../atomic";

type VideoInfoProps = {};

const VideoInfo: FC<VideoInfoProps> = () => {
  return (
    <Stack className="bg-[#141414] h-10vh opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 gap-3">
      <Stack className="flex-row justify-between">
        <Stack className="flex-row gap-2">
          <OutlinedIcon>
            <PlayIcon className="h-6 w-6 text-white" />
          </OutlinedIcon>
          <OutlinedIcon>
            <PlusIcon className="h-6 w-6 text-white" />
          </OutlinedIcon>
          <OutlinedIcon>
            <HandThumbUpIcon className="h-6 w-6 text-white" />
          </OutlinedIcon>
        </Stack>

        <OutlinedIcon>
          <ChevronDownIcon className="h-6 w-6 text-white" />
        </OutlinedIcon>
      </Stack>
      <Stack className="flex-row gap-2 align-center">
        <Typography variant="small">16</Typography>
        <Typography variant="small">Limited Series</Typography>
        <Typography variant="small">HD</Typography>
      </Stack>
      <Stack className="flex-row gap-2  align-center">
        <Typography variant="small">Action</Typography>
        <Typography variant="small">Thriller</Typography>
        <Typography variant="small">Fantasy</Typography>
      </Stack>
    </Stack>
  );
};
export default VideoInfo;
