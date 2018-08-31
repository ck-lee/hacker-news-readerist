import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import HackerNewsList from '../components/HackerNewsList/HackerNewsList';

const HackerNewsContainer = ({ newsIds }) => (
  <HackerNewsList newsIds={newsIds} />
);

HackerNewsContainer.propTypes = {
  newsIds: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  newsIds: state.hackerNews.newsIds,
});

export default connect(
  mapStateToProps,
)(HackerNewsContainer);
