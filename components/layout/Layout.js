import Header from '../header/Header';
import Footer from '../footer/Footer';
import styles from './Layout.module.css';

export default function Layout(props) {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>{props.children}</main>
      <Footer />
    </div>
  );
}
