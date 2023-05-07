import React from "react";
import Image from "next/image";
import Logo from "../public/logo.png";
import styles from "../styles/Home.module.css"

const Header = () => {
  return (
    <nav className={styles.nav}>
      <button type="button">
        <Image src={Logo} />
      </button>

     
    </nav>
  );
};

export default Header;
