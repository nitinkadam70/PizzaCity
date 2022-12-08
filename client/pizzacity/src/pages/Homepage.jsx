import React from 'react';
import { useNavigate } from 'react-router-dom';

const Homepage = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* ShowCase */}
      <section className="bg-dark text-light p-5 p-lg-0 pt-lg-5 pb-lg-5 pt-md-5 text-center text-sm-start">
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
                  (window.location.href = 'tel:+919518318549')
                }
                className="btn btn-primary btn-lg"
              >
                Simply call on +919518318549
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

      {/* GIF Foods */}
      <section className="bg-warning pb-5 text-center">
        <div className="d-lg-flex flex-md-column flex-lg-row flex-sm-column align-items-center justify-content-between w-100">
          <img
            className="w-100"
            src="https://media0.giphy.com/media/9KCNcFVQmZhRK/giphy.gif?cid=ecf05e47gqjqjrroooe3crxwm7oaav25uwavxndewhju7zeg&rid=giphy.gif&ct=g"
            alt=""
          />

          <img
            className="w-100"
            src="https://media4.giphy.com/media/CqtG4f5UF9G5q/giphy.gif?cid=ecf05e47d5lumlox4wu2176xjbee9kxm8qjg46qk4zug4dtp&rid=giphy.gif&ct=g"
            alt=""
          />
        </div>
      </section>

      {/* Zomato Section */}
      <section className="bg-image text-dark p-5 p-lg-0 pt-lg-5 pb-lg-5 text-center text-sm-start">
        <div className="container">
          <div className="d-lg-flex d-md-flex d-md-row flex-lg-row flex-sm-column align-items-center justify-content-between">
            <div>
              <h1 className="lh-lg">
                {'Also Order Form' + ' '}
                <span className="text-light bg-danger p-2 rounded mt-2">
                  <em>ZOMATO</em>
                </span>
              </h1>
              <p className="lead my-4">
                And share your experience with us
              </p>
              <button
                onClick={() =>
                  (window.location.href =
                    'https://www.zomato.com/parbhani/pizza-city-parbhani-locality/order')
                }
                className="btn btn-outline-success"
              >
                Order here
              </button>
            </div>
            <img
              className="bg-light img-fluid w-50"
              src="https://techstory.in/wp-content/uploads/2021/07/SEBI-grants-approval-to-Zomatos-blockbuster-IPO.jpg"
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Homepage;
