import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  //Go to top function
  const goToTopHandler = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  //button on scroll show or on top hide function
  const listenToScroll = () => {
    let heightToHidden = 250;
    const windowScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    // console.log(windowScroll);
    if (windowScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', listenToScroll);
    return () => window.removeEventListener('scroll', listenToScroll);
  }, []);
  return (
    <>
      {isVisible && (
        <div
          className="position-fixed end-0 px-4 animated bounce infinite"
          style={{ bottom: '3rem' }}
        >
          <button
            className="btn btn-primary btn-md rounded-circle"
            onClick={goToTopHandler}
          >
            <FaArrowUp />
          </button>
        </div>
      )}
    </>
  );
};

export default GoToTop;
