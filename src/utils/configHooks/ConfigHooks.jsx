import { useEffect, useState } from "react";
import { useAllConfigQuery } from "../../redux/features/settings/settingApi";

// ====================>> Site Mask Link <<==================
// export const useMaskLink = () => {
//   const { data: allConfig } = useAllConfigQuery();

//   const getMaskLink = allConfig?.data?.find(
//     (config) => config.name === "mask_links"
//   );

//   const maskLinks = getMaskLink?.value;
//   let maskLink = null;

//   if (maskLinks) {
//     const urlsArray = maskLinks.split(",").map((url) => url.trim());
//     const randomIndex = Math.floor(Math.random() * urlsArray.length);
//     maskLink = urlsArray[randomIndex];
//   }

//   return maskLink;
// };


// ===============>> Redirect MaskLink Page <<===============
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
      setUrl( item?.post_type === "movies" ? `/movie/${item?.id}/${cleanedTitle}` : `/series/${item?.id}/${cleanedTitle}`, "_blank" );
    }
  }, [item?.post_title, item?.post_type, item?.id]);

  return { url };
};


// ===================>> CONFIG DATAS <<======================
import { useMemo } from 'react';

export const useSiteConfig = () => {
  const { data: allConfig, isLoading } = useAllConfigQuery();

  const getSiteConfig = useMemo(() => {
    return ({
      siteName: allConfig?.data?.find((config) => config.name === 'site_name')?.value ?? 'loading',
      siteLogo: allConfig?.data?.find((config) => config.name === 'site_logo')?.value ?? 'loading',
      favIcon: allConfig?.data?.find((config) => config.name === 'fav_icon')?.value ?? null,
      siteNews: allConfig?.data?.find((config) => config.name === 'site_news')?.value ?? 'loading',
      telegramLink: allConfig?.data?.find((config) => config.name === 'telegram_link')?.value ?? null,
      siteFooter: allConfig?.data?.find((config) => config.name === 'site_footer')?.value ?? 'loading',

      maskLink: (() => {
        const maskLinks = allConfig?.data?.find((config) => config.name === 'mask_links')?.value;
        if (maskLinks) {
          const urlsArray = maskLinks.split(',').map((url) => url.trim());
          const randomIndex = Math.floor(Math.random() * urlsArray.length);
          return urlsArray[randomIndex];
        }
        return null;
      })(),

    });
  }, [allConfig]);

  return { ...getSiteConfig, isLoading };
};
