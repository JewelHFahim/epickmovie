import { useGenreListQuery } from "../../../redux/features/movies/movieApi";
import TermPost from "./TermPost";

const GenrePost = () => {
  const { data: genreList } = useGenreListQuery();

  return (
    <div>
      <TermPost termUrl={genreList?.data} />
    </div>
  );
};

export default GenrePost;
