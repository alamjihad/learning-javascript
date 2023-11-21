const a=function (){                                    // function expression can't be hoisted
    console.log("I am sleeping");                       // function defination can be hoisted
};
a();


(function (){                                     // self calling/invoking function syntax or IIFE
    console.log("I am a");
})();


function myFunction(a,b){
    return a*b;
}
const result =myFunction(4,5);
console.log(result);