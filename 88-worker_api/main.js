let w;
function startWorker(){
    if(typeof Worker !== "undefined"){
        if(typeof w=="undefined")                                   // if w worker already not defined
        {
            w= new Worker("worker.js");
        }
        w.onmessage=function(event){
            document.getElementById("demo").innerHTML=event.data;
        };
    }
    else{
        alert("Your Browser does not support web worker");
    }
}


function stopWorker(){
    if(typeof worker !== "undefined"){
        w.terminate();
        w=undefined;
    }
    else
    {
        alert("Your Browser does not support web worker");
    } 
}