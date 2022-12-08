import React from 'react';
import { useState } from 'react';
import { BiPhoneCall } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import { getDishes } from '../redux/action';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { toast } from 'react-toastify';
import { GiFullPizza } from 'react-icons/gi';
const filterButtons = [
  {
    id: 1,
    imgLink:
      'https://i.pinimg.com/originals/38/49/c7/3849c7b63abaa8d7bee746cea021eee5.jpg',
    value: 'Pizza',
  },
  {
    id: 2,
    imgLink:
      'https://media.istockphoto.com/id/1356778093/vector/delicious-burger-flat-logo-icon-sticker-vector.jpg?s=612x612&w=0&k=20&c=KhrQagy_iVz9nzWLZ_EIy9-zIkVexVhqbpZSbKfFRuI=',
    value: 'Burger',
  },
  {
    id: 3,
    imgLink:
      'https://freepngimg.com/save/512-sandwich-png-image/3485x1984',
    value: 'Sandwitch',
  },
  {
    id: 4,
    imgLink:
      'https://img.freepik.com/premium-vector/cocktails-logo-inspiration-drink-glass-bar-restaurant_63578-164.jpg?w=2000',
    value: 'cocktails',
  },
];
const Filters = () => {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();

    const params = { q: searchText };
    {
      searchText
        ? dispatch(getDishes(params))
        : toast('Please Enter Cafe Food To Search');
    }
  };
  return (
    <nav
      className="navbar navbar-light d-flex align-items-center justify-content-around mini-nav-filter"
      style={{ backgroundColor: '#e3f2fd' }}
    >
      <h5 className="navbar-brand">
        <span>
          <BiPhoneCall size={'31px'} color={'green'} />
        </span>{' '}
        Ping for Order +919518318549
      </h5>
      {filterButtons.map((elem) => (
        <button
          key={elem.id}
          className="btn btn-default"
          style={{ width: '7rem', height: '6rem' }}
        >
          <img
            className="w-100 h-100 rounded"
            src={elem.imgLink}
            alt=""
          />
        </button>
      ))}
      <div
        className="btn-group btn-group-toggle"
        data-toggle="buttons"
      ></div>
      <form
        className="form-inline d-flex align-items-center"
        onSubmit={handleSubmit}
      >
        <input
          onChange={(e) => setSearchText(e.target.value)}
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button
          className="btn btn-outline-success my-2 my-sm-0"
          type="submit"
        >
          Search
        </button>
      </form>
    </nav>
  );
};

export default Filters;
