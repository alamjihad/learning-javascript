// const numbers = [1,2,3,4,5];

// const numIterator = numbers[Symbol.iterator]();
// // console.dir(numbers[Symbol.iterator]());
// // for(let n of numbers){
// //     console.log(n);
// // }
// // console.log(numIterator.next());
// // console.log(numIterator.next());
// // console.log(numIterator.next());
// // console.log(numIterator.next());
// // console.log(numIterator.next());
// // console.log(numIterator.next());
// const number={
//     one:1,
//     two:2,
//     three:3
// };

// console.dir(number);


const myNumber ={};
    myNumber[Symbol.iterator] = function(){
       let n=0;
       let done =false;
        return {
            next(){
                n+=10;
                if(n==110)
                {
                    done=true
                }
                return {
                    value:n,
                    done:done
                }
            }
        }
    }
for(let num of myNumber){
    console.log(num);
}