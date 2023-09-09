/**
****************************************************
TouchEnNx_config.js
****************************************************
| Version     작성자        수정일        변경사항 
 ---------  -------  -----------  ----------
 | v1.0.0.12   강남준    2023.04.12
 | v1.0.0.11   강남준    2023.02.14
 | v1.0.0.10   강남준    2023.02.01
 | v1.0.0.9    강남준    2021.08.14
 | v1.0.0.8    강남준    2021.01.29
 | v1.0.0.7    강남준    2020.02.17
 | v1.0.0.6    강남준    2019.07.05
 | v1.0.0.5    강남준    2018.12.14
 | v1.0.0.4    백서린    2018.11.12
 | v1.0.0.3    강남준    2018.05.14
 | v1.0.0.2    허혜림    2018.01.31
 | v1.0.0.1    허혜림    2017.12.20          

****************************************************
 Copyright ⒞ RaonSecure Co., Ltd. 
****************************************************
**/

var nxKeyConfig ={};
nxKeyConfig.version = {
	
	extension :   {
		exChromeExtVer		:	"1.0.0.0",
		exFirefoxExtVer		:	"1.0.2.5",
		exFirefoxJpmExtVer	:	"1.0.1.12",
		exOperaExtVer		:	"1.0.1.14"
	},
		
	/** 키보드보안 설정 */
		tkappiver			:	"1.0.0.79",
		tkappmver			:	"1.0.0.68",
		exWinVer			:	"1.0.0.83",
		exWin64Ver			:	"1.0.0.83",
		exWinProtocolVer	:	"1.0.1.1545",
		daemonVer			:   "1.0.2.11",
		macDaemonVer		:   "1.0.1.8",
		linuxDaemonVer		:   "1.0.0.1",
		exMacVer			:	"1.0.0.16",
		exMacProtocolVer	:	"1.0.1.1545"
};


nxKeyConfig.module = {
		
		extension	:{
			//exChromeExtDownURL	: "https://chrome.google.com/webstore/detail/dncepekefegjiljlfbihljgogephdhph",
			exChromeExtDownURL	: "https://download.raonsecure.com/extension/chrome/chrome.html",
			exFirefoxExtDownURL	: TouchEnNxConfig.path.base + "/extension/touchenex_firefox.xpi",
			exFirefoxJpmExtDownURL	: TouchEnNxConfig.path.base + "/extension/jpm_touchenex_firefox.xpi",
			exOperaExtDownURL	: TouchEnNxConfig.path.base + "/extension/touchenex_opera.nex"														
		},
		
			exWinClient		            :	TouchEnNxConfig.path.base + "/nxKey/module/TouchEn_nxKey_32bit.exe",
			exWin64Client            	:	TouchEnNxConfig.path.base + "/nxKey/module/TouchEn_nxKey_64bit.exe",
			daemonDownURL				:	TouchEnNxConfig.path.base + "/nxKey/module/TouchEn_nxKey_32bit.exe",
			macDaemonDownURL			:	TouchEnNxConfig.path.base + "/nxKey/module/TouchEn_nxKey_Installer.pkg",
		//	ubuntu32DaemonDownURL		:	TouchEnNxConfig.path.base + "/nxKey/module/CrossEXService_32bit.deb",
		//	ubuntu64DaemonDownURL		:	TouchEnNxConfig.path.base + "/nxKey/module/CrossEXService_64bit.deb",
		//	fedora32DaemonDownURL		:	TouchEnNxConfig.path.base + "/nxKey/module/CrossEXService_32bit.rpm",
		//	fedora64DaemonDownURL		:	TouchEnNxConfig.path.base + "/nxKey/module/CrossEXService_64bit.rpm",
			exMacClient					:	TouchEnNxConfig.path.base + "/nxKey/module/TouchEn_nxKey_Installer.pkg",
			exMacProtocolDownURL		: 	TouchEnNxConfig.path.base + "/nxKey/module/TouchEn_nxKey_Installer.pkg"
	};

/** 키보드보안 E2E 를 사용하지 않을 경우 주석해제*/
if(typeof TNK_SR == 'undefined' ){
	var TNK_SR = "";
}

