import Image from 'next/image';
import styles from './Card.module.css';

export default function Card(props) {
  return (
    <div className={styles.card}>
      <div className={styles.address}>{props.address}</div>
      <Image
        alt="img"
        className={styles.image}
        src={props.image}
        width={250}
        height={230}
      />
      <div className={styles.container}>
        <p className={styles.rating}>Rating: {props.rating}</p>
        <h4>
          <b className={styles.name}>{props.name}</b>
        </h4>
        <p className={styles.description}>{props.description}</p>
      </div>
    </div>
  );
}
