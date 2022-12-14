import React from 'react';
import { useState } from 'react';
import { BiPhoneCall } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import { getDishes } from '../redux/action';
import { GiFullPizza } from 'react-icons/gi';
import sandwitch from '../images/sandwitch.png';
import pizzalogo from '../images/pizzalogo.jpg';

const filterButtons = [
  {
    id: 1,
    imgLink: pizzalogo,
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
    imgLink: sandwitch,
    value: 'sandwich',
  },
  {
    id: 4,
    imgLink:
      'https://lh3.googleusercontent.com/KpS2135g8Tgr7ZKirm9f7LNmXw1WW_ioNvmRhYJJTtUsfaQoTq3jtKhhhJCBu8S3bmvk3wfut-f3h4WWDALqGLI=s1200-e365',
    value: 'Drinks',
  },
  {
    id: 5,
    imgLink:
      'https://img.freepik.com/premium-vector/snacks-logo-design_642489-18.jpg?w=2000',
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
