import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DishCard from '../components/DishCard';
import Filters from '../components/Filters';
import { getDishes } from '../redux/action';

const Menu = () => {
  const dispatch = useDispatch();
  const { loading, dishes, error } = useSelector(
    (store) => store.dishes
  );

  useEffect(() => {
    if (dishes?.length == 0) {
      dispatch(getDishes());
    }
  }, []);
  return (
    <>
      <section className="bg-dark border-bottom">
        <Filters />
        <div className="card-grid p-5">
          {error && (
            <div>
              <img
                src="https://cdn.dribbble.com/users/547471/screenshots/3063720/not_found.gif"
                alt=""
              />
            </div>
          )}
          {loading ? (
            <div
              class="spinner-border text-light"
              role="status"
            ></div>
          ) : (
            dishes && dishes.map((item) => <DishCard item={item} />)
          )}
        </div>
      </section>
    </>
  );
};

export default Menu;
