function loadData(){
    const xhr = new XMLHttpRequest ();                                              // create a new request
    xhr.onload = function(){                                                  // what to do when response arrives
        const container = document.getElementById("demo");
        container.innerHTML = xhr.responseText;
        
        console.log(this.getResponseHeader('etag'));
        console.log(this.getAllResponseHeaders());
    };
    xhr.open("GET","./data.txt");                          // prepare request - methods: GET,POST,PUT,PATCH,DELETE
   // xhr.setRequestHeader("MY_GF","JavaScript");                                     // add a request header
    xhr.send();                                                              // send a request
   // xhr.abort();          // abort request
}