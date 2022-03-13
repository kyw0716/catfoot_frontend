import styles from "../css/HomeContent.module.css";

function ImgBox({src}){
    return(
        <img src={src} className={styles.img}/>
    )
}
export default ImgBox;