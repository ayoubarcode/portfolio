import React from 'react';

const Contact = ({ dark, image }) => {
  return (
    <div className="container" id="contact">
      <section className="dark-grey-text text-center">
        <h3 className="font-weight-bold text-primary pt-4 mb-4">CONTACT ME</h3>
        <h4 style={custoStyle}>If you want to talk, you can find me at:</h4>
        <div className="row d-flex justify-content-center mt-5">
          <div className="col-md-6">
            <p className="h4 font-weight-bold"> ayoubarahmat@gmail.com</p>
          </div>
        </div>
      </section>

      <section id="social-buttons" className="text-center">
        <a
          href="https://github.com/ayoub9581"
          target="_blank"
          type="button"
          className="btn btn-outline-primary rounded-circle waves-effect px-3"
        >
          <i className="fab fa-github text-dark"></i>
        </a>
        <a
          href="https://www.facebook.com/ayoubarahmat"
          target="_blank"
          type="button"
          className="btn btn-outline-primary rounded-circle waves-effect px-3"
        >
          <i className="fab fa-facebook-f text-dark"></i>
        </a>
        <a
          href="https://twitter.com/ayoubarahmat"
          type="button"
          className="btn btn-outline-primary rounded-circle waves-effect px-3"
        >
          <i className="fab fa-twitter text-dark"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/ayoubarahmat/"
          target="_blank"
          type="button"
          className="btn btn-outline-primary rounded-circle waves-effect px-3"
        >
          <i className="fab fa-linkedin-in text-dark"></i>
        </a>
        <a
          href="https://www.instagram.com/ayoubarahmat/"
          target="_blank"
          type="button"
          className="btn btn-outline-primary rounded-circle waves-effect px-3"
        >
          <i className="fab fa-instagram text-dark"></i>
        </a>
      </section>

      <div className="text-center">
        <img
          src={image}
          className="img-fluid"
          alt=""
          style={{ width: '200px' }}
        />
        <p>WEB DEVELOPER </p>
      </div>

      <div className="footer-copyright text-center py-3">
        <span className="font-weight-bold">
          Copyright ©2020 , <span className="text-primary">A.AYOUB</span>
        </span>
      </div>
    </div>
  );
};

const custoStyle = {
  color: '#575757',
};

export default Contact;
