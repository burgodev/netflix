import { FC } from "react";
import { Stack, Typography } from "../atomic";
import { VideoList } from "../VideoList";
import { fetchVideos } from "@/src/api/fetchVideos";

type VideoCategoryProps = {
  title: string;
  fetchUrl: string;
};

const VideoCategory: FC<VideoCategoryProps> = async ({ title, fetchUrl }) => {
  const videos = await fetchVideos({ url: fetchUrl });

  return (
    <Stack className="gap-2 min-h-[25vh]">
      <Typography variant="h2">{title}</Typography>
      <VideoList videos={videos} />
    </Stack>
  );
};

export default VideoCategory;
