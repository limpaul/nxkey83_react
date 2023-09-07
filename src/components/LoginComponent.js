
import React, { useState, useEffect} from 'react';

function LoginComponent(){

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

    useEffect(function(e){
        console.log('userEffect()');
        if(window.loadflag === true){ 
            window.TK_Rescan()
        }else{
            window.TK_Loading()
        }
        
    }, []);

    return (
        <>
            <h3>react에서 제공하는 useState기능은 input에 적용할 수 없습니다</h3>
            <ul>
                <li>키보드 보안 솔루션은 키 입력에 대한 이벤트를 제어하므로 input에 react에서 제공되는 useState기능을 사용할 수없습니다</li>
                <li>React생명주기에 따르면 컴포넌트의 인스턴스는 생성하고 메모리에 할당하는데, 컴포넌트가 업데이트 되었을 경우 이전 인스턴스를 유지하지 않고 새로운 인스턴스를 생성하므로, 인스턴스가 새롭게 만들어 지므로 TK_Rescan()함수를 사용하여 새로운 인스턴스에 생성된 input dom에 키보드 보안이 적용되도록 해줍니다</li>
                
            </ul>
            <form id='frm' name='frm' action='#' method='post'>
                <input type="text" id='username' name='username' value={username} onChange={usernameChange} placeholder='아이디'/><br/>
                <input type="password" id='userpassword' name='userpassword' value={userpassword} onChange={passwordChange} placeholder='비밀번호'/><br/>
                <input type='button' value="전송"/>
            </form>

        </>   
    );
}
export default LoginComponent;