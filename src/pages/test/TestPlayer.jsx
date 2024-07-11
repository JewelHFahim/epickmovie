import { useEffect, useState } from "react";
import M3Player from "./M3Player";
import Hls from "hls.js";

const TestPLayer = () => {
  const [channelsData, setChannelsData] = useState(null);
  const [error, setError] = useState(null);

  const UserAgent = "User-Agent"

  // =================================>> DATA FETCHING <<======================================
  useEffect(() => {
    const fetchChannelsData = async () => {
      const link =
        "https://raw.githubusercontent.com/byte-capsule/TSports-m3u8-Grabber/main/NS_Player_Tsports_live.m3u";
      try {
        const response = await fetch(link);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setChannelsData(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchChannelsData();
  }, []);

  // ===============================>> Player Function <<======================================
  useEffect(() => {
    if (channelsData) {
      initializePlayers();
    }
  }, [channelsData]);

  const initializePlayers = () => {
    channelsData?.forEach((channel) => {
      console.log(channel)
      const videoElement = document.getElementById(`video-${channel.name}`);
      if (!videoElement) return;

      const hls = new Hls();

      // Override the default loader to add headers
      class CustomLoader extends Hls.DefaultConfig.loader {
        constructor(config) {
          super(config);
          this.load = (context, config, callbacks) => {
            const { url } = context;
            fetch(url, {
              method: "GET",
              headers: {
                // Cookie: channel?.cookie,
                // Origin: channel?.origin,
                Referer: channel?.referrer,
                UserAgent: channel?.userAgent,
              },
            })
              .then((response) => {
                if (response.ok) {
                  response.arrayBuffer().then((data) => {
                    callbacks.onSuccess(
                      { url, data, context, response },
                      context,
                      config
                    );
                  });
                } else {
                  callbacks.onError(
                    {
                      code: response.status,
                      text: response.statusText,
                      response: response,
                    },
                    context,
                    config
                  );
                }
              })
              .catch((error) => {
                callbacks.onError(
                  {
                    code: 0,
                    text: error.message,
                    response: error,
                  },
                  context,
                  config
                );
              });
          };
        }
      }

      hls.config.loader = CustomLoader;

      hls.loadSource(channel.link);
      hls.attachMedia(videoElement);

      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        videoElement.play();
      });
    });
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="w-full flex justify-center border p-5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mx-auto justify-center">
        {channelsData?.map((channel, index) => (
          <M3Player key={index} channel={channel} />
        ))}
      </div>
    </div>
  );
};

export default TestPLayer;
