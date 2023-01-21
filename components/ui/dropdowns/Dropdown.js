import Drop from "react-bootstrap/Dropdown";
import { useState } from "react";
import Link from "next/link";
import styles from "./dropdown.module.scss";

const Dropdown = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <Drop
      onMouseOver={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      id={styles.drop}
    >
      <Drop.Toggle id="dropdown-basic" onClick={() => setIsOpen(false)}>
        <Link className="nav-link" href={item.path}>
          {" "}
          {item.title}
        </Link>
      </Drop.Toggle>

      <Drop.Menu show={isOpen}>
        <ul>
          {item.children.map((subItem) => (
            <li key={subItem.id}>
              <Link className="nav-link" href={subItem.path}>
                {" "}
                {subItem.title}
              </Link>
            </li>
          ))}
        </ul>
      </Drop.Menu>
    </Drop>
  );
};

export default Dropdown;
