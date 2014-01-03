var xmlHttp = createXmlHttpRequestObject();

function createXmlHttpRequestObject(){
	var xmlHttp;
	if(window.ActiveXObject){
		try{
			xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
		}catch(e) {
			xmlHttp = false;

		}
	}else{
		try{
			xmlHttp = new XMLHttpRequest();
		}catch(e) {
			xmlHttp = false;
		}
	}
	if (!xmlHttp) {
		alert("Your computer sucks...");
	}
	else {
		return xmlHttp;
	}
}

function process(){
	if(xmlHttp.readyState==0 || xmlHttp.readyState==4){
		word = encodeURIComponent(document.getElementById('userInput').value);
		xmlHttp.open("GET", "dictionary.php?word=" + word,true);
		xmlHttp.onreadystatechange = handleServerResponse;
		xmlHttp.send(null);
	}
	else{
		setTimeout('process()',1000);
	}
}

function handleServerResponse() {
	if (xmlHttp.readyState==4){
		if(xmlHttp.status==200){//xmlHttp is ready
			xmlResponse = xmlHttp.responseXML;// get XMl file from foodstore.php
			xmlDocumentElement = xmlResponse.documentElement;//
			message = xmlDocumentElement.firstChild.data;//data from xml file (enter a food idiot, etc)
			//set message to blue color and edit condument
			document.getElementById("underInput").innerHTML = '<span style="color:blue">' + message + '</span>';
			setTimeout('process()',1000);
		}else{
			alert ('Something went wrong');
		}
	}
}