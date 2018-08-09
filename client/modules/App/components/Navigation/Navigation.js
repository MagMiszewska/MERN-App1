import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router';
import styles from './Navigation.css';

const Navigation = () => {
  return (
    <nav className={styles.menu}>
      <ul className={styles.menu__list}>
        <li className={styles.menu__item}><Link className={styles.menu__link} to="/home" >Home</Link></li>
        <li className={styles.menu__item}><Link className={styles.menu__link} to="/" >Posts</Link></li>
        <li className={styles.menu__item}><Link className={styles.menu__link} to="/about" >About</Link></li>
      </ul>
    </nav>
  );
};

// Navigation.propTypes = {
// };

export default Navigation;
