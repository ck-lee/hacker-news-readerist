import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import HackerNewsList from '../components/HackerNewsList/HackerNewsList';

const HackerNewsContainer = ({ newsIds }) => (
  <HackerNewsList>
    {
      newsIds.map(newsId => <li key={newsId}>{newsId}</li>,)
    }
  </HackerNewsList>
);

HackerNewsContainer.propTypes = {
  newsIds: PropTypes.array,
};

const mapStateToProps = state => ({
  newsIds: state.hackerNews.newsIds,
});

export default connect(
  mapStateToProps,
)(HackerNewsContainer);
