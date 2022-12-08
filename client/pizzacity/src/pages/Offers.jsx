import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';

const Offers = () => {
  useEffect(() => {
    axios
      .get('http://localhost:8080')
      .then((res) => console.log('Hello', res.data.pizzaCity));
  }, []);

  return <div>Offers</div>;
};

export default Offers;
