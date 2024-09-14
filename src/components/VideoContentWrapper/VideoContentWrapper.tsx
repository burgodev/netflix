import { FC } from "react";
import { VideoCategory } from "../VideoCategory";
import { VIDEO_CATEGORY_MOCK } from "@/src/api/mocks";

type VideoCategoryProps = {};

const VideoContentWrapper: FC<VideoCategoryProps> = () => {
  return (
    <div className="translate-y-[-10vh] pl-[2.5vw] w-screen">
      {VIDEO_CATEGORY_MOCK.map(({ id, title, fetchUrl }) => (
        <VideoCategory key={id} title={title} fetchUrl={fetchUrl} />
      ))}
    </div>
  );
};

export default VideoContentWrapper;
