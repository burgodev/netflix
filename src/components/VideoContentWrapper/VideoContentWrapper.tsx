"use client";

import { FC } from "react";
import { useVideoQuery } from "@/src/hooks";
import { VideoCategory } from "../VideoCategory";

const VIDEO_CATEGORY_MOCK = [
  { id: "1", title: "Award-Winning TV Shows", videos: [] },
  { id: "2", title: "Continue Watching", videos: [] },
  { id: "3", title: "We Think You'll Love These", videos: [] },
  { id: "4", title: "Critically Acclaimed TV Shows ", videos: [] },
  { id: "5", title: "US TV Shows", videos: [] },
  { id: "6", title: "Blockbuster Movies", videos: [] },
  { id: "7", title: "Today's Top Picks for You", videos: [] },
  { id: "8", title: "Documentaries", videos: [] },
  { id: "9", title: "My List", videos: [] },
  { id: "10", title: "New on Netflix", videos: [] },
];

type VideoCategoryProps = {};

const VideoContentWrapper: FC<VideoCategoryProps> = () => {
  const { videos, loading } = useVideoQuery(); // TODO: this should be in a  wrapper

  return (
    <div className="translate-y-[-10vh]">
      {VIDEO_CATEGORY_MOCK.map(({ id, title }) => (
        <VideoCategory key={id} title={title} videos={videos} />
      ))}
    </div>
  );
};

export default VideoContentWrapper;
