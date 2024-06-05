import React from 'react';
import Link from 'next/link';
import styles from './SideNav.module.css';

const SideNav: React.FC = () => {
  return (
    <nav className={styles.sidenav}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/data">Data</Link>
        </li>
        <li>
          <Link href="/info">Info</Link>
        </li>
      </ul>
    </nav>
  );
};

export default SideNav;

