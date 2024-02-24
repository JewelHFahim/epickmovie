import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { HelmetProvider, Helmet } from "react-helmet-async";
import router from "./routes/router";
import { useAllConfigQuery } from "./redux/features/settings/settingApi";


const App = () => {
  const { data: allConfig } = useAllConfigQuery();
  const getSiteName = allConfig?.data?.find(
    (config) => config.name === "site_name"
  );
  const siteName = getSiteName ? getSiteName.value : null;

  const getSiteFav = allConfig?.data?.find(
    (config) => config.name === "fav_icon"
  );
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
