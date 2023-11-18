console.log(this);

function a(){
    console.log(this);
}
a();

"use strict";
function b(){
    console.log(this);
}
b();

const person = {
    firstName:"Jhon",
    lastName : "Doe",
    id       : 5566,
    fullName : function(){
        return this.firstName + " " + this.lastName;
    },
    getFullName: function(){
        return this.fullName();
    }
};

console.log(person.getFullName());



const person1 = {
    fullName: function(){
        return this.firstName + " " + this.lastName;
    }
};

const person2 = {
    firstName: "Jhon",
    lastName: "Doe",
};

console.log(person1.fullName.call(person2));