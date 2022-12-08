import React from 'react';
import { NavLink } from 'react-router-dom';
import { MdFastfood } from 'react-icons/md';
import { FcAbout } from 'react-icons/fc';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 fixed-top">
      <div className="container">
        <NavLink to={'/'} className="navbar-brand bb-animate">
          Pizza City
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navmenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navmenu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink to={'/menu'} className="nav-link">
                <span>
                  <MdFastfood size={'20px'} />
                </span>{' '}
                Our Food{' '}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={'/aboutus'} className="nav-link">
                <span>
                  <FcAbout size={'20px'} />{" "}
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
