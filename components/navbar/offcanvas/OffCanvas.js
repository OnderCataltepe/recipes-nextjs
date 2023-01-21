import styles from "./offCanvas.module.scss";
import { useState, useEffect } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import AccordionMenu from "../../ui/accordions/MenuAccordion";
import SearchForm from "../../forms/search/SearchForm";
import Logo from "../logo/Logo";
import { FcMenu } from "react-icons/fc";
import Link from "next/link";
import { useRouter } from "next/router";

const OffCanvas = ({ items }) => {
  const [show, setShow] = useState(false);
  const router = useRouter();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    router.events.on("routeChangeStart", handleClose);
    return () => router.events.off("routeChangeStart", handleClose);
  }, [router.events]);

  return (
    <>
      <button className={styles.toggle} onClick={handleShow}>
        <FcMenu />
      </button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <Logo />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className={styles.body}>
          <SearchForm />
          {items &&
            items.map((item) => {
              return item.children.length > 0 ? (
                <AccordionMenu key={item.id} items={item} />
              ) : (
                <Link href={item.path} key={item.id}>
                  {item.title}
                </Link>
              );
            })}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default OffCanvas;
