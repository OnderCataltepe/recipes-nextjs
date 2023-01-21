// Bootstrap Components
import SearchForm from "../forms/search/SearchForm";
import Container from "react-bootstrap/Container";
import styles from "./navbar.module.scss";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

// Constants, images...
import { navMenu } from "./constants";
import logo from "../../public/logo.png";
import Dropdown from "../ui/dropdowns/Dropdown";
import OffCanvas from "./offcanvas/OffCanvas";
import Logo from "./logo/Logo";
// Next.js
import Link from "next/link";
import Image from "next/image";

const NavigationBar = () => {
  return (
    <>
      {["md"].map((expand) => (
        <Navbar
          key={expand}
          bg="light"
          expand={expand}
          className="py-0 px-4"
          fixed="top"
        >
          <Container fluid id={styles.navContainer}>
            <Logo />

            <Nav
              className="justify-content-center align-items-center flex-grow-1 pe-3"
              id={styles.nav}
            >
              {navMenu.map((item) => {
                return item.children.length > 0 ? (
                  <Dropdown key={item.id} item={item} />
                ) : (
                  <Link href={item.path} className="nav-link" key={item.id}>
                    {item.title}
                  </Link>
                );
              })}
            </Nav>
            <SearchForm />
            <OffCanvas items={navMenu} />
          </Container>
        </Navbar>
      ))}
    </>
  );
};

export default NavigationBar;
