import React, { Component } from "react";

const VideoFeature = ({ video }) => {
  const EMBED = "https://www.youtube.com/embed/";
  return !video ? (
    <div>Loading...</div>
  ) : (
    <div>
      <div className="ui embed">
        <iframe src={`${EMBED}${video.link}`}></iframe>
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.title}</h4>
        <p>{video.description}</p>
      </div>
    </div>
  );
};

export default VideoFeature;
