import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CategoryCard from "../../cards/category/CategoryCard";

const CategoryContainer = ({ items }) => {
  return (
    <Container>
      <Row>
        {items.map((item) => (
          <Col className="mb-4 align-self-stretch" key={item.id} sm={12} md={6}>
            <CategoryCard item={item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CategoryContainer;
