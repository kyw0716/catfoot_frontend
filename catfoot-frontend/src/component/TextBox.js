import styles from "../css/HomeContent.module.css";

function TextBox({header, content}){
    return(
        <div className={styles.textContainer}>
            <span className={styles.header}>{header}</span>
            <span className={styles.content}>{content}</span>
        </div>
    )
}
export default TextBox;