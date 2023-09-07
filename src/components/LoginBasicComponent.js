import React, {useState} from 'react';


function LoginBasicComponent(){
    const [username, setUserName] = useState('');
    const [userpassword, setUserPassword] = useState('');

    const usernameChange = function(e){
        console.log(e.target.value);
        setUserName(e.target.value);
    }
    const passwordChange = function(e){
        console.log(e.target.value);
        setUserPassword(e.target.value);
    }
    return (
        <>
            <form id='frm' name='frm' action='#' method='post'>
                <input type="text" id='username' name='username' value={username} onChange={usernameChange} placeholder='아이디'/><br/>
                <input type="password" id='userpassword' name='userpassword' value={userpassword} onChange={passwordChange} placeholder='비밀번호'/><br/>
                <input type='button' value="전송"/>
            </form>
        </>
    );
}
export default LoginBasicComponent;