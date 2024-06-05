/* eslint-disable react/prop-types */

const ThumbnailImage = ({ meta, className }) => {
  const thumbnail = meta?.find((img) => img.meta_key === "thumbnail");

  return (
    <div>
      {thumbnail ? (
        <div>
          <img
            src={thumbnail.meta_value}
            alt="Thumbnail"
            className={className}
          />
        </div>
      ) : (
        <div>No thumbnail available</div>
      )}
    </div>
  );
};

export default ThumbnailImage;
