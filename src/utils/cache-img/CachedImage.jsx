import  { useEffect, useState } from 'react';

const CachedImage = ({ src, alt, imgStyle }) => {
  const [isCached, setIsCached] = useState(false);

  useEffect(() => {
    const image = new Image();
    image.src = src;

    image.onload = () => {
      setIsCached(true);
    };
  }, [src]);

  return isCached ? <img src={src} alt={alt} className={imgStyle}/> : null;
};

export default CachedImage;