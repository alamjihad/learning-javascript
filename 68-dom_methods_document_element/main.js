// document.getElementById("demo").innerHTML=("I am Jihad.");

// p.innerHTML="Test 0";                                       // It is not working !

// document.getElementById("anchor").innerHTML="Hello";

// document.querySelector('#anchor');
// document.querySelector('.demo');


const x = document.forms["frm1"];         /* 89 no. video kicui mile na */  // finding elements from html 
//console.dir(x);
let text= "";
for(let i = 0; i < x.length ;i++){
        text = text + x.elements[i].value+"<br>";
    }
document.getElementById("demo").innerHTML= text;
