import Accordion from "react-bootstrap/Accordion";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import Card from "react-bootstrap/Card";
import Link from "next/link";
import { AiOutlineDown } from "react-icons/ai";

import styles from "./menuAccordion.module.scss";
function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey);

  return (
    <button
      type="button"
      style={{ backgroundColor: "pink" }}
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}

const AccordionMenu = ({ items }) => {
  console.log(items);
  return (
    <Accordion id={styles.accordion}>
      <Card>
        <Card.Header className={styles.header}>
          <Link href={items.path}>{items.title}</Link>
          <CustomToggle eventKey="1">
            <AiOutlineDown />
          </CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body className={styles.body}>
            <ul>
              {items.children.map((item) => (
                <li key={item.id}>
                  <Link href={item.path}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
};
export default AccordionMenu;
