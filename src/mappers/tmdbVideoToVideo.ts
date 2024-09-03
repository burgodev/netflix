import { Media, TmdbVideo } from "../types/api";

// The Movie Database API to Video Mapper
export const tmdbVideoToVideo = (tmdbVideo: TmdbVideo[]) =>
  tmdbVideo.map((video) => ({
    id: video.id,
    title: video.title,
    overview: video.overview,
    mediaType: video.media_type as Media,
    backgroundImagePath: video.backdrop_path,
    imagePath: video.poster_path,
    releaseData: video.release_date,
    rating: video.vote_average,
  }));
