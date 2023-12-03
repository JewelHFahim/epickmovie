const DownloadButton = ({children}) => {
  return (
    <button className="w-full py-[12px] text-[22px] font-[700] text-white flex justify-center items-center bg-[#FF2345] rounded-[6px] font-roboto">
      {children}
    </button>
  );
};

export default DownloadButton;
