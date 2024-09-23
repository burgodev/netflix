import { fetchVideos } from "@/src/api/fetchVideos";
import requests from "@/src/api/requests";
import { Stack } from "@/src/components";
import { Banner } from "@/src/components/Banner";
import { VideoContentWrapper } from "@/src/components/VideoContentWrapper";
// import { auth } from "@clerk/nextjs/server";

const randomIndex = Math.floor(Math.random() * 20);

const Home = async () => {
  const videos = await fetchVideos({ url: requests.fetchTopRated });
  // auth().protect();

  return (
    <Stack>
      <h1>video</h1>
    </Stack>
  );
};

export default Home;
