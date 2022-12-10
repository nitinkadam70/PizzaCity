import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import offer1 from '../images/offer1.png';
import offer2 from '../images/offer2.png';
const Offers = () => {
  return (
    //page in construction for now just adding some offers images
    <div className="container d-lg-flex w-75 m-auto align-item-center">
      <img
        src={offer1}
        className="w-50 rounded d-block"
        alt="offerOne"
      />
      <img
        src={offer2}
        alt=""
        className="rounded d-block w-50 h-50"
      />
    </div>
  );
};

export default Offers;
