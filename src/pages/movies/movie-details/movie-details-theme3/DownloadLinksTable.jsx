/* eslint-disable react/prop-types */
import { MdDownloadForOffline } from "react-icons/md";
import { Link } from "react-router-dom";

const DownloadLinksTable = ({ details }) => {

  return (
    <div className="overflow-x-auto">
      <table className="w-full table-auto text-sm text-left">
        <thead className=" text-gray-100 font-medium border-b border-white border-opacity-[10%]">
          <tr>
            <th className="py-3 px-6">Options</th>
            <th className="py-3 px-6">Quality</th>
            <th className="py-3 px-6">Language</th>
            <th className="py-3 px-6">Size</th>
          </tr>
        </thead>
        <tbody className="text-gray-200 divide-y divide-slate-800 ">
          {details?.download_links?.map((item, idx) => (
            <tr
              key={idx}
              className="hover:bg-black hover:bg-opacity-[30%] transition-all ease-in-out"
            >
              <td className="px-6 py-4 whitespace-nowrap text-red-600 font-medium flex items-center gap-x-1">
                <MdDownloadForOffline className="text-green-900" />
                <Link to={item?.download_url} target="_blank">{item?.label}</Link>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <p className="max-w-fit px-4 text-center rounded-md bg-black bg-opacity-[30%] py-[3px] text-sm font-medium border border-white border-opacity-[10%]">
                  {item?.px_quality}
                </p>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <p className="text-sm font-medium">{item?.language}</p>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <p className="text-sm font-medium">{item?.file_size}</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DownloadLinksTable;
