import { useEffect, useRef } from "react";

const StaticDataPlayer = () => {
  const videoRef = useRef(null);
  const PROXY_URL = "http://localhost:4000/proxy";

  useEffect(() => {
    async function fetchAndPlayVideo() {
      try {
        const response = await fetch(PROXY_URL);

        if (!response.ok) {
          throw new Error(
            `Failed to fetch: ${response.status} ${response.statusText}`
          );
        }

        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);

        if (videoRef.current) {
          videoRef.current.src = url;
          videoRef.current.play();
        }

        // Clean up the URL object after usage
        return () => {
          window.URL.revokeObjectURL(url);
        };
      } catch (error) {
        console.error("Error fetching or playing the video:", error);
      }
    }

    fetchAndPlayVideo();
  }, []);

  return (
    <div className="w-[600px] h-[400px]">
      <h1>M3U8 Player</h1>
      <video ref={videoRef} controls autoPlay></video>
    </div>
  );
};

export default StaticDataPlayer;
