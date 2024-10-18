import { Video as VideoInterface } from "@/src/types/api";
import { Stack, Typography } from "../atomic";
import Video from "../Video/Video";

interface VideoPlaylistProps {
  videos: VideoInterface[];
}

const VideoPlaylist: React.FC<VideoPlaylistProps> = ({ videos }) => {
  if (!videos) return null;

  return (
    <Stack className="gap-4 flex-1">
      {videos.map((video) => (
        <Stack key={video.id} className="flex-row gap-4">
          <Video video={video} isVertical />
          <Typography variant="span">{video.title}</Typography>
        </Stack>
      ))}
    </Stack>
  );
};

export default VideoPlaylist;
