/* eslint-disable react/prop-types */
import TableDatasDownloadLinks from "./TableDatasDownloadLinks";

const DownloadLinksTable = ({ details }) => {

  const downloadLinks = details?.download_links?.filter(link => link?.type === "download");

  return (
    <div className="overflow-x-auto">
      <table className="w-full table-auto text-sm text-left">
        <thead className="text-gray-100 text-3xl lg:text-base font-medium border-b border-white border-opacity-[10%]">
          <tr>
            <th className="py-3 px-6">Options</th>
            <th className="py-3 px-6">Quality</th>
            <th className="py-3 px-6">Language</th>
            <th className="py-3 px-6">Size</th>
          </tr>
        </thead>
        <tbody className="text-gray-200 divide-y divide-slate-800">
          {
            
            downloadLinks?.map((item, idx) => (
            <TableDatasDownloadLinks key={idx} item={item} />
          ))
          
          }
        </tbody>
      </table>
    </div>
  );
};

export default DownloadLinksTable;
