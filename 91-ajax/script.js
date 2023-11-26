function loadData(){
    const xhr = new XMLHttpRequest ();                                              // create a new request
    xhr.onload = function(){                                                  // what to do when response arrives
    const container = document.getElementById('demo');
    demo.innerHTML = xhr.responseText;
   }
   xhr.open("GET","./data.txt");                           // prepare request - methods: GET,POST,PUT,PATCH,DELETE
    xhr.send();                                                                          // send a request
    
}