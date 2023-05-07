import React from "react";
import styles from "../styles/Home.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <h2>Ingeniería en Sistemas de Información</h2>
      <p className={styles.desktop}>
      Universidad Nacional de Costa Rica
        <br />
        Campus Coto
      </p>
      <p className={styles.tablet}>
      Universidad Nacional de Costa Rica
        <br />
        Campus Coto
      </p>
      <p className={styles.mobile}>
        Universidad Nacional de Costa Rica
        <br />
        Campus Coto
       
      </p>
      
         </section>
  );
};

export default Hero;
