import { twMerge } from "tailwind-merge";

const PagiBtnTheme1 = ({ children, className, ...proops }) => {
  return (
    <button
      {...proops}
      className={twMerge(
        "flex justify-center items-center bg-[#494949] rounded-[6px] w-[140px] h-[140px] lg:w-[50px] lg:h-[46px] text-[47px] lg:text-[12px] font-semibold text-white",
        className
      )}
    >
      {children}
    </button>
  );
};

export default PagiBtnTheme1;
