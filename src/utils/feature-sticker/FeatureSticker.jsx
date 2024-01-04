const FeatureSticker = ({ item }) => {
  return (
    <div className={` max-w-[170px] px-2 py-[6px] bg-[#ff1818]  text-white text-[10px] rounded-[5px] shadow-2xl`}>
      {item?.stickerLabel}
    </div>
  );
};

export default FeatureSticker;
