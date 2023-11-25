function changeText(){
    const title = document.querySelector("#title");
    title.innerHTML = "Hello World";
}

function change(id){
    console.log(id);
    id.innerHTML='Tahir';
}

const button=document.querySelector("#button");
button.onclick=function(){
    console.log("Hello world");
}