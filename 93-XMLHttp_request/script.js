function loadData(){
    const xhr = new XMLHttpRequest ();                                              // create a new request
    xhr.onload = function(){                                                  // what to do when response arrives
        console.log("Responsed finished");
        const container = document.getElementById("demo");
        container.innerHTML = xhr.responseText;
    };
    xhr.open("GET","./data.txt",false);                          // prepare request - methods: GET,POST,PUT,PATCH,DELETE
   // xhr.setRequestHeader("MY_GF","JavaScript");                                     // add a request header
    xhr.send();                                                              // send a request
    console.log("Hello")
   // xhr.abort();          // abort request
}