/**	클라이언트 솔루션별 동작 설정*/
TouchEnNxConfig.solution={
		nxkey : {
				tekOption : {
					"pki": "TouchEnkeyEx",
				    "keyboardonly": "false",
				    "defaultenc": "false",
				    "verify": "1",
				    "defaultpaste": "true",
				    "iframename": "",
				    "usegetenc": "false",
				    "clearbufferonempty": "true",
				    "refreshsession": "true",
				    "improve": "true",
					"bstart": 0,
				    "setcallback": "false",
				    "usebspress": "false",
				    "ignoreprogress": "true",
				    "ignoreprogress2": "true",
				    "exformname": "",
				    "idbase": "false",
				    "allcrypt": "false",
					"browserinfo" : "",
					"cert" : "-----BEGIN CERTIFICATE-----MIIDPjCCAiagAwIBAgIJAO4t+//wr+W5MA0GCSqGSIb3DQEBCwUAMGcxCzAJBgNVBAYTAktSMR0wGwYDVQQKExRSYW9uU2VjdXJlIENvLiwgTHRkLjEaMBgGA1UECxMRUXVhbGl0eSBBc3N1cmFuY2UxHTAbBgNVBAMTFFJhb25TZWN1cmUgQ28uLCBMdGQuMB4XDTE5MDIyNzA0MTEzNFoXDTE5MDUyODA0MTEzNFowOjELMAkGA1UEBhMCS1IxFzAVBgNVBAoMDnJhb25zZWN1cmVfZGV2MRIwEAYDVQQDDAlUPVQmRD1bKl0wggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQDbMI9NvHPkXi0MnG4J+0f5w5A7IfGN2iR/kFsNWwxRxO6MGMVcxfyHl1+wndOPDkyIy30BETnbCzZIMTbahDe4b71Hqirme6lt/BE+fAWS61KC9TNdNYdBqQK2mGlfoLvR3fgIGo321aaffI2g9Hs1NNMWArJa/Cmvd4eULxLG8bhHh5OdC7W4JG3ciI8auHDwx7Sr1Inev9dbevjtTiFRFe1m6q2lR6zZ76kj8lra5hpFHI6ARQ2+/Wae805+o4c0GzHq3ivLWxIA7Z5g4EvWJFBMl5La58Y5WWFiRLqy0tTlMTGOg2fyoOgvPw6v8R/+QjJX/i2KkxlzL07vOBrjAgMBAAGjGjAYMAkGA1UdEwQCMAAwCwYDVR0PBAQDAgXgMA0GCSqGSIb3DQEBCwUAA4IBAQA67y2MOZGVlLubt3/iFRmRy9emRWsNwdGZQOzcp/uES3yg5mY2fPsN5DuzJQJOzvpocW7tythyhJcS46dyyC4TbYjmo8rz9Jb5CrT2wHEqKTQzSK4i5VjicRcC2dNS9HCsgmky96/pKX3EH9GLi2Z4p7cG0x99DAMcEwz+IaaGwTyh3FQmI3wQOnK3KK8xJJsYzFYQjLE1U6/IYW9fdr+nVha4KC6yBLVCAp9wE0hoYp/KJRLnJOdTcnqD75grbv4nwlm8TRworvwHtcZA7daT/vt1BxpThH0jkjS7uFSzwkwuWVrkYyoDDdiVZnVdrSceLXI6PF9OPUkPMsxdqKep-----END CERTIFICATE-----",
					"srdk": TNK_SR,
					"generate_event": "false",
					"driverexcept": "0",
					"delayedck": "false",
					"shiftbypass": "true",
					"allowdup": "false",
					"enc2": "false",
				    "searchformname":"",
					"runtype": TouchEnNxConfig.runtype,
					"tk_isRunningSecurity" : "false", 
					"isAllowIdOverlap" : "true", //히든필드 중복오류 수정시 false설정 및 서버버전 v2.0.3.3 적용필요
					"defaultsecurityid" : "true",
					"newModule" : "true",
					"useWebSquarePast" : "false",
					"cmvp15" : "false",
					"senseReader":"false"
				}
		}
};