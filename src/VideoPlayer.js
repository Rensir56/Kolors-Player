// src/VideoPlayer.js
import React from 'react';
import './VideoPlayer.css'; // 引入样式文件

const VideoPlayer = () => {
  return (
    <div className="video-container">
      <video controls loop muted>
        <source src="video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;