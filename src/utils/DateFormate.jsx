const DateFormate = ({date}) => {
  const publishedDate = new Date(date);

  // Format the date
  const formattedDate = publishedDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return <p className="mt-2 text-[20px] lg:text-[10px] text-white">{formattedDate}</p>;
};

export default DateFormate;
