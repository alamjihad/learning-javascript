//litreral syntax for object in js
const person ={
    name:'Ali',
    age:33,
    getName: function(){
        return 'Ali'
    }
};

person.name="Bangladesh";
console.log(person.name);

const person3 = person;
person.name="Shadab";
console.log(person3);

// blank system
const person1 ={};
    person1.name1="Ali";
    person1.age1=37;
console.log(person1.name1);

//using keyword new

const person2 = new Object();
person2.name2="Abraham";
person2.age2=57;
console.log(person2.name2);

