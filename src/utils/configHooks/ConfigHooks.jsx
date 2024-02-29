import { useEffect, useState } from "react";
import { useAllConfigQuery } from "../../redux/features/settings/settingApi";
import { base_url } from "../../config/config";

// ====================>> Site Name <<=======================
export const useSiteName = () => {
  const { data: allConfig } = useAllConfigQuery();
  const getSiteName = allConfig?.data?.find(
    (config) => config.name === "site_name"
  );
  const siteName = getSiteName ? getSiteName.value : "loading";
  return siteName;
};

// ====================>> Site Logo <<=======================
export const useSiteLogo = () => {
  const { data: allConfig, isLoading } = useAllConfigQuery();

  const getSiteLogo = allConfig?.data?.find(
    (config) => config.name === "site_logo"
  );
  const siteLogo = getSiteLogo ? getSiteLogo.value : "loading";

  return { siteLogo, isLoading };
};

// ==================>> Site Fav Icon <<=====================
export const useFavIcon = () => {
  const { data: allConfig } = useAllConfigQuery();

  const getFavIcon = allConfig?.data?.find(
    (config) => config.name === "fav_icon"
  );
  const favIcon = getFavIcon ? getFavIcon.value : null;

  return favIcon;
};

// ====================>> Site News <<=======================
export const useSiteNews = () => {
  const { data: allConfig } = useAllConfigQuery();

  const getSiteNews = allConfig?.data?.find(
    (config) => config.name === "site_news"
  );
  const siteNews = getSiteNews ? getSiteNews.value : "loading";

  return siteNews;
};

// ====================>> Site Mask Link <<==================
export const useMaskLink = () => {
  const { data: allConfig } = useAllConfigQuery();

  const getMaskLink = allConfig?.data?.find(
    (config) => config.name === "mask_links"
  );

  const maskLinks = getMaskLink?.value;
  let maskLink = null;

  if (maskLinks) {
    const urlsArray = maskLinks.split(",").map((url) => url.trim());
    const randomIndex = Math.floor(Math.random() * urlsArray.length);
    maskLink = urlsArray[randomIndex];
  }

  return maskLink;
};


// =====================>> Site Telegram <<==================
export const useTelegramLink = () => {
  const { data: allConfig } = useAllConfigQuery();

  const getTelegramLink = allConfig?.data?.find(
    (config) => config.name === "telegram_link"
  );
  const telegramLink = getTelegramLink ? getTelegramLink.value : null;

  return telegramLink;
};

// ======================>> Site Footer <<===================
export const useSiteFooter = () => {
  const { data: allConfig } = useAllConfigQuery();

  const getSiteFooter = allConfig?.data?.find(
    (config) => config.name === "site_footer"
  );
  const siteFooter = getSiteFooter ? getSiteFooter.value : "loading";

  return siteFooter;
};

// ==================>> Redirect MaskLink Page <<==================
export const useRedirect = (url, maskLink) => {
  const handleRedirect1 = () => {
    const newTab = window.open(`${url}`, "_blank");
    if (newTab) {
      newTab.focus();
    }
    if (maskLink !== null) {
      window.location.href = maskLink;
    }
  };

  const handleRedirect2 = () => {
    window.location.href = url;
  };

  const handleRedirect = maskLink !== null ? handleRedirect1 : handleRedirect2;

  return handleRedirect;
};

// ==================>> Clean Title <<=======================
const generateCleanedTitle = (title) => {
  const cleanedTitle = title
    .replace(/[^\w\s]|_/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/:/g, "-")
    .replace(/(\d{1,2})a/g, "$1")
    .toLowerCase();
  return cleanedTitle;
};

export const useCleanedTitle = (item) => {
  const [url, setUrl] = useState();

  useEffect(() => {
    if (item?.post_title) {
      const cleanedTitle = generateCleanedTitle(item.post_title);
      setUrl(
        item?.post_type === "movies"
          ? `/movie/${item?.id}/${cleanedTitle}`
          : `/series/${item?.id}/${cleanedTitle}`,
        "_blank"
      );
    }
  }, [item?.post_title, item?.post_type, item?.id]);

  return { url };
};
