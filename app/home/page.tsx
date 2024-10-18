import { initializeStore } from "@/src/state/store";

import { cookies } from "next/headers";
import HomeClient from "./HomeClient";
import { getVimeoVideos } from "@/src/api/vimeoApi";

const Home = async () => {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("accessToken")?.value || "";

  const preloadedState = { accessToken: { accessToken } };
  const reduxStore = initializeStore(preloadedState);
  const { getState } = reduxStore;

  const videos = await getVimeoVideos({ token: accessToken });

  return <HomeClient preloadedState={getState()} videos={videos} />;
};

export default Home;
