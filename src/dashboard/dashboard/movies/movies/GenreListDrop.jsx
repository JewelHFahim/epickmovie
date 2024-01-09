import Select from "react-select";
import {
  useAdminGenreListQuery,
  useGetAudioListQuery,
  usePixelQualityListQuery,
  usePrintQualityListQuery,
} from "../../../../redux/features/movies/movieApi";

const GenreListDrop = ({selectedOptions, setSelectedOptions, prevGenres}) => {
  const { data: genreList } = useAdminGenreListQuery();
  const { data: audioList } = useGetAudioListQuery();
  const { data: pixelList } = usePixelQualityListQuery();
  const { data: printList } = usePrintQualityListQuery();


  const concatenatedList = genreList?.data?.concat(audioList?.data,  pixelList?.data, printList?.data);
  const handleSelectChange = (selectedOptions) => {
    setSelectedOptions(selectedOptions);
  };


  const newArray = concatenatedList?.map((item) => ({ value: item?.id,  label: item?.name}));

  return (
    <div className="flex items-center gap-4">
      <Select
        isMulti
        options={newArray}
        value={selectedOptions?.length > 0 ? selectedOptions : prevGenres}
        onChange={handleSelectChange}
        placeholder="Select Menues"
        className="w-full"
      />
    </div>
  );
};

export default GenreListDrop;
