/*x=5;
elem=document.getElementById("demo");
elem.innnerHTML=x;
var x;*/
// let and const are also able to hoist but they can't make undefined the variable so value can't be store
// its called temporar dead zone
x=5;
console.log(x);
var x;

function A(){
    y=3;
    console.log(y);
    var y;
}
A();

// a=5;
// console.log(a);
// let a;


// function B(){
//     b=3;
//     console.log(b);
//     let b;
// }
// B();


// var can hoist and undefined varible but inistialize must befor print otherwise it will print undefined
var p;
p=5;
console.log(p,q);
var q;
q=7;