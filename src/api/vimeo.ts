const CLIENT_ID = "160a0f5414634953a5d79b7b9063c958c93aa8cd"; // TODO: env
const CLIENT_SECRET =
  "8MLSNhYIonfJmkHtu1U5laZGGdkK/woO8Y+qvXznrLtYOjJd6yDo3e4ubUYITKEB4bEOK2UStGzo+/DhTFX8EYp2qXi/EgS63Z6QCm0pO2Z+d6xxrvTJ3g8yk5eKEB3U";

export const getVimeoAccessToken = () => {
  const token = localStorage.getItem("access_token");

  if (!token) return fetchVimeoAccessToken();

  return token;
};

export const fetchVimeoAccessToken = async () => {
  const response = await fetch("https://api.vimeo.com/oauth/authorize/client", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Basic " + btoa(`${CLIENT_ID}:${CLIENT_SECRET}`),
    },
    body: JSON.stringify({
      grant_type: "client_credentials",
    }),
  });

  const data = await response.json();

  localStorage.setItem("access_token", data.access_token);

  return data.access_token;
};

export const getVimeoVideos = async () => {
  const token = getVimeoAccessToken();

  const response = await fetch("https://api.vimeo.com/users/227519127/videos", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  // console.log("getVimeoVideos response", response);
  const data = await response.json();

  console.log("getVimeoVideos data", data);
  return data.data; // Adjust based on the actual response structure
};

export const getVimeoVideo = async ({ videoId }: { videoId: string }) => {
  // const accessToken = await getVimeoAccessToken();

  // console.log("getVimeoVideo accessToken", accessToken);

  const token = getVimeoAccessToken();

  console.log("token", token);

  const response = await fetch(`https://api.vimeo.com/videos/${videoId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  // console.log("getVimeoVideo response", response);

  const data = await response.json();

  console.log("getVimeoVideos data", data);
  return data; // Adjust based on the actual response structure
};
