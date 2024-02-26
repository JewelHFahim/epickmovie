import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { HelmetProvider, Helmet } from "react-helmet-async";
import router from "./routes/router";
import { useFavIcon, useSiteName } from "./utils/configHooks/ConfigHooks";


const App = () => {
  const siteName = useSiteName();
  const favIcon = useFavIcon();
  
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
      </div>
    </HelmetProvider>
  );
};

export default App;
