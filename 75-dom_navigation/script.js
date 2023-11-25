const p=document.getElementById('demo');
//console.log(p.innerHTML);

const way1=p.innerHTML;
const way2=p.firstChild.nodeValue;
const way3=p.childNodes[0].nodeValue;
console.log(way1);
console.log(way2);
console.log(way3);
// console.log(document.body);
// console.log(document.documentElement);