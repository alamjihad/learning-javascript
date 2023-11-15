let text ="Visit W3school";
let n=text.search("W3school");
document.getElementById("demo").innerHTML=n;


/*-------------------------------modifires can be i/m/g--------------------------------*/


// i means small and big everything will work      
// g means its effect will be globally 
// m means it will work multiline wherever it presents


let text2 ="Visit W3school";
let n2=text2.search(/W3school/i);
console.log(n2);


let text3 ="Visit Microsoft";
let n3=text3.replace("Microsoft","W3school");
console.log(n3);


let text4 ="Visit Microsoft";
let n4=text4.replace(/microsoft/i,"MY school");
console.log(n4);


let a="123456789";
let an=a.match(/[1-4]/g);
console.log(an);
document.getElementById("mode").innerHTML =an;

