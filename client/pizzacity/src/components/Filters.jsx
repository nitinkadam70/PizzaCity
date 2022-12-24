import React from 'react';
import { BiPhoneCall } from 'react-icons/bi';
import sandwitch from '../images/sandwitch.png';
import pizzalogo from '../images/pizzalogo.jpg';
import burgerlogo from '../images/burger.jpg';
import mocktailslogo from '../images/mocktailslogo.jpg';
import snaackslogo from '../images/snaacks.png';
const filterButtons = [
  {
    id: 1,
    imgLink: pizzalogo,
    value: 'Pizza',
  },
  {
    id: 2,
    imgLink: burgerlogo,
    value: 'Burger',
  },
  {
    id: 3,
    imgLink: sandwitch,
    value: 'sandwich',
  },
  {
    id: 4,
    imgLink: mocktailslogo,
    value: 'Drinks',
  },
  {
    id: 5,
    imgLink: snaackslogo,
    value: 'Snacks',
  },
];

const Filters = ({
  setFilterText,
  setSearchText,
  handleSearch,
  setPageNo,
}) => {
  return (
    // filters page Mini Navabar
    <nav
      className="navbar navbar-light d-flex align-items-center justify-content-around mini-nav-filter"
      style={{ backgroundColor: '#e3f2fd' }}
    >
      {/* Contact Number For Order */}
      <h5 className="navbar-brand">
        <span>
          <BiPhoneCall size={'31px'} color={'green'} />
        </span>{' '}
        Ping for Order{' '}
        <span
          className="btn btn-md  btn-outline-success"
          onClick={() => (window.location.href = 'tel:+919518318549')}
        >
          +919518318549
        </span>
      </h5>

      {/* Filter By Particular Dish */}
      {filterButtons.map((elem) => (
        <button
          key={elem.id}
          onClick={() => {
            setFilterText(elem.value);
            setPageNo(1);
          }}
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

      {/* Toogleer */}
      <div
        className="btn-group btn-group-toggle"
        data-toggle="buttons"
      ></div>

      {/* Search Bar */}
      <form
        className="form-inline d-flex align-items-center"
        onSubmit={handleSearch}
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
