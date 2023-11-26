function goBack(){
    window.history.back();
}

function goForward(){
    window.history.forward();
}


const appName=document.getElementById("appName");
const appCodeName=document.getElementById("appCodeName");
const platform=document.getElementById("platform");
const cookieEnabled=document.getElementById("cookieEnabled");
const product=document.getElementById("product");
const appVersion=document.getElementById("appVersion");
const userAgent=document.getElementById("userAgent");
const language=document.getElementById("language");
const onLine=document.getElementById("onLine");
const javaEnabled=document.getElementById("javaEnabled");



appName.innerHTML = "Navigator appName: " + navigator.appName;
appCodeName.innerHTML = "Navigator appCodeName: " + navigator.appCodeName;
platform.innerHTML = "Navigator platform: " + navigator.platform;
cookieEnabled.innerHTML = "Navigator cookieEnabled: " + navigator.cookieEnabled;
product.innerHTML = "Navigator product: " + navigator.product;
appVersion.innerHTML = "Navigator appVersion: " + navigator.appVersion;
userAgent.innerHTML = "Navigator userAgent: " + navigator.userAgent;
language.innerHTML = "Navigator language: " + navigator.language;
onLine.innerHTML = "Navigator onLine: " + navigator.onLine;
javaEnabled.innerHTML = "Navigator javaEnabled appName: " + javaEnabled.appName;