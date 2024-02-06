// YourComponent.js
import  { useEffect, useRef } from 'react';

const LazyLoadedImage = ({ src, alt, imgStyle }) => {
  const imgRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          imgRef.current.src = src;
          observer.disconnect();
        }
      });
    });

    observer.observe(imgRef.current);

    return () => {
      observer.disconnect();
    };
  }, [src]);

  return <img ref={imgRef} alt={alt} className={imgStyle}/>;
};

export default LazyLoadedImage ;