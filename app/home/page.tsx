import { fetchVideos } from "@/src/api/fetchVideos";
import requests from "@/src/api/requests";
import { Stack } from "@/src/components";
import { Banner } from "@/src/components/Banner";
import { VideoContentWrapper } from "@/src/components/VideoContentWrapper";
import { auth } from "@clerk/nextjs/server";

const Home = async () => {
  const videos = await fetchVideos({ url: requests.fetchTopRated });
  auth().protect();

  return (
    <Stack>
      <Banner videos={videos} />
      <VideoContentWrapper />
    </Stack>
  );
};

export default Home;
