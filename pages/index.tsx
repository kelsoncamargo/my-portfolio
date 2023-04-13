import Header from '@/components/header/header';
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
      <Header/>
      <main>
        
      </main>
    </div>
  )
}
