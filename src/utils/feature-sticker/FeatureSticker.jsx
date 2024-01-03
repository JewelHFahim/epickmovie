const FeatureSticker = ({ item }) => {
  return (
    <div className="border px-4 py-[2px] bg-gradient-to-r from-[#ff1818] to-[#fdd506] text-white">
      {item?.stickerLabel}
    </div>
  );
};

export default FeatureSticker;
