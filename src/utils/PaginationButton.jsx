const PaginationButton = ({ children, className, ...proops  }) => {
  return (
    <button
      {...proops}
      className={`flex justify-center items-center bg-[#494949] rounded-[6px] p-[16px] lg:p-5 min-w-[8px] h-[15px] text-[12px] font-[600] text-white ${className}
      `}
    >
      {children}
    </button>
  );
};

export default PaginationButton;
