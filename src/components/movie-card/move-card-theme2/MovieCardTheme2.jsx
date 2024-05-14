import { Link } from "react-router-dom";
import {
  useCleanedTitle,
  useRedirect,
  useSiteConfig,
} from "../../../utils/configHooks/ConfigHooks";

/* eslint-disable react/prop-types */
const MovieCardTheme2 = ({ item, className }) => {
  const { maskLink } = useSiteConfig();
  const { url } = useCleanedTitle(item);

  const handleRedirect = useRedirect(url, maskLink);

  return (
    <Link
      onClick={() => handleRedirect()}
      className={`underline text-[#009987] font-medium text-[20px] hover:text-[#6bd4c8] transition-all ease-in-out cursor-pointer ${className}`}
    >
      {item?.post_title}
    </Link>
  );
};

export default MovieCardTheme2;
