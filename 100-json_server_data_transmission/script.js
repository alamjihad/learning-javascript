async function fetchData(){
    const response = await fetch("demo.txt");
    //const data = await response.text();
    const data = await response.json();
    console.log(data.name);
    console.log(data);
}
fetchData();
 