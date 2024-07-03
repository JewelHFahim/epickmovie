/* eslint-disable react/prop-types */

const M3U8Player = ({ channel }) => {
  return (
    <div>
      <h3 className="text-white">{channel.name}</h3>
      <video
        id={`video-${channel.name}`}
        controls
        width="600"
        poster={channel.logo}
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default M3U8Player;
