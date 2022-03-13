import ImgBox from "./ImgBox";
import TextBox from "./TextBox";
import styles from "../css/HomeContent.module.css";

function HomeContent({header, content, src, lr}){
    return(
        <>
            {lr === "left" ? 
                <div className={styles.container}>
                    <TextBox header={header} content={content}/>
                    <ImgBox src={src}/>
                </div>
                :
                <div className={styles.container}>
                    <ImgBox src={src}/>
                    <TextBox header={header} content={content}/>
                </div>
            }
            
        </>
    )
}
export default HomeContent;