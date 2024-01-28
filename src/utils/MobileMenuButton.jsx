const MobileMenuButton = ({ children }) => {

  return (
    <button className="w-full py-[12px] border border-slate-400 rounded-[8px] text-[28px] text-white font-[600] bg-[#27272A] hover:bg-[#222223]">
      {children}
    </button>
  );

};

export default MobileMenuButton;
