/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import {
  useCleanedTitle,
  useRedirect,
  useSiteConfig,
} from "../../../../utils/configHooks/ConfigHooks";
import { FaDotCircle } from "react-icons/fa";

const RelatedCardTheme3 = ({ item }) => {

  const { maskLink } = useSiteConfig();
  const { url } = useCleanedTitle(item);
  const handleRedirect = useRedirect(url, maskLink);

  return (
    <Link className="text-3xl lg:text-[18px] font-medium text-blue-500 lg:leading-[26px]">
      <span className="text-2xl lg:text-xs text-slate-700 inline-block mr-2">
        <FaDotCircle />
      </span>
      <span className="text-red-500">Also Watch:</span>
      <span onClick={() => handleRedirect()} className="underline ml-2 hover:text-blue-700 transition-all ease-in-out">
        {item?.post_title}
      </span>
    </Link>
  );
};

export default RelatedCardTheme3;
