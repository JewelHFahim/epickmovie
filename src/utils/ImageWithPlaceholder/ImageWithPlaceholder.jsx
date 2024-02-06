// YourComponent.js
import  { useState } from 'react';

const ImageWithPlaceholder = ({ src, alt, imgStyle }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      {!isLoaded && <div style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, background: 'lightgray' }} />}
      <img
        src={src}
        alt={alt}
        // style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        onLoad={() => setIsLoaded(true)}
        className={imgStyle}
      />
    </div>
  );
};

export default ImageWithPlaceholder;