import React, { useState, useEffect } from "react";
import VideoFeature from "./youtube/VideoFeature";
import VideoList from "./youtube/VideoList";
import youtube from "../apis/youtube";
import { Link } from "react-router-dom";
import "../assets/styles.css";
import axios from "axios";

const Holidays = ({ title, back }) => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [wikiLink, setWikiLink] = useState("");

  useEffect(() => {
    setWikiLink(`https://en.wikipedia.org/wiki/${title}`);

    (async () => {
      const response = await youtube.get("/search", { params: { q: title } });
      setVideos(response.data.items);
      setSelectedVideo(response.data.items[0]);
    })();
  }, []);
  const onVideoSelect = (video) => {
    setSelectedVideo(video);
  };

  return (
    <>
      <h2>{title}</h2>
      <button onClick={back}>Back to Calendar</button>
      <p>
        Link To Wikipedia :{" "}
        <a href={wikiLink} target="_blank">
          {title}
        </a>
      </p>
      <div className="ui container">
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoFeature video={selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList videos={videos} onVideoSelect={onVideoSelect} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Holidays;
