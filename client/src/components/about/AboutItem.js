import React from 'react';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';

import { replaceByHTML } from './../../utils/utils';

const AboutItem = ({ paragraphe, words }) => {
  return (
    <p className="font-italic">
      {' '}
      {parse(replaceByHTML(paragraphe.paragraphe, words))}
    </p>
  );
};

AboutItem.propTypes = {
  paragraphe: PropTypes.object.isRequired,
  words: PropTypes.array.isRequired,
};

export default AboutItem;
