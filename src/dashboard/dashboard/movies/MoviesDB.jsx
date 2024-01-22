import { useState } from "react";
import { usePerPgaeMovieQuery } from "../../../redux/features/movies/movieApi";
import Pagination from "../../../components/pagination/Pagination";
import Loading from "../../../utils/loading/Loading";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { useDeleteMovieSeriesMutation } from "../../../redux/features/trash/trashApi";
import { FiTrash } from "react-icons/fi";
import { Tooltip, initTE } from "tw-elements";
import { useDispatch, useSelector } from "react-redux";
import { collectSearchItem } from "../../../redux/features/search/searchSlice";
import { useForm } from "react-hook-form";
import { useSerachResultsQuery } from "../../../redux/features/search/searchApi";

const MoviesDB = () => {
  initTE({ Tooltip });
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const { data: perPgaeMovie, isLoading } = usePerPgaeMovieQuery(currentPage);
  const { handleSubmit } = useForm();
  const { searchTerm } = useSelector((state) => state.search);
  const { data: searchResults } = useSerachResultsQuery(searchTerm);

  const [deleteMovie] = useDeleteMovieSeriesMutation();
  const handleDeleteMovie = (id) => {
    const shouldDelete = window.confirm(
      "Are you sure you want to delete this movie?"
    );

    if (shouldDelete) {
      deleteMovie(id);
      toast.error("Deleted");
    } else {
      console.log("Deletion canceled by user");
    }
  };

  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const onSubmit = () => {
    dispatch(collectSearchItem(search));
  };

  const results =
    searchTerm !== null && searchTerm !== ""
      ? searchResults
      : perPgaeMovie?.data;


  return (
    <div className="mx-auto bg-white border w-full h-full p-6">
      <div className="items-start justify-between md:flex">
        <div className="max-w-lg">
          <h3 className="text-xl font-bold text-slate-700 sm:text-2xl uppercase">
            Movies - {perPgaeMovie?.data?.total}
          </h3>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg flex">
          <input
            value={search}
            onChange={handleSearch}
            type="text"
            placeholder="Search Movie"
            className="border px-2 py-[4px] outline-none rounded-s-md text-sm"
          />

          <button
            type="submit"
            className="px-4 bg-slate-700 hover:bg-slate-600 text-white border border-slate-700 rounded-e-md text-sm"
          >
            Search
          </button>
        </form>

        <div className="mt-3 md:mt-0">
          <Link to="/admin/dashboard/add-movie"
            className="inline-block px-4 py-[6px] text-white duration-150 font-medium bg-slate-700 rounded-lg hover:bg-slate-600 md:text-sm"
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
            </tr>
          </thead>

          {isLoading ? (
            <Loading />
          ) : (
            <tbody className="divide-y">
              {results?.data?.map((item, idx) => (
                <tr key={idx} className="odd:bg-gray-50 even:bg-white">
                  <td className="px-6 py-4 font-medium flex items-center gap-x-2">
                    <img src={item?.poster_image_url} alt="" className="w-[50px] h-[70px] object-cover"/>

                    <div className="flex flex-col">
                      <p data-te-toggle="tooltip" title={ item?.post_title.length > 70 ? item?.post_title : ""}>
                        {item?.post_title.length > 70 ? `${item?.post_title?.slice(0, 70)}...` : item?.post_title}
                      </p>

                      <div className="flex items-center gap-x-3 mt-2 text-xs text-green-500">
                        <a href={`/movie/${item?.id}/${item?.post_title}`} target="_blank" rel="noopener noreferrer" 
                        className="text-orange-500">Preview</a>
                        <a href={`/admin/dashboard/details/${item?.id}`}>Details</a>
                        <a href={`/admin/dashboard/edit-movie/${item?.id}`} className="text-violet-500">Edit</a>
                        <button onClick={() => handleDeleteMovie(item?.id)} className="text-red-500">Delete</button>
                      </div>
                    </div>
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap">
                    {item?.post_type}
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap">
                    {item?.release_date?.slice(0, 10)}
                  </td>
                </tr>
              ))}
            </tbody>
          )}
        </table>

        {/* {searchTerm === null && searchTerm === "" && ( */}
          <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} perPgaeMovie={perPgaeMovie}/>
        {/* )} */}
      </div>
    </div>
  );
};

export default MoviesDB;
