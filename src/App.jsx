import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { HelmetProvider, Helmet } from "react-helmet-async";
import router from "./routes/router";
import { useSiteConfig } from "./utils/configHooks/ConfigHooks";
import { Toaster } from "react-hot-toast";

const App = () => {
  const {
    siteName,
    favIcon,
    googleAnalytic,
    onClickAdSrc,
    onClickAdId,
    interstitialType,
    inpageAdSrc,
    inpageAdId,
  } = useSiteConfig();

  // Favicon Icon Set
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

  // Google Analytics ID
  useEffect(() => {
    const setupGtag = async () => {
      const dynamicId = await googleAnalytic;
      if (dynamicId) {
        window.dataLayer = window.dataLayer || [];
        const script = document.createElement("script");
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${dynamicId}`;
        document.head.appendChild(script);
      }

      function gtag() {
        window.dataLayer?.push(arguments);
      }

      gtag("js", new Date());
      gtag("config", dynamicId);

      // second script
      const script2 = document.createElement("script");

      if (dynamicId) {
        script2.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${dynamicId}');
      `;

        document.head.appendChild(script2);
      }
    };

    setupGtag();
  }, [googleAnalytic]);

  // OnClick Ads
  useEffect(() => {
    const setupGtag = async () => {
      const src = await onClickAdSrc;
      const id = await onClickAdId;
      if (src && id) {
        const script = document.createElement("script");
        script.textContent = `
          (function(s,u,z,p){
            s.src = u;
            s.setAttribute('data-zone', z);
            p.appendChild(s);
          })(document.createElement("script"), "${src}", "${id}", document.head || document.documentElement);
        `;
        document.head.appendChild(script);
      }
    };

    setupGtag();
  }, [onClickAdSrc, onClickAdId]);

  // Interstitial
  useEffect(() => {
    const setupGtag = async () => {
      const src = await interstitialType;
      if (src) {
        const script = document.createElement("script");
        script.async = true;
        script.setAttribute("data-cfasync", "false");
        script.src = src;
        document.head.appendChild(script);
      }
    };
    setupGtag();
  }, [interstitialType]);

  // In Page Ads
  useEffect(() => {
    const setupGtag = async () => {
      const src = await inpageAdSrc;
      const id = await inpageAdId;
      if (src && id) {
        const script = document.createElement("script");
        script.textContent = `
          (function(d,z,s){
            s.src = 'https://' + d + '/400/' + z;
            try {
              (document.head || document.documentElement).appendChild(s);
            } catch(e) {}
          })('${src}', '${id}', document.createElement('script'));
        `;
        document.head.appendChild(script);
      }
    };

    setupGtag();
  }, [inpageAdSrc, inpageAdId]);

  // Script Setup End Here

  // const adBlockDetected = useDetectAdBlock();
  // const [intervalId, setIntervalId] = useState(null);

  // useEffect(() => {
  //   if (adBlockDetected) {
  //     window.alert("Ads Blocker Need to Deactivate");

  //     const id = setInterval(() => {
  //       window.alert("Ads Blocker Need to Deactivate");
  //     }, 60000);

  //     setIntervalId(id);
  //   } else {
  //     clearInterval(intervalId);
  //   }

  //   return () => clearInterval(intervalId);
  // }, [adBlockDetected]);

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
