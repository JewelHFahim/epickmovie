// import  { useEffect, useState } from "react";
// import { base_url } from "../../config/config";

// const TawkToScript = () => {

//     const [script, setScript] = useState();

//     useEffect(() => {

//         const fetchScriptAndInject = async () => {
//           try {
//             const response = await fetch( `${base_url}/get-config-value/global_header`,{
//                 headers: { "X-API-KEY": "dtmgNfrv6AJDXV3nPEhkaQ"},
//               }
//             );

//             if (!response.ok) {
//               throw new Error(`Failed to fetch script: ${response.status}`);
//             }

//             const data = await response.json();
//             console.log(data?.data);
//             setScript(data?.data);

//           } catch (error) {
//             console.error("Error fetching or injecting script:", error);
//           }
//         };

//         fetchScriptAndInject();

//       }, []);

//   useEffect(() => {

//     const scriptTag = document.createElement("script");
//     scriptTag.type = "text/javascript";
//     scriptTag.innerHTML = script;

//     // Append the script to the head of the document
//     document.head.appendChild(scriptTag);

//     // Cleanup on component unmount
//     return () => {
//       document.head.removeChild(scriptTag);
//     };
//   }, [script]);

//   return null; // This component doesn't render anything
// };

// export default TawkToScript;

// for remove

import { useEffect, useState } from "react";
import { base_url } from "../../config/config";

const TawkToScript = () => {
  const [script, setScript] = useState();

  useEffect(() => {
    const fetchScriptAndInject = async () => {
      try {
        const response = await fetch(
          `${base_url}/get-config-value/global_header`,
          {
            headers: { "X-API-KEY": "dtmgNfrv6AJDXV3nPEhkaQ" },
          }
        );

        if (!response.ok) {
          throw new Error(`Failed to fetch script: ${response.status}`);
        }

        const data = await response.json();
        console.log(data?.data);
        setScript(data?.data);
      } catch (error) {
        console.error("Error fetching or injecting script:", error);
      }
    };

    fetchScriptAndInject();
  }, []);

  useEffect(() => {
    if (script) {
      // Create a temporary container element
      const tempContainer = document.createElement("div");

      // Set the HTML content to the script
      tempContainer.innerHTML = script;

      // Find the nested script tag within the container
      const nestedScript = tempContainer.querySelector("script");

      if (nestedScript) {
        // Remove the incorrect script tag
        nestedScript.remove();

        // Get the corrected script content
        const correctedScript = tempContainer.innerHTML;

        // Create a new script tag with the corrected content
        const scriptTag = document.createElement("script");
        scriptTag.type = "text/javascript";
        scriptTag.innerHTML = correctedScript;

        // Append the corrected script to the head of the document
        document.head.appendChild(scriptTag);
      }
    }
  }, [script]);

  return null; // This component doesn't render anything
};

export default TawkToScript;
