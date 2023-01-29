import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import offer1 from '../images/offer1.png';
const Offers = () => {
  return (
    //page in construction for now just adding some offers images
    <div className="w-50 m-auto">
      <img
        src={offer1}
        style={{ width: '100%' }}
        className="d-block"
        alt="offerOne"
      />
    </div>
  );
};

export default Offers;
