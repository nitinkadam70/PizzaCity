import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DishCard from '../components/DishCard';
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
  console.log(dishes);
  return (
    <div className="card-grid">
      {dishes && dishes.map((item) => <DishCard item={item} />)}
    </div>
  );
};

export default Menu;
