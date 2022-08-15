import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Hunger Apps</div>
      <nav>
        <ul>
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
    </header>
  );
}
