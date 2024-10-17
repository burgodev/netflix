"use client";

import { Stack } from "@/src/components";

import { Video } from "@/src/types/api";
import { VideoDisplay } from "@/src/components/VideoDisplay";
import { VideoPlaylist } from "@/src/components/VideoPlaylist";

interface PageClientProps {
  video: Video;
  videos: Video[];
}

const PageClient: React.FC<PageClientProps> = ({ video, videos }) => {
  return (
    <Stack className="w-screen flex-row py-[85px] px-[24px] gap-8">
      <VideoDisplay video={video} />
      <VideoPlaylist videos={videos} />
    </Stack>
  );
};

export default PageClient;
