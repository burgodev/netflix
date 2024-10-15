import { Video } from "@/src/types/api";
import { Stack, Typography } from "../atomic";

interface VideoPlaylistProps {
  videos: Video[];
}

const VideoPlaylist: React.FC<VideoPlaylistProps> = ({ videos }) => {
  return (
    <Stack className="gap-4 flex-1">
      {videos.map((video) => (
        <Typography key={video.uri}>{video.name}</Typography>
      ))}
    </Stack>
  );
};

export default VideoPlaylist;
