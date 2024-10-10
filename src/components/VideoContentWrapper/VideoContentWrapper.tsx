import { FC } from "react";
import { VideoCategory } from "../VideoCategory";
import { VIDEO_CATEGORY_MOCK } from "@/src/api/mocks";
import { Stack } from "../atomic";
import { Video } from "@/src/types/api";

interface VideoCategoryProps {
  videos: Video[];
}

const VideoContentWrapper: FC<VideoCategoryProps> = ({ videos }) => {
  return (
    <Stack className="px-[16px] sm:px-[2.5vw] pt-[2vh] w-screen gap-[5vh] pb-[25vh]">
      {VIDEO_CATEGORY_MOCK.map(({ id, title, fetchUrl }) => (
        <VideoCategory
          key={id}
          title={title}
          fetchUrl={fetchUrl}
          videos={videos}
        />
      ))}
    </Stack>
  );
};

export default VideoContentWrapper;
