import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { HelmetProvider, Helmet } from "react-helmet-async";
import router from "./routes/router";
import { useSiteNameUSerQuery } from "./redux/features/settings/settingApi";
import { base_url, userHeader } from "./config/config";

const App = () => {
  const { data: siteName } = useSiteNameUSerQuery();

  // Dynamic Favicon Icon Set
  useEffect(() => {
    const fetchFavicon = async () => {
      try {
        const response = await fetch(`${base_url}/get-config-value/fav_icon`, {
          headers: userHeader,
        });

        const data = await response.json();
        const faviconLink = document.getElementById("dynamic-favicon");
        faviconLink.href = data?.data || "/default-favicon.ico";
      } catch (error) {
        console.error("Error fetching favicon:", error);
      }
    };

    fetchFavicon();
  }, []);

  // Dynamic Set Global Header
  useEffect(() => {
    const fetchScriptContent = async () => {
      try {
        const response = await fetch(
          `${base_url}/get-config-value/global_header`,
          {
            headers: userHeader,
          }
        );

        const data = await response.json();
        console.log(data?.data);

        if (data) {
          const script = document.createElement("script");
          script.type = "text/javascript";
          script.innerHTML = data?.data;

          // Append the script element to the document head
          document.head.appendChild(script);

          return () => {
            // Remove the script element from the document head
            document.head.removeChild(script);
          };
        }
      } catch (error) {
        console.error("Error fetching script content:", error);
      }
    };

    fetchScriptContent();
  }, []);

  return (
    <HelmetProvider>
      <div className=" bg-[#27272A] lg:bg-[#18181a]">
        <Helmet>
          <title>{siteName?.data}</title>
          <meta name="description" content="entertainment unlimited" />
        </Helmet>

        <RouterProvider router={router} />

        <Toaster />
      </div>
    </HelmetProvider>
  );
};

export default App;
