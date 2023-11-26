function setsessionStorage(key,value){
    sessionStorage.setItem(key,value);
}

function getsessionStorage(key,value){
   alert(sessionStorage.getItem(key));
}

function removesessionStorage(key,value){
    sessionStorage.removeItem(key,value);
}

function clearsessionStorage(key,value){
    sessionStorage.clear();
}