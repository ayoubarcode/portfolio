import React, { useEffect } from 'react';
import { Link } from 'react-scroll';

const Navbar = ({ logo, switchMode, dark }) => {
  useEffect(() => {
    // switchMode();
  }, []);

  const unchecked = (
    <input
      onChange={switchMode}
      type="checkbox"
      className="custom-control-input cursor"
      id="customSwitches"
    />
  );

  return (
    <header className={dark === true ? 'dark-mode' : null}>
      <nav
        className={
          dark === true
            ? 'container-fluid navbar fixed-top navbar-expand-lg scrolling-navbar'
            : ' container-fluid navbar fixed-top navbar-expand-lg navbar-light white scrolling-navbar'
        }
      >
        <div className="container">
          <a href="#!" className="navbar-brand waves-effect">
            <img src={logo} alt="" />
          </a>

          <button
            className={!dark ? 'navbar-toggler' : 'navbar-toggler text-white'}
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav" style={customStyle}>
              <li className="nav-item">
                <Link
                  to="about"
                  smooth={true}
                  className="nav-link waves-effect"
                >
                  <em className="text-bold"> About me</em>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="portfolio"
                  smooth={true}
                  className="nav-link waves-effect"
                >
                  <em> Portfolio</em>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="contact"
                  smooth={true}
                  className="nav-link waves-effect"
                >
                  <em> Contact </em>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="" className="nav-link waves-effect"></Link>
              </li>
            </ul>

            <ul className="navbar-nav nav-flex-icons">
              <div className="custom-control custom-switch">
                <input
                  onChange={switchMode}
                  type="checkbox"
                  className="custom-control-input cursor"
                  id="customSwitches"
                  checked={dark}
                />
                <label
                  className="custom-control-label"
                  htmlFor="customSwitches"
                ></label>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

const customStyle = {
  fontFamily: 'inherit',
  fontWeight: 600,
  textTransform: 'uppercase',
  cursor: 'pointer',
  fontSize: '0.8rem',
  textDecoration: 'none',
  color: '#575757',
  // padding: '0.5rem 1rem',
  transition: 'color 0.2s ease-out 0s',
};

export default Navbar;
