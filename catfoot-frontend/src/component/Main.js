import styles from "../css/Home.module.css";

function Main(){
    return(
        <div className={styles.firstContainer}>
            <div className={styles.bgImg}></div>
            <span className={styles.span}>
                야 너두 개발할 수 있어
            </span>
        </div>
        
    )
}
export default Main;