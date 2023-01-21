import Modal from "react-bootstrap/Modal";
import Loading from "../spinner/Loading";
import styles from "./preloader.module.scss";
const PreLoader = () => {
  return (
    <Modal show={true} className={styles.modal}>
      <Loading />
    </Modal>
  );
};
export default PreLoader;
