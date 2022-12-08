import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DishCard from '../components/DishCard';
import Error from '../components/Error';
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
        {/* FIlters Nav */}
        <div>
          <Filters />
        </div>

        {/* Data */}
        <div className="card-grid p-5">
          {error && <Error />}
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
