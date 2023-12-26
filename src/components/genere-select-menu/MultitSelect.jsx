import { useState } from 'react';
import Select from 'react-select';

const MultiSelectMenu = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleSelectChange = (selectedOptions) => {
    setSelectedOptions(selectedOptions);
  };

  const handleSubmit = () => {
    console.log('Selected Options:', selectedOptions.map((option) => option.value));
  };

  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

  return (
    <div className='flex items-center gap-4'>
      <Select
        isMulti
        options={options}
        value={selectedOptions}
        onChange={handleSelectChange}
        placeholder="Select options"
        className='w-full'
      />
      <button onClick={handleSubmit} className='w-[150px] h-[39px] border border-slate-600 rounded-md text-white bg-slate-900 hover:bg-slate-600'>Submit</button>
    </div>
  );
};

export default MultiSelectMenu;
