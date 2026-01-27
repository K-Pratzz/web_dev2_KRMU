let user={
    name:"K_PRATZZ",
    address:"Gurugram",
    mobileno:46578,
    favp:["bj","sb"],
    demo: function(){
        return "demo";
}
}
console.log("my 1st favp is ",user.favp[0])
//string literals
console.log(`my 2nd favp is ${user.favp[1]}---------${user.demo()}`)



const keys=Object.keys(user)
console.log(keys)
const val=Object.values(user)
console.log(val)
