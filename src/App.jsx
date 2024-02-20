import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { HelmetProvider, Helmet } from "react-helmet-async";
import router from "./routes/router";
import { useAllConfigQuery } from "./redux/features/settings/settingApi";

const App = () => {

  const { data: allConfig } = useAllConfigQuery();

  const getSiteName = allConfig?.data?.find( (config) => config.name === "site_name");
  const siteName = getSiteName ? getSiteName.value : null;

  const getSiteFav = allConfig?.data?.find( (config) => config.name === "fav_icon");
  const favIcon = getSiteFav ? getSiteFav.value : null;


  // Dynamic Favicon Icon Set
  useEffect(() => {
    const fetchFavicon = () => {
      try {
        const faviconLink = document.getElementById("dynamic-favicon");
        faviconLink.href = favIcon || "/default-favicon.ico";
      } catch (error) {
        console.error("Error fetching favicon:", error);
      }
    };

    fetchFavicon();
  }, [favIcon]);


  // Dynamic Set Global Header
  // useEffect(() => {
  //   const fetchScriptContent = async () => {
  //     try {
  //       const response = await fetch(
  //         `${base_url}/get-config-value/global_header`,
  //         {
  //           headers: userHeader,
  //         }
  //       );

  //       const data = await response.json();

  //       if (data) {
  //         const script = document.createElement("script");
  //         script.type = "text/javascript";
  //         script.innerHTML = data?.data;

  //         document.head.appendChild(script);

  //         return () => {
  //           document.head.removeChild(script);
  //         };
  //       }
  //     } catch (error) {
  //       console.error("Error fetching script content:", error);
  //     }
  //   };

  //   fetchScriptContent();
  // }, []);

  // useEffect(() => {
  //   const appendScriptToHead = () => {
  //     const scriptElement = document.createElement('script');
  //     scriptElement.src = 'https://dmapp.imdbbangla.com/bot-js/jessica.js';
  //     scriptElement.async = true;

  //     document.head.appendChild(scriptElement);

  //     return () => {
  //       document.head.removeChild(scriptElement);
  //     };
  //   };

  //   appendScriptToHead();
  // }, []);

  return (
    <HelmetProvider>
      <div className=" bg-[#27272A] lg:bg-[#18181a]">
        <Helmet>
          <title>{siteName}</title>
          <meta name="description" content="entertainment unlimited" />
        </Helmet>

        <RouterProvider router={router} />

        <Toaster />
      </div>
    </HelmetProvider>
  );
};

export default App;
