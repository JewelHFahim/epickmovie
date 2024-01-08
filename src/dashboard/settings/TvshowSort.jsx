import Select from "react-select";

const TvshowSort = ({ selectedOptionTv, setSelectedOptionTv, tv_order }) => {
    
  const options = [
    { label: "ASC", value: "asc" },
    { label: "DESC", value: "desc" },
    { label: "Release Date", value: "release_date" },
    { label: "Latest Post", value: "latest_post" },
  ];

  return (
    <div>
      <Select
        defaultValue={tv_order}
        onChange={setSelectedOptionTv}
        options={options}
        className="w-full"
      />
    </div>
  );
};

export default TvshowSort;
