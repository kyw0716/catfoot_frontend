import styles from "../css/NavBar.module.css";

function NavBar({scrollH}){
    return(
        <div className={styles.navBar}>
            <span className={scrollH === 0 ? styles.logo : styles.logoAfter}>고양이발</span>
            <div className={scrollH === 0 ? styles.menu : styles.menuAfter}>
                <span>프로젝트</span>
                <span>아이디어</span>
                <span>블로그</span>
                <span>마이페이지</span>
            </div>
        </div>
    );
}
export default NavBar;