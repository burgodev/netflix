"use client";

import { FC, useEffect, useState } from "react";
import { Stack, Typography } from "../atomic";
import { VideoList } from "../VideoList";
import { fetchVideos } from "@/src/api/fetchVideos";
import { getVimeoVideos } from "@/src/api/vimeo";

type VideoCategoryProps = {
  title: string;
  fetchUrl: string;
};

const VideoCategory: FC<VideoCategoryProps> = ({ title, fetchUrl }) => {
  // const videos = await fetchVideos({ url: fetchUrl });

  const [videos, setVideos] = useState<any>([]);

  useEffect(() => {
    const fetchVideo = async () => {
      const videos = await getVimeoVideos();
      setVideos(videos);
    };

    fetchVideo();
  }, []);

  console.log("videos", videos);

  return (
    <Stack className="min-h-[25vh] overflow-hidden">
      <Typography variant="h2">{title}</Typography>
      <VideoList videos={videos} />
    </Stack>
  );
};

export default VideoCategory;
