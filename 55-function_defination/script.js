const a=function (){                                    // function expression can't be hoisted
    console.log("I am sleeping");                       // function declaration can be hoisted
};
a();


(function (){                                     // self calling/invoking function syntax or IIFE
    console.log("I am a");
})();


function myFunction(a,b){    
    console.log(arguments.length)
    console.log(arguments);     // if a function don't return anything or print nothing its returned
    return a*b;                                         // undefined to calling variable
}
const result =myFunction(4,5)*2;
console.log(result);


function my(){
    console.log("Hello");
}
console.dir(my);


const b= (x,y)=>x*y;             // syntax of arrow function we can use it when function take parameters and 
                                 // return an opeartion.If there another line if code without input arguments
                                 // and return it will not work here. .this keyword will not work here


