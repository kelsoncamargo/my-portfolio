//IMPORTS
    import AlertBuild from './AlertBuild'
import styles from './Header.module.css'
    import { useState } from 'react'
//IMPORTS


export default function Header(){
    //VARIABLES 
        const [toggleBurger, setToggleBurger] = useState('')
        const [alert, setAlert] = useState(false)
    //VARIABLES

    //FUNCTIONS
        function toggleBoxBurger(param: string){
            switch(param){
                case '':
                    setToggleBurger(styles.toggleBurger)
                break
                case styles.toggleBurger:
                    setToggleBurger(styles.backBurger)
                break
                case styles.backBurger:
                    setToggleBurger(styles.toggleBurger)
                break
            }        
        }
    //FUNCTIONS
    return(
        <header id={styles.header}>
            <div id={styles.boxTitle}>
                <h1 id={styles.mainH1}>PORTLOFIO</h1>
                <div id={styles.lineMainH1}></div>
            </div>
            <nav id={styles.nav} className={toggleBurger}>
                <div id={styles.boxBurger} onClick={()=>{toggleBoxBurger(toggleBurger)}} className={toggleBurger}>
                    <div id={styles.burger1} className={styles.burger}></div>
                    <div id={styles.burger2} className={styles.burger}></div>
                    <div id={styles.burger3} className={styles.burger}></div>
                </div>
                <div id={styles.boxLinks}>
                    <ul id={styles.linksUl}>
                        <li><p id={styles.link1} className={styles.linksLi}>Home</p></li>
                        <li><p id={styles.link2} className={styles.linksLi}>Services</p></li>
                        <li><p id={styles.link3} className={styles.linksLi}>About</p></li>
                        <li><p id={styles.link4} className={styles.linksLi}>Contact</p></li>
                     </ul>
                </div>
                <AlertBuild
                alert={alert}
                />    
            </nav>
        </header>
    )
}

