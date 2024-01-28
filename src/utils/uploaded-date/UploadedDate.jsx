
const UploadedDate = ({details}) => {

    const currentDate = new Date();

    const givenDate = new Date(details?.updated_at);
  
    const timeDifference = currentDate.getTime() - givenDate.getTime();
  
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    return (
        <p className="text-[20px] lg:text-[13px] text-white font-roboto"> { daysDifference === 0 ? "Today Uploaded" : `${daysDifference} Days Ago`}</p>
    );
};

export default UploadedDate;