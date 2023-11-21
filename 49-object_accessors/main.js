const person = {
    firstName:"Jhon",
    lastName:"Doe",
    language:"",
    set lang(lang){
        this.language=lang
    }
    // get fullName(){
    //     return this.firstName+' '+this.lastName;
    // }
};
//person.lang="bn";                                 /* is used in settrer */
// console.log(person.fullName);                    
console.log(person);


Object.defineProperty(person,"fullName",{           // outside the object
    get : function () {
        return this.firstName + ' ' + this.lastName;
    }
});
console.log(person.fullName);