

let str="please locate where 'locate' occurs!"; //if it didn't find any value or case dosent match print (-1)
                                    //it can also take 2nd parameter (num) skip those and then find the index 
document.getElementById("demo").innerHTML = str.indexOf("locate")

document.getElementById("de").innerHTML = str.lastIndexOf("locate")
                                                             //lastIndexOf means it will start count from last

document.getElementById("mo").innerHTML = str.search("locate")
                                    // str.search can't take 2nd parameter and can take regular expression

// document.getElementById("em").innerHTML = str.match()     //take regular expression

document.getElementById("em").innerHTML = str.includes("locate")       //it can take 2nd parameter theory

document.getElementById("do").innerHTML = str.startsWith("locate")       //it can take 2nd parameter theory

document.getElementById("do2").innerHTML = str.endsWith("locate")       //it can take 2nd parameter theory
