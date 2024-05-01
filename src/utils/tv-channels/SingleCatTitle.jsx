/* eslint-disable react/prop-types */

const SingleCatTitle = ({ children}) => {
  return (
    <div className="mt-5 flex items-center justify-between font-jost text-[32px]">
      <div className="bg-[#FF0000] px-8 py-1">
        <p className="font-bold capitalize">{children}</p>
      </div>
    </div>
  );
};

export default SingleCatTitle;
