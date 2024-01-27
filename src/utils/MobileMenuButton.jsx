const MobileMenuButton = ({ children }) => {

  return (
    <button className="w-full py-[10px] border border-slate-400 rounded-[8px] text-white font-[600] bg-[#27272A]">
      {children}
    </button>
  );

};

export default MobileMenuButton;
