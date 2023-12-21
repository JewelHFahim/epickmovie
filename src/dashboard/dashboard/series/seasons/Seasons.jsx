import { FiTrash } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useAdminTvShowListQuery } from "../../../../redux/features/tv-show/tvShowApi";

const Seasons = () => {

  const {data: allTvShow} = useAdminTvShowListQuery();
  console.log(allTvShow)


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

      <div className="mt-8 px-4 w-[100px]">
        <Link to="/admin/dashboard/season-trash">
          <button className="flex items-center gap-1 border border-slate-700 rounded-lg text-slate-700 px-3 text-sm py-1 hover: hover:text-white hover:bg-red-400 hover:border-white">
            <FiTrash />
            Trash
          </button>
        </Link>
      </div>

      <div className="mt-2 shadow-sm border rounded-lg overflow-x-auto">
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

 {/* const nameList = Object.values(myArray).flatMap(subArray => subArray.map(item => item.name)) */}


        
          </tbody>

        </table>

      </div>
    </div>
  );
};

export default Seasons;
