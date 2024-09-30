"use client";

import { Button, Stack, Typography } from "../atomic";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { usePathname } from "next/navigation";
import {
  getVimeoAccessToken,
  getVimeoVideo,
  getVimeoVideos,
} from "@/src/api/vimeo";

const VideoDisplay = () => {
  const [video, setVideo] = useState<any>(null);
  const pathname = usePathname();

  const videoId = pathname.split("/").filter(Boolean).pop();

  useEffect(() => {
    const fetchVideo = async () => {
      if (videoId) {
        const video = await getVimeoVideo({ videoId });
        setVideo(video);
      }
    };

    fetchVideo();
  }, [videoId]);

  const fetchVideos = async () => {
    const videos = await getVimeoVideos();
    console.log("videos", videos);
    // setVideo(video);
  };

  return (
    <Stack className="gap-4 h-screen w-screen">
      {/* <Button onClick={fetchVideos}>fetch VIDEOS LIST</Button> */}
      {/* TODO: Image */}
      {/* {video && video.pictures.base_link && (
        <img src={video.pictures.base_link} alt="movie banner" />
      )} */}
      {video && video.player_embed_url && (
        <div className="h-screen w-screen">
          <iframe
            src={video.player_embed_url}
            width="100%"
            height="100%"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="Vimeo Video"
          ></iframe>
        </div>
      )}
    </Stack>
  );
};

export default VideoDisplay;
