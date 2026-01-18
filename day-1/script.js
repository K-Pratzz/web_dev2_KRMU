
function demo(){
console.log("demo")
}

demo()

const demo=()=>{
    console.log("demo")
}

demo()

// we are treating the variable as the function in  the arrow function
// using return in the function
// return ek he baar use hota aur uski value ko console karana padta hai
// yeh arrow function me nahi kar sakte usme by default return hota hai
// arrow function doesn't need a return statement

function demo(){
 return "hello world";
}

console.log(demo())

// callback function
function sample(){
    console.log("sample")
}
sample()
function test(){
    console.log("test")
}
test()
// upar waala method me time consuming jyada ho jyata hai function ko do baar alag alag call karna pad raha hai
// ise ko easy karne ke liye we use call back function
function sample(callback){
    console.log("sample")
    callback()
}

function test(){
    console.log("test")
}

sample(test)
