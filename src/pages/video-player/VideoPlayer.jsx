// import ReactJWPlayer from "react-jw-player";

// export default function VideoPlayer() {
//   const [ready, setReady] = useState(false);
//   const readyEvent = useRef();

//   useEffect(() => {
//     readyEvent.current = setReady;

//     return () => {
//       readyEvent.current = null;
//     };
//   }, []);

//   const handleReady = () => {
//     if (readyEvent.current) {
//       readyEvent.current(true);
//     }
//   };

//   return (
//     <div>

//       <div
//         className="jw-video-container"
//         data-mediaid="TAITbudl"
//         style={{ height: "100%", width: "100%" }}
//       >
//         <ReactJWPlayer
//           playerId="TAITbudl"
//           playerScript="https://content.jwplatform.com/libraries/j9BLvpMc.js"
//           playlist="https://cdn.jwplayer.com/v2/media/TAITbudl"
//           onReady={handleReady}
//         />
//       </div>

//     </div>
//   );
// }

// // ****************>> With Sub Title <<***************
// import React, { useEffect } from 'react';

// const JWPlayer = () => {
//   useEffect(() => {
//     const loadJWPlayerScript = () => {
//       // Load JWPlayer script dynamically
//       const jwplayerScript = document.createElement('script');
//       jwplayerScript.src = 'https://content.jwplatform.com/libraries/LJ361JYj.js';
//       jwplayerScript.async = true;

//       document.head.appendChild(jwplayerScript);

//       jwplayerScript.onload = () => {
//         // Set up JWPlayer when the script is loaded
//         jwplayer.key = 'ypdL3Acgwp4Uh2/LDE9dYh3W/EPwDMuA2yid4ytssfI='; // Replace with your actual key

//         jwplayer('myElement').setup({
//           image: 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
//           height: window.innerHeight,
//           autostart: false,
//           file: 'https://vjs.zencdn.net/v/oceans.mp4',
//           title: 'Oceans',
//           description: 'etoski on Codepen',
//           aboutlink: 'https://www.jwplayer.com/',
//           tracks: [{
//             file: '<?php echo $cc; ?>',
//             label: 'Indonesia',
//             kind: 'captions',
//             default: true,
//           }],
//           captions: { color: '#ffb800', fontSize: 30, backgroundOpacity: 0 },
//           sharing: {
//             sites: ['facebook', 'twitter', 'tumblr', 'googleplus', { icon: '//support-static.jwplayer.com/images/awesome.svg', src: 'http://www.jwplayer.com/?', label: 'jwplayer' }],
//             code: encodeURI("<iframe src='<?php echo $sharing;?>' width='480' height='320'></iframe>"),
//             link: "<?php echo $sharing;?>",
//           },

//           // Quality settings
//           qualityLabels: {
//             0: 'Auto',
//             1: '360p',
//             2: '480p',
//             3: '720p',
//             4: '1080p',
//           },
//         });
//       };
//     };

//     // Check if JWPlayer script is already loaded
//     if (window.jwplayer) {
//       loadJWPlayerScript();
//     } else {
//       // Load JWPlayer script dynamically
//       loadJWPlayerScript();
//     }

//     // Cleanup when the component unmounts
//     return () => {
//       const jwplayerScript = document.querySelector('script[src="https://content.jwplatform.com/libraries/LJ361JYj.js"]');
//       if (jwplayerScript) {
//         jwplayerScript.parentNode.removeChild(jwplayerScript);
//       }

//       if (window.jwplayer && window.jwplayer('myElement')) {
//         window.jwplayer('myElement').remove();
//       }
//     };
//   }, []); // Run this effect only once on component mount

//   return <div id="myElement" />;
// };

// export default JWPlayer;
