import Select from "react-select";

const MovieSort = ({ selectedOptionMovie, setSelectedOptionMovie, movie_order }) => {
  const options = [
    { label: "ASC", value: "asc" },
    { label: "DESC", value: "desc" },
    { label: "Release Date", value: "release_date" },
    { label: "Latest Post", value: "latest_post" },
  ];

  return (
    <div>
      <Select
        defaultValue="abce"
        defaultInputValue={movie_order}
        onChange={setSelectedOptionMovie}
        options={options}
        className="w-full"
      />
    </div>
  );
};

export default MovieSort;
