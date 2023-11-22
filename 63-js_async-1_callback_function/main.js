function display (some){
    document.getElementById("demo").innerHTML=some;
    console.log(some);
}

function calculator(num1,num2,callback){
    let sum=num1+num2;
    //return sum;
   // display (sum);

   if(callback)
   {
       callback(sum);
   }
}

calculator(8,7,display);
//let result =calculator(7,8);
//display(result);