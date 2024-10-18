import { fetchVideos } from "@/src/api/fetchVideos";
import requests from "@/src/api/requests";
import { initializeStore } from "@/src/state/store";

import { cookies } from "next/headers";
import HomeClient from "./HomeClient";
import { getVimeoVideos } from "@/src/api/vimeoApi";

const randomIndex = Math.floor(Math.random() * 20);

const Home = async () => {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("accessToken")?.value || "";

  const preloadedState = { accessToken: { accessToken } };
  const reduxStore = initializeStore(preloadedState);
  const { getState } = reduxStore;

  const videos = await getVimeoVideos({ token: accessToken });

  return (
    <HomeClient
      preloadedState={getState()}
      accessToken={accessToken}
      videos={videos}
      randomIndex={randomIndex}
    />
  );
};

export default Home;
