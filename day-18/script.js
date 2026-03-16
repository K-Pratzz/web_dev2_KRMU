// let pro = new Promise((res,rej)=>{
//     let a=23;
//     if(a>50){
//         res();
//     }else{
//         rej();
//     }
// });
// pro.then(()=>{
//     console.log("resolved");
// }).catch(()=>{
//     console.error("rejected");
// });

function pro(num){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            console.log(num);
            res();
        },1000);
    })
    //.then(()=>console.log("resolved"));

}
pro(1)
.then(()=>pro(2))
.then(()=>pro(3))
.then(()=>pro(4))
.then(()=>pro(5))
.catch(()=>console.log("Error"));




