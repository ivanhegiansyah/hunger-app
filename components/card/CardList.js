import Card from './Card';
import styles from './CardList.module.css';

export default function CardList(props) {
  return (
    <div className={styles.container}>
      {props.data?.map((i) => (
        <Card
          description={i.description}
          image={i.image}
          key={i.id}
          name={i.name}
          id={i.id}
          rating={i.rating}
          address={i.address}
        />
      ))}
    </div>
  );
}
