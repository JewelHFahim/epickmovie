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
    .replace(/%20/g, "-")
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

// =============== Only For Search Title Clean ==============
const generateCleanedTitleSearch = (title) => {
  const cleanedTitle = title.replace(/%20/g, " ").toLowerCase();
  return cleanedTitle;
};

export const useCleanedTitleForSearch = (item) => {
  const [searchTerm, setSearchTerm] = useState();

  useEffect(() => {
    if (item) {
      const cleanedTitle = generateCleanedTitleSearch(item);
      setSearchTerm(cleanedTitle);
    }
  }, [item]);

  return { searchTerm };
};

// ===================>> CONFIG DATAS <<======================
import { useMemo } from "react";

export const useSiteConfig = () => {
  const { data: allConfig, isLoading } = useAllConfigQuery();

  // ===================>> Site Name <<======================
  const siteName = useMemo(() => {
    return (
      allConfig?.data?.find((config) => config.name === "site_name")?.value ??
      "loading"
    );
  }, [allConfig]);

  // ===================>> Website Link <<======================
  const websiteLink = useMemo(() => {
    return (
      allConfig?.data?.find((config) => config.name === "website_link")
        ?.value ?? "loading"
    );
  }, [allConfig]);

  // ===================>> Site Logo<<======================
  const siteLogo = useMemo(() => {
    return (
      allConfig?.data?.find((config) => config.name === "site_logo")?.value ??
      "loading"
    );
  }, [allConfig]);

  // ===================>> Fav Icon <<======================
  const favIcon = useMemo(() => {
    return (
      allConfig?.data?.find((config) => config.name === "fav_icon")?.value ??
      null
    );
  }, [allConfig]);

  // ===================>> Site News <<======================
  const siteNews = useMemo(() => {
    return (
      allConfig?.data?.find((config) => config.name === "site_news")?.value ??
      "loading"
    );
  }, [allConfig]);

  // ===================>> Notice Message <<======================
  const noticeMessage = useMemo(() => {
    return (
      allConfig?.data?.find((config) => config.name === "flash_message")?.value ??
      "loading"
    );
  }, [allConfig]);

  // ===================>> Telegram <<======================
  const telegramLink = useMemo(() => {
    return (
      allConfig?.data?.find((config) => config.name === "telegram_link")
        ?.value ?? null
    );
  }, [allConfig]);

  // ===================>> facebook <<======================
  const faceBookLink = useMemo(() => {
    return (
      allConfig?.data?.find((config) => config.name === "facebook_url")
        ?.value ?? null
    );
  }, [allConfig]);

  // ===================>> Twitter <<======================
  const twitterLink = useMemo(() => {
    return (
      allConfig?.data?.find((config) => config.name === "twitter_url")?.value ??
      null
    );
  }, [allConfig]);

  // ===================>> Pinterest <<======================
  const pinterestLink = useMemo(() => {
    return (
      allConfig?.data?.find((config) => config.name === "pinterest_url")
        ?.value ?? null
    );
  }, [allConfig]);

  // ===================>> Whats App <<======================
  const whatsAppNo = useMemo(() => {
    return (
      allConfig?.data?.find((config) => config.name === "whatsapp_no")?.value ??
      null
    );
  }, [allConfig]);

  // ===================>> Site Footer <<======================
  const siteFooter = useMemo(() => {
    return (
      allConfig?.data?.find((config) => config.name === "site_footer")?.value ??
      "loading"
    );
  }, [allConfig]);

  // ===================>> Google Id <<======================
  const googleAnalytic =
    allConfig?.data?.find((config) => config.name === "gtag_id")?.value ?? "";

  const onClickAdSrc =
    allConfig?.data?.find((config) => config.name === "mt_onlick_ads_domain")
      ?.value ?? "";

  const onClickAdId =
    allConfig?.data?.find((config) => config.name === "mt_onlick_ads_id")
      ?.value ?? "";

  const interstitialType =
    allConfig?.data?.find(
      (config) => config.name === "mt_interstitial_ads_domain"
    )?.value ?? "";

  const inpageAdSrc =
    allConfig?.data?.find((config) => config.name === "mt_inpage_ads_domain")
      ?.value ?? "";

  const inpageAdId =
    allConfig?.data?.find((config) => config.name === "mt_inpage_ads_id")
      ?.value ?? "";

  const maskLink = useMemo(() => {
    const maskLinks = allConfig?.data?.find(
      (config) => config.name === "mask_links"
    )?.value;
    if (maskLinks) {
      const urlsArray = maskLinks.split(",").map((url) => url.trim());
      const randomIndex = Math.floor(Math.random() * urlsArray.length);
      return urlsArray[randomIndex];
    }
    return null;
  }, [allConfig]);

  return {
    siteName,
    siteLogo,
    favIcon,
    siteNews,
    telegramLink,
    siteFooter,
    maskLink,
    isLoading,
    googleAnalytic,
    onClickAdSrc,
    onClickAdId,
    inpageAdSrc,
    interstitialType,
    inpageAdId,
    websiteLink,
    faceBookLink,
    twitterLink,
    pinterestLink,
    whatsAppNo,
    noticeMessage
  };
};
