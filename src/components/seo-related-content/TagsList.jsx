import { FaSquare } from "react-icons/fa";

const TagsList = () => {
  return (
    <div className="mt-5 px-4">
      <p className="text-xl flex items-center text-white gap-x-1 font-semibold">
        <FaSquare className="text-green-500 text-2xl" /> Tags:
      </p>

      <div className="flex flex-wrap ml-7 mt-6 text-white text-sm font-semibold gap-x-1">
        <p>Jawan (2021),</p>
        <p>Poran (2022),</p>
        <p>Pathan (2023),</p>
        <p>Krish (2024),</p>
        <p>Robot (2025)</p>.
      </div>
    </div>
  );
};

export default TagsList;
