import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Reviews = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [loading]);

  return (
    <div className="container">
      {loading && (
        <center className="mt-2">
          <div
            className="spinner-border text-dark"
            role="status"
          ></div>
        </center>
      )}
      <div className="elfsight-app-dd2517ea-70a0-4151-beb8-2d4aefe6ed85 mt-5"></div>
    </div>
  );
};

export default Reviews;
