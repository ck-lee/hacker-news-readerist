import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getMoreNewsItem } from '../actions';
import HackerNewsList from '../components/HackerNewsList/HackerNewsList';

const HackerNewsContainer = ({ newsIds, getMoreNewsItem }) => (
  <HackerNewsList
    getMoreNewsItem={getMoreNewsItem}
    newsIds={newsIds}
  />
);

HackerNewsContainer.propTypes = {
  newsIds: PropTypes.array.isRequired,
  getMoreNewsItem: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  newsIds: state.hackerNews.newsIds,
});

export default connect(
  mapStateToProps,
  { getMoreNewsItem },
)(HackerNewsContainer);
