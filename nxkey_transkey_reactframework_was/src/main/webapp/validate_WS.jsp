<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ page import="com.raonsecure.transkey.*"%>
<html xmlns="http://www.w3.org/1999/xhtml">
<head></head>
<body>
	<hr></hr>
	username:<%= TransKey.withoutSessionDecode("username", request).replaceAll("<", "&lt;").replaceAll(">", "&gt;")%><br></br>
	<hr></hr>
	userpassword:<%= TransKey.withoutSessionDecode("userpassword", request).replaceAll("<", "&lt;").replaceAll(">", "&gt;")%><br></br>
	<hr></hr>
	<button onclick="history.back(-1)">back</button>
</body>
</html>