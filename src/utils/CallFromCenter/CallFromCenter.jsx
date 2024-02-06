import { useEffect, useState } from "react";
import {
  useSiteLogoUserQuery,
  useSiteNameUSerQuery,
} from "../../redux/features/settings/settingApi";

export const LogoCached = ({ imgStyle }) => {
  const { data: siteLogo, isLoading } = useSiteLogoUserQuery();
  const { data: siteName } = useSiteNameUSerQuery();
  const [isCached, setIsCached] = useState(false);

  useEffect(() => {
    const image = new Image();
    image.src = siteLogo?.data;

    image.onload = () => {
      setIsCached(true);
    };
    
  }, [siteLogo?.data]);

  return (
    <>
      {isCached ? (
        <>
          {isLoading ? (
            <div className="w-[150px] h-[40px] lg:w-[200px] lg:h-[65px] bg-slate-700 rounded-lg animate-pulse" />
          ) : (
            <img
              src={siteLogo?.data}
              alt={siteName?.data}
              className={imgStyle}
            />
          )}
          {!siteLogo?.data && (
            <h1 className="text-[25px] font-medium text-white">
              {siteName?.data}
            </h1>
          )}
        </>
      ) : null}
    </>
  );
};
