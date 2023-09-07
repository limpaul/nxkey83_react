<%@ page import="com.raonsecure.touchenkey.*"%>
<%@ page import="java.util.*"%>
<%@ page import="TouchenKey_Crypto.*" %>
<%@ page contentType="text/html; charset=euc-kr" %>

<html>
<head><title>TouchEn Key E2E Decode</title>
<body>
<b>결과값 페이지 </b><br>

<p>

<%
	out.println("hid_key_data : " + request.getParameter("hid_key_data") + "<BR>");
	out.println("hid_enc_data : " + request.getParameter("hid_enc_data") + "<BR>");
%>
<BR><BR>
<%
	String privateKey = new String("C:/Program Files/Apache Software Foundation/Tomcat 8.0/webapps/TouchEnkeyE2E/nxKey/certification/keydemo_2048.der"); 
	//ECrypto.setDebugMode(true);  
	TouchEnKey_Crypto Tk  = new TouchEnKey_Crypto(request,session,privateKey); 
	
	//E2ECrypto Tk = new E2ECrypto(request, session, privateKey);
	
	out.println("<b>E2ECrypto Tk = new E2ECrypto(request, session, privateKey);</b><br>"); 
	out.println("result : " + Tk.getLastError() + " (" + Tk.getLastErrorMessage() + ")<br>"); 
%>
	<br><b>Fetch decrypted attributes using E2ECrypto::getDecryptedHashTable method</b><br>
<%
	Hashtable ht = Tk.getDecryptedHashTable();
	Iterator itr = ht.keySet().iterator();
	while (itr.hasNext()) {
		String key = (String)itr.next();
  
	if (key.indexOf("E2E_") == -1) {		// 복호화 된 데이터만 출력
       // var resultEx = ht.get(key);
         //  out.println(key + " : " + resultEx + "("+ resultEx.length+")" + "<BR>");
   out.println(key + " : " + ht.get(key) + "<BR>");
		}
	}	


%>

<br></br><br></br>
<a href="./index2.jsp">초기화면 이동</a>
</body>
</html>
