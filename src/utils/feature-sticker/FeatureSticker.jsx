const FeatureSticker = ({ item }) => {
  return (
    <div className={`w-[200px] h-[50px] lg:w-[120px] lg:h-[30px] bg-[#ff1818]  text-white text-[18px] leading-none lg:text-[12px] rounded-[5px] shadow-2xl flex justify-center items-center font-semibold lg:font-medium text-center`}>
      {item?.stickerLabel}
    </div>
  );
};

export default FeatureSticker;
