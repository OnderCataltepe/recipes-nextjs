import Image from "next/image";
import logo from "../../../public/logo.png";
import Link from "next/link";
import styles from "./logo.module.scss";
const Logo = () => {
  return (
    <Link href="/" className={styles.logo}>
      <Image src={logo} alt="logo" />
      <span>FOODIE</span>
    </Link>
  );
};

export default Logo;
