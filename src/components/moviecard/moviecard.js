import { hot } from 'react-hot-loader/root';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './moviecard.css';

const MovieCard = ({ title, vote_average, release_date, onSelect }) => (
  <div className={styles.card} onMouseDown={() => onSelect(title)}>
    <div className={styles.mainText}>{title}</div>
    <div className={styles.altText}>
      {`${vote_average % 1 !== 0 ? vote_average : `${vote_average}.0`} Rating, `}
      {release_date.slice(0, 4)}
    </div>
  </div>
);

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  vote_average: PropTypes.number.isRequired,
  release_date: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
};

export default hot(MovieCard);
