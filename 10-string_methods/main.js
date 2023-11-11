let x ="Jhon";
let y =new String("Jhon");
console.log(x===y);

const a ={
    name: "Bangladesh",
    districts:64,
    run: function(){

    },
    substring: function(){

    },
};

const s ="Bangladesh";
console.log(s.length);


                                                     //slice() function can take positive and negetive index

let str = "Apple, Banana, Kiwi";
console.log(str.slice(-12,-6));




let tr = "Apple, Banana, Kiwi";
let banana = str.slice(7,13);
console.log(banana);                                    //substring() function can only take positive indexes



let sr = "Apple, Banana, Kiwi";
console.log(sr.substring(7,13));                       //substr() it can also take both positive and negative value


let r = "Apple, Banana, Kiwi";
// r.substr(7,6);
console.log(r.substr(7,6));

//      <-----------------------------------------replace--------------------------------------------->

let sakina ="I love Sakina";
let zarina = sakina.replace("Sakina","Zarina");
console.log(zarina);
console.log(sakina);

//       <----------------------------------------------------concat--------------------------------------->

let t1="Hello";
let t2="World";
let t3= t1.concat(" ",t2);
document.getElementById("demo").innerHTML = t3;



//  <----------------------------------------------trim---------------------------------------------->

p=sakina.trim();
console.log(p.length)

                                                                                            // charAt()

let z ="Hello World"
console.log(z.split(""))
console.log(typeof z.charAt(500));
console.log(typeof z[500]);

                                                                                            // charcoded()