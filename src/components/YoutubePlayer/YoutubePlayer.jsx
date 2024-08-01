"use client";
import React, { useState } from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = ({videoId}) => {
  const [currentTime, setCurrentTime] = useState(0);

  const handleProgress = (state) => {
    setCurrentTime(state.playedSeconds);
  };

  return (
    <div>
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${videoId}`}
        controls
        playing
        onProgress={handleProgress}
      />
      <p>Current time: {currentTime.toFixed(2)} seconds</p>
    </div>
  );
};

export default VideoPlayer;
