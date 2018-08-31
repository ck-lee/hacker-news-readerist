import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import PropTypes from 'prop-types';
import { InfiniteLoader, List, WindowScroller } from 'react-virtualized';

const HackerNewsList = ({ getMoreNewsItem, newsIds }) => {
  const isRowLoaded = ({ index }) => {
  };

  const loadMoreRows = ({ startIndex, stopIndex }) => {
    getMoreNewsItem(startIndex, stopIndex);
  };

  const rowRenderer = ({
    index,
    style,
  }) => (
    <div
      key={index}
      style={style}
    >
      {newsIds[index]}
    </div>
  );

  rowRenderer.propTypes = {
    index: PropTypes.number.isRequired,
    style: PropTypes.object.isRequired,
  };

  return (
    <div>
      <WindowScroller>
        {({
          height, isScrolling, onChildScroll, scrollTop,
        }) => (
          <InfiniteLoader
            isRowLoaded={isRowLoaded}
            loadMoreRows={loadMoreRows}
            rowCount={newsIds.length}
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
                rowHeight={20}
                rowRenderer={rowRenderer}
                scrollTop={scrollTop}
                width={300}
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
  getMoreNewsItem: PropTypes.func.isRequired,
};

export default HackerNewsList;
