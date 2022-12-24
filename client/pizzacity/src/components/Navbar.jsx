import React from 'react';
import { NavLink } from 'react-router-dom';
import logo3 from '../images/logo3.png';
import {
  MdFastfood,
  MdOutlineLocalOffer,
  MdRateReview,
} from 'react-icons/md';
import { FcAbout } from 'react-icons/fc';
import { RiAdminLine } from 'react-icons/ri';
const Navbar = () => {
  return (
    //Main Navbar
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-1 fixed-top">
      <div className="container">
        {/* Logo */}
        <NavLink to={'/'} className="navbar-brand bb-animate">
          <img
            style={{
              overflow: 'hidden',
              width: '100px',
              height: '52px',
              display: 'inline-block',
              border: '1px solid white',
            }}
            className="px-2 bg-danger rounded"
            src={logo3}
            alt="logo"
          />
        </NavLink>

        {/* Toggle Button toggler */}
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
            <li className="nav-item">
              <NavLink to={'/adminauth'} className="nav-link">
                <span>
                  <RiAdminLine size={'20px'} />{' '}
                </span>
                Admin
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
