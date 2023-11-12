const cars =["Saab", "Volvo", "BMW"];
document.getElementById("demo").innerHTML = cars;
console.log(typeof cars);
console.log(cars.length);
console.log(cars.sort);

const fruits=["Banana","Orange","Apple","Mango"];
fruits[fruits.length]="Guava";
fruits[5]="Jackfruik";
fruits.push("Lemon");
let flen=fruits.length
for(i=0; i<flen; ++i)
{
    console.log(i);
    console.log(fruits[i]);
}

function myfunction(value){
    console.log(value);
}
fruits.forEach(myfunction);

// const person ={
//     name: "Sabbir",
//     age:11,
//     country:"Banglaesh"
// };
const person = [];
person["first-name"]="Jhon";
person["last-name"]="Doe";
person["age"]=46;
person.length;
person[0];