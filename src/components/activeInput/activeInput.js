import { hot } from 'react-hot-loader/root';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './activeInput.css';
import Icon from '../icon';
import VideoPlayerIcon from '../../img/video-player.svg';
import DefaultInput from '../defaultInput';
import MovieCard from '../moviecard';

const ActiveInput = ({ onInputChange, search, error, movies, onSet, onClose }) => (
  <div onBlur={onClose}>
    <div className={styles.inputWrapper}>
      <Icon SvgIcon={VideoPlayerIcon} iconClass={styles.darkPlayerIcon} />
      <DefaultInput
        search={search}
        onInputChange={onInputChange}
        inputClassName={styles.inputActive}
        showPlaceholder={false}
      />
      <div className={styles.inputText}>Enter a movie name</div>
    </div>
    <div className={styles.movieList}>
      {error && <div className={styles.error}>{error}</div>}
      {movies.map(({ id, ...movie }) => (
        <MovieCard key={id} {...movie} onSelect={onSet} />
      ))}
    </div>
  </div>
);

ActiveInput.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  onSet: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired
};

export default hot(ActiveInput);
