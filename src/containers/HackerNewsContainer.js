import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getMoreNewsItem } from '../actions';
import HackerNewsList from '../components/HackerNewsList/HackerNewsList';

const HackerNewsContainer = ({ getMoreNewsItem, newsIds, newsItems }) => (
  <HackerNewsList
    getMoreNewsItem={getMoreNewsItem}
    newsIds={newsIds}
    newsItems={newsItems}
  />
);

HackerNewsContainer.propTypes = {
  getMoreNewsItem: PropTypes.func.isRequired,
  newsIds: PropTypes.array.isRequired,
  newsItems: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  newsIds: state.hackerNews.newsIds,
  newsItems: state.hackerNews.newsItems,
});

export default connect(
  mapStateToProps,
  { getMoreNewsItem },
)(HackerNewsContainer);
