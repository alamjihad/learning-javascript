const person={
    firstName:"Jhon",
    lastName:"Doe",
    id:84383,
    fullName: function(){
        return (this.firstName + " " + this.lastName).toUpperCase();
    }
};
console.dir(person.fullName);
console.log(person.fullName());