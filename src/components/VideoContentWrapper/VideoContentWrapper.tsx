import { FC } from "react";
import { VideoCategory } from "../VideoCategory";
import { VIDEO_CATEGORY_MOCK } from "@/src/api/mocks";
import { Stack } from "../atomic";

type VideoCategoryProps = {};

const VideoContentWrapper: FC<VideoCategoryProps> = () => {
  return (
    <Stack className="pl-[16px] sm:pl-[2.5vw] pt-[2vh] w-screen gap-[5vh]">
      {VIDEO_CATEGORY_MOCK.map(({ id, title, fetchUrl }) => (
        <VideoCategory key={id} title={title} fetchUrl={fetchUrl} />
      ))}
    </Stack>
  );
};

export default VideoContentWrapper;
