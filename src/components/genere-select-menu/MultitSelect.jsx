import { useState } from "react";
import Select from "react-select";
import {
  useAdminGenreListQuery,
  useGetAudioListQuery,
  usePixelQualityListQuery,
  usePrintQualityListQuery,
} from "../../redux/features/movies/movieApi";
import { useCreateMenuMutation, useQuickMenuQuery } from "../../redux/features/settings/settingApi";
import toast from "react-hot-toast";

const MultiSelectMenu = () => {
  
  const [selectedOptions, setSelectedOptions] = useState([]);
  const {data: quickMenuList} = useQuickMenuQuery();

  const { data: genreList } = useAdminGenreListQuery();
  const { data: audiList } = useGetAudioListQuery();
  const { data: pixelList } = usePixelQualityListQuery();
  const { data: printList } = usePrintQualityListQuery();
  const [createMenu] = useCreateMenuMutation();

  const concatenatedList = genreList?.data?.concat(
    audiList?.data,
    pixelList?.data,
    printList?.data
  );

  const handleSelectChange = (selectedOptions) => {
    setSelectedOptions(selectedOptions);
  };
  
  const handleSubmit = () => {
   const selected =  selectedOptions?.map((option) => option.value);
   createMenu({term_ids: selected})
   toast.success("Created")
  };

  const newArray = concatenatedList?.map(item => ({ value: item?.id, label: item?.name }));
  const forDefaultMenu = quickMenuList?.data?.map(item => ({ value: item?.id, label: item?.name }));

  return (
    <div className="flex items-center gap-4">
      <Select
        isMulti
        options={newArray}
        value={selectedOptions?.length > 0 ? selectedOptions : forDefaultMenu }
        onChange={handleSelectChange}
        placeholder="Select Menues"
        className="w-full"
      />

      <button
        onClick={handleSubmit}
        className="w-[150px] h-[39px] border border-slate-600 rounded-md text-white bg-slate-600 hover:bg-slate-800"
      >
        Submit
      </button>
    </div>
  );
};

export default MultiSelectMenu;

