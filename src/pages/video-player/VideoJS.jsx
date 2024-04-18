import React, { useEffect } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

const VideoPlayer = () => {
  useEffect(() => {
    const videoElement = document.getElementById('my-video');

    if (!videoElement) {
      console.error('Video element not found.');
      return;
    }

    const player = videojs(videoElement, {
      controls: true,
      preload: 'auto',
      width: 640,
      height: 264,
      poster: 'https://d2u0ktu8omkpf6.cloudfront.net/9eca4741a83cf4d8b27b0989349ccb59128273e9f2daaa29.png',
      sources: [{
        src: 'https://ekusheyserver.com/etvlivesn.m3u8',
        type: 'application/x-mpegURL'
      }]
    });

    return () => {
      if (player) {
        player.dispose();
      }
    };
  }, []);

  return (
    <div>
      <video id="my-video" className="video-js" />
    </div>
  );
};

export default VideoPlayer;
