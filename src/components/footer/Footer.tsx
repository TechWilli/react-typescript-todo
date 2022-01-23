import React, { memo } from 'react';
import styles from './Footer.module.css';

const Footer = memo(() => {

  return (
    <footer className={styles.footer}>
      <span className={styles.credits}>
        {'Criado por '}
        <a
          target='_blank'
          rel='noreferrer'
          href="https://github.com/TechWilli"
          className={styles.githubLink}>
          TechWilli
        </a>
      </span>
    </footer>
  );
})

export default Footer;
