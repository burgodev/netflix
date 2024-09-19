import { fetchVideos } from "@/src/api/fetchVideos";
import requests from "@/src/api/requests";
import { Banner } from "@/src/components/Banner";
import { VideoContentWrapper } from "@/src/components/VideoContentWrapper";
import { auth } from "@clerk/nextjs/server";

const Home = async () => {
  const videos = await fetchVideos({ url: requests.fetchTopRated });
  auth().protect();

  return (
    <>
      <Banner videos={videos} />
      <VideoContentWrapper />
    </>
  );
};

export default Home;
