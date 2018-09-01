import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import PropTypes from 'prop-types';
import './HackerNewsItem.css';

const HackerNewsItem = ({
  index,
  style,
  newsItem,
}) => {
  if (newsItem) {
    return (
      <div
        className="news-item"
        style={style}
      >
        <a href={newsItem.url} target="_blank" rel="noopener noreferrer">{newsItem.title}</a>
        <span className="user">{newsItem.by}</span>
        <span className="post-time">{newsItem.timeString}</span>
      </div>
    );
  }
  return (
    <div
      className="news-item--empty"
      key={index}
      style={style}
    />
  );
};

HackerNewsItem.propTypes = {
  index: PropTypes.number.isRequired,
  newsItem: PropTypes.object,
  style: PropTypes.object.isRequired,
};

export default HackerNewsItem;
