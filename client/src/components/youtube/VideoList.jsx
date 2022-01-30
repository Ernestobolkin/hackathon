import React from "react";
import VideoCard from "./VideoCard";
const VideoList = ({ videos, onVideoSelect }) => {
  const renderVideoCards = () => {
    return videos.map(({ id, snippet }) => (
      <VideoCard
        onVideoSelect={onVideoSelect}
        link={id.videoId}
        key={id.videoId}
        img={snippet.thumbnails.default}
        title={snippet.title}
        description={snippet.description}
      />
    ));
  };
  return <div className="ui relaxed divided list">{renderVideoCards()}</div>;
};

export default VideoList;
