import img1 from "../../assets/card img 1.jpg"


const HighLightCard = ({className}) => {
  return (
    <div className={`border border-yellow-600 rounded-[8px] ${className}`}>
      <img
        src={img1}
        alt=""
        className="w-full h-full object-cover rounded-[8px]"
      />
    </div>
  );
};

export default HighLightCard;
