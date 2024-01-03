import { useState } from "react";
import { usePerPgaeMovieQuery } from "../../../redux/features/movies/movieApi";
import Pagination from "../../../components/pagination/Pagination";
import Loading from "../../../utils/loading/Loading";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { useDeleteMovieSeriesMutation } from "../../../redux/features/trash/trashApi";
import { FiTrash } from "react-icons/fi";
import { Tooltip, initTE } from "tw-elements";

const MoviesDB = () => {
  initTE({ Tooltip });
  const [currentPage, setCurrentPage] = useState(1);
  const { data: perPgaeMovie, isLoading } = usePerPgaeMovieQuery(currentPage);
  console.log(perPgaeMovie);

  const [deleteMovie] = useDeleteMovieSeriesMutation();
  const handleDeleteMovie = (id) => {
    const shouldDelete = window.confirm('Are you sure you want to delete this movie?');

    if (shouldDelete) {
      deleteMovie(id);
      toast.error('Deleted');
      console.log(id);
    } else {
      console.log('Deletion canceled by user');
    }
  };
  
  return (
    <div className="mx-auto bg-white border w-full h-full p-6">
      <div className="items-start justify-between md:flex">
        <div className="max-w-lg">
          <h3 className="text-xl font-bold text-slate-700 sm:text-2xl uppercase">
            Movies - {perPgaeMovie?.data?.total}
          </h3>
        </div>

        <div className="mt-3 md:mt-0">
          <Link
            to="/admin/dashboard/add-movie"
            className="inline-block px-4 py-2 text-white duration-150 font-medium bg-slate-700 rounded-lg hover:bg-slate-600 md:text-sm"
          >
            Add Movie
          </Link>
        </div>
      </div>

      <div className="mt-8 w-[100px]">
        <Link to="/admin/dashboard/trash">
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
              <th className="py-3 px-6">Type</th>
              <th className="py-3 px-6">Published</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>

          {isLoading ? (
            <Loading />
          ) : (
            <tbody className="divide-y">
              {perPgaeMovie?.data?.data?.map((item, idx) => (
                <tr key={idx} className="odd:bg-gray-50 even:bg-white">
                  <td className="px-6 py-4 font-medium flex items-center gap-x-2">
                    <img src={item?.poster_image_url}  alt="" className="w-[50px] h-[50px] rounded-full"/>

                    <p data-te-toggle="tooltip"  title={ item?.post_title.length > 50 ? item?.post_title : ""}>
                      {item?.post_title.length > 50 ? `${item?.post_title?.slice(0, 50)}...` : item?.post_title}
                    </p>

                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {item?.post_type}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {item?.release_date?.slice(0, 10)}
                  </td>

                  <td className="text-right px-6 whitespace-nowrap">
                    <a
                      href={`/admin/dashboard/details/${item?.id}`}
                      className="py-2 px-3 font-medium text-green-600 hover:text-green-500 duration-150 hover:bg-gray-50 rounded-lg"
                    >
                      Preview
                    </a>
                    <a
                      href={`/admin/dashboard/edit-movie/${item?.id}`}
                      className="py-2 px-3 font-medium text-indigo-600 hover:text-indigo-500 duration-150 hover:bg-gray-50 rounded-lg"
                    >
                      Edit
                    </a>
                    <button
                      onClick={() => handleDeleteMovie(item?.id)}
                      className="py-2 leading-none px-3 font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          )}
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

export default MoviesDB;
