import { IoIosArrowDown } from "react-icons/io";
import Discovery from "./Discovery";
import { useEffect, useState } from "react";
import FilterByGenre from "./FilterByGenre";

const DbMovies = () => {
  const [toggleState, setToggleState] = useState("movie");
  const handleState = (state) => {
    setToggleState(state);
  };

  const [genreList, setGenre] = useState();
  console.log(genreList);

const [genreId, setGenreId] = useState(null)
console.log(genreId)

  const getGenreId = (gnid) => {
    setGenreId(gnid)
  }

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=246b8014c5aa8430016780041a413012`
    )
      .then((res) => res.json())
      .then((data) => setGenre(data));
  }, []);

  return (
    <div className="w-full h-full">
      {/* ================>> Header Action Buttons and Filters <<=================*/}
      <div className="bg-slate-50 p-6">
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

            <div className="border border-slate-400 rounded-md divide-x-2 flex items-center overflow-hidden">
              <button className="px-3 py-1 text-xs font-medium hover:bg-slate-200">
                Credits: 9,999
              </button>
              <button className="px-3 py-1 text-xs font-medium hover:bg-slate-200">
                Used: 0
              </button>
              <button className="px-3 py-1 text-xs font-medium hover:bg-slate-200">
                Requests: 1
              </button>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <p className="text-sm text-slate-400 font-medium">Meta Updater</p>
            <button className="px-3 py-1 bg-slate-700 text-white border rounded-md text-xs font-medium">
              Start
            </button>
          </div>
        </div>

        <hr />

        {/* Bottom Menus */}
        <div className="mt-3 flex items-center gap-x-3">
          <button className="border px-4 py-2 rounded-md">
            <IoIosArrowDown />
          </button>

          <input
            type="number"
            defaultValue={2021}
            className="border px-4 py-1 rounded-md w-[80px]"
          />

          <input
            type="number"
            defaultValue={1}
            className="border px-4 py-1 rounded-md w-[80px]"
          />

          <select
            data-te-select-init
            className="border px-4 py-1 rounded-md w-[170px]"
          >
            <option value="1">Popularity desc</option>
            <option value="1">Popularity asc</option>
          </select>

          <select
          
            data-te-select-init
            className="border px-4 py-1 rounded-md w-[170px]"
          >
            <option value="1" hidden>
              All Genre
            </option>
            <option value="1">Action</option>

            {genreList?.genres?.map((item) => (
              <option key={item?.id} value={item?.id} onClick={()=> getGenreId(item?.id)}> {item?.name} </option>
            ))}
          </select>

          <button className="border px-4 py-1 rounded-md text-blue-500 border-blue-500">
            Discover
          </button>

          <button className="border px-4 py-1 rounded-md text-blue-500 border-blue-500">
            Bulk Import
          </button>
        </div>
      </div>

      {/* ==========================>> Discovery <<================================*/}
      <FilterByGenre />
      <Discovery toggleState={toggleState} />

    </div>
  );
};

export default DbMovies;
