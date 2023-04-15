//IMPORTS
import styles from './AlertBuild.module.css'
import { AlertBuildTypes } from './types'
//IMPORTS

export default function AlertBuild(props: AlertBuildTypes){
    return(
        <div id={styles.mainBox} className={props.alert? styles.alertActive : styles.alertDisable}>
            <div id={styles.alertBox}>
                <div id={styles.alertBurgers} 
                onClick={()=>{
                    props.execAlert(false)
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