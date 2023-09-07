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
var TNK_SR = "";

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
					"cert" : "-----BEGIN CERTIFICATE-----MIID0TCCArmgAwIBAgIJAOvT64h8zh31MA0GCSqGSIb3DQEBBQUAMH8xCzAJBgNVBAYTAmtvMQ4wDAYDVQQIDAVzZW91bDEOMAwGA1UEBwwFc2VvdWwxDTALBgNVBAoMBHJhb24xDTALBgNVBAsMBHJhb24xCzAJBgNVBAMMAnJhMSUwIwYJKoZIhvcNAQkBFhZuamthbmdAbHVtZW5zb2Z0LmNvLmtyMB4XDTEzMDEyMjE2MzI1MloXDTEzMDIyMTE2MzI1MlowfzELMAkGA1UEBhMCa28xDjAMBgNVBAgMBXNlb3VsMQ4wDAYDVQQHDAVzZW91bDENMAsGA1UECgwEcmFvbjENMAsGA1UECwwEcmFvbjELMAkGA1UEAwwCcmExJTAjBgkqhkiG9w0BCQEWFm5qa2FuZ0BsdW1lbnNvZnQuY28ua3IwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQCd9KKpIVcBkomsLs+yABiY02wRiBHnh3XEGJTD5hfJr1mxXOP4wdQFZtKMelOjY60vBRucmDjHqDLKMk4LAfhDsiIa37RJfdf4ffr2+JNWZPKJbMTJ5b2ssR1vjVzfBeDmNEVK32VOspL8VXM5sQK/NDkrilRDpBNZQFyXzZDMXlyRGeqf1ffxKx0egiKM18P8qjMRmQ9evqTxFzbUfr73KV6En6cfptSOtfq8vTcfwFdRWXJ4Bo184X/JseU6rbQ+B2Co/2aU2Rl2IM3TWIgXs/FXH4muT5vAbDD76a/UxeuiMLm+nisEVnljWXzBv+blIEr2C5EyRrcLZSQuRt/nAgMBAAGjUDBOMB0GA1UdDgQWBBSGctXaTyQ+ZTGVA+IKVMf4oztybzAfBgNVHSMEGDAWgBSGctXaTyQ+ZTGVA+IKVMf4oztybzAMBgNVHRMEBTADAQH/MA0GCSqGSIb3DQEBBQUAA4IBAQBOKEH54SHsKxyhIsTgOcvYqUpvGPbvYDDzJAEwyuU08SL9plOYE7Q/43JkaqKvced63aoDvFywnlWFSnQ3Vkmf3IJHk5RPgIYgh0rIaXe6hvlw1MKyYcSlakHayBk9HHNs/vfNxNQkSe20nFXXD6lNqyIJz9x0vLhIukh35W4Cs/sxoHcmhrzpxty75nEi4cH33uNGBb7DUgLcL3vvxDlFTLHExDUQQzY0bRYhtdiuXkSpd9xxsDAP0GW5Ah4JMThSmmsHLdJ8NcSCE8O0xZCT/j6j4IV7mS1arj46IEpVDgSTMGcqp3DpZ63JCpXjViTpFjEKYXpZf6HyfMvZ4nsj-----END CERTIFICATE-----",
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