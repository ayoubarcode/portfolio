import React from 'react';
import PropTypes from 'prop-types';

const PorfolioItem = ({
  portfolio: {
    project_image,
    project_title,
    project_description,
    link_visite,
    link_source,
    technologies,
  },
  turn,
}) => {
  return (
    <div
      className={
        !turn ? 'row pr-lg-5 mt-5' : 'row pr-lg-5 mt-5 flex-row-reverse'
      }
    >
      <div className="col-md-7 mb-4">
        <div className="">
          <img
            src={project_image}
            className="rounded img-fluid z-depth-1"
            alt="smaple image"
          />
        </div>
      </div>
      <div className="col-md-5 d-flex align-items-start ">
        <div>
          <h4 className="text-center text-white font-italic">
            <strong>{project_title}</strong>{' '}
          </h4>
          <p>{project_description}</p>
          <p>
            {technologies.map((t) => (
              <span class="badge badge-pill badge-primary mr-2">
                {t.tag_title}
              </span>
            ))}
          </p>

          <a
            type="button"
            href={link_visite}
            target="_blank"
            className="btn btn-primary btn-rounded mx-0 mr-2"
            style={customBtnStyle}
          >
            <i className="fas fa-link fa-lg mr-2"></i>
            visit
          </a>
          <a
            href={link_source}
            target="_blank"
            type="button"
            className="btn  btn-outline-primary mr-2 align-self-sm-end"
            style={customBtnStyle}
          >
            <i className="fab fa-github fa-lg mr-2"></i>
            source
          </a>
        </div>
      </div>
    </div>
  );
};

const customBtnStyle = {
  borderRadius: '40px',
};

PorfolioItem.propTypes = {};

export default PorfolioItem;
