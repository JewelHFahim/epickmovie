import { Link } from "react-router-dom";
import {
  useCleanedTitle,
  useRedirect,
  useSiteConfig,
} from "../../../utils/configHooks/ConfigHooks";

/* eslint-disable react/prop-types */
const MovieCardTheme2 = ({ item, className}) => {
  const { maskLink } = useSiteConfig();
  const { url } = useCleanedTitle(item);

  const handleRedirect = useRedirect(url, maskLink);

  return (
    <Link
      onClick={() => handleRedirect()}
      className={`underline font-medium text-[30px] lg:text-[20px] hover:text-[#6bd4c8] transition-all ease-in-out cursor-pointer ${className} even:bg-[#373737] lg:even:bg-transparent p-3 lg:p-0`}
    >
      {item?.post_title}
    </Link>
  );
};

export default MovieCardTheme2;
