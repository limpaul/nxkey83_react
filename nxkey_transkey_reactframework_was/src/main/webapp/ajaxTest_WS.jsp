<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<%@ page import="com.raonsecure.transkey.*"%>
<%
String frmId = request.getParameter("hidfrmId");
String id = request.getParameter("id");
String encode = request.getParameter("hidden");
String hmac = request.getParameter("hmac");
String keyboardType = request.getParameter("keyboardType_"+frmId);
String keyIndex = request.getParameter("keyIndex_"+frmId);
String fieldType = request.getParameter("fieldType_"+frmId);
String seedKey = request.getParameter("seedKey_"+frmId);
String initTime = request.getParameter("initTime_"+frmId);
String decode = TransKey.withoutSessionDecode(id, request);
%>
<%= decode %>