const MobileMenuButton = ({ children }) => {

  return (
    <button className="px-[15px] py-[8px] border border-[#514F4F] rounded-[3px] text-white text-[11px] font-[600] bg-[#27272A]">
      {children}
    </button>
  );
};

export default MobileMenuButton;
