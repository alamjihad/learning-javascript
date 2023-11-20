/* 1/ how many times "sumit"is used in this sentence ? its found in which number position in first time ? */
const sentence = "Learn with Sumit is all about teaching web development skills and techniques in an\
efficient and practical manner If you are just getting started in web development,Learn with Sumit has all\
tools you need to learn the newest and most popular technologies to convert you from a no stack to full\
stack developer.Learn with Sumit also deep dives into advanced topics using the leatest best practices for\
you seasoned web developers.";

const matches = sentence.match(/sumit/gi);
const occurances = matches ? matches.length : 0;
console.log(matches);
console.log(occurances);

let position = sentence.search(/sumit/i);
position  = position >= 0 ? position : "not found!";
console.log(position);

// const matche = sentence.match(/sumits/gi);
// const occurance = matche ? matche.length : 0;
// console.log(matche);
// console.log(occurance);
// let posi = sentence.search(/sumits/i);
// posi  = posi >= 0 ? posi : "not found!";
// console.log(posi);

/* 2/ there is a function named linearSearch contains two parameters one is an array and second one is a 
value find te position of that charecter in that array or print not found */
function linearSearch(arr,val){
   const length=arr.length;
//    console.log(length);
    for(let i=0;i<length;i++)
    {
        if(arr[i]===val)
        {
            return i;
        }
    }
    return 'not found !';
};
console.log(linearSearch(['a','b','c','d','c'],'c'));
// console.log(linearSearch(['a','b','c','d','c'],'e'));

/* 3/ how to find the biggest string from that array and its index number */

function longestString(names){
    let longestWord = '';
    for(name of names){
        if(name.length > longestWord.length){
            longestWord = name;
        }
    }
    return [longestWord,names.indexOf(longestWord)];
}

console.log(longestString(['Sumit Saha','Learn with Sumit','Akash','Saad','Daiyan']))

/* 4/ find the numbers from 1-100 that is divisible by 3,5 or both of 3,5 */

function fizzBuzz(number){
    for(let i=1;i<=number;i++){
        if(i%15===0){
            console.log(`${i} is FizzBuzz`);
        }
        else if(i%3===0){
            console.log(`${i} is Fizz`);
        }
        else if(i%5===0)
        {
            console.log(`${i} is Buzz`);
        }
        else{
            console.log(i);
        }
    }
}
fizzBuzz(100);



/* 5/ find and remove falsy values from an array */
// falsy values in javascript are false,undefined,null,'',NaN,0;

const mixedArr = [
    "lws",
    undefined,
    "learn With Sumit",
    false,
    "",
    "apple",
    40,
    "k",
    true,
    "Thanks all",
    NaN
]; 

// const trueArray = mixedArr.filter(function(el){
//     if(el){
//         return true;
//     }
//     else{
//         return false
//     }
// });
const trueArray = mixedArr.filter(Boolean);
console.log(trueArray);


/* 5/ find and remove falsy values from an object */

const obj = {
    a: "lws",
    b: undefined,
    c: "learn With Sumit",
    d: false,
    e: "",
    f: "apple",
    g: 40,
    h: "k",
    i: true,
    j: "Thanks all",
    k: NaN
};

const truthyObject = function(obj){
    for(let i in obj){
        if(!obj[i]){
            delete obj[i];
        }
    }
    return obj;
};

console.log(truthyObject(obj));