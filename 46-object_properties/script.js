const person ={
    name:"Babul",
    age:64
};

console.log(person.age);
console.log(person['age']);
// person.country="Bangladesh";
// person.age=12;
// console.log(person);

let a='age';
console.log(person[a]);




const car={
    car1:"Volvo",
    car2:"Saab",
    car3:"BMW"
};
// delete car.car3;
// delete car['car2'];
console.log(car);
let txt = "";
for(let x in car){
    txt += car[x];
}
console.log(txt);




const fruit ={
    fname:"Jack",
    lname:"fruit",
    tname:"Jack_fruit"
    // tthname:{
    //     t2:guava,
    //     t3:lemon,
    // }
};

console.log(fruit);

// nested object 

// nested array object
const wheel={
    name:"MRF",
    weight:45,
    vehicles: [
        {names:"B1",modedls:["Alesa"]},
        {names:"C1",modedls:["Chelsi"]}
    ]
};
delete wheel.weight;
console.log(wheel);
// let d= new String("Canada");
// console.dir(d);