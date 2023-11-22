function myFuncton(){
    let a =4;
    return a*a;
};
myFuncton();


function add(){
    let c=0;
    c+=1;
    return c;
}
add();
add();
add();
console.log(add());
// console.log(c);
// c=4;
// console.log(c);
// c++;
// console.log(c);


function temp(){
    let c1=0;

    return function (){ //plus(){
      c1+=1;
    };
    // plus();
    // return c1;
}

const sum =temp();  // add is a function at the end
console.dir(sum);
// sum();
// console.dir(sum);
// sum();
// console.dir(sum);
// sum();