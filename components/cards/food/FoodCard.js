import Link from "next/link";
import Image from "next/image";
import Card from "react-bootstrap/Card";
import styles from "./foodCard.module.scss";
import foodImg from "../../../public/foodImg.jpg";
import { timeConvert } from "../../../utils";

const FoodCard = ({ item }) => {
  const time = timeConvert(item.readyInMinutes);
  return (
    <Card className={styles.card} style={{ width: "80%", margin: "1rem auto" }}>
      <Image
        width={200}
        height={150}
        src={item.image ? item.image : foodImg}
        alt="image"
      />
      <Card.Body className="d-flex flex-column justify-content-between">
        <Card.Title>
          <Link href={`/recipe/${item.id}`}>{item.title}</Link>
        </Card.Title>
        {item.readyInMinutes && (
          <Card.Text>
            Ready in: <b>{time}</b>{" "}
          </Card.Text>
        )}
      </Card.Body>
    </Card>
  );
};
export default FoodCard;
