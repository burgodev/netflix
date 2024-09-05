import requests from "./requests";

export const VIDEO_CATEGORY_MOCK = [
  {
    id: "1",
    title: "Award-Winning TV Shows",
    fetchUrl: requests.fetchTrending,
  },
  {
    id: "2",
    title: "Continue Watching",
    fetchUrl: requests.fetchNetflixOriginals,
  },
  {
    id: "3",
    title: "We Think You'll Love These",
    fetchUrl: requests.fetchTopRated,
  },
  {
    id: "4",
    title: "Critically Acclaimed TV Shows ",
    fetchUrl: requests.fetchActionMovies,
  },
  {
    id: "6",
    title: "Blockbuster Movies",
    fetchUrl: requests.fetchComedyMovies,
  },
  {
    id: "7",
    title: "Today's Top Picks for You",
    fetchUrl: requests.fetchHorrorMovies,
  },
  { id: "8", title: "Documentaries", fetchUrl: requests.fetchRomanceMovies },
  { id: "9", title: "My List", fetchUrl: requests.fetchDocumentaries },
];
