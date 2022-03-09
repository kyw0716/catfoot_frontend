function Home(){
    return(
        <div>
            홈 화면
            <button onClick={()=>{window.location = "/loginPage"}}>버튼</button>
        </div>
    );
}

export default Home;