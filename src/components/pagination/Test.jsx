import { useGenreListQuery } from "../../redux/features/movies/movieApi";

const Test = () => {
  const {data: genreList} = useGenreListQuery();

  const itemsPerColumn = 20;
  const columns = [];
  console.log(columns)
  for (let i = 0; i < genreList?.data?.length; i += itemsPerColumn) {
    columns.push(genreList?.data?.slice(i, i + itemsPerColumn));
  }


  return (
    <div className="text-white">
      <li>

<a href="#" className=" flex items-center gap-2 "> Genre </a>

 <ul className="border flex w-[400px]">
 {
    columns?.map((item, i)=>( <li key={i} className="border w-[100px] flex flex-col"> {item?.map((itm, i)=>(<a key={i}>{itm.name}</a>))} </li> ))
 }
 </ul>

</li>
    </div>
  );
};

export default Test;