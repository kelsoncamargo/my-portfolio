//IMPORTS
    import styles from '@/styles/Header/Header.module.css'
    import { useState } from 'react'
//IMPORTS


export default function Header(){
    //VARIABLES
        const [toggleBurger, setToggleBurger] = useState('')
    //VARIABLES

    //FUNCTIONS
        function toggleBoxBurger(param: any){
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
                
            </div>
            <nav id={styles.nav} className={toggleBurger}>
                <div id={styles.boxBurger} onClick={()=>{toggleBoxBurger(toggleBurger)}} className={toggleBurger}>
                    <div id={styles.burger1} className={styles.burger}></div>
                    <div id={styles.burger2} className={styles.burger}></div>
                    <div id={styles.burger3} className={styles.burger}></div>
                </div>
            </nav>
        </header>
    )
}