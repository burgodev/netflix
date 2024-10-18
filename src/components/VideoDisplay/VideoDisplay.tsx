import { Video } from "@/src/types/api";

interface PageClientProps {
  video: Video;
}

const VideoDisplay = ({ video }: PageClientProps) => {
  return (
    <div className="min-w-[50%]">
      {video && video.link && (
        <iframe
          className="w-[60vw] h-[80vh] aspect-video"
          src={video.link}
          width="100%"
          height="50%"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title={video.title}
        />
      )}
    </div>
  );
};

export default VideoDisplay;
