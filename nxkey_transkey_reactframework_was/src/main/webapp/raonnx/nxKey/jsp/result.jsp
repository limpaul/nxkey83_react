<%@ page import="com.raonsecure.touchenkey.*"%>
<%@ page import="java.util.*"%>
<%@ page import="TouchenKey_Crypto.*" %>
<%@ page contentType="text/html; charset=utf-8" %>

<html>
<head><title>TouchEn Key E2E Decode</title></head>
<body>
<%
	// 복호화 함수 TouchEnKey_Crypto에서는 반드시 개인키 경로가 절대 경로야 합니다 
	String privateKey = new String("C:/Users/baoluo/Desktop/eclipse-workspace/TouchEn nxKey_v1.0.13.1/src/main/webapp/WEB-INF/raon_cert/Private2048.key.der"); 
	TouchEnKey_Crypto Tk  = new TouchEnKey_Crypto(request,session,privateKey); 
	
	out.println("<b>TouchEnKey_Crypto Tk = new TouchEnKey_Crypto(request, session, privateKey);</b><br>"); 
	out.println("result : " + Tk.getLastError() + " (" + Tk.getLastErrorMessage() + ")<br>"); 
%>
	
<%
	Hashtable ht = Tk.getDecryptedHashTable();
	Iterator itr = ht.keySet().iterator();
	while (itr.hasNext()) {
		String key = (String)itr.next();
  
	if (key.indexOf("E2E_") == -1) {	
		   out.println(key + " : " + ht.get(key) + "<BR>");
		}
	}	


%>

</body>
</html>
