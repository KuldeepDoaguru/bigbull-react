import React, { useState, useRef } from "react";
import ReactPlayer from "react-player";
import styled from "styled-components";

const VideoPlayer = ({ video }) => {
  const [played, setPlayed] = useState(0);
  const playerRef = useRef(null);

  const handleProgress = (state) => {
    setPlayed(state.played);
  };

  const handleSeek = (seekTime) => {
    const player = playerRef.current;
    if (player) {
      player.seekTo(seekTime);
      setPlayed(seekTime);
    }
  };

  const playPauseVideo = () => {
    const player = playerRef.current;
    if (player) {
      if (player.getInternalPlayer().paused) {
        player.getInternalPlayer().play();
      } else {
        player.getInternalPlayer().pause();
      }
    }
  };

  return (
    <>
      <Container>
        <div className="video-player">
          <h2>Video Player</h2>
          <ReactPlayer
            ref={playerRef}
            url={video.url}
            controls={false} // Disable built-in controls
            width="100%"
            height="auto"
            onProgress={handleProgress}
          />
          <div className="custom-controls">
            <button className="btnplay" onClick={playPauseVideo}>
              {played < 1 ? "Play" : "Replay"}
            </button>
            <input
              type="range"
              min={0}
              max={1}
              step="any"
              value={played}
              onChange={(e) => handleSeek(parseFloat(e.target.value))}
            />
            <p>Progress: {Math.round(played * 100)}%</p>
          </div>
          <p>{video.title}</p>
        </div>
      </Container>
    </>
  );
};

export default VideoPlayer;
const Container = styled.div`
  .btnplay {
    background-color: #78d3e9 !important;
    padding: 0.5rem;
  }
`;
