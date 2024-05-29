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
    <Link className="text-[20px] font-medium text-blue-500">
      <span className="text-xs text-slate-700 inline-block mr-2">
        <FaDotCircle />
      </span>
      <span className="text-red-500">Also Watch:</span>
      <span onClick={() => handleRedirect()} className="underline ml-2">
        {item?.post_title}
      </span>
    </Link>
  );
};

export default RelatedCardTheme3;
