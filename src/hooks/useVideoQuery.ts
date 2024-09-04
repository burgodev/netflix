import { useEffect, useState } from "react";

import requests from "@/src/api/requests";
import { tmdbVideoToVideo } from "@/src/mappers/tmdbVideoToVideo";
import { Video } from "@/src/types/api";

const useVideoQuery = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const url = requests.fetchTrending;

      try {
        setLoading(true);
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        const arr = tmdbVideoToVideo(json.results);

        setVideos(arr);
        setLoading(false);

        console.log(json);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return { videos, loading };
};

export default useVideoQuery;
