import React, { memo, useEffect } from 'react';
import styles from './Header.module.css';

const Header = memo(() => {

  return (
    <header className={styles.header}>
      <h1 className={styles.headerTitle}>React + Typescript TODO List</h1>
    </header>
  );
})

export default Header;
