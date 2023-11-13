                                                    //array.indexOf  & array.lastIndexOf

const number=[45,4,9,16,25];
// function myFunction(value,index,array){
     function myFunction(total,value,index,array){
      console.log(value);                      //forEach
      console.log(index);                      //forEach                 
      console.log(array);                      //forEach                                   
    return value*2;                            //map
     return value > 10;                        //filter
     console.log(total)                        //reduce
     return total+value;                       //reduce
                                        //reduceRight is method like reduce but it count value from right to left
     return value>18;                          //every  /  //some   /   //find
    // return value>18;                            
}
number.forEach(myFunction);
const newNumber=number.map(myFunction);
console.log(newNumber);
const num=number.filter(myFunction);
console.log(num);
const ber=number.reduce(myFunction,10);
console.log(ber);
const sum=number.every(myFunction);
console.log(sum);
const som=number.some(myFunction);
console.log(som);
const ne=number.find(myFunction);
console.log(ne);
console.log(Array.from("ABCDE"));
const fruits=["banan","apple","orange","mango","lemon"];
const key = fruits.keys();

console.log(key);