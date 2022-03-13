import Button from "./Button";
import { useState } from "react";
import { debounce } from "debounce";
import NavBar from "./NavBar";
import Main from "./Main";
import HomeContent from "./HomeContent";

function Home(){
    let h = window.innerHeight;
    const [scrollH, setScrollH] = useState(0);
    let scrolling = (e) => {
        setScrollH(Math.round(window.scrollY));
    }
    window.addEventListener("scroll",debounce(scrolling,100));
    let textHeader = [
        "아이디어 공유",
        "프로젝트 모집",
        "개인 블로그 운영"
    ]
    let textContent = [
        "머릿속에 썩히고 있는 기발한 아이디어를 공유해봐요 고양이발에서 현실로 만들어질지도 몰라요",
        "프로젝트가 하고싶은데 같이 할 팀원이 없으시다고요? 고양이발에서 함께 할 개발자들을 만날 수 있어요",
        "프로젝트를 하면서 공부한 내용을 정리할 곳이 필요한가요? "
    ]
    let srcArray = [
        "https://png.pngtree.com/png-vector/20190217/ourlarge/pngtree-vector-bulb-icon-png-image_555509.jpg",
        "https://cdn-icons-png.flaticon.com/512/6213/6213479.png",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz3NnL2dWvufyssjwcnbq-soa1baiBcTeBHw&usqp=CAU"
    ]
    return(
        <div>
            <NavBar scrollH={scrollH} />
            <Button h={h}/>
            <Main/>
            <HomeContent lr={"left"} src={srcArray[0]} header={textHeader[0]} content={textContent[0]} />
            <HomeContent lr={"right"} src={srcArray[1]} header={textHeader[1]} content={textContent[1]} />
            <HomeContent lr={"left"} src={srcArray[2]} header={textHeader[2]} content={textContent[2]} />
        </div>
    );
}

export default Home;