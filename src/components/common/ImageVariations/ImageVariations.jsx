import React, { useEffect, useRef } from 'react';
import './ImageVariations.scss';
import gsap from 'gsap';

function ImageVariations({ 
  srcImageDesktop, 
  altImage, 
  srcImageMobile, 
  srcAux1, 
  altAux1, 
  srcAux2, 
  altAux2, 
  variation 
}) {
  const hasValidImage = srcImageDesktop || srcImageMobile || srcAux1 || srcAux2;

  const imageDesktopRef = useRef(null);

  const animateOnScroll = (element) => {
    gsap.fromTo(
      element,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }
    );
  };

  useEffect(() => {
    const options = {
      root: null,
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateOnScroll(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, options);

    if (imageDesktopRef.current) observer.observe(imageDesktopRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  if (!hasValidImage) return null;

  return (
    <div className={`container-ImageVariations${variation}`}>
      {srcImageDesktop && (
        <img
          ref={imageDesktopRef}
          className="main-ImageVariations"
          src={srcImageDesktop}
          alt={altImage}
          loading="lazy"
        />
      )}
      {srcImageMobile && (
        <img
          ref={imageDesktopRef}
          className="mainMobile-ImageVariations"
          src={srcImageMobile}
          alt={altImage}
          loading="lazy"
        />
      )}
      {srcAux1 && <img className="aux1-ImageVariations" src={srcAux1} alt={altAux1} />}
      {srcAux2 && <img className="aux2-ImageVariations" src={srcAux2} alt={altAux2} />}
    </div>
  );
}

export default ImageVariations;
