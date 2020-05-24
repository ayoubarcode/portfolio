import React from 'react';
import PropTypes from 'prop-types';

const TagTechno = ({ tag }) => {
  return (
    <span className="badge badge-pill badge-primary mr-2">{tag.tag_title}</span>
  );
};

TagTechno.propTypes = {
  tag: PropTypes.object.isRequired,
};

export default TagTechno;
