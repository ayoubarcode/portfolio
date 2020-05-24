import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import PropTypes from 'prop-types';

const attributes = ['self-taught', 'passionate', 'committed'];

const Main = ({ image, dark }) => {
  const [attribut, setAttr] = useState('');
  useEffect(() => {
    setAttr(attributes[0]);
  }, []);

  return (
    <div className="view jarallax lighten-3 mt-lg-5" style={customStyle}>
      <div className="mask mt-lg-5">
        <div className="container mt-lg-5">
          <div className="row align-items-center h-100">
            <div className="col-md-6">
              <h1
                className="mb-4"
                style={{
                  fontWeight: '200',
                  fontSize: '4rem',
                }}
              >
                Hello
                <span className="text-dark custom-text">
                  <i className="twa twa-heart"></i>{' '}
                </span>{' '}
                <Link
                  to=""
                  className="btn-floating btn-lg text-white  btn-primary"
                >
                  <i className="fas fa-code"></i>
                </Link>
                <br />
                <span className="text-primary" id="ayoub">
                  <span className="text-dark">I'm</span> A.AYOUB
                </span>
              </h1>
              <p>
                A <span className="font-weight-bold">{attribut} </span> Full
                Stack web developer
              </p>

              <p>
                <Link
                  to="about"
                  smooth={true}
                  type="button"
                  className="btn btn-primary btn-rounded waves-effect mt-5"
                  style={btnStyle}
                >
                  About me
                </Link>
              </p>
            </div>

            <div className="col-md-6">
              <img src={image} alt="" className="img-fluid" />
            </div>

            <div
              className="mx-auto text-center"
              style={{
                marginTop: '10rem',
              }}
            >
              <div className="col">
                <Link
                  to="about"
                  smooth={true}
                  className="btn-floating btn-lg btn-primary text-white"
                  style={{ borderRadius: '50%' }}
                >
                  <i className="fas fa-angle-down"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Main.propTypes = {
  image: PropTypes.string.isRequired,
};
const customStyle = {
  // marginTop: '300px',
  display: 'block',
  height: '100vh',
};

const btnStyle = {
  borderRadius: '30px',
};

export default Main;
