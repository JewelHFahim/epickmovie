import { useForm } from "react-hook-form";
import { BsSearch } from "react-icons/bs";
import { getSearchMovieSeries } from "../../redux/features/search/searchSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const SearchMovie = () => {
  const { handleSubmit, register } = useForm();

  const dispatch = useDispatch();
  const navigate= useNavigate();

  const onSubmit = (data) => {
   const res =  dispatch(getSearchMovieSeries(data?.search));
    if(res !== null){
      return navigate("/admin/dashboard")
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex items-center">
        <input
          type="text"
          placeholder="search"
          className="w-[200px] h-[30px] px-2 rounded-s-md focus:outline-none"
          {...register("search")}
        />
        <button
          type="submit"
          className="w-[40px] h-[30px] border bg-slate-800 hover:bg-slate-600 text-white flex justify-center items-center rounded-e-md">
          <BsSearch />
        </button>
      </form>
    </div>
  );
};

export default SearchMovie;
