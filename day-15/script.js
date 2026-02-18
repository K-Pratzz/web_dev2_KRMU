// fetch("https://jsonplaceholder.typicode.com/todos/1")
// .then(resp=>{
//     if(!resp.ok){
//         throw new Error("netwowk issue");
//     }else{
//         return resp.json();
//     }
// })
// .then(data=>console.log(data));


// function getData(url){
//     fetch(url)
//     .then(resp=>resp.json())
//     .then(data=>console.log(data));
// }
// getData("https://jsonplaceholder.typicode.com/todos/1");

//await is used inside async func only used to handle promise
async function getData(url){
    let resp=await fetch(url);
    let data=await resp.json();
    return data;

   
}
getData("https://jsonplaceholder.typicode.com/todos/1")
.then(data=>console.log(data));

//whenever we call async function we get promises in return