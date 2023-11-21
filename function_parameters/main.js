function a(x,y=5){
    console.log(arguments);
    return x+y;
}
console.log(a(1,4));

function c(x,y=5){
    console.log(arguments);
    return x+y;
}
console.log(a(2,5,6,7));


function c(d,e)
{
    d=d+25;
    e=e/3;
    return d-e;
}
let u=9;
let z=15;
console.log(c(u,z));

function s(y){
    y.one=7;
    return y.one*y.two;
}
let y={
    one:4,
    two:5
}

console.log(s(y));
console.log(y);