import { FC } from "react";
import { Stack } from "../atomic";
import { Video } from "../Video";
import { Video as VideoType } from "@/src/types/api";

type VideoListProps = {
  videos: VideoType[];
};

const VideoList: FC<VideoListProps> = ({ videos }) => {
  return (
    <Stack className="overflow-visible flex-row gap-2 cursor-pointer">
      {videos.map((video, i) => (
        <Video
          video={video}
          hoverAlign={i === 0 ? "left" : "center"}
          key={video.id}
        />
      ))}
    </Stack>
  );
};

export default VideoList;
