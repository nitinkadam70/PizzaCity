import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MdRestaurantMenu } from 'react-icons/md';
import cofeeGiphy from '../images/cofeeGiphy.webp';
import pizzaGiphy from '../images/pizzaGiphy.webp';
import pizzaShowcase from '../images/pizzaShowcase.jpg';
import zomatoBike from '../images/zomatoBike.jpg';
import { AiOutlineFieldTime } from 'react-icons/ai';
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
              <div className="d-flex gap-2">
                <button
                  onClick={() =>
                    (window.location.href = 'tel:+919518318549')
                  }
                  className="btn btn-primary btn-sm"
                >
                  Simply call on +919518318549
                </button>

                <button
                  onClick={() => navigate('/menu')}
                  className="btn btn-warning btn-sm"
                >
                  <span>
                    <MdRestaurantMenu size={'20px'} />
                  </span>{' '}
                  our Menu
                </button>
              </div>
            </div>
            <img
              className="border border-light img-fluid d-none d-sm-block"
              src={pizzaShowcase}
              alt="pizzaShowcase"
              style={{ width: '50%' }}
            />
          </div>
        </div>
      </section>

      {/* GIF Foods */}
      <section className="bg-warning pb-5 text-center">
        <div className="d-lg-flex flex-md-column flex-lg-row flex-sm-column align-items-center justify-content-between w-100">
          <img
            style={{ width: '100%' }}
            src={pizzaGiphy}
            alt="pizzaGiphy"
          />

          <img
            style={{ width: '100%' }}
            src={cofeeGiphy}
            alt="cofeeGiphy"
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
              className="bg-light img-fluid animateImg"
              style={{ width: '50%' }}
              src={zomatoBike}
              alt="zomatoBike"
            />
          </div>
        </div>
      </section>

      {/* Availability */}
      <section className="bg-light text-dark p-5 p-lg-0 pt-lg-5 pb-lg-5 text-center text-sm-start">
        <div className="container">
          <h1 className="text-center">Opening | Hours</h1>
          <p className="text-center pt-2 text-md">
            We're Here For You Everyday | 10am - 11pm
          </p>
        </div>
      </section>
    </>
  );
};

export default Homepage;
