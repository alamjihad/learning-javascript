let x=123;
let newN =x.toString();
console.log(typeof newN);

let y=956000000000;
console.log(y.toExponential(2));

let z=9.656;
console.log(z.toExponential());

//number() can make everything number with side-spaces except ./niddle space/char string
/*parseInt () make only Int number pos and neg if numbers with middle spaces it print first one num should first 
before string otherwise not work*/
//parseFloat is as same as persaInt.

console.log(parseInt("10 20 30"));

let p=Number.MAX_VALUE;
document.getElementById("demo").innerHTML = p;
let q=Number.MIN_VALUE;
document.getElementById("mode").innerHTML = q;