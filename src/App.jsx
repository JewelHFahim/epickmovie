import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { HelmetProvider, Helmet } from "react-helmet-async";
import router from "./routes/router";
import { useSiteConfig } from "./utils/configHooks/ConfigHooks";
import { base_url } from "./config/config";

const App = () => {
  const { siteName, favIcon } = useSiteConfig();

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

  // Dynamic Google Tag Manager Script Set
  useEffect(() => {
    const fetchGtagId = async () => {
      try {
        const response = await fetch(`${base_url}/get-config-value/gtag_id`,
          {
            headers: { "X-API-KEY": "dtmgNfrv6AJDXV3nPEhkaQ" },
          }
        );
        const data = await response.json();
        return data?.data;
      } catch (error) {
        console.error("Error fetching gTag ID:", error);
        return null;
      }
    };

    const setupGtag = async () => {
      const dynamicId = await fetchGtagId();

      window.dataLayer = window.dataLayer || [];
      const script = document.createElement("script");
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${dynamicId}`;

      document.head.appendChild(script);

      function gtag() {
        window.dataLayer.push(arguments);
      }

      gtag("js", new Date());
      gtag("config", dynamicId);

      // second script
      const script2 = document.createElement("script");

      // Define the gtag function in the second script
      script2.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${dynamicId}');
      `;

      // Append the second script 
      document.head.appendChild(script2);
    };

    setupGtag();
  }, []);

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
