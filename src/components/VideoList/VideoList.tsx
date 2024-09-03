"use client";

import requests from "@/src/api/requests";
import { tmdbVideoToVideo } from "@/src/mappers/tmdbVideoToVideo";
import { Video } from "@/src/types/api";

import { useEffect, useState } from "react";
import { Stack, Typography } from "../atomic";
import { Media } from "../Media";

const VideoList = () => {
  const [videos, setVideos] = useState<Video[]>();

  useEffect(() => {
    const fetchData = async () => {
      const url = requests.fetchTrending;

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        const arr = tmdbVideoToVideo(json.results);

        setVideos(arr);

        console.log(json);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <Stack className="overflow-x-auto gap-2">
      {videos?.map((media) => (
        <Media video={media} key={media.id} />
      ))}
    </Stack>
  );
};

export default VideoList;
