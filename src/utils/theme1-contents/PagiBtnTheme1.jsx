import { twMerge } from "tailwind-merge";

const PagiBtnTheme1 = ({ children, className, ...proops }) => {
  return (
    <button {...proops}
      className={twMerge("flex justify-center items-center bg-[#494949] rounded-[6px] w-[110px] h-[110px] lg:w-[52px] lg:h-[52px] text-[42px] lg:text-[18px] font-semibold text-white",
        className
      )}
    >
      {children}
    </button>
  );
};

export default PagiBtnTheme1;
