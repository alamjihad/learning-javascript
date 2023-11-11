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
console.log(banana);


                                                        //substring() function can only take positive indexes

let sr = "Apple, Banana, Kiwi";
console.log(sr.substring(7,13));

                                                        //substr() 