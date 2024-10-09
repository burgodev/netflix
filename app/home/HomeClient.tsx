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
  randomIndex: number;
  accessToken: string;
}

const HomeClient: React.FC<HomeClientProps> = ({
  preloadedState,
  videos: propVideos,
  randomIndex,
  accessToken,
}) => {
  const reduxStore = initializeStore(preloadedState);

  console.log("videos", propVideos);

  const videos = propVideos.map((video) => ({
    backgroundImage: video.pictures.base_link,
    overview: video.description,
    link: video.link,
  }));

  return (
    <Provider store={reduxStore}>
      <Stack>
        <Banner video={videos[2]} />

        <VideoList videos={videos} />

        {/* <VideoContentWrapper videos={videos} /> */}
      </Stack>
    </Provider>
  );
};

export default HomeClient;
