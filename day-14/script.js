// let mypromise=new Promise((resolve,reject)=>{
//     let data="";
//     if (data){
//         resolve(data);
//     }else{
//         reject("error!!!")
//     }
// })

// mypromise.then((data)=>{
//     console.log(data);
// },(error)=>{
//     console.log(error);
// }) 
// console.log(mypromise)

// //promisese are smart organization of callback functions
// //resolve,pending,rejected are callback functions .. 2 inside 1

// //multiple then single catch is sufficient
// mypromise
// .then((data)=>{
//     console.log(data);
// })
// .catch((error)=>{
//     console.log(error);
// });

let res=fetch("https://jsonplaceholder.typicode.com/todos/1");
res.then((robj)=>{
    console.log(robj);
    robj.json().then((data)=>{
        console.log(data);
    });
})
console.log(res);
//promise hell ......if curly  bracket used in arrow func(if sinlge parameter) we need to use return,,if not no need
//first time return promise object and then gives data in form of promise
//promise chaning is the sol 
//(if sinlge parameter) we can remove () of callback func
fetch("https://jsonplaceholder.typicode.com/todos/1")
.then(robj=>robj.json()) //console.log(Data)
.then(data=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
});
///////////////

fetch("https://jsonplaceholder.typicode.com/todos/1")
.then(robj=>robj.json()) //console.log(Data)
.then(data=>console.log(data))
.catch(error=>console.log(error));

