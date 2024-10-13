"use client";

import { Provider } from "react-redux";
import { Stack, VideoList } from "@/src/components";
import { Banner } from "@/src/components/Banner";
import { VideoContentWrapper } from "@/src/components/VideoContentWrapper";
import { AppState, initializeStore } from "@/src/state/store";
import { Video } from "@/src/types/api";
import { VideoDisplay } from "@/src/components/VideoDisplay";
import { VideoPlaylist } from "@/src/components/VideoPlaylist";

interface PageClientProps {
  preloadedState: AppState;
  videos: Video[];
  randomIndex: number;
  accessToken: string;
}

const PageClient: React.FC<PageClientProps> = ({
  preloadedState,
  videos: propVideos,
  randomIndex,
  accessToken,
}) => {
  const reduxStore = initializeStore(preloadedState);

  console.log("propVideos", propVideos);

  return (
    <Provider store={reduxStore}>
      <Stack className="h-screen w-screen flex-row mt-[85px]">
        <VideoDisplay video={propVideos[0]} />
        <VideoPlaylist />
      </Stack>
    </Provider>
  );
};

export default PageClient;
