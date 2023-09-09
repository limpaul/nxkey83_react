<%@ page import="com.raonsecure.touchenkey.*"%>
<%@ page import="java.util.*"%>
<%@ page import="TouchenKey_Crypto.*" %>
<%@ page contentType="text/html; charset=utf-8" %>

<html>
<head><title>TouchEn Key E2E Decode</title></head>
<body>
<%

	out.println("hid_key_data : " + request.getParameter("hid_key_data") + "<BR>");
	out.println("E2E_pwd3 : " + request.getParameter("E2E_pwd3") + "<BR>");

	// 복호화 함수 TouchEnKey_Crypto에서는 반드시 개인키 경로가 절대 경로야 합니다 
	String privateKey = new String("C:/Users/baoluo/Desktop/eclipse-workspace/TouchEn nxKey_v1.0.13.1/src/main/webapp/WEB-INF/raon_cert/Private2048.key.der"); 
	String hid_key_data = request.getParameter("hid_key_data");
	
	/*
	TouchEnKey_Crypto Tk  = new TouchEnKey_Crypto(request,session,privateKey); 
	
	out.println("<b>TouchEnKey_Crypto Tk = new TouchEnKey_Crypto(request, session, privateKey);</b><br>"); 
	out.println("result : " + Tk.getLastError() + " (" + Tk.getLastErrorMessage() + ")<br>"); 
	*/
	
	
	E2ECrypto Tk = new E2ECrypto((String)session.getAttribute("TEKSRK"));

	Tk.E2E_KeyExchange(hid_key_data, privateKey);
	out.println("result : " + Tk.getLastError() + " (" + Tk.getLastErrorMessage() + ")<br>"); 
	
%>
	
<%
	out.println(Tk.decryptE2EField(request.getParameter("E2E_pwd3")) + "<BR>");
%>

</body>
</html>
