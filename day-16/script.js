// console.log("frist line");
// setTimeout(()=>{
//     console.log("timeout")
// },0)

// const p=new Promise((res,rej)=>{
//     res()
// })
// p.then(()=>{
//     console.log("p")
// })


// const p1=new Promise((res,rej)=>{
//     res()
// })
// p1.then(()=>{
//     console.log("p1")
// })
// console.log("last");

const options = {method: 'GET', headers: {Authorization: 'Bearer YOUR_APIKEY'}};

fetch('https://dataservice.accuweather.com/currentconditions/v1/202345', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));
  
//202396 delhi