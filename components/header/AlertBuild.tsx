//IMPORTS
    import styles from './AlertBuild.module.css'
//IMPORTS

export default function AlertBuild(props:{alert: boolean}){
    //FUNCTIONS
        function execAlert(param: boolean){
            if(param){
                console.log('Open')
                return (<h1></h1>)
            }else{
                console.log('Closed')
                return (<h1></h1>)
            }
        }
    //FUNCTIONS
    return(
        <div id={styles.mainBox}>
            <div id={styles.alertBox}>
            <div id={styles.alertBurgers}>
                <div id={styles.burgerAlert1}></div>
                <div id={styles.burgerAlert2}></div>
            </div>
                <p id={styles.alert}>This part of my portfolio is still under development</p>
            </div>
        </div>
    )
}