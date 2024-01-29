import { twMerge } from "tailwind-merge";

const PaginationButton = ({ children, className, ...proops }) => {
  return (
    <button
      {...proops}
      className={twMerge(
        "flex justify-center items-center bg-[#494949] rounded-[6px] w-[140px] h-[140px] lg:w-[50px] lg:h-[50px] text-[40px] lg:text-[16px] font-[600] text-white",
        className
      )}
    >
      {children}
    </button>
  );
};

export default PaginationButton;
