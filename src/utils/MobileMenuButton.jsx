const MobileMenuButton = ({ children }) => {

  return (
    <button className="px-[10px] py-[6px] border border-[#514F4F] rounded-[3px] text-white text-[10px] font-[600] bg-[#27272A]">
      {children}
    </button>
  );

};

export default MobileMenuButton;
