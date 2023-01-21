import Card from "react-bootstrap/Card";
import Link from "next/link";
import Image from "next/image";
import styles from "./categoryCard.module.scss";

const CategoryCard = ({ item }) => {
  return (
    <Card className={styles.card}>
      <Image width={450} height={300} src={item.image} alt="Card image" />
      <Card.ImgOverlay className={styles.content}>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>
          <Link href={item.path}>Explore</Link>
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
};

export default CategoryCard;
