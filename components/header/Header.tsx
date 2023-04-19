//IMPORTS
    import Alert from '../alert/Alert'
    import styles from './header.module.css'
    import { useState } from 'react'
    import { headerTypes } from './typesHeader'
    import { v4 as uuidv4 } from 'uuid';
//IMPORTS

export default function Header(props:headerTypes){
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
        
        function execAlert(param: boolean){
            setAlert(param)
        }
    //FUNCTIONS
                        
    return(
        <header id={styles.header}>
            <div id={styles.boxTitle}>
                <h1 id={styles.mainH1}>{props.h1Head}</h1>
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
                        {
                            props.links.map(link => {
                                return (
                                    <li key={uuidv4()}>
                                        <p 
                                            id={styles.linkid} 
                                            className={styles.linksLi}
                                            onClick={()=>{
                                                link?.execAlert? execAlert(true) : null
                                            }}
                                        >
                                            {link?.nameLink}
                                        </p>
                                    </li>
                                )
                            })
                        }
                     </ul>
                </div>
                <Alert
                disableAlert={execAlert}
                alert={alert}
                messageAlert={props.messageAlert || 'default'}
                />    
            </nav>
        </header>
    )
}

