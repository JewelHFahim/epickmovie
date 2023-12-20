import { IoIosArrowDown } from "react-icons/io";
import { useEffect, useState } from "react";
import { base_url, key } from "../../utils/Importants";
import { useForm } from "react-hook-form";
import Discovery from "./Discovery";
import { useDispatch, useSelector } from "react-redux";
import { bulkMovieImport } from "../../redux/features/movies/movieSlice";
import { bulkTvShowImport } from "../../redux/features/tv-show/tvShowSlice";

const DbMovies = () => {
  const { bulkData } = useSelector((state) => state.movie);
  const { bulkTvData } = useSelector((state) => state.tvShow);
  const [toggleState, setToggleState] = useState("movie");
  const dispatch = useDispatch();
  const handleState = (state) => {
    setToggleState(state);
  };

  const [genreList, setGenre] = useState();
  useEffect(() => {
    fetch(`${base_url}/genre/movie/list?${key}`)
      .then((res) => res.json())
      .then((data) => setGenre(data));
  }, []);

  const [filteredData, setFiltredData] = useState();
  const { handleSubmit, register } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    setFiltredData(data);
  };

  // ===================>> BULK MOVIE IMPORT <<====================
  const handleBulkImport =  () => {
    const res = dispatch(bulkMovieImport({ tmdb_ids: bulkData }));
    console.log(res);

  };

  // ===================>> BULK TV SHOW IMPORT <<====================
  const handleBulkTvShowImport = async () => {
    const res = dispatch(bulkTvShowImport({tmdb_ids:bulkTvData}));
    console.log(res);
  };

  return (
    <div className="w-full h-full">
      {/* ================>> Header Action Buttons and Filters <<=================*/}
      <div className="bg-slate-200 p-6">
        {/* Top Menus */}

        <div className="flex justify-between items-center mb-3">
          <div className="flex items-center gap-x-4">
            <div className="flex items-center gap-1">
              <div className="w-[10px] h-[10px] bg-green-500 rounded-full"></div>
              <p className="text-sm font-medium">DBMVS</p>
            </div>

            <button
              onClick={() => handleState("movie")}
              className={`px-5 py-[3px] rounded-[4px] text-sm border ${
                toggleState === "movie"
                  ? "bg-slate-700 text-white"
                  : "bg-white text-slate-700"
              }`}
            >
              Movie
            </button>

            <button
              onClick={() => handleState("shows")}
              className={`px-5 py-[3px] rounded-[4px] text-sm border ${
                toggleState === "shows"
                  ? "bg-slate-700 text-white"
                  : "bg-white text-slate-700"
              }`}
            >
              Shows
            </button>
          </div>
        </div>

        <hr />

        {/* ============================>> FORM START <<============================ */}

        <div className="flex items-center gap-x-3">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-3 flex items-center gap-x-3"
          >
            <button className="border px-4 py-2 rounded-md">
              <IoIosArrowDown />
            </button>

            {/* =====================>> SORT BY YEAR <<==============================*/}
            <input
              type="number"
              {...register("year")}
              placeholder="year"
              className="border px-4 py-1 rounded-md w-[85px] focus:outline-blue-500"
            />

            {/* =====================>> FILTER BY PAGE <<=============================*/}
            <input
              type="number"
              {...register("page")}
              placeholder="page"
              className="border px-4 py-1 rounded-md w-[80px] focus:outline-blue-500"
            />

            {/* =====================>> SORT BY ASC/DSC <<=============================*/}
            <select
              {...register("sort")}
              className="border px-4 py-1 rounded-md w-[170px] focus:outline-blue-500"
            >
              <option value="popularity.desc">Popularity desc</option>
              <option value="popularity.asc">Popularity asc</option>
            </select>

            {/* =====================>> SORT BY GENRE<<================================*/}
            <select
              data-te-select-init
              {...register("genreId")}
              className="border p-4 py-1 rounded-md w-[170px]  focus:outline-blue-500  "
            >
              {genreList?.genres?.map((item) => (
                <option key={item?.id} value={item?.id}>
                  {" "}
                  {item?.name}{" "}
                </option>
              ))}
            </select>

            <button
              type="submit"
              className="border px-4 py-1 rounded-md text-blue-500 border-blue-500 hover:text-blue-700 hover:border-blue-700 hover:bg-blue-50 "
            >
              Discover
            </button>
          </form>

          {toggleState === "movie" ? (
            <button
              onClick={() => handleBulkImport()}
              className="border px-4 py-1 rounded-md text-blue-500 border-blue-500 mt-[12px]"
            >
              Bulk Import
            </button>
          ) : (
            <button
              onClick={() => handleBulkTvShowImport()}
              className="border px-4 py-1 rounded-md text-blue-500 border-blue-500 mt-[12px]"
            >
              Bulk Import
            </button>
          )}
        </div>
      </div>

      {/* ==========================>> Discovery <<================================*/}

      {filteredData?.genreId?.length > 0 ||
      filteredData?.sort?.length > 0 ||
      filteredData?.year?.length > 0 ||
      filteredData?.page?.length ? (
        <Discovery filteredData={filteredData} toggleState={toggleState} />
      ) : (
        <p className="border p-5 text-sm">
          <span className="font-medium mt-5"> DBMS </span>
          Welcome, the service has started successfully
        </p>
      )}
    </div>
  );
};

export default DbMovies;