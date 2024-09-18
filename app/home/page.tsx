import requests from "@/src/api/requests";
import { Banner } from "@/src/components/Banner";
import { VideoContentWrapper } from "@/src/components/VideoContentWrapper";
import { tmdbVideoToVideo } from "@/src/mappers/tmdbVideoToVideo";
import { Video } from "@/src/types/api";
import { auth } from "@clerk/nextjs/server";

// TODO: move this from here
const fetchVideos = async (): Promise<Video[]> => {
  const fetchUrl = requests.fetchTopRated;
  const response = await fetch(fetchUrl);
  if (!response.ok) {
    throw new Error(`Failed to fetch data: ${response.status}`);
  }
  const json = await response.json();
  return tmdbVideoToVideo(json.results);
};

const Home = async () => {
  const videos = await fetchVideos();
  auth().protect();

  return (
    <>
      <Banner videos={videos} />
      <VideoContentWrapper />
    </>
  );
};

export default Home;
