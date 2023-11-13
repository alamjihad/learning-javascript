const d = new Date();
document.getElementById("da").innerHTML=(Date());
console.log(Date());
                                                                //javascript count  month from 0 to 11 as array
                                                                //toDatestrinfg
                                                                //toUTCstring
                                                                //toISOstring

const da = new Date(2018,11);
console.log(da);
const ya =new Date(2018);
console.log(ya);
let sce=Date.parse("March 21,2012");
document.getElementById("demo").innerHTML=sce;



/*------------------------------------------- date methods---------------------------------------------*/


                                                  //get

const mode = new Date();
// document.getElementById("dem").innerHTML = mode.getTime();
document.getElementById("dem").innerHTML = mode.getUTCSeconds();

                                                  //set

const day = new Date();
day.setFullYear(2020);
console.log(day);



//           compare

const today =new Date();
const someday =new Date();
someday.setFullYear(2100,0,14);
console.log(today);
console.log(someday);

if(someday>today)
{
    console.log("hello");
}
else
{
    console.log("hi");
}