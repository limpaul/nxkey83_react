import React from 'react';
import {Link} from 'react-router-dom';
function Nav(){
    return (
        <>
            <div>
                <Link to={'/'}>메인페이지</Link> | 
                <Link to={'/noLogin'}>로그인페이지(키보드보안미적용)</Link> |
                <Link to={'/Login'}>로그인페이지(키보드보안)</Link>
                <Link to={'/transkey'}>로그인페이지(가상키패드)</Link>
            </div>
        </>
    );
}
export default Nav;