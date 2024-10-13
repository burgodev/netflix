import { getVimeoVideo } from "@/src/api/vimeo";

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

  return <PageClient video={video} />;
};

export default Watch;
