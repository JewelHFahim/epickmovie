import Select from "react-select";
import { useGetAudioListQuery } from "../../../../redux/features/movies/movieApi";

const AudioListDropdown = ({selectedAudios, setSelectedAudios}) => {

  const { data: audioList } = useGetAudioListQuery();

  const audios = audioList?.data;
  const handleSelectChange = (selectedOptions) => {
    setSelectedAudios(selectedOptions);
  };


  const newArray = audios?.map((item) => ({ value: item?.id,  label: item?.name}));

  return (
    <div className="flex items-center gap-4">
      <Select
        isMulti
        options={newArray}
        value={selectedAudios}
        onChange={handleSelectChange}
        placeholder="Select Menues"
        className="w-full"
      />
    </div>
  );
};

export default AudioListDropdown;
