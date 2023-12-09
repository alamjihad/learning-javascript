// select dom element
let myWindow;

const widht=document.getElementById('width');
const height=document.getElementById('height');

// show window object properties 

widht.innerHTML ="Window inner width is: " + window.innerWidth;
height.innerHTML ="Window inner hight is: " + window.innerHeight;


function openWindow(){
    myWindow=window.open("https://google.com","_self");
    //myWindow=window.open("https://google.com");
}

function closeWindow(){
    myWindow.close();
}