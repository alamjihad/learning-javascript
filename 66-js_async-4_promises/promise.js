//const status = true;
const status = false;

console.log('Task 1');

// promise defination

const promise = new Promise(function(resolve,reject){
    setTimeout(function(){
        if(status){
            //console.log('Task 2');
            resolve('Task 2');
        }
        else{
            //console.log('failed');
            reject('failed');
        }
    },2000);
});

// promise call

promise
        .then(function(value){
            console.log(value)
        })
        .catch(function(err){
            console.log('failed');
        })

console.log('Task 3');


//  a  b  c  d  e  f  g  h  i  j  k  l  m  n  o  p  q  r  s  t  u  v  w  x  y  z

//  A  B  C  D  E  F  G  H  I  J  K  L  M  N  O  P  Q  R  S  T  U  V  W  X  Y  Z