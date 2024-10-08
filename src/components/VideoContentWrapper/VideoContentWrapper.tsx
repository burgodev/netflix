import { FC } from "react";
import { VideoCategory } from "../VideoCategory";
import { VIDEO_CATEGORY_MOCK } from "@/src/api/mocks";
import { Stack } from "../atomic";

type VideoCategoryProps = {};

const VideoContentWrapper: FC<VideoCategoryProps> = () => {
  return (
    <Stack className="px-[16px] sm:px-[2.5vw] pt-[2vh] w-screen gap-[5vh] pb-[25vh]">
      {VIDEO_CATEGORY_MOCK.filter((item, i) => i === 0).map(
        ({ id, title, fetchUrl }) => (
          <VideoCategory key={id} title={title} fetchUrl={fetchUrl} />
        )
      )}
    </Stack>
  );
};

export default VideoContentWrapper;
