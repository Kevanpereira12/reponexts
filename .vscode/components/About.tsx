import React from "react";
import styles from "../styles/Home.module.css"
import Profile from "../public/profile.jpeg"
import Image from "next/image";

const About = () => {
  return (
    <div className={styles.about}>
      <figure>
        <Image src={Profile} placeholder="blur" />
      </figure>
      <article>
        <h2 className={styles.desktop}>
          Bienvenid@s a mi portafolio
          <br />
          Mi nombre es Kevan Herrera Pereira
        </h2>
        <h2 className={styles.tablet}>
        Bienvenid@s a mi portafolio
          <br />
          Mi nombre es Kevan Herrera 
          <br />
          Pereira
        </h2>
        <h2 className={styles.mobile}>
        Bienvenid@s a mi portafolio
          <br />
          Mi nombre es Kevan Herrera Pereira
        </h2>
        <p className={styles.desktop}>
          En este lugar podrán encontrar información relevante acerca de mí
          <br />
          
        </p>
        <p className={styles.tablet}>
          En este lugar
          <br />
          podrán
          <br />
          encontrar información
          <br />
          relevante a cerca 
          <br />
          de mí
        </p>
        <p className={styles.mobile}>
        En este lugar
          <br />
          podrán
          <br />
          encontar información 
          <br />
          relevante a cerca de mí
        </p>
        <button type="button">Ir a linked in</button>
      </article>
    </div>
  );
};

export default About;
