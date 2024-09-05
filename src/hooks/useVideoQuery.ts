import { useEffect, useState } from "react";

import { tmdbVideoToVideo } from "@/src/mappers/tmdbVideoToVideo";
import { Video } from "@/src/types/api";

type UseVideoQueryProps = {
  fetchUrl: string;
};

const useVideoQuery = ({ fetchUrl }: UseVideoQueryProps) => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(fetchUrl);
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
  }, [fetchUrl]);

  return { videos, loading };
};

export default useVideoQuery;
