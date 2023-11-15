let a="Bangladesh";
let b=7;
let d=5;
let c=b+" "+a+" "+d;
console.log(c);

console.log(typeof(typeof {fname:'Bangladesh',age:50}));

function isArray(myArray){
    console.log(myArray.constructor.toString().indexOf('Array')>-1);
}

 isArray([1,2,3]);
// isArray({fname:"Rizwan"});