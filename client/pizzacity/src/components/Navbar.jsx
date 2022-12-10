import React from 'react';
import { NavLink } from 'react-router-dom';
import logo3 from '../images/logo3.gif';
import {
  MdFastfood,
  MdOutlineLocalOffer,
  MdRateReview,
} from 'react-icons/md';
import { FcAbout } from 'react-icons/fc';
import { GiFullPizza } from 'react-icons/gi';
const Navbar = () => {
  return (
    //Main Navbar
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-2.5 fixed-top">
      <div className="container">
        {/* Logo */}
        <NavLink to={'/'} className="navbar-brand bb-animate">
          <img
            style={{
              overflow: 'hidden',
              width: '142px',
              display: 'inline-block',
            }}
            src={logo3}
            alt=""
          />
        </NavLink>

        {/* Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navmenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navlinks */}
        <div className="collapse navbar-collapse" id="navmenu">
          <ul className="navbar-nav ms-auto ">
            <li className="nav-item">
              <NavLink to={'/menu'} className="nav-link">
                <span>
                  <MdFastfood size={'20px'} />
                </span>{' '}
                Our Food{' '}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={'/reviews'} className="nav-link">
                <span>
                  <MdRateReview size={'20px'} />
                </span>{' '}
                Our Reviews{' '}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={'/offers'} className="nav-link">
                <span>
                  <MdOutlineLocalOffer size={'20px'} />
                </span>{' '}
                Offers{' '}
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to={'/aboutus'} className="nav-link">
                <span>
                  <FcAbout size={'20px'} />{' '}
                </span>
                About us
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
