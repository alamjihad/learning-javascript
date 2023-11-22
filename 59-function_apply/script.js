const person = {
    fullName: function(city,country){
        return this.firstName + " " + this.lastName +" lives at " + city + " in " + country;
    }
}
const person1 = {
    firstName:"John",
    lastName:"Doe"
}
const person2 = {
    firstName:"Marry",
    lastName:"Doe"
}
console.log(person.fullName.apply(person1,['Dhaka','Bangladesh']));
console.log(person.fullName.apply(person2,['Noakhali','New Zeland']));