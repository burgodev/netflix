import { getVimeoVideo, getVimeoVideos } from "@/src/api/vimeoApi";

import { cookies } from "next/headers";
import PageClient from "./PageClient";

interface WatchProps {
  params: {
    videoId: string;
  };
}

const Watch = async ({ params }: WatchProps) => {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("accessToken")?.value || "";
  const { videoId } = params;

  const video = await getVimeoVideo({ token: accessToken, videoId });
  const videos = await getVimeoVideos({ token: accessToken });

  return <PageClient video={video} videos={videos} />;
};

export default Watch;
