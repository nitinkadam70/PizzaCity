import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import styles from '../styles/homepage.module.css';
const Homepage = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-dark text-light p-5 p-lg-0 pt-lg-5 pb-lg-5 text-center text-sm-start">
      <div className="container">
        <div className="d-sm-flex align-items-center justify-content-between">
          <div>
            <h1>
              Order Your{' '}
              <span className="text-warning"> Favorite Food </span>
            </h1>
            <p className="lead my-4">
              Spreading yummy smiles with deep intense love and
              happiness
            </p>
            <button
              onClick={() =>
                (window.location.href =
                  'https://www.zomato.com/parbhani/pizza-city-parbhani-locality/order')
              }
              className="btn btn-primary btn-lg"
            >
              Order here
            </button>
          </div>
          <img
            className="border border-light img-fluid w-50 d-none d-sm-block"
            src="https://images5.alphacoders.com/101/thumb-1920-1013630.jpg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Homepage;
