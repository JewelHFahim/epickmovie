import Select from "react-select";

const MovieSort = ({ selectedOptionMovie, setSelectedOptionMovie, movie_order }) => {
  const options = [
    { label: "ASC", value: "asc" },
    { label: "DESC", value: "desc" },
    { label: "Release Date ASC", value: "release_date_asc" },
    { label: "Release Date DESC", value: "release_date_desc" },
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
