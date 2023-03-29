import styles from '@/styles/Home.module.css'
import React, { useEffect, useState} from 'react'

export default function Home() {

  const [toggle, setToggle] = useState(styles.linksNavNoToggle)
  
  function verifySizePage() {
    const [isMobile, setIsMobile] = useState(false);
  
    useEffect(() => {
      function handleResize() {
        setIsMobile(window.innerWidth < 700);
      }
  
      // adiciona o listener para o evento de resize
      window.addEventListener('resize', handleResize);
  
      // verifica o tamanho da tela inicialmente
      handleResize();
  
      // remove o listener quando o componente é desmontado
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
    return (isMobile ? toggle : styles.linksNavNoToggle)
  }


  return (
    <div id={styles.body}>
      <header id={styles.header}>
       <div id={styles.titleBox}>
          <h1 id={styles.mainTitle}>PORTFOLIO</h1>
          <div id={styles.lineTitle}></div>
        </div>

        <div id={styles.navLinksID} className={verifySizePage()}>
          <ul id={styles.listLinks}>
            <li id={styles.linkNav1}>Home</li>
            <li id={styles.linkNav2}>Services</li>
            <li id={styles.linkNav3}>About</li>
            <li id={styles.linkNav4}>Contact</li>
          </ul>
        </div>

        <div id={styles.burgerBox} onClick={e => {
           if(toggle === styles.linksNavNoToggle) {
              setToggle(styles.listNavToggle)
            }else if(toggle === styles.listNavToggle) {
              setToggle(styles.linksNavNoToggle)
           }
       }}>
          <div className={styles.burger} id={styles.burger1}></div>
          <div className={styles.burger} id={styles.burger2}></div>
          <div className={styles.burger} id={styles.burger3}></div>
        </div>
      </header>
      <main>
        
      </main>
    </div>
  )
}
