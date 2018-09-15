import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getMoreNewsItem } from '../actions';
import HackerNewsList from '../components/HackerNewsList/HackerNewsList';
/* eslint-disable no-shadow */
const HackerNewsContainer = ({
  getMoreNewsItem, newsIds, newsItems, errors,
}) => (
  <div>
    {
      errors.length
        ? <span className="error">Sorry, we have some network error.</span>
        : ''
    }
    <HackerNewsList
      getMoreNewsItem={getMoreNewsItem}
      newsIds={newsIds}
      newsItems={newsItems}
    />
  </div>

);

HackerNewsContainer.propTypes = {
  getMoreNewsItem: PropTypes.func.isRequired,
  newsIds: PropTypes.array.isRequired,
  newsItems: PropTypes.object.isRequired,
  errors: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  newsIds: state.hackerNews.newsIds,
  newsItems: state.hackerNews.newsItems,
  errors: state.errors.errors,
});

export default connect(
  mapStateToProps,
  { getMoreNewsItem },
)(HackerNewsContainer);
