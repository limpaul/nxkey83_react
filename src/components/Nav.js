import React from 'react';
import {Link} from 'react-router-dom';

const navStyle = {
    background: 'lightgoldenrodyellow',
    fontWeight: 'bold',
    textDecorationLine: 'none',
}
function Nav(){
    return (
        <>
            <div>
                <Link style={navStyle} to={'/'}>메인페이지</Link> |  
                <Link style={navStyle} to={'/noLogin'}>로그인페이지(키보드보안미적용)</Link> | 
                <Link style={navStyle} to={'/Login'}>로그인페이지(키보드보안)</Link> |
                <Link style={navStyle} to={'/LoginToServer'}>로그인페이지(키보드보안 구간 암호화)</Link> | 
                <Link style={navStyle} to={'/transkey'}>로그인페이지(가상키패드)</Link>
            </div>


        </>
    );
}
export default Nav;