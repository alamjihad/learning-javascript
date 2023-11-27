const jsonString = '{"name":"John","age":30,"city":"Dhaka","birth":"18-06-2003"}'
console.log(jsonString);
// convert to valid js object
 const myObj=JSON.parse(jsonString,/*function(key,value){
//     // console.log(`${key}-${value}`);                                   // still now not working
//     // console.log("----------");
    if(key==="birth"){                                  
        return new Date(value);
    }
    return value;
 }*/);
 //console.log(new Date(myObj.birth));                                            // new Date not working
console.log(myObj);
                           
document.getElementById("demo").innerHTML=myObj.name+" "+myObj.age+" "+myObj.city;

const js='["Ford","BMW","Audi","Fiat"]';
const myArray=JSON.parse(js);
console.log(myArray);