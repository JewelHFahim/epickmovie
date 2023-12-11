import DiscoverMovies from "./DiscoverMovies/DiscoverMovies";
import DiscoverTvshows from "./DiscoverTvshows/DiscoverTvshows";

const Discovery = ({ toggleState }) => {


  return (
    <div className="p-10">
      {toggleState === "movie" ? <DiscoverMovies /> : <DiscoverTvshows />}
    </div>
  );
};

export default Discovery;
