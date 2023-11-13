console.log(Math.PI);

//                              Math.round()
//                              Math.ceil()
//                              Math.floor()
//                              Math.trunc()
//                              Math.sign()
//                              Math.pow()
//                              Math.abs()
// Math.sin()
// Math.min()
// Math.max()
// Math.random()
//Math.log()
Math.floor(Math.random()*10);                            //to gea random number from 0-9
Math.floor(Math.random()*11);   /   Math.floor(Math.random()*11);             ////to gea random number from 0-10


function getRndInteger(min,max){
    return Math.floor(Math.random()*(max-min)+min)                    //min(included),max(excluded) try its alter
}

function getRndInteger(min,max){
    return Math,floor(math.random()*(max-min+1))+min;                  //both included
}