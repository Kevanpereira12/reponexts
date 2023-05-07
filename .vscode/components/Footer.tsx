import React from 'react'
import styles from "../styles/Home.module.css"
import Image from 'next/image'
import Logo from "../public/logo.png"

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <div>
          <article>
            <h2>Redes sociales:</h2>
            <p className={styles.desktop}>
             Facebook:  Kevan Pereira
              <br/>
             Instagram:  k_pereira77_
              <br/>
              Twitter:  @elmunrri
            </p>
            <p className={styles.tablet}>
              Redes sociales:
              <br/>
              Facebook:  Kevan Pereira
              <br/>
              Instagram:  k_pereira77_
              <br/>
              Twitter:  @elmunrri
            </p>
            <p className={styles.mobile}>
              Redes sociales:
              <br/>
              Facebook:  Kevan Pereira
              <br/>
              Instagram:  k_pereira77_
              <br/>
              Twitter:  @elmunrri
            </p>
          </article>
          
        </div>
        
      </footer>
  )
}

export default Footer