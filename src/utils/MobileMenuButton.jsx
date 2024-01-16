const MobileMenuButton = ({ children }) => {

  return (
    <button className="w-full px-[4px] py-[4px] lg:px-[10px] lg:min-w-[80px] lg:py-[6px] border border-[#514F4F] rounded-[3px] text-white text-[10px] font-[600] bg-[#27272A]">
      {children}
    </button>
  );

};

export default MobileMenuButton;
