import React from "react";
import {Link} from "react-router-dom"
function Navigation(){
    return (
    

    // 페이지 이동이나 새로고침 하면 리액트를 죽이고 새로 하기 때ㅐ문에 비효율적
    // Link를 이용
    // Link를 쓰려면 App.js에서 HashRouter 안에 Navigation이 위치해야 한다.

    // <div>
    //     <a href="/"> Home</a>
    //     <a href="/about">About</a>
    // </div>

    <div>
        <Link to="/"> Home</Link>
        <Link to={{
            pathname:"/about",
            state:{
                fromNavigation:true
            }

        }}
        
        >
            About
            
            </Link>
    </div>
    )
}


export default Navigation;