import PixelQuality from "./PixelQuality";
import PrintQuality from "./PrintQuality";

const AddQuality = () => {
  return (
    <div>
      <PixelQuality />
      <hr className="my-10" />
      <PrintQuality />
    </div>
  );
};

export default AddQuality;
