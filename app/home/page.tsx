import { fetchVideos } from "@/src/api/fetchVideos";
import requests from "@/src/api/requests";
import { initializeStore } from "@/src/state/store";

import { cookies } from "next/headers";
import HomeClient from "./HomeClient";
import { getVimeoVideos } from "@/src/api/vimeo";

const randomIndex = Math.floor(Math.random() * 20);

const Home = async () => {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("accessToken")?.value || "";

  const preloadedState = { accessToken: { token: accessToken } };
  const reduxStore = initializeStore(preloadedState);
  const { getState } = reduxStore;

  const videosTest = await getVimeoVideos(accessToken);

  // Fetch videos
  const videos = await fetchVideos({ url: requests.fetchTopRated });

  return (
    <HomeClient
      preloadedState={getState()}
      accessToken={accessToken}
      videos={videosTest}
      randomIndex={randomIndex}
    />
  );
};

export default Home;
