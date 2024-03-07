import { Link } from "react-router-dom";

const IndexTable = ({ urls }) => {
  console.log(urls);

  return (
    <div className="w-[80%] mx-auto">
      <div className="mt-6 shadow-sm border rounded-lg overflow-x-auto">
        <table className="w-full table-auto text-sm text-left bg-[#0f0f10]">
          <thead className="bg-slate-800 text-gray-100 font-medium border-b">
            <tr className="divide-x">
              <th className="py-3 px-6">URL</th>
              <th className="py-3 px-6"> Last Updated </th>
              <th className="py-3 px-6">Change Freq.</th>
              <th className="py-3 px-6">Priority</th>
            </tr>
          </thead>
          <tbody className="text-gray-100 divide-y">
            {urls?.map((item, idx) => (
              <tr key={idx} className="divide-x">
                <td className="px-6 py-4 whitespace-nowrap flex items-center gap-x-6">
                  <span>{idx + 1}</span>
                  <Link to={item.loc} target="_blank" className="text-blue-400">
                    {item.loc}
                  </Link>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{item.lastmod}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {item.changefreq}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{item.priority}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default IndexTable;
