import React, {useState, useEffect} from "react";

function LoginBasicToServerComponent(){
    const [username, setUserName] = useState('');
    const [userpassword, setUserPassword] = useState('');

    const usernameChange = function(e){
        console.log(e.target.value);
    }
    const passwordChange = function(e){
        console.log(e.target.value);
    }

	
	var openPopup = document.getElementById('openPopupBtn');
	var popupclose = document.getElementById('popupclose');
	var overlay = document.getElementById('overlay')

	
	
	function getTNKSR(){
		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function(){
			if(xhr.readyState === XMLHttpRequest.DONE){
				if(xhr.status === 200){
					var result = xhr.responseText.replaceAll(/(\r\n|\n|\r)/gm, "");
					if(typeof window.TNK_SR == 'undefined'){
						alert('TNK_SR value is not loaded!!!')
					}
					window.TNK_SR = result;
				}else{
					console.log('TNK_SR value cannot loaded...');
				}
			}	
		}
		xhr.open('POST','/NxKeyTNKSR');
		xhr.send();
	}
	
	function ajaxTest(id, frm){
		window.TK_makeEncData(frm); //hid_enc_data hidden 필드 생성 
		var xhr =  new XMLHttpRequest();
		xhr.open('POST', '/NxkeyDecode');
		
		xhr.onreadystatechange = function(){
			if(xhr.readyState === XMLHttpRequest.DONE){
				if(xhr.status === 200){
					console.log(xhr.responseText);
					alert(xhr.responseText);
				}else{
					console.log("error!");
				}
			}
		}
		xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		var data = '';
		data+='hid_key_data='+document.getElementById('hid_key_data_'+frm.id).value;
		data+='&hid_enc_data='+encodeURIComponent(document.getElementById('hid_enc_data_'+frm.id).value);
		data+='&E2E_'+id+'='+document.getElementById('E2E_'+id).value;
		xhr.send(data);
	}



    useEffect(function(e){
        console.log('userEffect()');
        getTNKSR(); // makeRndValue.jsp 기능 대처 
        if(window.loadflag === true){ 
            window.TK_Rescan()
        }else{
            window.TK_Loading()
        }
        
    }, []);

    return (
        <>
            <h1>server to server 구간 암호화</h1>
            <form id='frm' name='frm' action='/raonnx/nxKey/jsp/result.jsp' method='post'>
                <input type="text" id='username' name='username' value={username} onChange={usernameChange} placeholder='아이디'/><br/>
                <input type="password" id='userpassword' name='userpassword' value={userpassword} onChange={passwordChange} data-enc="on" placeholder='비밀번호'/><br/>
                <input type='submit' value="전송" onClick={()=>{window.TK_makeEncData(window.frm)}}/>
            </form>
            <button onClick={()=>{ajaxTest('userpassword', window.frm)}}>비동기 복호화</button>
            <ul>
                <li>기존 키보드 보안과 다른차이점은 키보드 키 입력 부터 복호화 할 was서버까지 암호화 되어 값이 전달됩니다</li>
                <li>적용하기 위해서는 input에 data-enc="on" 속성을 넣어야 하며, 최종 서버 전송시 makeEncData(form오브젝트)를 넣어 주어야 합니다</li>
            </ul>
        </>
    )
}

export default LoginBasicToServerComponent;