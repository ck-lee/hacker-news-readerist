import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import PropTypes from 'prop-types';
import { InfiniteLoader, List, WindowScroller } from 'react-virtualized';
import HackerNewsItem from '../HackerNewsItem/HackerNewsItem';
import './HackerNewsList.css';

const STATUS_LOADING = 1;
const loadedRowsMap = {};

const HackerNewsList = ({ getMoreNewsItem, newsIds, newsItems }) => {
  const isRowLoaded = ({ index }) => loadedRowsMap[index];

  const loadMoreRows = ({ startIndex, stopIndex }) => {
    /* eslint-disable no-plusplus */
    for (let i = startIndex; i <= stopIndex; i++) {
      loadedRowsMap[i] = STATUS_LOADING;
    }
    getMoreNewsItem(startIndex, stopIndex);
  };

  const rowRenderer = ({
    index,
    style,
  }) => (
    <HackerNewsItem
      key={newsIds[index]}
      index={index}
      newsItem={newsItems[newsIds[index]]}
      style={style}
    />
  );
  rowRenderer.propTypes = {
    index: PropTypes.number.isRequired,
    style: PropTypes.object.isRequired,
  };

  return (
    <div className="container">
      <h2>Hacker News Story List</h2>
      <WindowScroller>
        {({
          height, isScrolling, onChildScroll, scrollTop,
        }) => (
          <InfiniteLoader
            isRowLoaded={isRowLoaded}
            loadMoreRows={loadMoreRows}
            rowCount={newsIds.length}
            minimumBatchSize={1}
          >
            {({ onRowsRendered, registerChild }) => (
              <List
                autoHeight
                height={height}
                isScrolling={isScrolling}
                onRowsRendered={onRowsRendered}
                onScroll={onChildScroll}
                ref={registerChild}
                rowCount={newsIds.length}
                rowHeight={50}
                rowRenderer={rowRenderer}
                scrollTop={scrollTop}
                width={765}
                className="list"
              />
            )}
          </InfiniteLoader>
        )}
      </WindowScroller>
    </div>
  );
};

HackerNewsList.propTypes = {
  newsIds: PropTypes.array.isRequired,
  newsItems: PropTypes.object.isRequired,
  getMoreNewsItem: PropTypes.func.isRequired,
};

export default HackerNewsList;
