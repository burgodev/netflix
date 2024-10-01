"use client";

import { useEffect, useState } from "react";

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

  return (
    <>
      {video && video.player_embed_url && (
        <iframe
          src={video.player_embed_url}
          width="100%"
          height="75%"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title={video.name}
        />
      )}
    </>
  );
};

export default VideoDisplay;
