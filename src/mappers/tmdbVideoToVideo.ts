import { Media, TmdbVideo, Video } from "../types/api";

// The Movie Database API to Video Mapper
export const tmdbVideoToVideo = (tmdbVideo: TmdbVideo[]): Video[] =>
  tmdbVideo.map((video) => ({
    id: video.id,
    title: video.title,
    overview: video.overview,
    mediaType: video.media_type as Media,
    backgroundImage: video.backdrop_path,
    image: video.poster_path,
    releaseData: video.release_date,
    rating: video.vote_average,
  }));
