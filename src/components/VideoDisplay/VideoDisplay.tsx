import { Video } from "@/src/types/api";

interface PageClientProps {
  video: Video;
}

const VideoDisplay = ({ video }: PageClientProps) => {
  return (
    <div className="min-w-[60%]">
      {video && video.player_embed_url && (
        <iframe
          className="w-[1200px] h-[80vh] aspect-video"
          src={video.player_embed_url}
          width="100%"
          height="50%"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title={video.name}
          // style={{ minWidth: "1200px", minHeight: "675px", background: "red" }} // Set the minimum width and height here
        />
      )}
    </div>
  );
};

export default VideoDisplay;
