"use client";

import { Stack } from "@/src/components";

import { Video } from "@/src/types/api";
import { VideoDisplay } from "@/src/components/VideoDisplay";
import { VideoPlaylist } from "@/src/components/VideoPlaylist";

interface PageClientProps {
  video: Video;
}

const PageClient: React.FC<PageClientProps> = ({ video }) => {
  return (
    <Stack className="h-screen w-screen flex-row mt-[85px]">
      <VideoDisplay video={video} />
      <VideoPlaylist />
    </Stack>
  );
};

export default PageClient;
