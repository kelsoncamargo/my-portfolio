//IMPORTS
import styles from './Alert.module.css'
import { Alertypes } from './types'
//IMPORTS

export default function Alert(props: Alertypes){
    return(
        <div id={styles.mainBox} className={props.alert? styles.alertActive : styles.alertDisable}>
            <div id={styles.alertBox}>
                <div id={styles.alertBurgers} 
                onClick={()=>{
                    props.disableAlert(false)
                }}
                >
                    <div>
                        <div id={styles.burgerAlert1}></div>
                        <div id={styles.burgerAlert2}></div>
                    </div>
                </div>
                <div id={styles.pAlertBox}>
                    <p id={styles.alert}>{props.messageAlert}</p>
                </div>
            </div>
        </div>
    )
}