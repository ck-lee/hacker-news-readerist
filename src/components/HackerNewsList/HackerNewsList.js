import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import PropTypes from 'prop-types';
import { WindowScroller, List } from 'react-virtualized';

const HackerNewsList = ({ newsIds }) => {
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
          <List
            autoHeight
            height={height}
            isScrolling={isScrolling}
            onScroll={onChildScroll}
            rowCount={newsIds.length}
            rowHeight={20}
            rowRenderer={rowRenderer}
            scrollTop={scrollTop}
            width={300}
          />
        )}
      </WindowScroller>
    </div>
  );
};

HackerNewsList.propTypes = {
  newsIds: PropTypes.array.isRequired,
};

export default HackerNewsList;
