import React, {useEffect} from 'react'

function TranskeyLoginComponent(){

    function keypadAttribute(e){
        window.tk.onKeyboard(e.target);
    }
    
    function ajaxTest(id){
        var values = window.tk.inputFillEncData(document.getElementById(id));
        var name = document.getElementById(id).name;
        var hidden = values.hidden;
        var hmac = values.hmac;
        var frmId = window.use_form_id?"_"+document.getElementById("hidfrmId").value:"";
        var request = new XMLHttpRequest();
        
        var id = document.getElementById(id).id;
        var keyboardType = window.transkey[id].keyboard;
        var keyIndex = window.transkey[id].keyIndex;
        var fieldType = window.transkey[id].fieldType;
        var seedKey = document.getElementById("seedKey"+frmId).value;
        var ExE2E = window.transkey[id].exE2E;
    
        request.open("POST", "ajaxTest_WS.jsp", window.useAsyncTranskey);
        
        if(window.useCORS)
            request.withCredentials = true;
        else
            request.setRequestHeader("Cache-Control", "no-cache");
        
        request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;");
        
        request.onreadystatechange = function (e) {
            if (request.readyState == 4 && request.status == 200) {
                window.tk_alert(request.responseText.replace(/\n/gi, '').replace(/\r/gi,''));
            }
        }
        if(ExE2E!="false")
            request.send("id=" + id + "&transkey_"+id+"_"+frmId+"=" + hidden + "&transkey_HM_"+id+"_"+frmId+"=" + hmac + "&keyboardType_" + id + "_"+frmId+"=" + keyboardType + "&keyIndex_" + id+"_"+frmId+"=" + keyIndex + "&fieldType_" + id + "_"+frmId+"=" + fieldType + "&seedKey_"+frmId+"="+ seedKey + "&initTime_"+frmId+"="+window.initTime + "&transkey_ExE2E_"+id+"_"+frmId+"="+ExE2E+"&hidfrmId="+frmId+ window.tk_origin);
        else
            request.send("id=" + id + "&transkey_"+id+"_"+frmId+"=" + hidden + "&transkey_HM_"+id+"_"+frmId+"=" + hmac + "&keyboardType_" + id + "_"+frmId+"=" + keyboardType + "&keyIndex_" + id+"_"+frmId+"=" + keyIndex + "&fieldType_" + id + "_"+frmId+"=" + fieldType + "&seedKey_"+frmId+"="+ seedKey + "&initTime_"+frmId+"="+window.initTime+"&hidfrmId="+frmId+ window.tk_origin);		
    }
    

    useEffect(function(){


        var script = document.createElement('script');
        script.type='text/javascript';
        script.src='/transkey/transkey.js';
        
        var link = document.createElement('link');
        link.rel='stylesheet'
        link.type='text/css';
        link.href='/transkey/transkey.css';

        document.head.appendChild(script);
        document.head.appendChild(link);



        
    },[])
    return(
        <>
        <h1>가상키패드 데모 페이지</h1>
            <form id="frm" name="frm" action='validate_WS.jsp' method='post'>
                <input type="text" id='username' name='username' data-tk-kbdtype="qwerty" data-tk-bottom="true" onClick={keypadAttribute} placeholder='사용자 아이디'/>
                <span id="username_tk_btn">보안입력</span>
                <input type="button" value="ajaxTest" onClick={()=>{ajaxTest('username')}}></input>
                <br/>
                <input type="password" id='userpassword' name='userpassword' data-tk-kbdtype="number" data-tk-bottom="true" onClick={keypadAttribute} placeholder='사용자 비밀번호'/>
                <span id="userpassword_tk_btn">보안입력</span>
                <input type="button" value="ajaxTest" onClick={()=>{ajaxTest('userpassword')}}></input>
                <br/>
                <input type="submit" value="전송" onClick={()=>{window.tk.fillEncData()}} />
            </form>

        </>
    );
}

export default TranskeyLoginComponent;