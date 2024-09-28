"use client";

import { Button, Stack, Typography } from "../atomic";
import { useEffect, useState } from "react";

import { usePathname } from "next/navigation";
import {
  getVimeoAccessToken,
  getVimeoVideo,
  getVimeoVideos,
} from "@/src/api/vimeo";

const VideoDisplay = () => {
  const [video, setVideo] = useState<any>(null);

  console.log("video", video);

  const fetchVideos = async () => {
    const video = await getVimeoVideo();
    setVideo(video);
  };

  return (
    <Stack className="gap-4 h-screen w-screen">
      <Button onClick={getVimeoAccessToken}>get token</Button>
      <Button onClick={fetchVideos}>fetch video</Button>

      {video && video.player_embed_url && (
        <div className="video-container">
          <iframe
            src={video.player_embed_url}
            width="100%"
            height="480"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="Vimeo Video"
          ></iframe>
        </div>
      )}

      {/* {video && <div dangerouslySetInnerHTML={{ __html: video.embed.html }} />} */}
      {/* <div className="bg-black z-10 h-[35vh] w-[100%] flex items-end justify-center align-bottom pb-[24px]">
        <div>
          <iframe
            src="https://player.vimeo.com/video/1013889575?h=cc1499705a"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
            // style="position:absolute;top:0;left:0;width:100%;height:100%;"
            title="Gravação de tela de 15-07-2024 20_26_44"
          ></iframe>
        </div>
        {/* <script src="https://player.vimeo.com/api/player.js"></script> */}
      {/* </div>  */}
    </Stack>
  );
};

export default VideoDisplay;
