import { fetchVideos } from "@/src/api/fetchVideos";
import requests from "@/src/api/requests";
import { getVimeoVideos } from "@/src/api/vimeo";
import { Stack } from "@/src/components";
import { Banner } from "@/src/components/Banner";
import { VideoContentWrapper } from "@/src/components/VideoContentWrapper";
import { VideoDisplay } from "@/src/components/VideoDisplay";
// import { auth } from "@clerk/nextjs/server";

const randomIndex = Math.floor(Math.random() * 20);

const Home = async () => {
  const videos = await fetchVideos({ url: requests.fetchTopRated });
  // const vimeoVideos = await getVimeoVideos();

  // console.log("vimeoVideos", vimeoVideos);

  // auth().protect();

  return (
    <Stack>
      <VideoDisplay />
    </Stack>
  );
};

export default Home;
