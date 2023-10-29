// src/components/VideoPlaylist.js
import React from "react";
import styled from "styled-components";

const VideoPlaylist = ({ videos, onVideoSelect }) => {
  return (
    <>
      <Container>
        <div className="video-playlist">
          <h2>Video Playlist</h2>
          <ul>
            {videos.map((video, index) => (
              <li
                className="li-btn"
                key={index}
                onClick={() => onVideoSelect(video)}
              >
                {video.title}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </>
  );
};

export default VideoPlaylist;
const Container = styled.div`
  .li-btn {
    background-color: #78d3e9;
    padding: 5px;
    text-align: center;
    border-radius: 0.5rem;
    color: #1c1b1b;
    margin-top: 5px;
  }
`;
