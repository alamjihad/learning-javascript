function sleep(name, time,time2)                                        //parameter
{
    console.log(name +" sleeps from "+ time +" to" + time2);
    //return 5;
    console.log(6);
}

sleep('Nur',"10 PM","7 AM");                                            //arguments
sleep('Alam',"11 PM","8 AM");
sleep('Jihad',"12 PM","9 AM");
console.log(4);





function myFunction(a,b)                                                //object is here
{
    return a*b;
}
let x = myFunction(4,3);
console.log(x);




var carName = "BMW";

function myFunction2()
{
    var carName = "Volvo";
    console.log(carName);
}

myFunction2()
console.log(carName);