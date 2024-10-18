"use client";

import { Provider } from "react-redux";
import { Stack, VideoList } from "@/src/components";
import { Banner } from "@/src/components/Banner";
import { VideoContentWrapper } from "@/src/components/VideoContentWrapper";
import { AppState, initializeStore } from "@/src/state/store";
import { Video } from "@/src/types/api";

interface HomeClientProps {
  preloadedState: AppState;
  videos: Video[];
}

const HomeClient: React.FC<HomeClientProps> = ({ preloadedState, videos }) => {
  const reduxStore = initializeStore(preloadedState);

  return (
    <Provider store={reduxStore}>
      <Stack>
        <Banner video={videos[0]} />
        <VideoContentWrapper videos={videos} />
      </Stack>
    </Provider>
  );
};

export default HomeClient;
