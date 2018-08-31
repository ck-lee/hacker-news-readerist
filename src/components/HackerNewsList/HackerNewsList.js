import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import PropTypes from 'prop-types';

const HackerNewsList = ({ children }) => (
  <div>
    <ul>{children}</ul>
  </div>
);

HackerNewsList.propTypes = {
  children: PropTypes.array.isRequired,
};

export default HackerNewsList;
