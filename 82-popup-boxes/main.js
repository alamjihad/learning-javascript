const confirm = document.getElementById("confirm");
const prompt = document.getElementById("prompt");


function showAlert(){
    window.alert("Hello World");
}

function showConfirm(){
    let = txt;
    if(window.confirm("Press a button")){
        tet="You pressed ok";
    }
    else{
        txt="You pressed canceled"
    }
    confirm.innerHTML=txt;
}


function showPrompt(){
    let person= window.prompt("Please enter your name;","Harry Porter");
    let txt;
    if(person===null||person==="")
    {
        txt="User cancelled the prompt";
    }
    else{
        txt="Hello "+ person + "! How are you?"
    }
    prompt.innerHTML=txt;
}