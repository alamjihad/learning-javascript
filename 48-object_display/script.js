const person ={
    name:"John",
    age:35,
    city:"New York"
};
                                    // 1 no. method connect all object.property
console.log(person);
document.getElementById("demo").innerHTML=person.name + ` is `+ person.age +` years old. ` + 
` He is from ` + person.city;

                                    // 2.no method for in loop in object
let txt="";
for(let x in person){
    //console.log(x);
    txt+=person[x];
}
document.getElementById("mode").innerHTML=txt;

                                    // 3 no. for of loop for array types pbject

const personArray = (Object.values(person));

for(x of personArray){
    console.log(x);
}

                                    // 4 no. JSON.stringfy()  object to string 

console.log(typeof(JSON.stringify(person)));




const car={                             // this method can work with new Date or some other functon but it will
    carName:"Volvo",                    // not work for user define function but it can be done by converting 
    today: new Date(),                   // function to a string with toString() function
}

let myString= JSON.stringify(car);
document.getElementById("robo").innerHTML=myString;


const air={
    run: function(){
        return 99;
    }
};
// toString() method is not working with user define function in object but array is working`
// air.run=air.run.toString();

// let my=JSON.stringify(air);
// console.log(my);

const arr=["Jabbar","Peter","Salar"];
let str=JSON.stringify(arr);
console.log(str);