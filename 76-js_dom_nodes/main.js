// dynamically create a paragraph in html

const para = document.createElement("p");
const node = document.createTextNode("Hello World");
para.appendChild(node);  //  it means <p> Hello World </p>
const element = document.getElementById("div1");

//element.appendChild(para);                   // dynamically created para will come at the end of the div

// const p1 =document.getElementById("p1");    // 9th and 10th line refers dynamically created para come to
// element.insertBefore(para,p1);              //  first of the div

const p2 =document.getElementById("p2");       // dynamically created para will come before p2 id     
element.insertBefore(para,p2);

// remove a existing paragraph from html

// const p3 = document.getElementById("p3");      // reove a existing html technique 1
// p3.remove();

const div1 = document.getElementById('div1');     // reove a existing html technique 2
const p3 = document.getElementById('p3');
div1.removeChild(p3);
