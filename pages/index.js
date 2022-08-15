import Image from 'next/image';
import CardList from '../components/card/CardList';
import styles from '../styles/Home.module.css';

const data = [
  {
    id: 1,
    name: 'First Resto',
    image:
      'https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    address: 'Kota. Bandung',
    description: 'Sunt ut cillum ad in esse Lorem consequat incididunt.',
    rating: 4.5,
  },
  {
    id: 2,
    name: 'Second Resto',
    image:
      'https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    address: 'Kota. Bandung',
    description:
      'Amet non cillum duis aliqua occaecat fugiat incididunt quis do eu amet consectetur mollit.',
    rating: 4.5,
  },
  {
    id: 3,
    name: 'Third Resto',
    image:
      'https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    address: 'Kota. Bandung',
    description:
      'Est ullamco tempor ipsum tempor labore minim culpa culpa velit.',
    rating: 4.5,
  },
];

export default function Home() {
  return (
    <>
      <div className={styles['img-full-width']}>
        <Image
          alt="food-banner"
          src="https://images.unsplash.com/photo-1505935428862-770b6f24f629?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1734&q=80"
          width={10000}
          height={4500}
        />
      </div>
      <div>
        <div className={styles['sub-title']}>Explore Restaurant</div>
        <CardList data={data} />
      </div>
    </>
  );
}
