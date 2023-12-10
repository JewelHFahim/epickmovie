import { useState } from "react";
import Pagination from "../../../components/pagination/Pagination";
import { usePerPgaeTvShowQuery } from "../../../redux/features/tv-show/tvShowApi";

const Seasons = () => {

  const [currentPage, setCurrentPage] = useState(1);
  const { data: perPgaeMovie } = usePerPgaeTvShowQuery(currentPage);
  console.log(perPgaeMovie);

  return (
    <div className="mx-auto bg-white border w-full h-full p-2">

      <div className="items-start justify-between md:flex">
        <div className="max-w-lg">
          <h3 className="text- text-xl text-slate-700 font-bold sm:text-2xl uppercase">
          Seasons
          </h3>
        </div>

        <div className="mt-3 md:mt-0">
          <a
            href="/admin/dashboard/add-season"
            className="inline-block px-4 py-2 text-white duration-150 font-medium bg-slate-700 rounded-lg hover:bg-slate-600 md:text-sm"
          >
            Add Seasons
          </a>
        </div>
      </div>

      <div className="mt-10 shadow-sm border rounded-lg overflow-x-auto">
        <table className="w-full table-auto text-sm text-left">
          <thead className="text-gray-600 font-medium border-b">
            <tr>
              <th className="py-3 px-6">Poster & Title</th>
              <th className="py-3 px-6">Genre</th>
              <th className="py-3 px-6">Published</th>
              <th className="py-3 px-6">Rating</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y">
            {perPgaeMovie?.data?.data?.map((item, idx) => (
              <tr key={idx} className="odd:bg-gray-50 even:bg-white">
                <td className="px-6 py-4 font-medium flex items-center gap-x-2">
                  <img
                    src={item?.poster_image_url}
                    alt=""
                    className="w-[50px] h-[50px] rounded-full"
                  />
                  {item?.post_name.slice(0, 50)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {item?.post_type}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {item?.post_modified.slice(0, 10)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {item?.post_status}
                </td>
                <td className="text-right px-6 whitespace-nowrap">
                  <a
                    href="javascript:void()"
                    className="py-2 px-3 font-medium text-green-600 hover:text-green-500 duration-150 hover:bg-gray-50 rounded-lg"
                  >
                    Preview
                  </a>
                  <a
                    href="javascript:void()"
                    className="py-2 px-3 font-medium text-indigo-600 hover:text-indigo-500 duration-150 hover:bg-gray-50 rounded-lg"
                  >
                    Edit
                  </a>
                  <button
                    href="javascript:void()"
                    className="py-2 leading-none px-3 font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          perPgaeMovie={perPgaeMovie}
        />
      </div>
    </div>
  );
};

export default Seasons;
