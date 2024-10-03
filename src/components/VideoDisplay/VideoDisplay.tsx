"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { getVimeoVideo } from "@/src/api/vimeo";

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
    <div className="min-w-[60%]">
      {video && video.player_embed_url && (
        <iframe
          className="w-[1200px] h-[80vh] aspect-video"
          src={video.player_embed_url}
          width="100%"
          height="50%"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title={video.name}
          // style={{ minWidth: "1200px", minHeight: "675px", background: "red" }} // Set the minimum width and height here
        />
      )}
    </div>
  );
};

export default VideoDisplay;
