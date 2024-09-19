import { baseUrl } from "../consts/tmdb";
import { Media, TmdbVideo, Video } from "../types/api";

// The Movie Database API to Video Mapper
export const tmdbVideoToVideo = (tmdbVideo: TmdbVideo[]): Video[] =>
  tmdbVideo.map((video) => ({
    id: video.id,
    title: video.title,
    overview: video.overview,
    mediaType: video.media_type as Media,
    backgroundImage: `${baseUrl}${video.backdrop_path}`,
    image: video.poster_path,
    releaseData: video.release_date,
    rating: video.vote_average,
    duration: "1h 49m",
    genres: ["Action", "Adventure", "Comedy"],
  }));
