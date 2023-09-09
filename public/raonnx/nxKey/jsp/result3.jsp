<%@ page import="com.raonsecure.touchenkey.*"%>
<%@ page import="java.util.*"%>
<%@ page import="TouchenKey_Crypto.*" %>
<%@ page contentType="text/html; charset=utf-8" %>

<html>
<head><title>TouchEn Key E2E Decode</title></head>
<body>
<%

	out.println("hid_key_data : " + request.getParameter("EncKeyData") + "<BR>");
	
	out.println("E2E_1 : " + request.getParameter("E2E_1") + "<BR>");
// 	out.println("E2E_2 : " + request.getParameter("E2E_2") + "<BR>");
// 	out.println("E2E_3 : " + request.getParameter("E2E_3") + "<BR>");
	
	out.println("Server Key: "+(String)request.getParameter("TNK_SR"));
	
	String privateKey = new String("C:/Users/baoluo/Desktop/eclipse-workspace/TouchEn nxKey_v1.0.13.1/src/main/webapp/WEB-INF/raon_cert/Private2048.key.der"); 
	String hid_key_data = request.getParameter("EncKeyData");
	
	E2ECrypto Tk = new E2ECrypto((String)request.getParameter("TNK_SR"));
	Tk.E2E_KeyExchange(hid_key_data, privateKey);
	
	// decode result
	out.println("result : " + Tk.getLastError() + " (" + Tk.getLastErrorMessage() + ")<br>"); 

%>
	
<%
	out.println(Tk.decryptE2EField(request.getParameter("E2E_1")) + "<BR>");
%>

</body>
</html>
