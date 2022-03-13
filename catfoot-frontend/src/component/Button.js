import styles from "../css/Button.module.css";
import { useState, useEffect} from "react";
import { debounce } from "debounce";

function Button ({h}) {
    const [clicked, setClicked] = useState(0);
    
    useEffect(()=>{
        window.addEventListener('wheel',debounce(scroll, 500));
        return () => window.removeEventListener('wheel',debounce(scroll, 100));
    },[]);

    const scroll = (e) => {
        let y = e.deltaY;
        let h = Math.round(window.innerHeight);
        let windowH = Math.round(window.scrollY);
        if(windowH === 0){
            if(y > 0){
                window.scrollTo({top:`${h}`, behavior:"smooth"});
                setClicked(2);
            }
        }
        if(windowH === h){
            if(y > 0){
                window.scrollTo({top:`${2 * h}`, behavior:"smooth"});
                setClicked(3);
            }
            if(y < 0){
                window.scrollTo({top:`0`, behavior:"smooth"});
                setClicked(1);
            }
        }
        if(windowH === 2 * h){
            if(y > 0){
                window.scrollTo({top:`${3 * h}`, behavior:"smooth"});
                setClicked(4);
            }
            if(y < 0){
                window.scrollTo({top:`${h}`, behavior:"smooth"});
                setClicked(2);
            }
        }
        if(windowH === 3 * h - 1){
            if(y < 0){
                window.scrollTo({top:`${2 * h}`, behavior:"smooth"});
                setClicked(3);
            }
        }
    }

    return(
        <div className={styles.container}>
            <button className={clicked === 1 ? styles.btn + " " + styles.white : styles.btn} onClick={()=>{
                window.scrollTo({top:`0`,behavior:"smooth"});
                setClicked(1);
            }}></button>

            <button className={clicked === 2 ? styles.btn + " " + styles.white : styles.btn} onClick={()=>{
                window.scrollTo({top:`${h}`,behavior:"smooth"});
                setClicked(2);
            }}></button>
            
            <button className={clicked === 3 ? styles.btn + " " + styles.white : styles.btn} onClick={()=>{
                window.scrollTo({top:`${h * 2}`,behavior:"smooth"});
                setClicked(3);
            }}></button>

            <button className={clicked === 4 ? styles.btn + " " + styles.white : styles.btn} onClick={()=>{
                window.scrollTo({top:`${h * 3}`,behavior:"smooth"});
                setClicked(4);
            }}></button>
        </div>
    )
}

export default Button;