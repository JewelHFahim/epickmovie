import { useYearListQuery } from "../../../redux/features/movies/movieApi";
import TermPost from "./TermPost";

const YearPost = () => {
    const { data: yearList } = useYearListQuery();
  return (
    <div>
      <TermPost termUrl={yearList?.data} />
    </div>
  );
};

export default YearPost;
