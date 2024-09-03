// let's imagine this file is autogenerated from the backend
// ideally, we want to keep these api related types in sync
// with the backend instead of manually writing them out

export type Media = "movie" | "tvShow";

export type TmdbVideo = {
  backdrop_path: string;
  id: string;
  title: string;
  original_title: string;
  overview: string;
  poster_path: string;
  media_type: string;
  adult: boolean;
  original_language: string;
  genre_ids: number[];
  popularity: number;
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type Video = {
  id: string;
  title: string;
  overview: string;
  mediaType: Media;
  imagePath: string;
  releaseData: string;
  rating: number;
};

// export type BaseEntity = {
//   id: string;
//   createdAt: number;
// };

// export type Entity<T> = {
//   [K in keyof T]: T[K];
// } & BaseEntity;

// export type User = Entity<{
//   firstName: string;
//   lastName: string;
//   email: string;
//   role: 'ADMIN' | 'USER';
//   teamId: string;
//   bio: string;
// }>;

// export type AuthResponse = {
//   jwt: string;
//   user: User;
// };

// export type Team = Entity<{
//   name: string;
//   description: string;
// }>;

// export type Discussion = Entity<{
//   title: string;
//   body: string;
//   teamId: string;
//   author: User;
// }>;

// export type Comment = Entity<{
//   body: string;
//   discussionId: string;
//   author: User;
// }>;
