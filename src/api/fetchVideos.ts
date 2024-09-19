import { tmdbVideoToVideo } from "../mappers/tmdbVideoToVideo";
import { Video } from "../types/api";

export const fetchVideos = async ({
  url,
}: {
  url: string;
}): Promise<Video[]> => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch data: ${response.status}`);
  }
  const json = await response.json();
  return tmdbVideoToVideo(json.results);
};
