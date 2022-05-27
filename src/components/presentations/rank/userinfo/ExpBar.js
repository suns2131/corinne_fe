import React from 'react';
import styles from './userinfo.module.css';
import { maxExp } from '../../../../share/exp';

function ExpBar({ exp }) {
  if (exp >= 350000) {
    return <progress className={styles.progressPurple} max={maxExp(exp)} value={exp} />;
  }
  if (exp >= 200000) {
    return <progress className={styles.progressNavy} max={maxExp(exp)} value={exp} />;
  }
  if (exp >= 100000) {
    return <progress className={styles.progressSky} max={maxExp(exp)} value={exp} />;
  }
  if (exp >= 60000) {
    return <progress className={styles.progressGreen} max={maxExp(exp)} value={exp} />;
  }
  if (exp >= 30000) {
    return <progress className={styles.progressYello} max={maxExp(exp)} value={exp} />;
  }
  if (exp >= 5000) {
    return <progress className={styles.progressOrange} max={maxExp(exp)} value={exp} />;
  }
  return <progress className={styles.progressRed} max={maxExp(exp)} value={exp} />;
}

export default ExpBar;
