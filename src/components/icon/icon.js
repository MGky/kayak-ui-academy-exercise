import { hot } from 'react-hot-loader/root';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './icon.css';

const Icon = ({ SvgIcon, iconClass }) => (
  <div className={`${styles.icon} ${iconClass}`}>
    <SvgIcon />
  </div>
);

Icon.propTypes = {
  SvgIcon: PropTypes.func.isRequired,
  iconClass: PropTypes.string
};

Icon.defaultProps = {
  iconClass: ''
};

export default hot(Icon);
