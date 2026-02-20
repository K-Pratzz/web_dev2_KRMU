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
//console.log(keys)
const val=Object.values(user)
//console.log(val)
console.log(Object.entries(user))

// [
//     ["x","o","x"],
//     ["o","x","o"],
//     ["x","o","o"]
// ]

//find the winner 

Object.seal(user) //we can not add or delete any property but we can modify the values of the sxiting ones

user.name="kpppppppppppppppppp";
Object.freeze(user)//we cant add new propety , change value of existing or delte existing property

console.log(user.name)
//console.log(user.moi)




