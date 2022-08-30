import Link from 'next/link';
import { useState } from 'react';
import styles from './Header.module.css';

export default function Header() {
  const [responsive, setResponsive] = useState(false);
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Hunger Apps</div>
      <nav>
        <ul
          className={responsive ? styles['nav-mobile'] : styles['nav-default']}
          onClick={() => setResponsive(false)}
        >
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">Favorite</Link>
          </li>
          <li>
            <Link href="/">About Us</Link>
          </li>
        </ul>
      </nav>
      <button
        className={styles['hamburger']}
        onClick={() => setResponsive(!responsive)}
      >
        {responsive ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        )}
      </button>
    </header>
  );
}
