// Your React component
import { useEffect } from "react";
import { base_url } from "../../config/config";

const YourComponent = () => {
    
  useEffect(() => {
    fetch(`${base_url}/get-config-value/global_header`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data?.data);
        injectScript(data.dynamicScriptSource);
      });
  }, []);

const injectScript = (src) => {
    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    document.head.appendChild(script);
  };

  return <div>{/* Your JSX content */}</div>;
};

export default YourComponent;
