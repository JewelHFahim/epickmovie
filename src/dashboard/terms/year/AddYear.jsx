import { useYearListQuery } from "../../../redux/features/movies/movieApi";
import PaginatedItems from "../../../utils/pagination-frontend/PaginatedItems";

const AddYear = () => {

  const { data: yearList, isLoading } = useYearListQuery();

  const datas = {
    items: yearList,
    isLoading: isLoading,
    thead: "Year",
    // deleteAction: deleteTerms,
  };


  return (
    <div className="flex w-full">

      <div className="bg-white w-[45%] border-r px-2  py-4">

        <div className="flex justify-center">
          <h3 className="text-xl font-bold sm:text-2xl uppercase">Add New Year</h3>
        </div>

        <form className="mt-6 bg-slate-50 p-6 rounded-md">

          <div className="flex flex-col">
            <label>Name</label>
            <input
              type="text"
              placeholder="add new year"
              className="border py-1 px-4 rounded-md bg-white focus:outline-blue-500"
            />
            <p className="text-xs text-gray-400">
              The name is how it appears on your site.
            </p>
          </div>

          <div className="flex flex-col mt-4">
            <label>Slug</label>
            <input
              type="text"
              placeholder="add slug"
              className="border py-1 px-4 rounded-md bg-white focus:outline-blue-500"
            />
            <p className="text-xs text-gray-400">
              The “slug” is the URL-friendly version of the name. It is usually
              all lowercase and contains only letters, numbers, and hyphens.
            </p>
          </div>

          <div className="mt-8">
            <button className="bg-slate-700 px-5 py-2 text-sm font-medium rounded-md text-white hover:bg-slate-800">Add New Year</button>
          </div>
        </form>
      </div>

      <div className="mx-auto bg-white border w-[60%]  p-2">
        <div className="items-start justify-center md:flex">
          <div className="max-w-lg">
            <h3 className="text-xl font-bold sm:text-2xl uppercase">
              Year List
            </h3>
          </div>
        </div>

        {/* ==============>> GENRE LIST <<=============== */}
        <PaginatedItems datas={datas}/>

      </div>
      
    </div>
  );
};

export default AddYear;
