// Your React component
import { useEffect } from "react";
import { base_url } from "../../config/config";

const ScriptPage = () => {

  
  useEffect(() => {
    const fetchScriptAndInject = async () => {
      try {
        const response = await fetch(
          `${base_url}/get-config-value/global_header`,
          {
            headers: {
              "X-API-KEY": "dtmgNfrv6AJDXV3nPEhkaQ",
            },
          }
        );

        if (!response.ok) {
          throw new Error(`Failed to fetch script: ${response.status}`);
        }

        const data = await response.json();
        // console.log("Fetched script data:", data?.data);
        injectScript(data?.data);
      } catch (error) {
        console.error("Error fetching or injecting script:", error);
      }
    };

    // Call the fetchScriptAndInject function
    fetchScriptAndInject();
  }, []); // Empty dependency array to run the effect only once

  const injectScript = (src) => {
    // Remove existing script tags with the same source
    const existingScripts = document.querySelectorAll(`script[src="${src}"]`);
    existingScripts.forEach((script) => {
      script.parentNode.removeChild(script);
    });

    // Create and append the new script
    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    document.head.appendChild(script);
  };

  return <div></div>;
};

export default ScriptPage;
