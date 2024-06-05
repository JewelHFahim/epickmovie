/* eslint-disable react/prop-types */
import { MdDownloadForOffline } from "react-icons/md";
import {
  useRedirect,
  useSiteConfig,
} from "../../../../utils/configHooks/ConfigHooks";

const TableDatasDownloadLinks = ({ item }) => {
  const url = item?.download_url;

  const { maskLink } = useSiteConfig();
  const handleRedirect = useRedirect(url, maskLink);

  return (
    <tr className="hover:bg-black hover:bg-opacity-[30%] transition-all ease-in-out">
      <td className="px-6 py-4 whitespace-nowrap text-red-600 font-medium flex items-center gap-x-1 text-4xl lg:text-base">
        <MdDownloadForOffline className="text-green-900" />
        <button onClick={() => handleRedirect()}> {item?.label} </button>
      </td>

      <td className="px-6 py-4 whitespace-nowrap">
        <p className="max-w-fit px-4 text-center rounded-md bg-black bg-opacity-[30%] py-[3px] text-3xl lg:text-sm font-medium border border-white border-opacity-[10%]">
          {item?.px_quality}
        </p>
      </td>

      <td className="px-6 py-4 whitespace-nowrap">
        <p className="text-3xl lg:text-sm font-medium">{item?.language?.slice(0, 11)}</p>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <p className="text-3xl lg:text-sm font-medium">{item?.file_size}</p>
      </td>
    </tr>
  );
};

export default TableDatasDownloadLinks;
