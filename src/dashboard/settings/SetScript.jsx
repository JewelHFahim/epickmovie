import { useEffect, useState } from 'react';
import { base_url } from '../../config/config';

const DynamicScript = () => {
    const [script, setScript] = useState();

  useEffect(() => {
    fetch(`${base_url}/admin/upload-logo`, {
        headers: {
        //   Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          throw new Error("Network response was not ok.");
        })
        .then((data) => {
            setScript("jhf");
        })


    const script = document.createElement('script');
    script.src = script;
    script.async = true;

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [scriptSrc]);

  return null;
};

export default DynamicScript;
