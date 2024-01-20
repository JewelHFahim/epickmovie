import Select from "react-select";

const TvshowSort = ({ selectedOptionTv, setSelectedOptionTv, tv_order }) => {
    
  const options = [
    { label: "ASC", value: "asc" },
    { label: "DESC", value: "desc" },
    { label: "Release Date ASC", value: "release_date_asc" },
    { label: "Release Date DESC", value: "release_date_desc" },
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
