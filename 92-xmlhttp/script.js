function loadData(callbackF){
    const xhr = new XMLHttpRequest ();                                              // create a new request
    xhr.onload = function(){
        callbackF(this);
    } /*function(){                                   // what to do when response arrives
        const container = document.getElementById("demo");
        demo.innerHTML = xhr.responseText;
    };*/
    xhr.open("GET","./data.txt");                          // prepare request - methods: GET,POST,PUT,PATCH,DELETE
   // xhr.setRequestHeader("MY_GF","JavaScript");                                     // add a request header
    xhr.send();                                                                          // send a request
   // xhr.abort();          // abort request
}

function myCallback1(xhr){
    const container = document.getElementById("demo");
    container.innerHTML = xhr.responseText;
}

function myCallback2(xhr){
    const container = document.getElementById("demo2");
    container.innerHTML = xhr.responseText;
}