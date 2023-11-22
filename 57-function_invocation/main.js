var a=5;
console.log(window.a);




function b(){
    console.log("I am a function");
}
console.log(window.b());




function c(){
    console.log(this);
}
c();




const x ={
    e: function(){
        console.log(this);
    }
}
x.e();





/*function myFunction(arg1,arg2)
{
    this.firstName=arg1;
    this.lastName=arg2;
}
const siumit  = new myFunction(){

}*/