import {
  fetchVimeoAccessToken,
  getVimeoAccessToken,
  getVimeoVideo,
  getVimeoVideos,
} from "@/src/api/vimeo";
import { Stack } from "@/src/components";
import { VideoDisplay } from "@/src/components/VideoDisplay";
import { VideoPlaylist } from "@/src/components/VideoPlaylist";
import { initializeStore } from "@/src/state/store";
import { cookies } from "next/headers";
import PageClient from "./PageClient";

export type WatchProps = {
  params: {
    videoId: string;
  };
};

const Watch = async ({ params }: WatchProps) => {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("accessToken")?.value || "";
  const { videoId } = params;

  const preloadedState = { accessToken: { token: accessToken } };
  const reduxStore = initializeStore(preloadedState);
  const { getState } = reduxStore;

  const videos = await getVimeoVideos(accessToken);
  const video = await getVimeoVideo({ token: accessToken, videoId });

  return (
    // TODO: is this the best way of compensating for header height?

    <PageClient
      preloadedState={getState()}
      accessToken={accessToken}
      videos={videos}
      video={video}
    />
  );
};

export default Watch;
