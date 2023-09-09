<html>
<head>
<title>TouchEn nxKey::</title>
<meta http-equiv="Content-Type" content="text/html; charset=euc-kr">
<STYLE>
A {color:#000000;}P {margin-top:2px; margin-bottom:2px;}TABLE {font-Family:굴림; font-size:9pt;}DIV {font-Family:굴림; font-size:9pt;}
</STYLE>
<style type="text/css">
 no-repeat;background-repeat: no-repeat; background-position: right bottom}
.textbox {
	font-family: "굴림", "돋움", Seoul, "한강체";
	font-size: 13px;
	color: #666666;
	text-decoration: none;
	text-align: justify;
	border: 1px solid #999999;
}
.text_1 {
	font-family: "굴림", "돋움", Seoul, "한강체";
	font-size: 12px;
	line-height: 18pt;
	color: #333333;
	text-decoration: none;
}
.style1 {
	color: #254AA0;
	font-weight: bold;
}
.style2 {color: #254AA0}
.style3 {font-family: "굴림", "돋움", Seoul, "한강체"; font-size: 12px; line-height: 18pt; color: #254AA0; text-decoration: none; }
.u_line1 {
	border-top-width: 1px;
	border-right-width: 1px;
	border-bottom-width: 1px;
	border-left-width: 1px;
	border-top-style: dashed;
	border-right-style: dashed;
	border-bottom-style: dashed;
	border-left-style: dashed;
	border-top-color: #FFFFFF;
	border-right-color: #FFFFFF;
	border-bottom-color: #666666;
	border-left-color: #FFFFFF;
}
</style>

<script type="text/javascript" src="./jquery/jquery-1.6.3.js"></script>
<script type="text/javascript" src="./cmn/TouchEnNx.js"></script>


<script>

//Auto Tab code start

var isNN = (navigator.appName.indexOf("Netscape")!=-1);
if(isNN)document.captureEvents(Event.KEYPRESS);

function autoTab(input,len, e){
	
   var keyCode = (isNN)?e.which:e.keyCode;  
   var filter = (isNN)?[0,8,9]:[0,8,9,16,17,18,37,38,39,40,46];
   if(input.value.length >= len && !containsElement(filter,keyCode)){
    input.value = input.value.slice(0,len);
    input.form[(getIndex(input)+1)%input.form.length].select();
}

function containsElement(arr, ele){
    var found = false, index = 0;
    while(!found && index < arr.length)
      if(arr[index]==ele)
        found = true;
      else
        index++;
    return found;
}

function getIndex(input){
    var index = -1, i = 0, found = false;
    while (i < input.form.length && index==-1)
      if (input.form[i] == input)index = i;
      else i++;
    return index;
}

return true;
}

//Auto Tab code end

</script>
<script language="javascript">
		function inputHTML1(){
			var str ='<input type="text" name="rescna1" />';
			document.getElementById("aaa").innerHTML = str;
		}
		
		function inputHTML2(){
			var str ='<input type="text" name="rescan2" data-datatype="n" data-enc="on" />';
			document.getElementById("aaa").innerHTML = str;
			TouchEnKey_ReScan();
		}
		
		function inputHTML3(){
			var str ='<input type="text" name="rescan3" data-datatype="n" data-enc="on" />';
			document.getElementById("aaa").innerHTML = str;
			TouchEnkey_EnqueueList("testFrm", "rescan3");
		}
		
    function isVM(){
      TK_Request("isVM", "");
    }
    function TouchEnKey_InvalidSession(){
      TK_Request("TouchEnKey_InvalidSession", "");
    }
    
</script>
<script language="javascript">
		function next(current, next) {
		if (current.value.length == 4) {
			bAutoFocus=true;
			next.focus();
		}
	}
</script>

<script>


function DoSubmit() 
{
	TK_postInit(document.forms[0]);
    document.forms[0].method="post";
    document.forms[0].action="./nxKey/jsp/result.jsp";
    document.forms[0].submit();
	TK_postFinish(document.forms[0]);

}
    
    function DoSubmit_GetEncData() {

		TK_DoSubmitByGetEnc();

    }    
 
	function TestEnqueueList() {
		var form = document.forms[0];
			var newEle = document.createElement("input");
			newEle.type = "text";
			newEle.name = "rara";
			newEle.value = "";
            newEle.setAttribute("security", "off");
			form.appendChild(newEle);
        
        //TK_AddEventListner2(newEle);
        //TK_Request("EnqueueList", "testFrm","rara");

	}
    
    
        function GetEncXw() {
            
          TK_EncModify("on", "testFrm", "id1");

        }

  </script>


    <input type='file' accept='text/plain' onchange='openFile(event)'><br>
<img id='output'>
<script>
  var openFile = function(event) {
    var input = event.target;

    var reader = new FileReader();
    reader.onload = function(){
      var text = reader.result;
      console.log(reader.result.toString());
    };
    reader.readAsText(input.files[0]);
  };
</script>    


  copy cert<input type="button" value="copy cert" onclick="LoadMain();"/><br/>
		qr copy<input type="button" value="copy cefrt QR" onclick="LoadMainQR();"/><br/>
  
  
  <%@ include file="./nxKey/jsp/makeRndValue.jsp" %>

</head>

<!--<body bgcolor="#c1c1c1" topmargin="100" onload=TK_Loading(); document.testFrm.reset();">-->
<!--<form name="testFrm" method="post"> -->

<form name="testFrm" action="./nxKey/jsp/result.jsp" method="post">

<!--
<input name="hid_key_data" type="hidden" value=""></input>
<input name="hid_data-enc_data" type="hidden" value=""></input>
-->

<!--	
<input name="hid_key_data" type="hidden"></input>

<input name="hid_ID" type="hidden"></input>
<input name="hid_PWD" type="hidden"></input>
<input name="hid_auto1" type="hidden"></input>
<input name="hid_auto2" type="hidden"></input>
<input name="hid_auto3" type="hidden"></input>
<input name="hid_auto4" type="hidden"></input>

<input name="hid_PWD" type="hidden" value=""></input>
<input name="hid_key_data" type="hidden" value=""></input>
<input name="hid_data-enc_data" type="hidden" value=""></input>
-->

<div align="center"> 
  <table width="626"  border="0" cellspacing="0" cellpadding="0">
       
        <tr>
          <td><table width="626" border="0" cellspacing="0" cellpadding="0">
          	 <tr>
            	<td align="center"><H2> TouchEn nxKey Test Page </td>
            </tr>
            	<tr>
            	</tr>
            	 <tr>
	           	<td align="left">
	           	 <li>onkeypress (security=off)</li>
	          	<label>onkeypress  :   </label>
	          	<input type="text" name="no1" size="4" maxlength="4" data-datatype="n" onkeypress="next(testFrm.no1,testFrm.no2);" security="off"> - 
	          	<input type="text" name="no2" size="4" maxlength="4" data-datatype="n" onkeypress="next(testFrm.no2,testFrm.no3);" security="off"> - 
	          	<input type="text" name="no3" size="4" maxlength="4" data-datatype="n" onkeypress="next(testFrm.no3,testFrm.no4);" security="off"> - 
	          	<input type="text" name="no4" size="4" maxlength="4" data-datatype="n" security="off">
	          	</td>
             </tr>
             <tr>
	           	<td align="left">
	           	 <li>onkeyup</li>
	          	<label>onkeyup  :   </label>
	          	<input type="text" name="no5" size="4" maxlength="4" data-datatype="n" onkeyup="next(testFrm.no5,testFrm.no6);" enc="on"> - 
	          	<input type="text" name="no6" size="4" maxlength="4" data-datatype="n" onkeyup="next(testFrm.no6,testFrm.no7);" enc="on"> - 
	          	<input type="text" name="no7" size="4" maxlength="4" data-datatype="n" onkeyup="next(testFrm.no7,testFrm.no8);" enc="on"> - 
	          	<input type="text" name="no8" size="4" maxlength="4" data-datatype="n" enc="on">
	          	</td>
             </tr>
            <tr>
	           	<td align="left">
	           	 <li>onkeydown</li>
	          	<label> onkeydown  :   </label>
	          	<input type="text" name="no9"  size="4" maxlength="4" data-datatype="n" onkeydown="next(testFrm.no9,testFrm.no10);" enc="on"> - 
	          	<input type="text" name="no10" size="4" maxlength="4" data-datatype="n" onkeydown="next(testFrm.no10,testFrm.no11);" enc="on"> - 
	          	<input type="text" name="no11" size="4" maxlength="4" data-datatype="n" onkeydown="next(testFrm.no11,testFrm.no12);" enc="on"> - 
	          	<input type="text" name="no12" size="4" maxlength="4" data-datatype="n" enc="on">
	          	</td>
             </tr>
             <tr>
            <td></td><br>
            </tr>
            	
            </tr>
              <tr>
                <td><table width="826" border="0" cellpadding="0" cellspacing="0">
                   
                    <tr>
                      <td bgcolor="#ededed"><table width="100%"  border="0" cellspacing="0" cellpadding="27">
                        <tr>
                          <td><table width="100%"  border="0" cellspacing="0" cellpadding="0">
                            <tr>
                              <td valign="top"><table width="350" border="0" cellpadding="0" cellspacing="0" class="text_1">
                                  <tr>
                                    <td width="350" colspan="3" class="text"><table width="100%" border="0" align="center" cellpadding="0" cellspacing="0">
                                          <tr>
                                            <td width="168" height="20" align="left" class="text_1"><img src="images/icon.png" width="3" height="3" align="absmiddle" style="margin:5px">ID (data-enc=On)</td>
                                            <td width="10" height="20" align="right"><div align="left">:</div></td>
                                            <td width="72" align="center"><div align="right">
                                              <input name="id"  type="text" class="textbox" value="" size="12" enc="on" data-maxlength="12"</td>
                                            </div></td>
                                          </tr>
										    									<tr>
                                            <td width="168" height="20" align="left" class="text_1"><img src="images/icon.png" width="3" height="3" align="absmiddle" style="margin:5px">Password (data-enc=On) </td>
                                            <td width="10" height="20" align="right"><div align="left">:</div></td>
                                            <td width="72" height="20" align="center"><div align="right">
                                                <input name="password" type="password" class="textbox" size="12" enc="on" data-maxlength="15">
                                            </div></td>
                                          </tr>
                                          <tr>
                                            <td width="168" height="20" align="left" class="text_1"><img src="images/icon.png" width="3" height="3" align="absmiddle" style="margin:5px">AutoTab(Text) </td>
                                            <td width="10" height="20" align="right"><div align="left">:</div></td>
                                            <td width="72" height="20" align="center"><div align="right">
                                                 <input name="auto1" type="text" class="textbox" size="12" onkeyup="next(testFrm.auto1,testFrm.auto2)";>
                                            </div></td>
                                          </tr>
										  										<tr>
                                            <td width="168" height="20" align="left" class="text_1"><img src="images/icon.png" width="3" height="3" align="absmiddle" style="margin:5px">AutoTab(Passwd) </td>
                                            <td width="10" height="20" align="right"><div align="left">:</div></td>
                                            <td width="72" height="20" align="center"><div align="right">
                                                <input name="auto2" type="password" class="textbox" size="12" onkeyup="next(testFrm.auto2,testFrm.auto3)";>
                                            </div></td>
                                          </tr>
										    									<tr>
                                            <td width="168" height="20" align="left" class="text_1"><img src="images/icon.png" width="3" height="3" align="absmiddle" style="margin:5px">AutoTab(data-enc=On) </td>
                                            <td width="10" height="20" align="right"><div align="left">:</div></td>
                                            <td width="72" height="20" align="center"><div align="right">
                                                <input name="auto3" type="text" class="textbox" size="12" data-enc="on" maxlength="4" onkeyup="next(testFrm.auto3,testFrm.auto4)";>
                                            </div></td>
                                          </tr>
										    									<tr>
                                            <td width="168" height="20" align="left" class="text_1"><img src="images/icon.png" width="3" height="3" align="absmiddle" style="margin:5px">AutoTab(data-enc=On) </td>
                                            <td width="10" height="20" align="right"><div align="left">:</div></td>
                                            <td width="72" height="20" align="center"><div align="right">
                                                <input name="auto4" type="text" class="textbox" size="12" data-enc="on" maxlength="4" onkeyup="next(testFrm.auto4,testFrm.AlphaNum)";>
                                            </div></td>
                                          </tr>
                         											
                                      </table></td>
                                  </tr>
                              </table>
                               <table width="250">
                                 
																	<tr>
																		<td><button type="button" onclick="javascript:TestEnqueueList();">EnqueueList</button></td>
																	</tr>
								
																	<tr>
																		<td><button type="button" onclick="javascript:inputHTML1();">No-Use ReScanDocument</button></td>
																	</tr>
																	<tr>
																		<td><button type="button" onclick="javascript:inputHTML2();">Use ReScanDocument!</button></td>
																	</tr>
																	<tr>
																		<td><button type="button" onclick="javascript:inputHTML3();">Use ReScanDocumentEx!!</button></td>
																	</tr>
																	<tr>
																		<td><button type="button" onclick="javascript:TK_Clear(TouchEnKeyNXE_CurObj.form.name,TouchEnKeyNXE_CurObj.name);">Clear</button></td>
																		<td><button type="button" onclick="javascript:isVM();">isVM</button></td>
                                    <td><button type="button" onclick="javascript:TouchEnKey_InvalidSession();">TouchEnKey_InvalidSession</button></td>
																	</tr>

																	<tr>
																		<td><div id="aaa"></div></td>
																		<td><div id="bbb"></div></td>
																	</tr>
																	</table>
                                <table width="250" border="0" cellpadding="0" cellspacing="0" class="text_1">
                                  <tr>
                                    <td width="250" colspan="3" class="text">&nbsp;</td>
                                  </tr>
                                  <tr>
                                    <td colspan="3" class="text">
                              <div id="btn"><input type="button" value="Submit" onclick="DoSubmit();">&nbsp;
                              	  <div id="btn"><input type="button" value="encchange" onclick="GetEncXw();">&nbsp;                                  
                                  </tr>
                                  
                                </table></td>
                              <td><img src="images/midbtn.gif" width="64" height="1"></td>
                              <td valign="top"><table width="250" border="0" cellpadding="0" cellspacing="0" class="text_1">
                                <tr>
                                  <td width="250" colspan="3" class="text"><table width="100%" border="0" align="center" cellpadding="0" cellspacing="0">
                                        <tr>
                                          <td width="168" height="20" align="left" class="text_1"><img src="images/icon.png" width="3" height="3" align="absmiddle" style="margin:5px">Alpha, Num </td>
                                          <td width="10" height="20" align="right"><div align="left">:</div></td>
                                          <td width="72" align="center"><div align="right">
                                              <input name="AlphaNum" data-datatype="an" type="text" class="textbox" value="" size="12">
                                          </div></td>
                                        </tr>
                                        <tr>
                                          <td width="168" height="20" align="left" class="text_1"><img src="images/icon.png" width="3" height="3" align="absmiddle" style="margin:5px">Alpha </td>
                                          <td width="10" height="20" align="right"><div align="left">:</div></td>
                                          <td width="72" height="20" align="center"><div align="right">
                                              <input name="Alpha" data-datatype="a" type="text" class="textbox" size="12">
                                          </div></td>
                                        </tr>
                                                                      </table></td>
                                </tr>
                              </table>
                                <table width="250" border="0" cellpadding="0" cellspacing="0" class="text_1">
                                  
                                      <tr>
                                        <td width="168" height="20" align="left" class="text_1"><img src="images/icon.png" width="3" height="3" align="absmiddle" style="margin:5px">Num </td>
                                        <td width="10" height="20" align="right"><div align="left">:</div></td>
                                        <td width="72" align="center"><div align="right">
                                            <input name="HanNum" data-datatype="n" type="text" class="textbox" value="" size="12">
                                        </div></td>
                                      </tr>
									  
									  <tr>
                                        <td width="168" height="20" align="left" class="text_1"><img src="images/icon.png" width="3" height="3" align="absmiddle" style="margin:5px">Hangle </td>
                                        <td width="10" height="20" align="right"><div align="left">:</div></td>
                                        <td width="72" align="center"><div align="right">
                                            <input name="Hangle" data-datatype="h" type="text" class="textbox" value="" size="12">
                                        </div></td>
                                      </tr>
									  
                                       <tr>
                                        <td width="168" height="20" align="left" class="text_1"><img src="images/icon.png" width="3" height="3" align="absmiddle" style="margin:5px">no data-datatype </td>
                                        <td width="10" height="20" align="right"><div align="left">:</div></td>
                                        <td width="72" height="20" align="center"><div align="right">
                                            <input name="datatypeno" type="text" class="textbox" size="12"onkeyup="javascript:document.testFrm.Haun.value=document.testFrm.data-datatypeno.value.length;">
                                        </div></td>
                                      </tr>
                                      <tr>
                                        <td width="168" height="20" align="left" class="text_1"><img src="images/icon.png" width="3" height="3" align="absmiddle" style="margin:5px"> maxlength=5 </td>
                                        <td width="10" height="20" align="right"><div align="left">:</div></td>
                                        <td width="72" height="20" align="center"><div align="right">
                                            <input name="maxleng" type="text" class="textbox" maxlength="5" size="12"onkeyup="javascript:document.testFrm.Haun.value=document.testFrm.maxleng.value.length;">
                                        </div></td>                                                                            
                                      </tr>
                                      <tr>
                                        <td width="168" height="20" align="left" class="text_1"><img src="images/icon.png" width="3" height="3" align="absmiddle" style="margin:5px">data-security off </td>
                                        <td width="10" height="20" align="right"><div align="left">:</div></td>
                                        <td width="72" height="20" align="center"><div align="right">
                                            <input name="Haun" type="text" class="textbox" data-security="off" size="12">
                                        </div></td>
                                      </tr>
                            
                                     
                                    </table></td>
                                  </tr>
                                </table></td>
                            </tr>
                          </table></td>
                        </tr>
                      </table></td>
                    </tr>
                    <tr>
                      <td background="images/linebg.gif" bgcolor="#ededed"><img src="images/spacer.gif" width="1" height="1"></td>
                    </tr>
                    
                </table></td>
              </tr>
              <tr>
                <td width="626" height="8"><table width="626" border="0" cellspacing="0" cellpadding="0">
                    <tr>
                      <td width="8" height="8"><img src="images/testpage_04.png" width="8" height="8"></td>
                      <td width="610" height="8" background="images/testpage_05.png"></td>
                      <td width="8" height="8"><img src="images/testpage_06.png" width="8" height="8"></td>
                    </tr>
                </table></td>
              </tr>
          </table></td>
        </tr>
      </table></td>
    </tr>
    <tr>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td>  <div align="center">Copyright(C)2013 RaonSecure Co., Ltd.</div></td>
    </tr>
  </table>
</div>


<!-- <input name="hid_key_data" type="hidden" onclick='Getdata-encDataFun("non", "testFrm", "ID");'></input> -->
<!--
<input name="hid_key_data" type="hidden" value=""></input>
<input name="hid_data-enc_data" type="hidden" value=""></input>
-->
</body>
</html>
	