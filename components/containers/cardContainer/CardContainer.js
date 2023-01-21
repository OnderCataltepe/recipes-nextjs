import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FoodCard from "../../cards/food/FoodCard";

const CardContainer = ({ items }) => {
  return (
    <Container>
      <Row>
        {items.map((item) => (
          <Col
            className="mb-4 align-self-stretch"
            key={item.id}
            sm={12}
            md={6}
            lg={4}
          >
            <FoodCard item={item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CardContainer;
