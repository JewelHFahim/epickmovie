import DiscoverMovies from "./DiscoverMovies/DiscoverMovies";
import DiscoverTvshows from "./DiscoverTvshows/DiscoverTvshows";

const Discovery = ({ filteredData, toggleState }) => {
  console.log(filteredData);

  return (
    <div className="p-10">
      {toggleState === "movie" ? (
        <DiscoverMovies filteredData={filteredData} />
      ) : (
        <DiscoverTvshows />
      )}
    </div>
  );
};

export default Discovery;
